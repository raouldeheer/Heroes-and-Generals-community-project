import { BufferCursor } from "buffercursor.ts";
import { Type, loadSync } from "protobufjs";
import { join } from "path";
import Long from "long";

export const Protos = loadSync(join(__filename, "../protos/All.proto"));

export function ProtoToString(result: object, prefix = `${" ".repeat(16)}`): string {
    return "\n" +
        Object.entries(result)
            .reduce((prev, curr, i, { length }) =>
                prev + prefix + curr[0] + ": " +
                ((typeof curr[1] == "object")
                    ? Long.isLong(curr[1])
                        ? curr[1].toString()
                        : ProtoToString(curr[1], prefix + "    ")
                    : String(curr[1])) +
                ((i == length - 1) ? "" : "\n"), "");
}

export const BufToDecodedProto = <T>(proto: Type, buf: Buffer): T =>
    proto.toObject(proto.decode(buf), {
        enums: Number,
        bytes: Buffer,
    }) as T;

export const bufFromDecodedProto = <T extends Record<string, any>>(proto: Type, value: T): Buffer =>
    Buffer.from(proto.encode(proto.fromObject(value)).finish());

export function ProtoToBuf<T extends Record<string, any>>(proto: Type, payload: T): Buffer {
    const errMsg = proto.verify(payload);
    if (errMsg) throw new Error(errMsg);
    const encoded = bufFromDecodedProto(proto, payload);
    const result = new BufferCursor(Buffer.allocUnsafe(encoded.byteLength + 8));
    result.writeUInt32LE(encoded.byteLength + 8);
    result.writeUInt32LE(encoded.byteLength + 4);
    result.writeBuff(encoded, encoded.length);
    return result.buffer;
}

export const getDefaultClass = <T extends Record<string, any>>(protoName: string, defaults: T = {} as T, name = protoName.match(/\w+$/g)?.pop() || "") => ({
    name,
    parse: (buf: BufferCursor): T => BufToDecodedProto(Protos.lookupType(protoName), buf.buffer.slice(8)),
    toBuffer: (payload: T): Buffer => ProtoToBuf(Protos.lookupType(protoName), { ...defaults, ...payload }),
} as const);
