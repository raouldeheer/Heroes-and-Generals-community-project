import { EventEmitter } from "events";
import { createConnection } from "net";
import { createHash, createHmac } from "crypto";
import { ClassKeys, ResponseType } from "./protolinking/classKeys";
import fetch from "node-fetch";
import { Socket } from "./socket";

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

    private constructor(
        host: string,
        port: number,
        private readonly userAgent: string,
        private readonly userName: string,
        private readonly password: string,
        isDebug: boolean
    ) {
        super();
        this.con = new Socket(createConnection({ host, port }), isDebug);

        this.con.on("message", (typeText, result) => {
            this.emit("message", typeText, result);
            this.emit(typeText, result);
        });

        this.con.on("close", err => {
            this.emit("close", err);
        });

        this.con.on("error", console.error);

        this.con.on("connect", () => {
            this.sendPacket(ClassKeys.QueryServerInfo);
        });

        this.addHandlers();
    }

    public get connected() : boolean {
        return this.con.connected;
    }

    /**
     * connectToHQ creates a client and checks server status.
     * @param userAgent the useragent that is used.
     * @param userName the username of the user to connect with.
     * @param password the password of the user.
     * @returns a new client
     */
    public static async connectToHQ(userAgent: string, userName: string, password: string, isDebug = false) {
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
        return new this(host, Number(port), userAgent, userName, password, isDebug);
    }

    /**
     * sendPacket sends a packet to the server
     * @param className name of class to send
     * @param payload payload to send
     * @param callback callback for response
     * @returns if sending was succesfull
     */
    public sendPacket<T, Y>(className: ClassKeys, payload?: T, callback?: (result: Y) => void): boolean {
        return this.con.sendPacket(className, payload, callback);
    }

    /**
     * sendPacketAsync sends a packet to the server and return a promise with the data of the response packet
     * @param className name of class to send
     * @param payload payload to send
     * @returns data of response packet
     */
    public sendPacketAsync<T, Y>(className: ClassKeys, payload?: T): Promise<Y> {
        return this.con.sendPacketAsync(className, payload);
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

    private addHandlers() {
        this.con.on(ClassKeys.QueryServerInfoResponse, () => {
            this.sendPacket(ClassKeys.QueryBannedMachineRequest);
        }).on(ClassKeys.QueryBannedMachineResponse, result => {
            if (result.isBanned) {
                console.error("Player banned");
                this.close();
            } else {
                this.sendPacket(ClassKeys.StartLogin);
            }
        }).on(ClassKeys.LoginQueueUpdate, result => {
            console.info(`Queue: ${result.positionInQueue}`);
            if (result.mayProceed) this.sendPacket(ClassKeys.login2_begin, {
                username: this.userName,
                deviceid: this.userAgent,
                acceptingPrivacyPolicy: false,
                acceptingBattlEyePolicy: false,
            });
        }).on(ClassKeys.login2_challenge, result => {
            this.sendPacket(ClassKeys.login2_response, this.login(this.password, result));
        }).on(ClassKeys.login2_result, result => {
            this.emit("login2_result", result);
            if (result.response == ResponseType.login_success) {
                this.emit("loggedin");
            } else {
                console.log("Login failed!!!");
                this.emit("loginFailed");
            }
        }).on(ClassKeys.keepaliverequest, () => {
            this.sendPacket(ClassKeys.keepalive);
        });
    }

    /**
     * Close connection
     */
    public close() {
        this.con.close();
    }
}
