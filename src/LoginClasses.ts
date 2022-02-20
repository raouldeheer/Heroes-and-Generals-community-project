import BufferCursor from "./buffercursor";
import { dummyBuffer } from "./classes";
import { bytesToString, splitOnChar } from "./utils";
import { userAgent, userName } from "./env";

export class StartLogin {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class LoginQueueUpdate {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return "🔽 Update";
        // TODO do LoginQueueUpdate parsing here.
    }
}

export class login2_begin {
    static get example(): Buffer {
        const len = userAgent.length + userName.length + 8;
        const tempBuf = new BufferCursor(Buffer.allocUnsafe(len + 8));
        tempBuf.writeUInt32LE(len + 8);
        tempBuf.writeUInt32LE(len + 4);
        tempBuf.writeUInt8(18);
        tempBuf.writeUInt8(userAgent.length);
        tempBuf.write(userAgent, userAgent.length, "utf8");
        tempBuf.writeUInt8(10);
        tempBuf.writeUInt8(userName.length);
        tempBuf.write(userName, userName.length, "utf8");
        tempBuf.write("18002000", 4, "hex");
        return tempBuf.buffer;
    }
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 18) {
            const userAgent = splitOnChar(buf, '\n');
            if (userAgent) {
                result += bytesToString(userAgent);
                const len = buf.readUInt8();
                result += ` - ` + bytesToString(buf.slice(len));
                return result;
            } else {
                return result + " - Unknown";
            }
        } else {
            return result + " - Unknown";
        }
    }
}

export class login2_challenge {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {

        buf.seek(8);
        let result = "";
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 26) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        return result;
    }
}

export class login2_response {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += Buffer.from(bytesToString(buf.slice(len)), "base64").toString("hex").toUpperCase();
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += ` - ` + Buffer.from(bytesToString(buf.slice(len)), "base64").toString("hex").toUpperCase();
        } else {
            return result + " - Unknown";
        }
        return result;
    }
}

export class login2_result {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔽 ";
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        buf.move(15);
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        buf.move(18);
        if (buf.readUInt8() == 80) {
            result += ` - ` + buf.slice(9).toString("hex");
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 88) {
            result += ` - ` + buf.slice(9).toString("hex");
        } else {
            return result + " - Unknown";
        }
        buf.seek(132);
        {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        }
        buf.seek(176);
        {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        }
        buf.seek(227);
        {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        }
        return result;
    }
}

export class login2_postlogin {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        buf.move(2);
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        return result;
    }
}

export class login2_postlogin_result {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔽 ";
        if (buf.readUInt8() == 8) {
            result += buf.slice(9).toString("hex");
        } else {
            return result + " - Unknown";
        }
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + " - Unknown";
        }
        return result;
    }
}

export class RedeemDailyLoginRewardRequest {
    static example = dummyBuffer;
    static parse(_buf: BufferCursor): string {
        return "🔼 Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}
