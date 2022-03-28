import { EventEmitter } from "events";
import { Socket, createConnection } from "net";
import { createHash, createHmac } from 'crypto';
import BufferCursor from "./buffercursor";
import { keyToClass } from "./protolinking/classKeys";
import { ProtoToString } from "./protoclasses/proto";
import { gunzipSync } from "zlib";
import { appendFileSync, writeFileSync } from "fs";

export class Client extends EventEmitter {
    private con: Socket;
    private idNumber;
    private rest: Buffer | undefined;
    constructor(
        host: string,
        port: number,
        private readonly userAgent: string,
        private readonly userName: string,
        private readonly password: string
    ) {
        super();
        this.idNumber = 0;
        this.con = createConnection({ host, port });

        this.con.on("close", err => {
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
            // writeFileSync("./testConLog.txt", "", "utf8");
            // connected to server with tcp
            this.sendPacket("QueryServerInfo");
        });
    }

    public close() {
        try {
            this.con.end();
            this.con.destroy();
        } catch (_) { }
    }

    public sendPacket(className: string, payload?: any, callback?: (result: any) => void) {
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
            createHash('sha1').update(Buffer.concat([d1, d2])).digest();
        // Create loginHash.
        const loginkeyhash = sha1concat(sha1concat(
            Buffer.from(password, "latin1"),
            Buffer.from(salt, "base64")
        ), sessionid);

        return {
            // Create Hmac with encryptedSessionkey and loginhash.
            digest: createHmac('sha1', Buffer.from(encryptedSessionkey, "base64")
                .map((value, i) => value ^ loginkeyhash[i % loginkeyhash.length]))
                .update(sessionid)
                .digest("base64"),
            tempSessionid,
        };
    }

    private handleMessage(data: Buffer) {
        const element = new BufferCursor(data);
        const plen = element.readUInt32LE();
        element.move(4);
        const id = element.readUInt32LE();

        const size = element.readUInt32LE() - 4;
        const typeLength = element.readUInt32LE() - 4;
        const typeText = element.slice(typeLength).toString();
        if (size - typeLength == 4) return;

        const DataBuf = element.slice();
        const DataLen = DataBuf.readUInt32LE() - 4;
        DataBuf.seek(0);

        let result;
        if (keyToClass.has(typeText)) {
            // Find class to parse packet with.
            const klas = keyToClass.get(typeText)!;
            result = klas.parse(DataBuf) as any;
            switch (typeText) {
                case "zipchunk":
                    if (typeof result == "function") {
                        this.handleMessage(gunzipSync(result().data));
                        return;
                    }
                    break;
                case "QueryServerInfoResponse":
                    this.sendPacket("QueryBannedMachineRequest");
                    break;
                case "QueryBannedMachineResponse":
                    if (result.isBanned) {
                        console.error("Player banned");
                        this.close();
                    } else {
                        this.sendPacket("StartLogin");
                    }
                    break;
                case "LoginQueueUpdate":
                    this.emit("LoginQueueUpdate", result.positionInQueue);
                    console.info(`Queue: ${result.positionInQueue}`);
                    if (result.mayProceed) this.sendPacket("login2_begin", {
                        username: this.userName,
                        deviceid: this.userAgent,
                        acceptingPrivacyPolicy: false,
                        acceptingBattlEyePolicy: false,
                    });
                    break;
                case "login2_challenge":
                    this.sendPacket("login2_response", this.login(this.password, result));
                    break;
                case "login2_result":
                    this.emit("loggedin");
                    break;
                case "keepaliverequest":
                    // TODO Find out what 8374 means.
                    this.sendPacket("keepalive", { value: 8374 });
                    break;
                default:
                    this.emit(`id${id}`, result);
                    this.emit(typeText, result);
                    this.emit("message", typeText, result);
                    break;
            }
            if (typeof result == "object") result = ProtoToString(result);
        } else {
            console.log(`unsupported message: ${typeText}`);
        }

        const startString = `${plen.toString().padEnd(5)} ${id.toString().padEnd(5)} ${typeText.padEnd(35)}`;
        const midString = `${DataLen.toString().padEnd(5)}`;
        const outputStr = `${startString} ${result ? result : midString}`;
        console.log(outputStr);
        // appendFileSync("./testConLog.txt", outputStr + "\n", "utf8");
    }
}
