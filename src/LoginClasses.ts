import { requestBuf } from "./classes";


export class StartLogin {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class LoginQueueUpdate {
    constructor() { }
    static parse(buf: Buffer): "Update" {
        return "Update";
        // TODO do LoginQueueUpdate parsing here.
    }
}

export class login2_begin {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_begin parsing here.
    }
}

export class login2_challenge {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_challenge parsing here.
    }
}

export class login2_response {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_response parsing here.
    }
}

export class login2_result {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_result parsing here.
    }
}

export class login2_postlogin {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_postlogin parsing here.
    }
}

export class login2_postlogin_result {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do login2_postlogin_result parsing here.
    }
}

export class RedeemDailyLoginRewardRequest {
    constructor() { }
    static parse(_buf: Buffer): "Request" {
        return "Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return requestBuf.equals(buf) ? "Response" : "Error";
    }
}
