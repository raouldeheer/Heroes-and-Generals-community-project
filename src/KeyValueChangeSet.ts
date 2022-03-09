import BufferCursor from "./buffercursor";
import { BufToDecodedProto } from "./proto";
import { KeyValueChangeKey, KeyValueOp, SetProtoParsers } from "./protoparsers/protoTypes";
import { bytesToString, parseGroups } from "./utils";

export type KeyValue = { key: string, value: any; };
export interface IKeyValueChangeSetResult {
    set?: KeyValue[],
    delete?: KeyValue[],
}

export class KeyValueChangeSet {
    static parse(buf: BufferCursor) {
        const groups = parseGroups(buf);
        const returnObj: IKeyValueChangeSetResult = {};
        switch (bytesToString(groups[0])) {
            case KeyValueOp.set:
                if (!returnObj.set) returnObj.set = [];
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    if (SetProtoParsers.has(key)) {
                        const proto = SetProtoParsers.get(key)!;
                        const decoded = BufToDecodedProto(proto, value);
                        returnObj.set.push({
                            key,
                            value: decoded,
                        });
                    } else {
                        returnObj.set.push({
                            key,
                            value: "New set key",
                        });
                    }
                }
                break;
            case KeyValueOp.delete:
                if (!returnObj.delete) returnObj.delete = [];
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const key = bytesToString(groups[i]);
                    const value = groups[i + 1];
                    switch (key) {
                        case KeyValueChangeKey.battle:
                        case KeyValueChangeKey.BattleInfo:
                            returnObj.delete.push({
                                key,
                                value: value.readBigUint64LE().toString(),
                            });
                            break;
                        default:
                            console.log(`New delete key: ${key}`);
                            returnObj.delete.push({
                                key,
                                value: "New delete key",
                            });
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
