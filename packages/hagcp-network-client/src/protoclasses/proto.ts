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

export const BufToDecodedProto = (proto: Type, buf: Buffer) =>
    proto.toObject(proto.decode(buf), {
        longs: String,
        enums: Number,
        bytes: Buffer,
    });

export function ProtoToBuf(proto: Type, payload: object): Buffer {
    const errMsg = proto.verify(payload);
    if (errMsg) throw Error(errMsg);
    const encoded = proto.encode(
        proto.create(payload)
    ).finish() as Buffer;
    const result = new BufferCursor(Buffer.allocUnsafe(encoded.byteLength + 8));
    result.writeUInt32LE(encoded.byteLength + 8);
    result.writeUInt32LE(encoded.byteLength + 4);
    result.writeBuff(encoded, encoded.length);
    return result.buffer;
};
