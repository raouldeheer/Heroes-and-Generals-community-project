import BufferCursor from "./buffercursor";
import { requestBuf } from "./classes";

export class StartLogin {
    constructor() { }
    static parse(buf: BufferCursor): "Request" | "Error" {
        return requestBuf.equals(buf.buffer) ? "Request" : "Error";
    }
}

export class LoginQueueUpdate {
    constructor() { }
    static parse(buf: BufferCursor): "Update" {
        return "Update";
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
    static parse(buf: BufferCursor) {
        // TODO do login2_postlogin parsing here.
    }
}

export class login2_postlogin_result {
    constructor() { }
    static parse(buf: BufferCursor) {
        // TODO do login2_postlogin_result parsing here.
    }
}

export class RedeemDailyLoginRewardRequest {
    constructor() { }
    static parse(_buf: BufferCursor): "Request" {
        return "Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    constructor() { }
    static parse(buf: BufferCursor): "Response" | "Error" {
        return requestBuf.equals(buf.buffer) ? "Response" : "Error";
    }
}
