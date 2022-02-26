import { EventEmitter } from "events";
import net from "net";
import crypto from 'crypto';
import BufferCursor from "./buffercursor";
import { keys } from "./types";
import { password } from "./env";

export class Client extends EventEmitter {
    con: net.Socket;
    private idNumber;
    private rest: Buffer | undefined;
    constructor(host: string, port: number) {
        super();
        this.idNumber = 0;
        this.con = net.createConnection({ host, port });

        this.con.on("close", err => {
            console.log(`closed and ${err ? "had" : "no"} error`);
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
                    this.emit('message', this.rest.slice(0, len));
                    this.rest = this.rest.slice(len);
                } else break;
            }
        });

        this.con.on("connect", () => {
            // connected
            this.sendExamplePacket("QueryServerInfo");
        });
    }

    public packer(className: string, data: Buffer) {
        const totalLength = data.byteLength + className.length;
        const result = new BufferCursor(Buffer.allocUnsafe(20 + totalLength));
        result.writeUInt32LE(20 + totalLength);
        result.writeUInt32LE(8);
        result.writeUInt32LE(++this.idNumber);
        result.writeUInt32LE(8 + totalLength);
        result.writeUInt32LE(4 + className.length);
        result.write(className, className.length, "ascii");
        result.writeBuff(data, data.byteLength);
        return result.buffer;
    }

    /**
     * sendExamplePacket
     */
    public sendExamplePacket(className: string) {
        const example = keys.get(className)?.example;
        if (!example) return false;
        this.con.write(this.packer(className, example));
        return true;
    }
    
    /**
     * sendPacketToBuffer
     */
     public sendPacketToBuffer(className: string, payload?: any) {
        // @ts-ignore
        const example = keys.get(className)?.toBuffer?.(payload);
        if (!example) return false;
        this.con.write(this.packer(className, example));
        return true;
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
        const sessionid = Buffer.from(tempSessionid, "base64");

        const sha1concat = (d1: Buffer, d2: Buffer) =>
            crypto.createHash('sha1').update(Buffer.concat([d1, d2])).digest();

        const loginkeyhash = sha1concat(sha1concat(
            Buffer.from(password, "latin1"),
            Buffer.from(salt, "base64")
        ), sessionid);

        const computeHMAC = (key: crypto.BinaryLike, data: crypto.BinaryLike) =>
            crypto.createHmac('sha1', key).update(data).digest("base64");

        const digest = computeHMAC(
            Buffer.from(encryptedSessionkey, "base64")
                .map((value, i) => value ^ loginkeyhash[i % loginkeyhash.length]),
            sessionid);

        return {
            digest,
            tempSessionid,
        };
    }

    public sendLogin(
        param: {
            salt: string,
            tempSessionid: string,
            encryptedSessionkey: string,
        }
    ) {
        const { digest, tempSessionid } = this.login(password, param);

        const digestBuff = Buffer.from(digest, "ascii");
        const tempSessionidBuff = Buffer.from(tempSessionid, "ascii");
        const length = digestBuff.byteLength +
            tempSessionidBuff.byteLength + 12;
        const loginData = new BufferCursor(Buffer.allocUnsafe(length));
        loginData.writeUInt32LE(length);
        loginData.writeUInt32LE(length - 4);
        loginData.writeUInt8(0x12);
        loginData.writeUInt8(digestBuff.byteLength);
        loginData.writeBuff(digestBuff, digestBuff.length);
        loginData.writeUInt8(0x0a);
        loginData.writeUInt8(tempSessionidBuff.byteLength);
        loginData.writeBuff(tempSessionidBuff, tempSessionidBuff.length);

        this.con.write(this.packer("login2_response", loginData.buffer));
    }
}
