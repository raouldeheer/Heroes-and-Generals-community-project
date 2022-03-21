import protobuf from "protobufjs";
import BufferCursor from "../buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";

const Protos = protobuf.loadSync("./src/protos/All.proto");

export class DummyClass {
    static proto = Protos.lookupType("Common.Dummy");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        dummy: number,
    } = { dummy: 0 }): Buffer => ProtoToBuf(this.proto, payload);
}

export class unsubscriberesponse {
    static proto = Protos.lookupType("Common.unsubscriberesponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        reply: string,
    } = { reply: "ok" }): Buffer => ProtoToBuf(this.proto, payload);
}
