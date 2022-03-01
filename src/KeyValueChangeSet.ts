import BufferCursor from "./buffercursor";
import { ProtoToStringWithName, BufToDecodedProto } from "./proto";
import { KeyValueChangeKey, KeyValueOp, SetProtoParsers } from "./protoparsers/protoTypes";
import { bytesToString, parseGroups } from "./utils";

export class KeyValueChangeSet {
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
                        const proto = SetProtoParsers.get(key)!;
                        const decoded = BufToDecodedProto(proto, value);
                        const str = ProtoToStringWithName(key as KeyValueChangeKey, decoded);
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

    private static parseToHex(type: KeyValueChangeKey, value: Buffer) {
        return type.toString() + ` - ` + value.toString("hex");
    }

}
