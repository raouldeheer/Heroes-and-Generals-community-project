import protobuf from "protobufjs";

export const enum KeyValueOp {
    set = "set",
    delete = "delete"
}

export const enum KeyValueChangeKey {
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

const ServerInfoPackage = protobuf.loadSync("./src/protos/ServerInfo.proto");
const WarPackage = protobuf.loadSync("./src/protos/War.proto");
const PlayerPackage = protobuf.loadSync("./src/protos/Player.proto");
const MissionDetailsPackage = protobuf.loadSync("./src/protos/MissionDetails.proto");
const CommonPackage = protobuf.loadSync("./src/protos/Common.proto");

export const SetProtoParsers = new Map<string, protobuf.Type>([
    [KeyValueChangeKey.HostingCenterInfo, ServerInfoPackage.lookupType("ServerInfo.HostingCenterInfo")],
    [KeyValueChangeKey.CommandNodeDefinition, WarPackage.lookupType("War.CommandNodeDefinition")],
    [KeyValueChangeKey.CommandNodeWarInstance, WarPackage.lookupType("War.CommandNodeWarInstance")],
    [KeyValueChangeKey.armyresource, WarPackage.lookupType("War.armyresource")],
    [KeyValueChangeKey.PlayerPartnerInfo, PlayerPackage.lookupType("Player.PlayerPartnerInfo")],
    [KeyValueChangeKey.player, PlayerPackage.lookupType("Player.player")],
    [KeyValueChangeKey.BattleInfo, WarPackage.lookupType("War.BattleInfo")],
    [KeyValueChangeKey.FactionResourceProduction, WarPackage.lookupType("War.FactionResourceProduction")],
    [KeyValueChangeKey.FactionResourceConsumption, WarPackage.lookupType("War.FactionResourceConsumption")],
    [KeyValueChangeKey.MessageRecipient, ServerInfoPackage.lookupType("ServerInfo.MessageRecipient")],
    [KeyValueChangeKey.ignoredplayerwithname, PlayerPackage.lookupType("Player.ignoredplayerwithname")],
    [KeyValueChangeKey.ShopWarBondItemCounter, ServerInfoPackage.lookupType("ServerInfo.ShopWarBondItemCounter")],
    [KeyValueChangeKey.friendinfo, PlayerPackage.lookupType("Player.friendinfo")],
    [KeyValueChangeKey.FactionResourceQueue, WarPackage.lookupType("War.FactionResourceQueue")],
    [KeyValueChangeKey.supplylinestatus, WarPackage.lookupType("War.supplylinestatus")],
    [KeyValueChangeKey.accesspointstatus, WarPackage.lookupType("War.accesspointstatus")],
    // [KeyValueChangeKey.transport_commandnode_segment, WarPackage.lookupType("War.transport_commandnode_segment")],
    // [KeyValueChangeKey.transport_commandnode_destination, WarPackage.lookupType("War.transport_commandnode_destination")],
    [KeyValueChangeKey.air_transport, WarPackage.lookupType("War.air_transport")],
    [KeyValueChangeKey.air_commandnode_base, WarPackage.lookupType("War.air_commandnode_base")],
    [KeyValueChangeKey.battle, WarPackage.lookupType("War.battle")],
    [KeyValueChangeKey.ViewHandlerPulse, ServerInfoPackage.lookupType("ServerInfo.ViewHandlerPulse")],
    [KeyValueChangeKey.faction, WarPackage.lookupType("War.faction")],
    [KeyValueChangeKey.battlefieldstatus, WarPackage.lookupType("War.battlefieldstatus")],
]);
