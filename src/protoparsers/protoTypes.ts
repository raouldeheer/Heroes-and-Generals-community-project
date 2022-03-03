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
    PlayerOfferMetrics = "PlayerOfferMetrics",
    StoreDiscount = "StoreDiscount",
    StoreCampaign = "StoreCampaign",
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
    war = "war",
    battlefieldstatus = "battlefieldstatus",
    battle_pass = "battle_pass",
    DailyBonus = "DailyBonus",
    Squad = "Squad",
    missionresource = "missionresource",
    RibbonBooster = "RibbonBooster",
    NotificationData = "NotificationData",
    Notification = "Notification",
    VehicleAmmo = "VehicleAmmo",
    VehicleUpgrade = "VehicleUpgrade",
    UniformPart = "UniformPart",
    WeaponModifier = "WeaponModifier",
    WeaponVariant = "WeaponVariant",
}

const Protos = protobuf.loadSync("./src/protos/All.proto");

export const SetProtoParsers = new Map<string, protobuf.Type>([
    [KeyValueChangeKey.HostingCenterInfo, Protos.lookupType("ServerInfo.HostingCenterInfo")],
    [KeyValueChangeKey.CommandNodeDefinition, Protos.lookupType("War.CommandNodeDefinition")],
    [KeyValueChangeKey.CommandNodeWarInstance, Protos.lookupType("War.CommandNodeWarInstance")],
    [KeyValueChangeKey.armyresource, Protos.lookupType("War.armyresource")],
    [KeyValueChangeKey.PlayerPartnerInfo, Protos.lookupType("Player.PlayerPartnerInfo")],
    [KeyValueChangeKey.player, Protos.lookupType("Player.player")],
    [KeyValueChangeKey.PlayerOfferMetrics, Protos.lookupType("Player.PlayerOfferMetrics")],
    [KeyValueChangeKey.BattleInfo, Protos.lookupType("War.BattleInfo")],
    [KeyValueChangeKey.FactionResourceProduction, Protos.lookupType("War.FactionResourceProduction")],
    [KeyValueChangeKey.FactionResourceConsumption, Protos.lookupType("War.FactionResourceConsumption")],
    [KeyValueChangeKey.MessageRecipient, Protos.lookupType("ServerInfo.MessageRecipient")],
    [KeyValueChangeKey.ignoredplayerwithname, Protos.lookupType("Player.ignoredplayerwithname")],
    [KeyValueChangeKey.ShopWarBondItemCounter, Protos.lookupType("ServerInfo.ShopWarBondItemCounter")],
    [KeyValueChangeKey.friendinfo, Protos.lookupType("Player.friendinfo")],
    [KeyValueChangeKey.StoreDiscount, Protos.lookupType("Player.StoreDiscount")],
    [KeyValueChangeKey.StoreCampaign, Protos.lookupType("Player.StoreCampaign")],
    [KeyValueChangeKey.FactionResourceQueue, Protos.lookupType("War.FactionResourceQueue")],
    [KeyValueChangeKey.supplylinestatus, Protos.lookupType("War.supplylinestatus")],
    [KeyValueChangeKey.accesspointstatus, Protos.lookupType("War.accesspointstatus")],
    [KeyValueChangeKey.transport_commandnode_segment, Protos.lookupType("War.transport_commandnode_segment")],
    // [KeyValueChangeKey.transport_commandnode_destination, Protos.lookupType("War.transport_commandnode_destination")],
    [KeyValueChangeKey.air_transport, Protos.lookupType("War.air_transport")],
    [KeyValueChangeKey.air_commandnode_base, Protos.lookupType("War.air_commandnode_base")],
    [KeyValueChangeKey.battle, Protos.lookupType("War.battle")],
    [KeyValueChangeKey.ViewHandlerPulse, Protos.lookupType("ServerInfo.ViewHandlerPulse")],
    [KeyValueChangeKey.faction, Protos.lookupType("War.faction")],
    [KeyValueChangeKey.war, Protos.lookupType("War.war")],
    [KeyValueChangeKey.battlefieldstatus, Protos.lookupType("War.battlefieldstatus")],
    [KeyValueChangeKey.battle_pass, Protos.lookupType("Player.battle_pass")],
    [KeyValueChangeKey.DailyBonus, Protos.lookupType("Player.DailyBonus")],
    [KeyValueChangeKey.Squad, Protos.lookupType("Player.Squad")],
    [KeyValueChangeKey.missionresource, Protos.lookupType("War.missionresource")],
    [KeyValueChangeKey.RibbonBooster, Protos.lookupType("Player.RibbonBooster")],
    [KeyValueChangeKey.NotificationData, Protos.lookupType("Player.NotificationData")],
    [KeyValueChangeKey.Notification, Protos.lookupType("Player.Notification")],
    [KeyValueChangeKey.VehicleAmmo, Protos.lookupType("Player.VehicleAmmo")],
    [KeyValueChangeKey.VehicleUpgrade, Protos.lookupType("Player.VehicleUpgrade")],
    [KeyValueChangeKey.UniformPart, Protos.lookupType("Player.UniformPart")],
    [KeyValueChangeKey.WeaponModifier, Protos.lookupType("Player.WeaponModifier")],
    [KeyValueChangeKey.WeaponVariant, Protos.lookupType("Player.WeaponVariant")],
]);
