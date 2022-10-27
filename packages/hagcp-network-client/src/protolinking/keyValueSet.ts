import * as interfaces from "../interfaces";
import Long from "long";

export type LongToString<T> = {
    [P in keyof T]: T[P] extends Array<infer AT>
    ? Array<LongToString<AT>>
    : T[P] extends Long ? string
    : T[P] extends (string | number | boolean) ? T[P]
    : LongToString<T[P]>
};

export type KeyValueSet = KeyValueClass[KeyValueClassKeys];
export type KeyValueDelete = {
    key: KeyValueClassKeys,
    value: string,
};

export interface IKeyValueChangeSetResult {
    set?: KeyValueSet[],
    delete?: KeyValueDelete[],
}

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
    CommandNodeSupplyQueueItem = "CommandNodeSupplyQueueItem",
    CommandNodeSupplyQueueItemTicket = "CommandNodeSupplyQueueItemTicket",
    armyresourcecategory = "armyresourcecategory",
    CommandNodeMorale = "CommandNodeMorale",
    capital = "capital",
}

export type DefaultKeyValueType<K, V> = {
    readonly key: K,
    readonly value: V,
};

export type KeyValueClassKeys = keyof KeyValueClass;
export type KeyValueClass = Readonly<{
    [KeyValueChangeKey.HostingCenterInfo]: DefaultKeyValueType<KeyValueChangeKey.HostingCenterInfo, interfaces.HostingCenterInfo>,
    [KeyValueChangeKey.CommandNodeDefinition]: DefaultKeyValueType<KeyValueChangeKey.CommandNodeDefinition, interfaces.CommandNodeDefinition>,
    [KeyValueChangeKey.CommandNodeWarInstance]: DefaultKeyValueType<KeyValueChangeKey.CommandNodeWarInstance, interfaces.CommandNodeWarInstance>,
    [KeyValueChangeKey.armyresource]: DefaultKeyValueType<KeyValueChangeKey.armyresource, interfaces.armyresource>,
    [KeyValueChangeKey.PlayerPartnerInfo]: DefaultKeyValueType<KeyValueChangeKey.PlayerPartnerInfo, interfaces.PlayerPartnerInfo>,
    [KeyValueChangeKey.player]: DefaultKeyValueType<KeyValueChangeKey.player, interfaces.player>,
    [KeyValueChangeKey.PlayerOfferMetrics]: DefaultKeyValueType<KeyValueChangeKey.PlayerOfferMetrics, interfaces.PlayerOfferMetrics>,
    [KeyValueChangeKey.StoreDiscount]: DefaultKeyValueType<KeyValueChangeKey.StoreDiscount, interfaces.StoreDiscount>,
    [KeyValueChangeKey.StoreCampaign]: DefaultKeyValueType<KeyValueChangeKey.StoreCampaign, interfaces.StoreCampaign>,
    [KeyValueChangeKey.BattleInfo]: DefaultKeyValueType<KeyValueChangeKey.BattleInfo, interfaces.BattleInfo>,
    [KeyValueChangeKey.FactionResourceProduction]: DefaultKeyValueType<KeyValueChangeKey.FactionResourceProduction, interfaces.FactionResourceProduction>,
    [KeyValueChangeKey.FactionResourceConsumption]: DefaultKeyValueType<KeyValueChangeKey.FactionResourceConsumption, interfaces.FactionResourceConsumption>,
    [KeyValueChangeKey.MessageRecipient]: DefaultKeyValueType<KeyValueChangeKey.MessageRecipient, interfaces.MessageRecipient>,
    [KeyValueChangeKey.ignoredplayerwithname]: DefaultKeyValueType<KeyValueChangeKey.ignoredplayerwithname, interfaces.ignoredplayerwithname>,
    [KeyValueChangeKey.ShopWarBondItemCounter]: DefaultKeyValueType<KeyValueChangeKey.ShopWarBondItemCounter, interfaces.ShopWarBondItemCounter>,
    [KeyValueChangeKey.friendinfo]: DefaultKeyValueType<KeyValueChangeKey.friendinfo, interfaces.friendinfo>,
    [KeyValueChangeKey.FactionResourceQueue]: DefaultKeyValueType<KeyValueChangeKey.FactionResourceQueue, interfaces.FactionResourceQueue>,
    [KeyValueChangeKey.supplylinestatus]: DefaultKeyValueType<KeyValueChangeKey.supplylinestatus, interfaces.supplylinestatus>,
    [KeyValueChangeKey.accesspointstatus]: DefaultKeyValueType<KeyValueChangeKey.accesspointstatus, interfaces.accesspointstatus>,
    [KeyValueChangeKey.accesspointtemplate]: DefaultKeyValueType<KeyValueChangeKey.accesspointtemplate, interfaces.accesspointtemplate>,
    [KeyValueChangeKey.transport_commandnode_segment]: DefaultKeyValueType<KeyValueChangeKey.transport_commandnode_segment, interfaces.transport_commandnode_segment>,
    [KeyValueChangeKey.transport_commandnode_destination]: DefaultKeyValueType<KeyValueChangeKey.transport_commandnode_destination, interfaces.transport_commandnode_destination>,
    [KeyValueChangeKey.air_transport]: DefaultKeyValueType<KeyValueChangeKey.air_transport, interfaces.air_transport>,
    [KeyValueChangeKey.air_commandnode_base]: DefaultKeyValueType<KeyValueChangeKey.air_commandnode_base, interfaces.air_commandnode_base>,
    [KeyValueChangeKey.battle]: DefaultKeyValueType<KeyValueChangeKey.battle, interfaces.battle>,
    [KeyValueChangeKey.ViewHandlerPulse]: DefaultKeyValueType<KeyValueChangeKey.ViewHandlerPulse, interfaces.ViewHandlerPulse>,
    [KeyValueChangeKey.faction]: DefaultKeyValueType<KeyValueChangeKey.faction, interfaces.faction>,
    [KeyValueChangeKey.war]: DefaultKeyValueType<KeyValueChangeKey.war, interfaces.war>,
    [KeyValueChangeKey.battlefieldstatus]: DefaultKeyValueType<KeyValueChangeKey.battlefieldstatus, interfaces.battlefieldstatus>,
    [KeyValueChangeKey.battlefield]: DefaultKeyValueType<KeyValueChangeKey.battlefield, interfaces.battlefield>,
    [KeyValueChangeKey.battle_pass]: DefaultKeyValueType<KeyValueChangeKey.battle_pass, interfaces.battle_pass>,
    [KeyValueChangeKey.DailyBonus]: DefaultKeyValueType<KeyValueChangeKey.DailyBonus, interfaces.DailyBonus>,
    [KeyValueChangeKey.Squad]: DefaultKeyValueType<KeyValueChangeKey.Squad, interfaces.Squad>,
    [KeyValueChangeKey.missionresource]: DefaultKeyValueType<KeyValueChangeKey.missionresource, interfaces.missionresource>,
    [KeyValueChangeKey.RibbonBooster]: DefaultKeyValueType<KeyValueChangeKey.RibbonBooster, interfaces.RibbonBooster>,
    [KeyValueChangeKey.NotificationData]: DefaultKeyValueType<KeyValueChangeKey.NotificationData, interfaces.NotificationData>,
    [KeyValueChangeKey.Notification]: DefaultKeyValueType<KeyValueChangeKey.Notification, interfaces.Notification>,
    [KeyValueChangeKey.UnlockNotification]: DefaultKeyValueType<KeyValueChangeKey.UnlockNotification, interfaces.UnlockNotification>,
    [KeyValueChangeKey.VehicleAmmo]: DefaultKeyValueType<KeyValueChangeKey.VehicleAmmo, interfaces.VehicleAmmo>,
    [KeyValueChangeKey.VehicleUpgrade]: DefaultKeyValueType<KeyValueChangeKey.VehicleUpgrade, interfaces.VehicleUpgrade>,
    [KeyValueChangeKey.UniformPart]: DefaultKeyValueType<KeyValueChangeKey.UniformPart, interfaces.UniformPart>,
    [KeyValueChangeKey.WeaponModifier]: DefaultKeyValueType<KeyValueChangeKey.WeaponModifier, interfaces.WeaponModifier>,
    [KeyValueChangeKey.WeaponVariant]: DefaultKeyValueType<KeyValueChangeKey.WeaponVariant, interfaces.WeaponVariant>,
    [KeyValueChangeKey.WeaponAmmo]: DefaultKeyValueType<KeyValueChangeKey.WeaponAmmo, interfaces.WeaponAmmo>,
    [KeyValueChangeKey.character]: DefaultKeyValueType<KeyValueChangeKey.character, interfaces.character>,
    [KeyValueChangeKey.weapon]: DefaultKeyValueType<KeyValueChangeKey.weapon, interfaces.weapon>,
    [KeyValueChangeKey.Vehicle]: DefaultKeyValueType<KeyValueChangeKey.Vehicle, interfaces.Vehicle>,
    [KeyValueChangeKey.SquadSession]: DefaultKeyValueType<KeyValueChangeKey.SquadSession, interfaces.SquadSession>,
    [KeyValueChangeKey.SquadMemberSession]: DefaultKeyValueType<KeyValueChangeKey.SquadMemberSession, interfaces.SquadMemberSession>,
    [KeyValueChangeKey.PlayerMatchMaking]: DefaultKeyValueType<KeyValueChangeKey.PlayerMatchMaking, interfaces.PlayerMatchMaking>,
    [KeyValueChangeKey.PlayerGoldOffer]: DefaultKeyValueType<KeyValueChangeKey.PlayerGoldOffer, interfaces.PlayerGoldOffer>,
    [KeyValueChangeKey.PlayerMembershipItem]: DefaultKeyValueType<KeyValueChangeKey.PlayerMembershipItem, interfaces.PlayerMembershipItem>,
    [KeyValueChangeKey.accesspoint]: DefaultKeyValueType<KeyValueChangeKey.accesspoint, interfaces.accesspoint>,
    [KeyValueChangeKey.supplyline]: DefaultKeyValueType<KeyValueChangeKey.supplyline, interfaces.supplyline>,
    [KeyValueChangeKey.CommandNodeSupplyQueueItem]: DefaultKeyValueType<KeyValueChangeKey.CommandNodeSupplyQueueItem, interfaces.CommandNodeSupplyQueueItem>,
    [KeyValueChangeKey.CommandNodeSupplyQueueItemTicket]: DefaultKeyValueType<KeyValueChangeKey.CommandNodeSupplyQueueItemTicket, interfaces.CommandNodeSupplyQueueItemTicket>,
    [KeyValueChangeKey.armyresourcecategory]: DefaultKeyValueType<KeyValueChangeKey.armyresourcecategory, interfaces.armyresourcecategory>,
    [KeyValueChangeKey.CommandNodeMorale]: DefaultKeyValueType<KeyValueChangeKey.CommandNodeMorale, interfaces.CommandNodeMorale>,
    [KeyValueChangeKey.capital]: DefaultKeyValueType<KeyValueChangeKey.capital, interfaces.capital>,
}>;

