import BufferCursor from "./buffercursor";
import { dummyBuffer, emptyBuffer } from "./classes";

export class subscribeplayerview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscriberesponse {
    static example = emptyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class subscribesoldierview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribePlayerMissionViewRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribecommandnodeview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeHostingCenterInfoView {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribefriendview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeShopView {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribeignoredplayerview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SubscribeMessageView {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribewarmaplightview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscribebattlesview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class subscriberesourceview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscribecommandnodeview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscribewarmaplightview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class unsubscriberesponse {
    static example = Buffer.from("0c000000080000000a026f6b", "hex");
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class subscribewarmapview {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}
