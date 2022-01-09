import BufferCursor from "./buffercursor";
import { requestBuf } from "./classes";

const responseOkBuf = Buffer.from([0x0c, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x0a, 0x02, 0x6f, 0x6b]);

export class subscribeplayerview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscriberesponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([0x08, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00])
            .equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class subscribesoldierview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribePlayerMissionViewRequest {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribecommandnodeview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeHostingCenterInfoView {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribefriendview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeShopView {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribeignoredplayerview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeMessageView {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribewarmaplightview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribebattlesview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscriberesourceview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscribecommandnodeview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscribewarmaplightview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscriberesponse {
    static parse(buf: BufferCursor): string {
        return responseOkBuf.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class subscribewarmapview {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}
