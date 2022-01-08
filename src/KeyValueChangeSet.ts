import BufferCursor from "./buffercursor";
import { bytesToString, parseGroups, splitOnMultipleOf8 } from "./utils";

enum KeyValueOp {
    set = "set",
    delete = "delete"
}
enum KeyValueChangeKey {
    HostingCenterInfo = "HostingCenterInfo",
    CommandNodeDefinition = "CommandNodeDefinition",
    CommandNodeWarInstance = "CommandNodeWarInstance",
    armyresource = "armyresource",
    PlayerPartnerInfo = "PlayerPartnerInfo",
    player = "player",
    BattleInfo = "BattleInfo",
    FactionResourceProduction = "FactionResourceProduction",
    FactionResourceConsumption = "FactionResourceConsumption",
    MessageRecipient = "MessageRecipient",
    ignoredplayerwithname = "ignoredplayerwithname",
    ShopWarBondItemCounter = "ShopWarBondItemCounter",
    friendinfo = "friendinfo",
    FactionResourceQueue = "FactionResourceQueue",
    supplylinestatus = "supplylinestatus",
    accesspointstatus = "accesspointstatus",
    transport_commandnode_segment = "transport_commandnode_segment",
    transport_commandnode_destination = "transport_commandnode_destination",
    air_transport = "air_transport",
    air_commandnode_base = "air_commandnode_base",
    battle = "battle",
    ViewHandlerPulse = "ViewHandlerPulse",
    faction = "faction",
    battlefieldstatus = "battlefieldstatus",
}

export class KeyValueChangeSet {
    constructor() { }
    static parse(buf: BufferCursor) {
        const prefix = `\n${" ".repeat(12)}`;
        const groups = parseGroups(buf);
        let returnStr = "🔽";
        switch (bytesToString(groups[0])) {
            case KeyValueOp.set:
                const setPrefix = prefix + "Set ";
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const value = groups[i + 1];
                    switch (bytesToString(groups[i])) {
                        case KeyValueChangeKey.HostingCenterInfo:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetHostingCenterInfo(value);
                            break;
                        case KeyValueChangeKey.CommandNodeDefinition:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetCommandNodeDefinition(value);
                            break;
                        case KeyValueChangeKey.friendinfo:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetFriendInfo(value);
                            break;
                        case KeyValueChangeKey.ignoredplayerwithname:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetIgnoredPlayerWithName(value);
                            break;
                        case KeyValueChangeKey.FactionResourceProduction:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetFactionResourceProduction(value);
                            break;
                        case KeyValueChangeKey.FactionResourceConsumption:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetFactionResourceConsumption(value);
                            break;
                        case KeyValueChangeKey.battle:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetBattle(value);
                            break;
                        case KeyValueChangeKey.battlefieldstatus:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetBattlefieldStatus(value);
                            break;
                        case KeyValueChangeKey.BattleInfo:
                            returnStr += setPrefix + KeyValueChangeSet.parseSetBattleInfo(value);
                            // returnStr += setPrefix + KeyValueChangeSet.parseToHexGroups(KeyValueChangeKey.BattleInfo, value);
                            break;
                        case KeyValueChangeKey.armyresource:
                            // TODO do better parsing
                            returnStr += setPrefix + KeyValueChangeSet.parseToHexGroups(KeyValueChangeKey.armyresource, value);
                            break;
                        case KeyValueChangeKey.faction:
                            // TODO do better parsing
                            returnStr += setPrefix + KeyValueChangeSet.parseToHexGroups(KeyValueChangeKey.faction, value);
                            break;
                        case KeyValueChangeKey.CommandNodeWarInstance:
                            // TODO do better parsing
                            returnStr += setPrefix + KeyValueChangeSet.parseToHexGroups(KeyValueChangeKey.CommandNodeWarInstance, value);
                            break;
                        case KeyValueChangeKey.PlayerPartnerInfo:
                        case KeyValueChangeKey.player:
                        case KeyValueChangeKey.ShopWarBondItemCounter:
                        case KeyValueChangeKey.MessageRecipient:
                        case KeyValueChangeKey.FactionResourceQueue:
                        case KeyValueChangeKey.supplylinestatus:
                        case KeyValueChangeKey.accesspointstatus:
                        case KeyValueChangeKey.transport_commandnode_segment:
                        case KeyValueChangeKey.transport_commandnode_destination:
                        case KeyValueChangeKey.air_transport:
                        case KeyValueChangeKey.air_commandnode_base:
                        case KeyValueChangeKey.ViewHandlerPulse:
                            returnStr += setPrefix + `${bytesToString(groups[i])} - Not parsed`;
                            break;
                        default:
                            returnStr += prefix + `${bytesToString(groups[i])} - New set key`;
                            break;
                    }
                }
                break;
            case KeyValueOp.delete:
                const deletePrefix = prefix + "Delete ";
                groups.shift();
                for (let i = 0; i < groups.length; i += 2) {
                    const value = groups[i + 1];
                    switch (bytesToString(groups[i])) {
                        case KeyValueChangeKey.battle:
                            // TODO do better naming
                            returnStr += deletePrefix + KeyValueChangeSet.parseToHex(KeyValueChangeKey.battle, value);
                            break;
                        case KeyValueChangeKey.BattleInfo:
                            // TODO do better naming
                            returnStr += deletePrefix + KeyValueChangeSet.parseToHex(KeyValueChangeKey.BattleInfo, value);
                            break;
                        default:
                            returnStr += prefix + `${bytesToString(groups[i])} - New delete key`;
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

    private static parseToHexGroups(type: KeyValueChangeKey, value: Buffer) {
        return type.toString() + ` - ` + splitOnMultipleOf8(value)
            .map(v => v.buffer.toString("hex"))
            .join(` - `);
    }

    private static parseSetBattlefieldStatus(value: Buffer) {
        return KeyValueChangeKey.battlefieldstatus.toString() +
            ` - ${value.readUInt8(25) == 32
                ? value.slice(26, 34).toString("hex")
                : "Unknown"}`;
    }

    private static parseSetBattleInfo(value: Buffer) {
        return KeyValueChangeKey.BattleInfo.toString() +
            ` - ${value.readUInt8() == 8
                ? value.slice(1, 10).toString("hex")
                : "Unknown"}` +
            ` - ${value.readUInt8(10) == 21
                ? value.slice(11).toString("hex")
                : "Unknown"}`;
    }

    private static parseSetBattle(value: Buffer) {
        let result = KeyValueChangeKey.battle.toString();
        const offset = (value.readUInt8(26) == 42) ? 26 : 27;
        if (value.readUInt8(offset) == 42) {
            const len = value.readUInt8(offset + 1);
            result += ` - ${bytesToString(value.slice(offset + 2, offset + 2 + len))}`;
        } else {
            result += ` - Unknown`;
        }
        result += (value.readUInt8(offset + 23) == 80)
            ? ` - ${value.slice(offset + 24, offset + 32).toString("hex")}`
            : ` - Unknown`;

        if (value.readUInt8(offset + 38) == 98) {
            const len = value.readUInt8(offset + 39);
            result += ` - ${bytesToString(value.slice(offset + 40, offset + 40 + len))}`;
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetIgnoredPlayerWithName(value: Buffer) {
        let result = KeyValueChangeKey.ignoredplayerwithname.toString();
        if (value.readUInt8(30) == 34) {
            const len = value.readUInt8(31);
            result += ` - ${bytesToString(value.slice(32, 32 + len))}`;
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetFactionResourceProduction(value: Buffer) {
        let result = KeyValueChangeKey.FactionResourceProduction.toString();
        if (value.readUInt8(44) == 58) {
            const len = value.readUInt8(45);
            result += ` - Time: ${bytesToString(value.slice(46, 46 + len))}`;
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetFactionResourceConsumption(value: Buffer) {
        let result = KeyValueChangeKey.FactionResourceConsumption.toString();
        if (value.readUInt8(42) == 50) {
            const len = value.readUInt8(43);
            result += ` - Time: ${bytesToString(value.slice(44, 44 + len))}`;
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetFriendInfo(value: Buffer) {
        let result = KeyValueChangeKey.friendinfo.toString();
        let cursor = value.readUInt8() + 2;
        if (value.readInt8(cursor) == 18) {
            const friendNameLen = value.readUInt8(++cursor);
            result += ` - ${bytesToString(value.slice(++cursor, cursor += friendNameLen))}`;
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetCommandNodeDefinition(value: Buffer) {
        let result = KeyValueChangeKey.CommandNodeDefinition.toString();
        let cursor = value.readUInt8() + 2;
        if (value.readInt8(cursor) == 18) {
            const ownerNameLen = value.readUInt8(++cursor);
            result += ` - ${bytesToString(value.slice(++cursor, cursor += ownerNameLen))}`;
            if (value.readInt8(cursor) == 26) {
                const atName = value.readUInt8(++cursor);
                result += ` - ${bytesToString(value.slice(++cursor, cursor += atName))}`;
            } else {
                result += ` - Unknown`;
            }
        } else {
            result += ` - Unknown`;
        }
        return result;
    }

    private static parseSetHostingCenterInfo(value: Buffer) {
        let result = KeyValueChangeKey.HostingCenterInfo.toString();
        let cursor = value.readUInt8() + 2;
        if (value.readInt8(cursor) == 18) {
            const ipLen = value.readUInt8(++cursor);
            result += ` - ${bytesToString(value.slice(++cursor, cursor += ipLen))}`;
            if (value.readInt8(cursor) == 26) {
                const regionNameLen = value.readUInt8(++cursor);
                result += ` - ${bytesToString(value.slice(++cursor, cursor += regionNameLen))}`;
            } else {
                result += ` - Unknown`;
            }
        } else {
            result += ` - Unknown`;
        }
        return result;
    }
}
