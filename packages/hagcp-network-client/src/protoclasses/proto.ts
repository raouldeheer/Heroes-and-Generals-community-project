import { BufferCursor } from "hagcp-utils";
import { Type, loadSync } from "protobufjs";
import { join } from "path";

export const Protos = loadSync(join(__filename, "../protos/All.proto"));

export function ProtoToString(result: object, prefix = `${" ".repeat(16)}`): string {
    return "\n" +
        Object.entries(result)
            .reduce((prev, curr, i, { length }) =>
                prev + prefix + curr[0] + ": " +
                ((typeof curr[1] == "object")
                    ? ProtoToString(curr[1], prefix + "    ")
                    : String(curr[1])) +
                ((i == length - 1) ? "" : "\n"), "");
}

export const BufToDecodedProto = <T>(proto: Type, buf: Buffer): T =>
    proto.toObject(proto.decode(buf), {
        longs: String,
        enums: Number,
        bytes: Buffer,
    }) as T;

export const bufFromDecodedProto = <T>(proto: Type, value: T): Buffer =>
    Buffer.from(proto.encode(proto.fromObject(value)).finish());

export function ProtoToBuf<T>(proto: Type, payload: T): Buffer {
    const errMsg = proto.verify(payload);
    if (errMsg) throw Error(errMsg);
    const encoded = bufFromDecodedProto(proto, payload);
    const result = new BufferCursor(Buffer.allocUnsafe(encoded.byteLength + 8));
    result.writeUInt32LE(encoded.byteLength + 8);
    result.writeUInt32LE(encoded.byteLength + 4);
    result.writeBuff(encoded, encoded.length);
    return result.buffer;
}

export const getDefaultClass = <T>(protoName: string, defaults: T = {} as T) => ({
    parse: (buf: BufferCursor): T => BufToDecodedProto(Protos.lookupType(protoName), buf.buffer.slice(8)),
    toBuffer: (payload = defaults): Buffer => ProtoToBuf(Protos.lookupType(protoName), payload),
});
