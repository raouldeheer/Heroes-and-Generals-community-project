import { BufferCursor } from "buffercursor.ts";
import { Type, loadSync } from "protobufjs";
import { join } from "path";
import Long from "long";
import { LongToString } from "../protolinking/keyValueSet";

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
        longs: String,
        enums: Number,
        bytes: Buffer,
    }) as T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bufFromDecodedProto = <T extends Record<string, any>>(proto: Type, value: T): Buffer =>
    Buffer.from(proto.encode(proto.fromObject(value)).finish());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultClass = <T extends Record<string, any>>(protoName: string, defaults: T = {} as T, name = protoName.match(/\w+$/g)?.pop() || "") => ({
    name,
    parse: (buf: BufferCursor): LongToString<T> => BufToDecodedProto(Protos.lookupType(protoName), buf.buffer.subarray(8)),
    toBuffer: (payload: T): Buffer => ProtoToBuf(Protos.lookupType(protoName), Object.assign(defaults, payload)),
} as const);
