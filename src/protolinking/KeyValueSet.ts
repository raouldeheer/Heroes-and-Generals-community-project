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
    accesspointtemplate = "accesspointtemplate",
    transport_commandnode_segment = "transport_commandnode_segment",
    transport_commandnode_destination = "transport_commandnode_destination",
    air_transport = "air_transport",
    air_commandnode_base = "air_commandnode_base",
    battle = "battle",
    ViewHandlerPulse = "ViewHandlerPulse",
    faction = "faction",
    war = "war",
    battlefieldstatus = "battlefieldstatus",
    battlefield = "battlefield",
    battle_pass = "battle_pass",
    DailyBonus = "DailyBonus",
    Squad = "Squad",
    missionresource = "missionresource",
    RibbonBooster = "RibbonBooster",
    NotificationData = "NotificationData",
    Notification = "Notification",
    UnlockNotification = "UnlockNotification",
    VehicleAmmo = "VehicleAmmo",
    VehicleUpgrade = "VehicleUpgrade",
    UniformPart = "UniformPart",
    WeaponModifier = "WeaponModifier",
    WeaponVariant = "WeaponVariant",
    WeaponAmmo = "WeaponAmmo",
    character = "character",
    weapon = "weapon",
    Vehicle = "Vehicle",
    SquadSession = "SquadSession",
    SquadMemberSession = "SquadMemberSession",
    PlayerMatchMaking = "PlayerMatchMaking",
    PlayerGoldOffer = "PlayerGoldOffer",
    PlayerMembershipItem = "PlayerMembershipItem",
    accesspoint = "accesspoint",
    supplyline = "supplyline",
}

const Protos = protobuf.loadSync("./src/protos/All.proto");

export const KeyProtoSet = new Map<string, protobuf.Type>([
    [KeyValueChangeKey.HostingCenterInfo, Protos.lookupType("HnG_States.HostingCenterInfo")],
    [KeyValueChangeKey.CommandNodeDefinition, Protos.lookupType("HnG_States.CommandNodeDefinition")],
    [KeyValueChangeKey.CommandNodeWarInstance, Protos.lookupType("HnG_States.CommandNodeWarInstance")],
    [KeyValueChangeKey.armyresource, Protos.lookupType("HnG_States.armyresource")],
    [KeyValueChangeKey.PlayerPartnerInfo, Protos.lookupType("HnG_States.PlayerPartnerInfo")],
    [KeyValueChangeKey.player, Protos.lookupType("HnG_States.player")],
    [KeyValueChangeKey.PlayerOfferMetrics, Protos.lookupType("HnG_States.PlayerOfferMetrics")],
    [KeyValueChangeKey.BattleInfo, Protos.lookupType("HnG_States.BattleInfo")],
    [KeyValueChangeKey.FactionResourceProduction, Protos.lookupType("HnG_States.FactionResourceProduction")],
    [KeyValueChangeKey.FactionResourceConsumption, Protos.lookupType("HnG_States.FactionResourceConsumption")],
    [KeyValueChangeKey.MessageRecipient, Protos.lookupType("HnG_States.MessageRecipient")],
    [KeyValueChangeKey.ignoredplayerwithname, Protos.lookupType("HnG_States.ignoredplayerwithname")],
    [KeyValueChangeKey.ShopWarBondItemCounter, Protos.lookupType("HnG_States.ShopWarBondItemCounter")],
    [KeyValueChangeKey.friendinfo, Protos.lookupType("HnG_States.friendinfo")],
    [KeyValueChangeKey.StoreDiscount, Protos.lookupType("HnG_States.StoreDiscount")],
    [KeyValueChangeKey.StoreCampaign, Protos.lookupType("HnG_States.StoreCampaign")],
    [KeyValueChangeKey.FactionResourceQueue, Protos.lookupType("HnG_States.FactionResourceQueue")],
    [KeyValueChangeKey.supplylinestatus, Protos.lookupType("HnG_States.supplylinestatus")],
    [KeyValueChangeKey.accesspointstatus, Protos.lookupType("HnG_States.accesspointstatus")],
    [KeyValueChangeKey.accesspointtemplate, Protos.lookupType("HnG_States.accesspointtemplate")],
    [KeyValueChangeKey.transport_commandnode_segment, Protos.lookupType("HnG_States.transport_commandnode_segment")],
    [KeyValueChangeKey.transport_commandnode_destination, Protos.lookupType("HnG_States.transport_commandnode_destination")],
    [KeyValueChangeKey.air_transport, Protos.lookupType("HnG_States.air_transport")],
    [KeyValueChangeKey.air_commandnode_base, Protos.lookupType("HnG_States.air_commandnode_base")],
    [KeyValueChangeKey.battle, Protos.lookupType("HnG_States.battle")],
    [KeyValueChangeKey.ViewHandlerPulse, Protos.lookupType("HnG_States.ViewHandlerPulse")],
    [KeyValueChangeKey.faction, Protos.lookupType("HnG_States.faction")],
    [KeyValueChangeKey.war, Protos.lookupType("HnG_States.war")],
    [KeyValueChangeKey.battlefieldstatus, Protos.lookupType("HnG_States.battlefieldstatus")],
    [KeyValueChangeKey.battlefield, Protos.lookupType("HnG_States.battlefield")],
    [KeyValueChangeKey.battle_pass, Protos.lookupType("HnG_States.battle_pass")],
    [KeyValueChangeKey.DailyBonus, Protos.lookupType("HnG_States.DailyBonus")],
    [KeyValueChangeKey.Squad, Protos.lookupType("HnG_States.Squad")],
    [KeyValueChangeKey.missionresource, Protos.lookupType("HnG_States.missionresource")],
    [KeyValueChangeKey.RibbonBooster, Protos.lookupType("HnG_States.RibbonBooster")],
    [KeyValueChangeKey.NotificationData, Protos.lookupType("HnG_States.NotificationData")],
    [KeyValueChangeKey.Notification, Protos.lookupType("HnG_States.Notification")],
    [KeyValueChangeKey.UnlockNotification, Protos.lookupType("HnG_States.UnlockNotification")],
    [KeyValueChangeKey.VehicleAmmo, Protos.lookupType("HnG_States.VehicleAmmo")],
    [KeyValueChangeKey.VehicleUpgrade, Protos.lookupType("HnG_States.VehicleUpgrade")],
    [KeyValueChangeKey.UniformPart, Protos.lookupType("HnG_States.UniformPart")],
    [KeyValueChangeKey.WeaponModifier, Protos.lookupType("HnG_States.WeaponModifier")],
    [KeyValueChangeKey.WeaponVariant, Protos.lookupType("HnG_States.WeaponVariant")],
    [KeyValueChangeKey.WeaponAmmo, Protos.lookupType("HnG_States.WeaponAmmo")],
    [KeyValueChangeKey.character, Protos.lookupType("HnG_States.character")],
    [KeyValueChangeKey.weapon, Protos.lookupType("HnG_States.weapon")],
    [KeyValueChangeKey.Vehicle, Protos.lookupType("HnG_States.Vehicle")],
    [KeyValueChangeKey.SquadSession, Protos.lookupType("HnG_States.SquadSession")],
    [KeyValueChangeKey.SquadMemberSession, Protos.lookupType("HnG_States.SquadMemberSession")],
    [KeyValueChangeKey.PlayerMatchMaking, Protos.lookupType("HnG_States.PlayerMatchMaking")],
    [KeyValueChangeKey.PlayerGoldOffer, Protos.lookupType("HnG_States.PlayerGoldOffer")],
    [KeyValueChangeKey.PlayerMembershipItem, Protos.lookupType("HnG_States.PlayerMembershipItem")],
    [KeyValueChangeKey.accesspoint, Protos.lookupType("HnG_States.accesspoint")],
    [KeyValueChangeKey.supplyline, Protos.lookupType("HnG_States.supplyline")],
]);
