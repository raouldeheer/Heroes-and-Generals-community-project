import { requestBuf } from "./classes";

const responseOkBuf = Buffer.from([0x0c, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x0a, 0x02, 0x6f, 0x6b]);

export class subscribeplayerview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscriberesponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([0x08, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00])
            .equals(buf) ? "Response" : "Error";
    }
}

export class subscribesoldierview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class SubscribePlayerMissionViewRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscribecommandnodeview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class SubscribeHostingCenterInfoView {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscribefriendview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class SubscribeShopView {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscribeignoredplayerview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class SubscribeMessageView {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscribewarmaplightview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscribebattlesview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class subscriberesourceview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class unsubscribecommandnodeview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class unsubscribewarmaplightview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class unsubscriberesponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return responseOkBuf.equals(buf) ? "Response" : "Error";
    }
}

export class subscribewarmapview {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}
