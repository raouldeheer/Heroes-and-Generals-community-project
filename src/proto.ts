import BufferCursor from "./buffercursor";

export function ProtoToStringWithName(type: any, result: any) {
    const prefix = `\n${" ".repeat(16)}`;
    return type.toString() + prefix + ProtoToString(result);
}

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

export const BufToDecodedProto = (proto: protobuf.Type, buf: Buffer) =>
    proto.toObject(proto.decode(buf), {
        longs: String,
        enums: Number,
        bytes: Buffer,
    });

export function ProtoToBuf(proto: protobuf.Type, payload: any): Buffer {
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
