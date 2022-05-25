import { EventEmitter } from "events";
import { Socket, createConnection } from "net";
import { createHash, createHmac } from "crypto";
import { BufferCursor } from "hagcp-utils";
import { ClassKeys, ResponseType } from "./protolinking/classKeys";
import { ProtoToString } from "./protoclasses/proto";
import { gunzipSync } from "zlib";
// import { appendFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { keyToClass } from "./protolinking/linking";

interface Settings {
    web_entrance: string[];
    account_url: string;
    flash_dynhttp: string[];
    hngtitle: string;
    distribution: string;
    retoxdistribution: string;
    version: string;
    releasename: string;
    ircserver: string;
    uniqueversionfilename: string;
    unique_file_server1: string;
    unique_file_server2: string;
    unique_file_servers: string;
    uniqueflashfile: string;
    tileserver: string;
    locale_cs: string;
    locale_de: string;
    locale_en: string;
    locale_es: string;
    locale_fr: string;
    locale_pl: string;
    locale_ru: string;
    locale_tr: string;
    locale_pt: string;
    locale_zh: string;
    locale_ko: string;
    locale_ja: string;
    lang_string: string;
    sitetrackerid: string;
    extensionid: string;
}

export class Client extends EventEmitter {
    private con: Socket;
    private idNumber;
    private rest: Buffer | undefined;
    public connected: boolean;

    private constructor(
        host: string,
        port: number,
        private readonly userAgent: string,
        private readonly userName: string,
        private readonly password: string
    ) {
        super();
        this.connected = false;
        this.idNumber = 0;
        this.con = createConnection({ host, port });

        this.con.on("close", err => {
            this.connected = false;
            console.log(`closed and ${err ? "had" : "no"} error`);
            this.emit("closed");
        });

        this.con.on("error", console.error);

        this.con.on("data", (data: Buffer) => {
            if (!this.rest) {
                this.rest = data;
            } else {
                const tmp = Buffer.allocUnsafe(this.rest.length + data.length);
                this.rest.copy(tmp, 0);
                data.copy(tmp, this.rest.length);
                this.rest = tmp;
            }
            while (this.rest && this.rest.length > 4) {
                const len = this.rest.readUInt32LE(0);
                if (this.rest.length >= len) {
                    this.handleMessage(this.rest.slice(0, len));
                    this.rest = this.rest.slice(len);
                } else break;
            }
        });

        this.con.on("connect", () => {
            this.connected = true;
            // writeFileSync("./testConLog.txt", "", "utf8");
            // connected to server with tcp
            this.sendPacket(ClassKeys.QueryServerInfo);
        });
    }

    /**
     * connectToHQ creates a client and checks server status.
     * @param userAgent the useragent that is used.
     * @param userName the username of the user to connect with.
     * @param password the password of the user.
     * @returns a new client
     */
    public static async connectToHQ(userAgent: string, userName: string, password: string) {
        // Get server status
        const status = await fetch("http://game.heroesandgenerals.com/status");
        if (status.status !== 200) {
            console.log(`Servers are down ${status.status}`);
            return null;
        }

        // Get server settings
        const items = await fetch("http://game.heroesandgenerals.com/settings.js")
            .then(e => e.text())
            .then(data => data
                .split(";\r\n")
                .filter(e => e)
                .map(e => e.split("=") as [keyof Settings, string])
                .reduce<Settings>((prev, curr) => {
                    const value = curr[1].substring(1, curr[1].length - 1);
                    Reflect.set(prev, curr[0], curr[1].includes(",") ? value.split(",") : value);
                    return prev;
                }, {} as Settings));

        // Select random server to connect to
        const randomServer = items.web_entrance[Math.floor(Math.random() * items.web_entrance.length)];
        console.log(`connecting to gameserver: ${randomServer}`);

        // Connect to server
        const [host, port] = randomServer.split(":");
        return new this(host, Number(port), userAgent, userName, password);
    }

    /**
     * Close connection
     */
    public close() {
        this.connected = false;
        try { this.con.end().destroy(); } catch (_) { /**/ }
    }

    /**
     * sendPacket sends a packet to the server
     * @param className name of class to send
     * @param payload payload to send
     * @param callback callback for response
     * @returns if sending was succesfull
     */
    public sendPacket<T, Y>(className: ClassKeys, payload?: T, callback?: (result: Y) => void): boolean {
        // Get data from class.
        const buffer = keyToClass.get(className)?.toBuffer?.(payload);
        // If class doesn't return any data, return failed.
        if (!buffer) return false;
        // Get total length of packet.
        const totalLength = buffer.byteLength + className.length;
        // Construct BufferCursor.
        const result = new BufferCursor(Buffer.allocUnsafe(20 + totalLength));
        result.writeUInt32LE(20 + totalLength);             // Write TotalLen.
        result.writeUInt32LE(8);                            // Write IDLen.
        result.writeUInt32LE(++this.idNumber);              // Write ID.
        // Set listener for callback.
        if (callback) this.once(`id${this.idNumber}`, callback);
        result.writeUInt32LE(8 + totalLength);              // Write Size.
        result.writeUInt32LE(4 + className.length);         // Write HLen.
        result.write(className, className.length, "ascii"); // Write Header.
        result.writeBuff(buffer, buffer.byteLength);        // Write Data.
        this.con.write(result.buffer);  // Write packet to tcp.
        return true;                    // Return success.
    }

    /**
     * sendPacketAsync sends a packet to the server and return a promise with the data of the response packet
     * @param className name of class to send
     * @param payload payload to send
     * @returns data of response packet
     */
    public sendPacketAsync<T, Y>(className: ClassKeys, payload?: T): Promise<Y> {
        return new Promise<Y>((resolve, reject) => {
            try {
                if (!this.sendPacket(className, payload, resolve))
                    throw new Error("Packet not send, class was probably not found");
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * login logs the user in with a password
     * @param password the password string to use to login
     * @param challengeData the data of the challenge 
     * @returns the response of the challenge
     */
    private login(
        password: string,
        {
            salt,
            tempSessionid,
            encryptedSessionkey,
        }: {
            salt: string,
            tempSessionid: string,
            encryptedSessionkey: string,
        }
    ) {
        // Decoded sessionid.
        const sessionid = Buffer.from(tempSessionid, "base64");
        // Concat buffers and createHash.
        const sha1concat = (d1: Buffer, d2: Buffer) =>
            createHash("sha1").update(Buffer.concat([d1, d2])).digest();
        // Create loginHash.
        const loginkeyhash = sha1concat(sha1concat(
            Buffer.from(password, "latin1"),
            Buffer.from(salt, "base64")
        ), sessionid);

        return {
            // Create Hmac with encryptedSessionkey and loginhash.
            digest: createHmac("sha1", Buffer.from(encryptedSessionkey, "base64")
                .map((value, i) => value ^ loginkeyhash[i % loginkeyhash.length]))
                .update(sessionid)
                .digest("base64"),
            tempSessionid,
        };
    }

    /**
     * handleMessage handles incoming messages
     * @param data rawBuffer of response
     */
    private handleMessage(data: Buffer): void {
        const element = new BufferCursor(data);
        const plen = element.readUInt32LE();
        // Check if tcpPacket length is correct
        if (plen !== data.byteLength) console.log(`${plen} !== ${data.byteLength}`);
        element.move(4); //! Id is limited to UInt32 here
        const id = element.readUInt32LE();

        // Get size of packet
        const size = element.readUInt32LE() - 4;
        const typeLength = element.readUInt32LE() - 4;
        // Parse typeClassName
        const typeText = element.slice(typeLength).toString() as ClassKeys;
        // Return if no data is present
        if (size - typeLength == 4) return;

        // Slice data part of rawBuffer
        const DataBuf = element.slice();
        // const DataLen = DataBuf.readUInt32LE() - 4;
        DataBuf.seek(0);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let result: any;
        if (keyToClass.has(typeText)) {
            // Find class to parse packet with.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const klas = keyToClass.get(typeText)!;
            result = klas.parse(DataBuf);
            switch (typeText) {
                case ClassKeys.zipchunk:
                    this.handleMessage(gunzipSync(result.data));
                    break;
                case ClassKeys.QueryServerInfoResponse:
                    this.sendPacket(ClassKeys.QueryBannedMachineRequest);
                    break;
                case ClassKeys.QueryBannedMachineResponse:
                    if (result.isBanned) {
                        console.error("Player banned");
                        this.close();
                    } else {
                        this.sendPacket(ClassKeys.StartLogin);
                    }
                    break;
                case ClassKeys.LoginQueueUpdate:
                    this.emit(ClassKeys.LoginQueueUpdate, result.positionInQueue);
                    console.info(`Queue: ${result.positionInQueue}`);
                    if (result.mayProceed) this.sendPacket(ClassKeys.login2_begin, {
                        username: this.userName,
                        deviceid: this.userAgent,
                        acceptingPrivacyPolicy: false,
                        acceptingBattlEyePolicy: false,
                    });
                    break;
                case ClassKeys.login2_challenge:
                    this.sendPacket(ClassKeys.login2_response, this.login(this.password, result));
                    break;
                case ClassKeys.login2_result:
                    this.emit("login2_result", result);
                    if (result.response == ResponseType.login_success) {
                        this.emit("loggedin");
                    } else {
                        console.log("Login failed!!!");
                        this.emit("loginFailed");
                    }
                    break;
                case ClassKeys.keepaliverequest:
                    // TODO Find out what 8374 means.
                    this.sendPacket(ClassKeys.keepalive, { value: 8374 });
                    break;
                default:
                    this.emit("message", typeText, result);
                    this.emit(typeText, result);
                    this.emit(`id${id}`, result);
                    break;
            }
            if (typeof result == "object") result = ProtoToString(result);
        } else {
            console.log(`unsupported message: ${typeText}`);
        }

        // const startString = `${plen.toString().padEnd(5)} ${id.toString().padEnd(5)} ${typeText.padEnd(35)}`;
        // const midString = `${DataLen.toString().padEnd(5)}`;
        // const outputStr = `${startString} ${result ? result : midString}`;
        // console.log(outputStr);
        // appendFileSync("./testConLog.txt", outputStr + "\n", "utf8");
    }
}
