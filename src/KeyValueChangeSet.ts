import BufferCursor from "./buffercursor";
import { BufToDecodedProto } from "./proto";
import { KeyValueChangeKey, KeyValueOp, SetProtoParsers } from "./protoparsers/protoTypes";
import { bytesToString, parseGroups } from "./utils";

export class KeyValueChangeSet {
    static parse(buf: BufferCursor) {
        const groups = parseGroups(buf);
        const returnObj: any = {};
        switch (bytesToString(groups[0])) {
            case KeyValueOp.set:
                if (!returnObj.set) returnObj.set = {};
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    if (SetProtoParsers.has(key)) {
                        const proto = SetProtoParsers.get(key)!;
                        const decoded = BufToDecodedProto(proto, value);
                        returnObj.set[key] = decoded;
                    } else {
                        returnObj.set[key] = "New set key";
                    }
                }
                break;
            case KeyValueOp.delete:
                if (!returnObj.delete) returnObj.delete = {};
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    switch (key) {
                        case KeyValueChangeKey.battle:
                        case KeyValueChangeKey.BattleInfo:
                            // TODO do better naming
                            returnObj.delete[key] = KeyValueChangeSet.parseToHex(key, value);
                            break;
                        default:
                            returnObj.delete[key] = "New delete key";
                            break;
                    }
                }
                break;
            default:
                console.log(bytesToString(groups[0]));
                break;
        }
        return returnObj;
    }

    private static parseToHex(type: KeyValueChangeKey, value: Buffer) {
        return type.toString() + ` - ` + value.toString("hex");
    }

}
