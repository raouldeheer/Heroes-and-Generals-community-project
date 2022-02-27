import protobuf from "protobufjs";
import BufferCursor from "./buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";

const CommonPackage = protobuf.loadSync("./src/protos/Common.proto");
const DummyProto = CommonPackage.lookupType("Common.Dummy");

export class DummyClass {
    static proto = DummyProto;
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        dummy: number,
    } = { dummy: 0 }): Buffer => ProtoToBuf(this.proto, payload);
}

export class unsubscriberesponse {
    static proto = CommonPackage.lookupType("Common.unsubscriberesponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        reply: string,
    } = { reply: "ok" }): Buffer => ProtoToBuf(this.proto, payload);
}
