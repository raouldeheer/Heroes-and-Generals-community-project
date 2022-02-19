import BufferCursor from "./buffercursor";
import { emptyBuf } from "./classes";
import { decodeProto } from "./protobuf-decoder/src/protobufDecoder";
import { SetProtoPlayerParsers } from "./protoparsers/playerParsers";
import { ProtoParser, KeyValueChangeKey, SortedArray, KeyValueOp } from "./protoparsers/protoTypes";
import { SetProtoServerParsers } from "./protoparsers/serverParsers";
import { SetProtoWarParsers } from "./protoparsers/warParsers";
import { bytesToString, parseGroups, splitOnMultipleOf8 } from "./utils";

const SetProtoParsers = new Map<String, ProtoParser>([
    ...SetProtoPlayerParsers,
    ...SetProtoServerParsers,
    ...SetProtoWarParsers,
]);

export class KeyValueChangeSet {
    static example = emptyBuf;
    static parse(buf: BufferCursor) {
        const prefix = `\n${" ".repeat(12)}`;
        const groups = parseGroups(buf);
        let returnStr = "🔽";
        switch (bytesToString(groups[0])) {
            case KeyValueOp.set:
                const setPrefix = prefix + "Set ";
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    if (SetProtoParsers.has(key)) {
                        const parser = SetProtoParsers.get(key)!;
                        const decoded = parser(KeyValueChangeSet.decode(value));
                        const str = KeyValueChangeSet.ProtoToString(key as KeyValueChangeKey, decoded);
                        returnStr += setPrefix + str;
                    } else {
                        returnStr += prefix + `${key} - New set key`;
                    }
                }
                break;
            case KeyValueOp.delete:
                const deletePrefix = prefix + "Delete ";
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    switch (key) {
                        case KeyValueChangeKey.battle:
                        case KeyValueChangeKey.BattleInfo:
                            // TODO do better naming
                            returnStr += deletePrefix + KeyValueChangeSet.parseToHex(key, value);
                            break;
                        default:
                            returnStr += prefix + `${key} - New delete key`;
                            break;
                    }
                }
                break;
            default:
                console.log(bytesToString(groups[0]));
                break;
        }
        return returnStr;
    }

    private static decode(value: Buffer): SortedArray {
        const sorted: SortedArray = [];
        decodeProto(value).parts.forEach(element => {
            sorted[element.index] = element.value;
        });
        return sorted;
    }

    private static parseToHex(type: KeyValueChangeKey, value: Buffer) {
        return type.toString() + ` - ` + value.toString("hex");
    }

    private static parseToHexGroups(type: KeyValueChangeKey, value: Buffer) {
        return type.toString() + ` - ` + splitOnMultipleOf8(value)
            .map(v => v.buffer.toString("hex"))
            .join(` - `);
    }

    private static ProtoToString(type: KeyValueChangeKey, result: any) {
        const prefix = `\n${" ".repeat(16)}`;
        return type.toString() + prefix +
            Object.entries(result).reduce((prev, curr, i, { length }) => prev + curr[0] + ": " +
                String(curr[1]) + ((i == length - 1) ? "" : prefix), "");
    }
}
