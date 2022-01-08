import BufferCursor from "./buffercursor";
import { requestBuf } from "./classes";
import { bytesToString } from "./utils";

export class StartLogin {
    constructor() { }
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class LoginQueueUpdate {
    constructor() { }
    static parse(buf: BufferCursor): string {
        return "🔽 Update";
        // TODO do LoginQueueUpdate parsing here.
    }
}

export class login2_begin {
    constructor() { }
    static parse(buf: BufferCursor) {
        // TODO do login2_begin parsing here.
    }
}

export class login2_challenge {
    constructor() { }
    static parse(buf: BufferCursor) {
        // TODO do login2_challenge parsing here.
    }
}

export class login2_response {
    constructor() { }
    static parse(buf: BufferCursor) {
        // TODO do login2_response parsing here.
    }
}

export class login2_result {
    constructor() { }
    static parse(buf: BufferCursor) {
        // TODO do login2_result parsing here.
    }
}

export class login2_postlogin {
    constructor() { }
    static parse(buf: BufferCursor): string {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += bytesToString(buf.slice(len));
        } else {
            return result + "Unknown";
        }
        buf.move(2);
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + "Unknown";
        }
        if (buf.readUInt8() == 10) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + "Unknown";
        }
        return result;
    }
}

export class login2_postlogin_result {
    constructor() { }
    static parse(buf: BufferCursor) {
        buf.seek(8);
        let result = "🔼 ";
        if (buf.readUInt8() == 8) {
            result += buf.slice(9).toString("hex");
        } else {
            return result + "Unknown";
        }
        if (buf.readUInt8() == 18) {
            const len = buf.readUInt8();
            result += ` - ` + bytesToString(buf.slice(len));
        } else {
            return result + "Unknown";
        }
        return result;
    }
}

export class RedeemDailyLoginRewardRequest {
    constructor() { }
    static parse(_buf: BufferCursor): string {
        return "Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    constructor() { }
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "Response" : "Error";
    }
}
