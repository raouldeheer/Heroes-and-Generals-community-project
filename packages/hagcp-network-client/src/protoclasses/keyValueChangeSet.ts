import { IKeyValueChangeSetResult, BufferCursor, bytesToString, splitInGroups, prefixJoin } from "hagcp-utils";
import { bufFromDecodedProto, BufToDecodedProto, Protos } from "./proto";
import { KeyValueOp } from "../protolinking/keyValueSet";

export const KeyValueChangeSet = {
    name: "KeyValueChangeSet",
    parse(buf: BufferCursor) {
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
                        try {
                            returnObj.set.push({
                                key,
                                value: BufToDecodedProto(
                                    Protos.lookupType(`HnG_States.${key}`),
                                    valueBuf.slice().buffer
                                ),
                            });
                        } catch (error) {
                            console.log(error);
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
                            value: valueBuf.readBigUInt64LE().toString(),
                        });
                    }
                    break;
                default:
                    console.log(bytesToString(sections[0]));
                    break;
            }
        });
        return returnObj;
    },
    toBuffer(payload: IKeyValueChangeSetResult): Buffer {
        return prefixJoin([
            payload.set ? prefixJoin([
                Buffer.from(KeyValueOp.set, "utf8"),
                ...payload.set.map(({ key, value }) => {
                    const encoded = bufFromDecodedProto(Protos.lookupType(`HnG_States.${key}`), value);
                    const result = new BufferCursor(Buffer.allocUnsafe(4 + key.length + 4 + 4 + encoded.byteLength));
                    result.writeUInt32LE(key.length + 4);
                    result.write(key, key.length);
                    result.writeUInt32LE(encoded.byteLength + 8);
                    result.writeUInt32LE(encoded.byteLength + 4);
                    result.writeBuff(encoded, encoded.length);
                    return result.buffer;
                })
            ]) : null,
            payload.delete ? prefixJoin([
                Buffer.from(KeyValueOp.delete, "utf8"),
                ...payload.delete.map(({ key, value }) => {
                    const result = new BufferCursor(Buffer.allocUnsafe(4 + key.length + 4 + 4 + 8));
                    result.writeUInt32LE(key.length + 4);
                    result.write(key, key.length);
                    result.writeUInt32LE(8 + 4 + 4);
                    result.writeUInt32LE(8 + 4);
                    result.writeBigUInt64LE(BigInt(value.toString()));
                    return result.buffer;
                })
            ]) : null,
        ].filter(<T>(e: T): e is NonNullable<T> => !!e));
    },
};
