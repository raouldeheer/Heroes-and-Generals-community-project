import protobuf from "protobufjs";
import BufferCursor from "./buffercursor";
import { dummyBuffer } from "./classes";
import { BufToDecodedProto, ProtoToBuf } from "./proto";

const CommonPackage = protobuf.loadSync("./src/protos/Common.proto");
const DummyProto = CommonPackage.lookupType("Common.Dummy");

export class DummyClass {
    static proto = DummyProto;
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        dummy: number,
    } = { dummy: 0 }): Buffer => ProtoToBuf(this.proto, payload);
}

export class unsubscriberesponse {
    static proto = CommonPackage.lookupType("Common.unsubscriberesponse");
    static example = Buffer.from("0c000000080000000a026f6b", "hex"); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        reply: string,
    } = { reply: "ok" }): Buffer => ProtoToBuf(this.proto, payload);
}
