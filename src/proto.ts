import { decodeProto } from "./protobuf-decoder/src/protobufDecoder";
import { SortedArray } from "./protoparsers/protoTypes";

export function decode(value: Buffer): SortedArray {
    const sorted: SortedArray = [];
    decodeProto(value).parts.forEach(element => {
        sorted[element.index] = element.value;
    });
    return sorted;
}

export function ProtoToStringWithName(type: any, result: any) {
    const prefix = `\n${" ".repeat(16)}`;
    return type.toString() + prefix +
        Object.entries(result).reduce((prev, curr, i, { length }) => prev + curr[0] + ": " +
            String(curr[1]) + ((i == length - 1) ? "" : prefix), "");
}

export function ProtoToString(result: any, prefix = `${" ".repeat(16)}`): string {
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
        bytes: String,
    });

export function ProtoToBuf(proto: protobuf.Type, payload: any): Buffer {
    const errMsg = proto.verify(payload);
    if (errMsg) throw Error(errMsg);
    return proto.encode(
        proto.create(payload)
    ).finish() as Buffer;
};
