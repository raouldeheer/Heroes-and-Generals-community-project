import BufferCursor from "../buffercursor";
import { BufToDecodedProto } from "./proto";
import { KeyValueChangeKey, KeyValueOp, KeyProtoSet } from "../protolinking/keyValueSet";
import { bytesToString, splitInGroups } from "../utils/bytes";

export type KeyValue = { key: string, value: any; };
export interface IKeyValueChangeSetResult {
    set?: KeyValue[],
    delete?: KeyValue[],
}

export class KeyValueChangeSet {
    static parse(buf: BufferCursor) {
        const returnObj: IKeyValueChangeSetResult = {};
        const groups = splitInGroups(buf);
        groups.forEach(group => {
            const sections = splitInGroups(group);
            switch (bytesToString(sections[0])) {
                case KeyValueOp.set:
                    if (!returnObj.set) returnObj.set = [];
                    sections.shift();
                    for (let i = 0; i < sections.length; i++) {
                        const [keyBuf, valueBuf] = splitInGroups(sections[i]);
                        const key = bytesToString(keyBuf);
                        valueBuf.seek(4);
                        const value = valueBuf.slice().buffer;
                        if (KeyProtoSet.has(key)) {
                            const proto = KeyProtoSet.get(key)!;
                            const decoded = BufToDecodedProto(proto, value);
                            returnObj.set.push({
                                key,
                                value: decoded,
                            });
                        } else {
                            console.log(`New set key: ${key}`);
                            returnObj.set.push({
                                key,
                                value: "New set key",
                            });
                        }
                    }
                    break;
                case KeyValueOp.delete:
                    if (!returnObj.delete) returnObj.delete = [];
                    sections.shift();
                    for (let i = 0; i < sections.length; i++) {
                        const [keyBuf, valueBuf] = splitInGroups(sections[i]);
                        valueBuf.seek(4);
                        returnObj.delete.push({
                            key: bytesToString(keyBuf),
                            value: valueBuf.readBigUint64LE().toString(),
                        });
                    }
                    break;
                default:
                    console.log(bytesToString(sections[0]));
                    break;
            }
        });
        return returnObj;
    }
}
