import BufferCursor from "./buffercursor";
import { requestBuf } from "./classes";
import { bytesToString, splitOnChar } from "./utils";

export class StartLogin {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class LoginQueueUpdate {
    static parse(buf: BufferCursor): string {
        return "🔽 Update";
        // TODO do LoginQueueUpdate parsing here.
    }
}

export class login2_begin {
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
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += bytesToString(buf.slice(len));
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

export class login2_result {
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
    static parse(_buf: BufferCursor): string {
        return "Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "Response" : "Error";
    }
}
