/* eslint-disable @typescript-eslint/no-empty-interface */
import { MissionStatus, ResponseType, VirtualCurrencyType } from "../protolinking/classKeys";

export interface AbandonMissionRequest {

}

export interface AbandonMissionResponse {
    response: ResponseType;
}

export interface accesspoint {
    id: Long;
    mapid: Long;
    template: Long;
    battlefield: Long;
}

export interface AccesspointFactionInfo {
    accesspointID: Long;
    factionID: Long;
}

export interface accesspointinfo {
    accesspointowner: Long;
    accesspointid: Long;
    accesspointtemplate: number;
    accesspointbattlefieldid: Long;
}

export interface accesspointstatus {
    id: Long;
    warid: Long;
    accesspointid: Long;
    factionid: Long;
}

export interface accesspointtemplate {
    id: Long;
    gamemap: Long;
    posx: number;
    posy: number;
    abbr: string;
    actionid: number;
}

export interface AchievementTemplate {
    id: Long;
    name: string;
    available: boolean;
    allowClientCompletion: boolean;
    eType: number;
    sortingIndex: number;
    characterTemplateIdFilter: Long;
    eDriverType: number;
    driverValue: string;
    eRewardType: number;
    rewardValue: number;
    showReminderHint: boolean;
    hidden: boolean;
}

export interface ActionGameArmyResourceDefinition {
    factionTemplateId: Long;
    accesspointtemplate: Long;
    resourceCategoryId: Long;
    spawnInAir: boolean;
    count: number;
}

export interface ActionGameDedicatedResource {
    resourceCategoryId: Long;
    count: number;
}

export interface ActionGameSquadDefinition {
    missionSquadId: Long;
    squadTemplateId: Long;
    factionTemplateId: Long;
    name: string;
    playerSlots: ActionGameSquadSlotDefinition;
    supportSlots: ActionGameSquadSlotDefinition;
    resources: ActionGameDedicatedResource;
    ownerCharacterId: Long;
    squadleaderCharacterId: Long;
}

export interface ActionGameSquadSlotDefinition {
    slotTemplateId: Long;
    index: number;
}

export interface ActivateBoosterRequest {
    boosterId: Long;
}

export interface ActivateBoosterResponse {
    response: ResponseType;
}

export interface ActivateTimedTicketRequest {
    ticketTimedId: Long;
    playerId: Long;
}

export interface ActivateTimedTicketResponse {
    response: ResponseType;
}

export interface ActivateVariousBoosterRequest {
    boosterId: Long;
}

export interface ActivateVariousBoosterResponse {
    response: ResponseType;
}

export interface ActiveMissionAssaultTeam {
    assaultTeamId: Long;
    ownerPlayerId: Long;
    ownerGamertag: string;
    factionId: Long;
    commandNodeTemplateId: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
    inTransit: boolean;
    supplylineId: Long;
    fromAccessPoint: Long;
    toAccessPoint: Long;
    travelBeginTime: string;
    travelEndTime: string;
    inActiveMission: boolean;
    accesspointTemplateId: Long;
}

export interface ActiveMissionRequestEventList {
    missionId: Long;
    desiredBattlefieldStatus: Long[];
    desiredSupplyLineStatus: Long[];
}

export interface ActiveMissionRequestEventListAccessPointStatus {
    template: number;
    team: number;
}

export interface ActiveMissionRequestEventListResponse {
    msg: string;
    armyResourceList: ActionGameArmyResourceDefinition[];
    accesspointstatuslist: ActiveMissionRequestEventListAccessPointStatus[];
    serverSystemEvents: ServerSystemEvent[];
    assaultTeams: ActiveMissionAssaultTeam[];
    battlefieldStatuses: battlefieldstatus[];
    accessPointStatuses: accesspointstatus[];
    supplylineStatuses: supplylinestatus[];
}

export interface AddAssaultTeamStatisticsRequest {
    commandNodeDefinitionId: Long;
    addCombatXP: number;
}

export interface AddAssaultTeamStatisticsResponse {
    response: ResponseType;
}

export interface AddBoosterRequest {
    characterId: Long;
    isBundle: boolean;
    boosterId: Long;
    activateNow: boolean;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddBoosterResponse {
    response: ResponseType;
}

export interface AddCharacterStatisticsRequest {
    characterId: Long;
    addCharacterXP: number;
    ribbonTemplateId: Long;
    addRibbonValue: number;
    addCharacterScoreValue: number;
}

export interface AddCharacterStatisticsResponse {
    response: ResponseType;
    characterId: Long;
    characterXP: number;
    ribbonTemplateId: Long;
    ribbonValue: number;
    ribbonLevel: number;
}

export interface AddFirstGoldOfferRequest {
    dummy?: number;
}

export interface AddFirstGoldOfferResponse {
    response: ResponseType;
}

export interface AddMembershipRequest {
    membershipTemplateId: Long;
    pricingId: Long;
    discountId: Long;
    promoName?: string;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddMembershipResponse {
    response: ResponseType;
}

export interface AddPlayerReportRequest {
    reportedplayer: Long;
    category: ResponseType;
    actiongamesession?: Long;
    chatlogs?: string;
    reporter?: Long;
}

export interface AddPlayerReportResponse {
    response: ResponseType;
}

export interface AddRibbonLevelRequest {
    ribbonLevelUpgradeTemplateId: Long;
    characterId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddRibbonLevelResponse {
    result: ResponseType;
}

export interface AddTicketRequest {
    templateId: Long;
    isTimedTicket: boolean;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddTicketResponse {
    response: ResponseType;
}

export interface AddToFriendsListRequest {
    playerId: Long;
}

export interface AddToFriendsListResponse {
    response: ResponseType;
}

export interface AddVariousBoosterRequest {
    boosterTemplateId: Long;
    eBoosterType: number;
    activateNow: boolean;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddVariousBoosterResponse {
    response: ResponseType;
}

export interface AddWarBondRequest {
    warBondTemplateId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface AddWarBondResponse {
    result: ResponseType;
}

export interface add_chatchannel_request {
    createNewChannel: number;
    channelId: Long;
    channelName: string;
    channelTab: string;
}

export interface add_chatchannel_response {
    response: ResponseType;
}

export interface AdminToolAction {
    identifier: string;
    name: string;
    parameters: AdminToolActionParameter[];
}

export interface AdminToolActionParameter {
    identifier: string;
    name: string;
    value: string;
}

export interface AdminToolExecuteSqlRequest {
    query: string;
}

export interface AdminToolExecuteSqlResponse {
    result: ResponseType;
    executeResult: string;
}

export interface AdminToolGetDbInfoRequest {

}

export interface AdminToolGetDbInfoResponse {
    result: ResponseType;
    groups: DbGroup[];
    actions: AdminToolAction[];
}

export interface AdminToolModifyRibbonLevelRequest {
    characterId: Long;
    ribbonTemplateId: Long;
    deltaXP: number;
}

export interface AdminToolModifyRibbonLevelResponse {
    result: ResponseType;
}

export interface AdminToolPerformActionRequest {
    action: AdminToolAction;
}

export interface AdminToolPerformActionResponse {
    result: ResponseType;
    performActionResult: string;
}

export interface AdminToolPlayerStatRequest {
    playerId: Long;
}

export interface AdminToolPlayerStatResponse {
    result: ResponseType;
    characterStats: CharacterStatElement[];
}

export interface AdminToolQueryFastRequest {
    tableName: string;
    query: string;
    parameters: string[];
}

export interface AdminToolQueryRequest {
    tableName: string;
    querySets: QuerySet[];
}

export interface AdminToolQueryResponse {
    result: ResponseType;
    objects: DbObject[];
}

export enum AdminToolResponseCode {

}

export interface AdminToolStatQueryRequest {
    characterId: Long;
    startStatType?: number;
    endStatType?: number;
    startRibbonStatType?: number;
    endRibbonStatType?: number;
}

export interface AdminToolStatQueryResponse {
    result: ResponseType;
    characterId: Long;
    characterStats: StatElement[];
}

export interface AdminToolTestMatchmakerHostingCenter {
    id: number;
    ping: number;
}

export interface AdminToolTestMatchmakerMission {
    category: string;
    preset: string;
    hostingCenter: string;
    state: string;
    squads: AdminToolTestMatchmakerSquads[];
}

export interface AdminToolTestMatchmakerRequest {
    warId: Long;
    squads: AdminToolTestMatchmakerSquads[];
}

export interface AdminToolTestMatchmakerResponse {
    result: ResponseType;
    log: string;
    missions: AdminToolTestMatchmakerMission[];
}

export interface AdminToolTestMatchmakerSquads {
    randomId: string;
    count: number;
    faction: number;
    character: number;
    players: number;
    seconds: number;
    skill: number;
    vehicles: number[];
    hostingCenters: AdminToolTestMatchmakerHostingCenter[];
    gamemodes: number[];
    parentId: string;
}

export interface AdminToolUpdateRequest {
    tableName: string;
    objectIds: Long[];
    updates: DbUpdate[];
    updateIfModified: boolean;
    deleteObjects: boolean;
}

export interface AdminToolUpdateResponse {
    result: ResponseType;
    updateResult: ResponseType;
    createdId: Long;
}

export interface AICharacterProfile {
    id: Long;
    name: string;
    attackHuntTarget: number;
    flyByDanger: number;
    flyByDist: number;
    hitDanger: number;
    dangerDissipate: number;
    attackMoveInc: number;
}

export interface AIProfileMapping {
    id: Long;
    name: string;
    aiCharacterProfileId: Long;
    aiWeaponProfileId1: Long;
    aiWeaponProfileId2: Long;
}

export interface air_commandnode_base {
    id: Long;
    commandNodeWarInstanceId: Long;
    battlefieldid: Long;
    targetentityid: Long;
    targetentitytype: string;
    warid: Long;
}

export interface air_transport {
    id: Long;
    commandNodeWarInstanceId: Long;
    fromentityid: Long;
    fromentitytype: number;
    toentityid: Long;
    toentitytype: number;
    begintime: Long;
    endtime: Long;
    warid: Long;
}

export interface AIWeaponProfile {
    id: Long;
    name: string;
    fireInterval: number;
    fireIntervalSpread: number;
    triggerInterval: number;
    triggerIntervalSpread: number;
    aimPatternSizeMeters: number;
    aimPatternCycleTime: number;
    maxAttaxkDistance: number;
    hipFireMaxDist: number;
    ironSightMinDist: number;
    reactionTime: number;
    reactionTimeSpread: number;
    aimTrackSpeed: number;
    aimPatternMinDist: number;
    aimPatternMaxDist: number;
}

export interface ammotemplate {
    id: Long;
    type: number;
    name: string;
    speed: number;
    rangemax: number;
    propulsiontime: number;
    damage: number;
    damagefar: number;
    rangenear: number;
    rangefar: number;
    explosiondamage: number;
    explosionradius: number;
    explosiontimer: number;
    weightthreshold: number;
    proximitydist: number;
    triggerdelay: number;
    timeout: number;
    armorPenetrationAngle: number;
    armorPenetrationAngleFalloff: number;
    armorMinDamage: number;
    armorMaxDamage: number;
    armorCorrectionAngle: number;
    armorPenetrationTriggerMinThickness: number;
    armorMinPenetration: number;
    armorMaxPenetration: number;
    ricochetAngle: number;
    armorExplosionMinPenetration: number;
    armorExplosionMaxPenetration: number;
    armorPenetrationNearRange: number;
    armorPenetrationFarRange: number;
    armorPenetrationFarPercent: number;
    armorExplosionMinDamage: number;
    armorExplosionMaxDamage: number;
    maxCondition: number;
    wearPerShot: number;
    wearPerBattle: number;
    forSale: number;
    projectileType: number;
    coneModifier: number;
    recoilModifier: number;
    cartridgeTypeID: number;
    masterName: string;
    consumableEffect: number;
    deployPoolCost: number;
    armorDamageFarPercent: number;
}

export interface armyresource {
    id: Long;
    commandNodeWarInstanceId: Long;
    armyResourceCategoryId: Long;
    count: number;
    warid: Long;
}

export interface armyresourcecategory {
    id: Long;
    name: string;
    actionid: number;
    avgSize: number;
    categoryBitfieldIndex: number;
    speed: number;
    maxDedicatedResources: number;
    captureTransferMultiplierWar: number;
    captureTransferMultiplierStaged: number;
}

export interface ArmyResourceProductionTemplate {
    id: Long;
    factionTemplateId: Long;
    armyResourceCategoryId: Long;
    runEveryTimeInSeconds: Long;
    produceEveryRun: number;
    warStartValue: number;
}

export interface AssaultTeamLevel {
    id: Long;
    level: number;
    xp: number;
}

export interface battle {
    id: Long;
    warid: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
    start: string;
    factioncount: number;
    excludedFactionId: Long;
    position: number;
    activationTimeStamp: string;
}

export interface battlefield {
    id: Long;
    mapid: Long;
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: Long;
    rotation?: number;
}

export interface BattlefieldSettingsFaction {
    factionId: Long;
    factionTemplateId: Long;
    underdogBonusXpMultiplier: number;
    underdogBonusWarfundsMultiplier: number;
}

export interface battlefieldstatus {
    id: Long;
    warid: Long;
    battlefieldid: Long;
    factionid: Long;
    defencesetupid?: Long;
}

export interface BattleInfo {
    id: Long;
    posX: number;
    posY: number;
}

export interface BattlePassSeasonTemplate {
    id: Long;
    name: string;
    localizationPath: string;
    activeFrom: string;
    activeTo: string;
    isActive: boolean;
}

export interface BattlePassTemplate {
    id: Long;
    tier: number;
    level: number;
    localizationPath: string;
    image: string;
    reward: string;
    battlePassSeasonTemplateId: Long;
    requiredScore: number;
}

export interface BattleReward {
    id: Long;
    missionId: Long;
    battleId: Long;
    warId: Long;
    commandNodeWarInstanceId: Long;
    armyResourceCategoryId: Long;
    killCount: number;
}

export interface battle_pass {
    id: Long;
    tier: number;
    level: number;
    playerId: Long;
    battlePassSeasonTemplateId: Long;
    score: number;
    isPurchased: boolean;
    pendingRewardBattlePassTemplateIds: string;
    receivedRewardBattlePassTemplateIds: string;
}

export interface battle_pass_season_template {
    id: Long;
    name: string;
    localizationPath: string;
    activeFrom: string;
    activeTo: string;
    startingTier: number;
    startingLevel: number;
    startingScore: number;
}

export interface battle_pass_template {
    id: Long;
    tier: number;
    level: number;
    localizationPath: string;
    image: string;
    reward: string;
    battlePassSeasonTemplateId: Long;
    requiredScore: number;
}

export interface Booster {
    id: Long;
    playerId: Long;
    boosterTemplateId: Long;
    itemsAccumulated: number;
    expirationTime: string;
}

export interface BoosterTemplate {
    id: Long;
    type: number;
    durationInMinutes: number;
    multiplier: number;
    forSale: boolean;
    sortingIndex: number;
}

export interface BuyStoreBundleRequest {
    storeBundleId: Long;
    pricingId: Long;
    storeDiscountId: Long;
    characterId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface BuyStoreBundleResponse {
    result: ResponseType;
}

export interface CameraKickGroupTemplate {
    id: Long;
    name: string;
    easeIn: number;
    easeOut: number;
    rollX: number;
    rollY: number;
    rollZ: number;
    kickBack: number;
    precisionScale: number;
}

export interface CancelJoinMatchMakingRequest {
    characterId: Long;
}

export interface CancelJoinMatchMakingResponse {
    response: ResponseType;
}

export interface CancelJoinMissionRequest {
    DELETEME: string;
}

export interface CancelJoinMissionResponse {
    response: ResponseType;
}

export interface CanJoinMissionRequest {
    missionId: Long;
    characterId: Long;
}

export interface CanJoinMissionResponse {
    response: ResponseType;
}

export interface capital {
    id: Long;
    battlefieldId: Long;
    defaultFactionTemplateId: Long;
    victoryPoints: number;
}

export interface CapturePointConnectionTemplate {
    id: Long;
    gamemap: Long;
    capturePoint1TemplateId: Long;
    capturePoint2TemplateId: Long;
}

export interface CapturepointTemplate {
    id: Long;
    gamemap: Long;
    accesspointTemplateId: Long;
    objectiveId: Long;
    connection: string;
    posx: number;
    posy: number;
    name: string;
}

export interface ChangeCharacterTemplateRequest {
    characterId: Long;
    pricingId: Long;
    paymentCurrency: VirtualCurrencyType;
    discountId: Long;
}

export interface ChangeCharacterTemplateResponse {
    result: ResponseType;
}

export interface ChangeTierRequest {
    dummy: Long;
}

export interface ChangeTierResponse {
    result: ResponseType;
}

export interface character {
    id: Long;
    name: string;
    playerid: Long;
    charactertemplateid: Long;
    factiontemplateid: Long;
    combatbadgeslot0: Long;
    combatbadgeslot1: Long;
    rank: number;
    markedDeleted: boolean;
    firstBloodStatus: number;
    specialCharacterFlag: boolean;
    uniformVariantId: Long;
    headgearId: Long;
    previousCharacterTemplateId: Long;
    statUpdateTimeStamp?: Long;
    unlockBits: boolean[];
    headId: Long;
    eHeadSwapType: number;
    isOnLeave: boolean;
}

export interface CharacterCareerLayoutTemplate {
    id: Long;
    characterCareerTemplateId: Long;
    factionTemplateId: Long;
    level: number;
    templateType: number;
}

export interface CharacterCareerRequirementTemplate {
    id: Long;
    characterCareerTemplateId: Long;
    factionTemplateId: Long;
    level: number;
    type: number;
    typeId: Long;
    layoutIndex: number;
}

export interface CharacterCareerTemplate {
    id: Long;
    name: string;
    characterTemplateId: Long;
}

export interface CharacterNameTemplate {
    id: Long;
    firstNames: string;
    lastNames: string;
    factionTemplateId: Long;
}

export interface CharacterStatElement {
    characterId: Long;
    characterStats: StatElement[];
}

export interface charactertemplate {
    id: Long;
    name: string;
    cost: number;
    actionid: number;
    gEDefaultUniformTemplateId: Long;
    uSDefaultUniformTemplateId: Long;
    rUDefaultUniformTemplateId: Long;
    equipmentPoints: number;
    deployPoolCost: number;
    deployPoolSwitchCost: number;
    deployPoolOffClassCost: number;
}

export interface CharacterTemplateSwitchItem {
    id: Long;
    fromCharacterTemplateId: Long;
    toCharacterTemplateId: Long;
}

export interface CharacterUnlockTemplate {
    id: Long;
    characterTemplateId: Long;
    factionTemplateId: Long;
    unlockSequence: string;
}

export interface chatchannel {
    id: Long;
    channelname: string;
    displayname: string;
    hidden: string;
    passwordRequired: string;
    password: string;
    invitationOnly: string;
    owner: Long;
}

export interface chatchannelmember {
    id: Long;
    player: Long;
    channel: Long;
    channelTab: string;
}

export interface ChatChannelSubscribed {
    id: Long;
    channelName: string;
    displayName: string;
    channelTab: string;
}

export interface ClaimBattleReportVeteranBonusRequest {

}

export interface ClaimBattleReportVeteranBonusResponse {
    result: ResponseType;
}

export interface ClientBattleReport {
    missionBattleReportId: Long;
    mapEntityTypeId: Long;
    mapEntityId: Long;
    missionPresetId: Long;
    defenderFactionId: Long;
    winnerFactionId: Long;
    missionTimeInSeconds: number;
    battleStartTime: number;
    wasAutogenerated: boolean;
    factions: ClientBattleReportFaction[];
    capturepoints: ClientBattleReportCapturepointStatus[];
}

export interface ClientBattleReportAssaultTeam {
    assaultTeamName: string;
    commandNodeTemplateId: Long;
    ownerGamerTag: string;
    ownerPlayerId: Long;
}

export interface ClientBattleReportCapturepointStatus {
    capturepointTemplateId: Long;
    ownerFactionId: Long;
}

export interface ClientBattleReportCharacter {
    characterId: Long;
    startXp: number;
    endXp: number;
    xpVeteranBonus: number;
    xpBoosterBonus: number;
    xpCampaignBonus: number;
    xpUnderdogBonus: number;
    xpSquadVetBonus: number;
    xpDailyBonus: number;
    creditEarnings: ClientBattleReportEarnings;
    warfundEarnings: ClientBattleReportEarnings;
    xpStatValues: ClientBattleStatRequirement[];
    ribbons: ClientBattleReportRibbon[];
    xpAnyFactionQuickplay: number;
    xpQuickplay: number;
    xpWarBonus: number;
}

export interface ClientBattleReportEarnings {
    valueEarned: number;
    veteranBonus: number;
    boosterBonus: number;
    campaignBonus: number;
    underdogBonus: number;
    squadVetBonus: number;
    dailyBonus: number;
    statValues: ClientBattleStatRequirement[];
    anyFactionQuickplay: number;
}

export interface ClientBattleReportFaction {
    factionId: Long;
    players: ClientBattleReportPlayer[];
    assaultTeams: ClientBattleReportAssaultTeam[];
    resourcesDestroyed: ClientBattleReportResourceStats[];
    resourcesCaptured: ClientBattleReportResourceStats[];
}

export interface ClientBattleReportPlayer {
    playerId: Long;
    playerTag: string;
    veteranMember: boolean;
    playerScore: number;
    playerCaptures: number;
    playerKills: number;
    playerDeaths: number;
    squadName: string;
    characters: ClientBattleReportCharacter[];
}

export interface ClientBattleReportResourceStats {
    armyResourceCategoryId: Long;
    value: number;
}

export interface ClientBattleReportRibbon {
    ribbonTemplateId: Long;
    startValue: number;
    endValue: number;
    xpVeteranBonus: number;
    xpBoosterBonus: number;
    xpCampaignBonus: number;
    xpUnderdogBonus: number;
    xpSquadVetBonus: number;
    ribbonStatValues: ClientBattleStatRequirement[];
}

export interface ClientBattleStatRequirement {
    statRequirementId: Long;
    statValue: number;
    xpValue: number;
}

export interface ClientLogMessage {
    type: ResponseType;
    export: string;
}

export interface ClientLogMessageResponse {
    response: ResponseType;
}

export interface clothingselection {
    id: Long;
    charactertemplateid: Long;
    clothingtemplateid: Long;
}

export interface clothingtemplate {
    id: Long;
    meshname: string;
    slots: string;
    team: string;
    name: string;
}

export interface combatbadgetemplate {
    id: Long;
    combatbadgeTypeId: Long;
    name: string;
    actionid: number;
    actionEffect: number;
}

export interface combatbadgetype {
    id: Long;
    name: string;
    combatbadgeCategory: Long;
}

export interface CommandNodeDefinition {
    id: Long;
    name: string;
    abbreviation: string;
    ownerPlayerId: Long;
    factionTemplateId: Long;
    commandNodeTemplateId: Long;
    rank: number;
    supplyResourceCategoryId?: Long;
    generalCharacterId: Long;
    statUpdateTimeStamp: Long;
    suppliedOnCreation: boolean;
}

export interface CommandNodeMorale {
    id: Long;
    playerId: Long;
    commandNodeWarInstanceId: Long;
    warId: Long;
    moraleStartTimeStamp: string;
}

export interface CommandNodeMoraleTemplate {
    id: Long;
    moraleMinValue: number;
    moraleMaxValue: number;
    moraleLostPerBattle: number;
    moraleGainedPerWin: number;
    moraleGainedPerMinute: number;
    moraleSurrenderLimit: number;
}

export interface CommandNodeRetreatLocation {
    id: Long;
    commandNodeWarInstanceId: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
    warId: Long;
}

export interface CommandNodeSupplyQueueItem {
    id: Long;
    playerId: Long;
    commandNodeWarInstanceId: Long;
    armyResourceCategoryId: Long;
    warId: Long;
    factionId: Long;
    timestamp: Long;
    pricingId: Long;
    paymentCurrency: VirtualCurrencyType;
    queueNumber: number;
    nearCapitalBattlefieldId: Long;
    playerSessionId: Long;
    deviceId: string;
    metricsUid: string;
    discountId?: Long;
    commandNodeDefinitionId?: Long;
    resourcesNeeded?: number;
}

export interface CommandNodeSupplyQueueItemTicket {
    id: Long;
    playerId: Long;
    warId: Long;
    factionId: Long;
    timestamp: Long;
    queueNumber: number;
    queuePlace: number;
}

export interface commandnodetemplate {
    id: Long;
    name: string;
    factionTemplateId: Long;
    speed: number;
    attackradius: number;
    transportradius: number;
    actionid: number;
    size: number;
    level: number;
    convertTo: Long;
    parenttemplateid: Long;
    victoryWarfundBonus: number;
    participationWarfundBonus: number;
    viewRange: number;
    generalCharacterTemplateId: Long;
}

export interface commandnodetemplatearmyresourcetemplaterelation {
    id: Long;
    armyresourcecategoryid: Long;
    commandnodetemplateid: Long;
    count: number;
    hasVehicleData: boolean;
    vehicleSpawnSlots: number;
}

export interface commandnodetemplatecharactertemplaterelation {
    id: Long;
    commandnodetemplateid: Long;
    charactertemplateid: Long;
    spawnslots: number;
}

export interface CommandNodeWarInstance {
    id: Long;
    commandNodeDefinitionId: Long;
    parentCommandNodeInstanceId: Long;
    factionId: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
    warId: Long;
    morale: number;
    lastReset: Long;
    isDeployed: number;
    hasGottenSoldierResourcesForFree: boolean;
    hasGottenVehicleResourcesForFree: boolean;
    maxMorale: number;
    moraleGainModifier: number;
}

export interface CompleteAssaultTeamRankRequest {
    commandNodeDefinitionId: Long;
    pricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CompleteAssaultTeamRankResponse {
    response: ResponseType;
}

export interface consecutive_daily_login_rewards {
    id: Long;
    day: number;
    description: string;
    image: string;
    items: string;
}

export interface CreateCharacterRequest {
    characterName: string;
    characterPackId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateCharacterResponse {
    result: ResponseType;
}

export interface CreateCommandNodeRequest {
    commandnodeName: string;
    abbreviation: string;
    commandnodeTemplateId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateCommandNodeResponse {
    result: ResponseType;
}

export interface CreateCompanyRequest {
    nameLong: string;
    nameShort: string;
    description: string;
}

export interface CreateCompanyResponse {
    result: ResponseType;
}

export interface CreateInsigniaRequest {
    parts: InsigniaPart[];
    pricingIds: Long[];
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateInsigniaResponse {
    status: ResponseType;
}

export interface CreateMissionAssaultTeam {
    factionId: Long;
    commandNodeId: Long;
    commandNodeName: string;
    commandNodeTemplateId: Long;
    accessPointTemplateId: Long;
    armyResourceCategoyMask: Long;
    slots: CreateMissionAssaultTeamSlot[];
}

export interface CreateMissionAssaultTeamSlot {
    characterTemplateId: Long;
}

export interface CreateMissionRequest {
    missionpreset: Long;
    attackerFactionId: Long;
    defenderFactionId: Long;
    assaultTeams: CreateMissionAssaultTeam[];
    factionAMinCount: number;
    factionBMinCount: number;
    factionAMaxCount: number;
    factionBMaxCount: number;
}

export interface CreateMissionResponse {
    missionId: Long;
}

export interface CreateSquadRequest {
    characterId: Long;
}

export interface CreateSquadResponse {
    response: ResponseType;
}

export interface CreateUniformVariantRequest {
    characterId: Long;
    characterPackId: Long;
    characterName: string;
    characterPricingId: Long;
    uniformVariantTemplateId: Long;
    variantPricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateUniformVariantResponse {
    response: ResponseType;
}

export interface CreateVehicleAmmoRequest {
    ammoTemplateId: Long;
    vehicleId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateVehicleAmmoResponse {
    response: ResponseType;
}

export interface CreateVehicleUpgradeRequest {
    vehicleUpgradeTemplateId: Long;
    vehicleId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateVehicleUpgradeResponse {
    response: ResponseType;
}

export interface CreateVehicleVariantRequest {
    characterId: Long;
    vehicleVariantTemplateId: Long;
    vehicleVariantPricingId: Long;
    vehicleId: Long;
    extraVehicleVariantTemplateId: Long;
    extraVehicleVariantPricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateVehicleVariantResponse {
    response: ResponseType;
}

export interface CreateWeaponAmmoRequest {
    ammoTemplateId: Long;
    weaponId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateWeaponAmmoResponse {
    response: ResponseType;
}

export interface CreateWeaponModifierRequest {
    modifierTemplateId: Long;
    characterId: Long;
    weaponId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateWeaponModifierResponse {
    response: ResponseType;
}

export interface CreateWeaponVariantRequest {
    characterId: Long;
    weaponId: Long;
    weaponTemplateId: Long;
    weaponName: string;
    weaponPricingId: Long;
    weaponVariantTemplateId: Long;
    weaponDiscountId: Long;
    variantPricingId: Long;
    variantDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface CreateWeaponVariantResponse {
    response: ResponseType;
}

export interface create_chatchannel_request {
    channelName: string;
    hidden: boolean;
    passwordRequired: boolean;
    password: string;
    invitationOnly: boolean;
    channelTab: string;
}

export interface create_chatchannel_response {
    response: ResponseType;
}

export interface DailyBonus {
    id: Long;
    playerId: Long;
    characterId: Long;
    dailyBonusTemplateId: Long;
    lastReceived: string;
}

export interface DailyBonusTemplate {
    id: Long;
    characterTemplateId: Long;
    percentageCreditsBonus: number;
    percentageXpBonus: number;
}

export interface DbField {
    name: string;
    value: string;
    type: string;
}

export interface DbGroup {
    name: string;
    tables: DbTable[];
}

export interface DbObject {
    type: string;
    fields: DbField[];
}

export interface DbTable {
    name: string;
    fields: DbField[];
}

export interface DbUpdate {
    field: string;
    oldValue: string;
    newValue: string;
}

export interface DebugAddCharacterRibbonXPRequest {
    code: string;
    characterId: Long;
    ribbonXP: DebugRibbonXP[];
}

export interface DebugAddCharacterRibbonXPResponse {
    success: boolean;
}

export interface DebugEquipATRequest {
    code: string;
    characterId: Long;
    commandNodeDefinitionIds: Long[];
}

export interface DebugEquipATResponse {
    success: boolean;
}

export interface DebugGetAtsRequest {
    code: string;
}

export interface DebugGetAtsResponse {
    commandNodeDefinitions: CommandNodeDefinition[];
}

export interface DebugGetCharactersRequest {
    code: string;
}

export interface DebugGetCharactersResponse {
    characters: character[];
}

export interface DebugGetPlayerRequest {
    id: Long;
    code: string;
}

export interface DebugGetWarCatalogueRequest {
    code: string;
}

export interface DebugGetWarRequest {
    id: Long;
    code: string;
}

export interface DebugGetWarResponse {
    isActive: boolean;
}

export interface DebugPlaceATEntry {
    commandNodeDefinitionId: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
}

export interface DebugPlaceATRequest {
    code: string;
    entries: DebugPlaceATEntry[];
}

export interface DebugPlaceATResponse {
    success: boolean;
}

export interface DebugRemoveBattlesRequest {
    code: string;
    battlefieldIds: Long[];
}

export interface DebugRemoveBattlesResponse {
    success: boolean;
}

export interface DebugResupplyATRequest {
    code: string;
    commandNodeDefinitionIds: Long[];
}

export interface DebugResupplyATResponse {
    success: boolean;
}

export interface DebugRibbonXP {
    ribbonTemplateId: Long;
    ribbonXP: Long;
}

export interface DebugSetAtMoraleRequest {
    code: string;
    atIds: Long[];
}

export interface DebugSetAtMoraleResponse {
    success: boolean;
}

export interface DebugSetMapEntityOwnerEntry {
    mapEntityId: Long;
    mapEntityTypeId: Long;
    ownerFactionId: Long;
}

export interface DebugSetMapEntityOwnerRequest {
    code: string;
    entries: DebugSetMapEntityOwnerEntry[];
}

export interface DebugSetMapEntityOwnerResponse {
    success: boolean;
}

export interface DebugSetPlayerGoldRequest {
    code: string;
}

export interface DebugSetPlayerGoldResponse {
    success: boolean;
}

export interface DebugSetPlayerTierRequest {
    code: string;
    playerTier: number;
}

export interface DebugSetPlayerTierResponse {
    result: ResponseType;
}

export interface DebugStartBattlesRequest {
    code: string;
    battlefieldIds: Long[];
}

export interface DebugStartBattlesResponse {
    success: boolean;
}

export interface DebugTestStart {
    id: Long;
    code: string;
}

export interface DebugTestStartResponse {
    id: Long;
}

export interface DebugTestSubscribe {
    id: Long;
    code: string;
}

export interface DebugTestSubscribeResponse {
    id: Long;
}

export interface defencestructure {
    id: Long;
    defencesetup: Long;
    structure: string;
    transformation: string;
}

export interface DeleteCharacterRequest {
    characterId: Long;
}

export interface DeleteCharacterResponse {
    response: ResponseType;
}

export interface delete_mission {
    missionid: Long;
}

export interface delete_mission_response {
    msg: ResponseType;
}

export interface DeployCommandNodeRequest {
    commandNodeWarInstanceId: Long;
    soldierPricingId: Long;
    vehiclePricingId: Long;
    nearCapitalBattlefieldId?: Long;
    soldierDiscountId?: Long;
    vehicleDiscountId?: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface DeployCommandNodeResponse {
    msg: ResponseType;
}

export interface DeployToolRequest {
    sessionToken: string;
    initiateShutdown: boolean;
    shutdownTime: string;
    shutdownReason: string;
    downtimeEstimated: string;
}

export interface DeployToolResponse {
    success: boolean;
}

export interface DepotNewItem {
    id: Long;
    playerId: Long;
    newItem: string;
}

export interface DiscordFinalizeTransactionRequest {
    entitlementId: string;
    productAmount: number;
}

export interface DiscordFinalizeTransactionResponse {
    response: ResponseType;
    discordResponseCode: number;
}

export interface DiscordInitializeTransactionRequest {
    discordId: Long;
    goldAmount: number;
    discountPercentage: number;
}

export interface DiscordInitializeTransactionResponse {
    response: ResponseType;
}

export interface DiscordQueryEntitlementsRequest {
    claimNitroPerks: boolean;
}

export interface DiscordQueryEntitlementsResponse {
    response: ResponseType;
    discordResponseCode: number;
    nitroPerksAreReady: boolean;
}

export interface discount {
    id: Long;
    name: string;
    discountitemcategory: number;
    itemID: Long;
    value: number;
}

export interface dissolve_commandnode {
    commandNodeWarInstanceId: Long;
}

export interface dissolve_commandnode_response {
    msg: ResponseType;
}

export enum EAbiltyUnlock {

}

export enum EAchievementDriverType {

}

export enum EAchievementRewardType {

}

export enum EAchievementType {

}

export enum EAddplayerReportResponse {

}

export enum EBoosterType {

}

export enum EDiscountItemCategory {

}

export interface EditChatChannelRequest {
    channelId: Long;
    password?: string;
    isPasswordRequired?: boolean;
    newPassword?: string;
    newChannelName?: string;
    isInvitationOnly?: boolean;
    isHidden?: boolean;
}

export interface EditChatChannelResponse {
    response: ResponseType;
}

export enum EHeadSwapType {

}

export enum EItemType {

}

export interface EndMissionRequest {
    missionId: Long;
    winnerFactionTemplateId: Long;
}

export interface EndMissionResponse {
    missionId: Long;
}

export enum EPhysicsComponentType {

}

export interface EpicFinalizeTransactionRequest {
    epicUserId: string;
    accessToken: string;
    entitlementId: string;
}

export interface EpicFinalizeTransactionResponse {
    response: ResponseType;
    epicResponseCode: number;
}

export interface EpicGetAccessTokenRequest {
    exchangeToken: string;
}

export interface EpicGetAccessTokenResponse {
    response: ResponseType;
    accessToken: string;
}

export interface EpicQueryBundlesRequest {
    epicUserId: string;
    accessToken: string;
    characterId: Long;
}

export interface EpicQueryBundlesResponse {
    response: ResponseType;
    steamResponseCode: number;
    infos: VoucherPackInfo[];
    validFactionTemplateIds: string;
    validCharacterTemplateIds: string;
}

export interface EpicQueryEntitlementsRequest {
    epicUserId: string;
    accessToken: string;
    skus: EpicQueryEntitlementsSKU[];
}

export interface EpicQueryEntitlementsResponse {
    response: ResponseType;
    epicResponseCode: number;
}

export interface EpicQueryEntitlementsSKU {
    catalogOfferId: string;
    catalogItemName: string;
    currencyAmount: number;
    currencyCode: string;
}

export enum EPlayerLevelUnlockItemType {

}

export enum EPlayerReportCategory {

}

export enum EPlayerReportStatus {

}

export enum EProjectileType {

}

export enum ESquadResourceRule {

}

export enum EStatRequirementParentType {

}

export enum EStatRequirementProcessorType {

}

export enum ETicketType {

}

export enum EUniformPartType {

}

export enum EUnlockItemType {

}

export enum EUnlockType {

}

export enum EVehicleType {

}

export enum EVehicleUpgradeType {

}

export enum EVehicleWeaponPriority {

}

export enum EVehicleWeaponSlotUser {

}

export enum EWeaponGroup {

}

export interface ExperienceLevels {
    id: Long;
    rankXp: string;
    campaignWarfundsPremiumMultiplier: number;
    campaignWarfundsVictoryMultiplier: number;
    campaignWarfundsLossMultiplier: number;
    campaignWarfundsBasePriceMultiplier: number;
    campaignMissionXpMultiplier: number;
    campaignMissionRibbonXpMultiplier: number;
    squadVeteranBonusMultiplier: number;
    campaignMissionCreditMultiplier: number;
}

export interface faction {
    id: Long;
    factiontemplateid: Long;
    supremecommand: Long;
    war: Long;
    underdogBonusXpMultiplier: number;
    underdogBonusWarfundsMultiplier: number;
}

export interface FactionResourceConsumption {
    id: Long;
    factionId: Long;
    warId: Long;
    factionHQCommandNodeWarInstanceId: Long;
    armyResourceCategoryId: Long;
    previousConsumptionTimeStamp: string;
    previousConsumptionValue: number;
    supplyQueueHead: number;
    supplyQueueTail: number;
}

export interface FactionResourceProduction {
    id: Long;
    factionId: Long;
    warId: Long;
    factionHQCommandNodeWarInstanceId: Long;
    armyResourceCategoryId: Long;
    armyResourceProductionTemplateId: Long;
    nextRunTimeStamp: string;
    nextProductionValue: number;
    warStartValue: number;
}

export interface FactionResourceQueue {
    id: Long;
    factionId: Long;
    warId: Long;
    supplyQueueHead: number;
    supplyQueueTail: number;
}

export interface factiontemplate {
    id: Long;
    name: string;
    abbreviation: string;
}

export interface FactionWinningWarStreak {
    id: Long;
    factionTemplateId: Long;
    winningStreak: number;
    aTDeployCostPercentageIncrease: number;
}

export interface friendinfo {
    id: Long;
    gamertag: string;
    onlinestatus: number;
    factionTemplateId: Long;
    factionId: Long;
    missionId: Long;
    missionFactionId: Long;
    warId: Long;
    warName: string;
    otherPlayerAlsoFriend: boolean;
    friendshipInitiatedByMe: boolean;
    squadSessionId: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
}

export interface gamemap {
    id: Long;
    gamemapname: string;
    identifier: string;
    scenefile: string;
    terrainsize: number;
    windId: string;
    terrainType: number;
    mapNumber: number;
    usePbr: boolean;
}

export interface GetAssaultTeamStatsRecord {
    result: ResponseType;
    rank: number;
    xp: number;
    nextLevelUpXp: number;
    battles: number;
    battlesWon: number;
    commandNodeDefinitionId: Long;
}

export interface GetAssaultTeamStatsRequest {
    commandNodeDefinitionIds: Long[];
}

export interface GetAssaultTeamStatsResponse {
    records: GetAssaultTeamStatsRecord[];
}

export interface GetBattlePassSeasonRequest {

}

export interface GetBattlePassSeasonResponse {
    response: ResponseType;
    activeBattlePassTemplates: BattlePassTemplate[];
    battlePassSeasonTemplates: BattlePassSeasonTemplate[];
}

export interface GetBattleReportRequest {
    missionBattleReportIds: Long[];
}

export interface GetBattleReportResponse {
    result: ResponseType;
    battleReports: ClientBattleReport[];
}

export interface GetChatChannelsSubscribedRequest {
    dummy?: number;
}

export interface GetChatChannelsSubscribedResponse {
    channelsSubscribed: ChatChannelSubscribed[];
}

export interface GetGoldPricesRequest {
    currencyWanted: string;
}

export interface GetGoldPricesResponse {
    prices: Price[];
    currencyCode: string;
    response: ResponseType;
}

export interface GetMailMessagesRequest {
    messageIds: Long[];
}

export interface GetMailMessagesResponse {
    messageThreads: MessageThread[];
}

export interface GetMissionDetailsRequest {
    missionId: Long;
    battleId: Long;
}

export interface GetMissionDetailsResponse {
    response: ResponseType;
    info?: MissionInfo;
    factions: MissionDetailsFaction[];
    assaultTeams: MissionDetailsAssaultTeam[];
    armyResources: MissionDetailsArmyResource[];
    accessPoints: MissionDetailsAccessPoint[];
    capturepointStatuses: MissionDetailsCapturepointStatus[];
    posX?: number;
    posY?: number;
}

export interface GetMissionListRequest {
    characterId: Long;
}

export interface GetMissionListResponse {
    entries: MissionListEntry[];
}

export interface GreenlightMissionRequest {
    greenlight: number;
}

export interface GreenlightMissionResponse {
    response: ResponseType;
}

export interface HostingCenterInfo {
    id: Long;
    pingServiceConnect: string;
    hostingCenterName: string;
}

export interface HostingCenterPing {
    hostingCenterId: Long;
    ping: number;
}

export interface HypeFinalizeTransactionRequest {
    providerTransactionId: string;
    gamerTag: string;
    productType: string;
    productAmount: number;
    currencyType: string;
    currencyAmount: number;
}

export interface HypeFinalizeTransactionResponse {
    response: string;
    transactionId: string;
    responseCode: number;
}

export interface HypeReverseTransactionRequest {
    providerTransactionId: string;
    reason: string;
}

export interface HypeReverseTransactionResponse {
    response: string;
    responseCode: number;
}

export interface ignoredplayer {
    id: Long;
    ignorerid: Long;
    ignoredid: Long;
}

export interface ignoredplayerwithname {
    id: Long;
    ignorerid: Long;
    ignoredid: Long;
    ignoredname: string;
}

export enum IgnorePlayerAction {

}

export interface IgnorePlayerChangeRequest {
    ignoredPlayerGamerTag: string;
    ignoreAction: ResponseType;
}

export interface IgnorePlayerChangeResponse {
    response: ResponseType;
}

export enum IgnorePlayerChangeResponseCode {

}

export interface InsigniaPart {
    partType: string;
    partId: Long;
    fieldId: string;
    scale: number;
    offset: number;
}

export interface InviteToCompanyRequest {
    playerToInvite: Long;
}

export interface InviteToCompanyResponse {
    result: ResponseType;
}

export enum ItemType {

}

export interface JoinFactionBonusOfferRequest {
    warId: Long;
}

export interface JoinFactionBonusOfferResponse {
    result: ResponseType;
    bonusOfferId: Long;
    bonusFactionIds: Long[];
}

export interface JoinMatchmakingGameMode {
    id: Long;
    playerId: Long;
    isQuickplay: boolean;
    isQuickplaySelectedFaction: boolean;
}

export interface JoinMatchMakingRequest {
    characterId: Long;
    missionId: Long;
    hostingCenters: HostingCenterPing[];
    warMissionFlag: boolean;
    stagedMissionPresetList: Long[];
    squadVehicleFilterArmyResourceTemplateIds: Long[];
    gamemodeId: Long;
    quickplay: boolean;
}

export interface JoinMatchMakingResponse {
    response: ResponseType;
}

export interface JoinMissionRequest {
    missionId: Long;
    characterId: Long;
    hostingCenterIds: Long[];
}

export interface JoinMissionResponse {
    response: ResponseType;
    missionId: Long;
    missionSessionId: Long;
    gameConnect: string;
}

export interface join_war_request {
    warid: Long;
    factionid: Long;
    playedFirstBlood: number;
}

export interface join_war_response {
    msg: ResponseType;
    redirectSrv?: string;
}

export interface keyValue {
    key?: string;
    value?: string;
}

export interface KickFromCompanyRequest {
    playerToKick: Long;
}

export interface KickFromCompanyResponse {
    result: ResponseType;
}

export interface LeaveCompanyRequest {

}

export interface LeaveCompanyResponse {
    result: ResponseType;
}

export interface LeaveSupplyQueueRequest {
    commandNodeWarInstanceId: Long;
}

export interface LeaveSupplyQueueResponse {
    response: ResponseType;
}

export interface LinkedLoginSelectAccountNameRequest {
    accountName: string;
    tempSessionid: string;
    wantsMarketingMails: boolean;
    email: string;
    checkIfUsernameExists: boolean;
    promoCode?: string;
}

export interface LinkedLoginSelectAccountNameResponse {
    responseCode: ResponseType;
}

export interface linked_login_begin {
    deviceid: string;
    partner: ResponseType;
    partnerPlayerId: string;
    additionalArgs: keyValue[];
    accceptedPrivacyPolicy: boolean;
}

export interface login2_begin {
    username: string;
    deviceid?: string;
    acceptingPrivacyPolicy: boolean;
    acceptingBattlEyePolicy: boolean;
}

export interface login2_challenge {
    salt: string;
    tempSessionid: string;
    encryptedSessionkey: string;
    gamertag?: string;
    redirectSrv?: string;
    responseCode: ResponseType;
    countryCode?: string;
}

export interface login2_player_updated {
    metricsUid: string;
}

export interface login2_player_updated_response {
    msg: string;
}

export interface login2_postlogin {
    tempSessionid: string;
    partnerId: ResponseType;
    additionalArgs: keyValue[];
}

export interface login2_postlogin_result {
    sessionid: Long;
    platform: string;
    deleteDate?: string;
    result: ResponseType;
}

export interface login2_response {
    tempSessionid: string;
    digest: string;
}

export interface login2_result {
    username: string;
    time: string;
    response: ResponseType;
    banExpires?: string;
    banReason?: string;
    currentplayer?: player;
}

export interface login2_service_login {
    sessionid: string;
    servicename: string;
    digest: string;
}

export interface login2_service_login_result {
    result: string;
    username: string;
    playerid: Long;
    factionTemplate: Long;
    metricsUid: string;
    offerGoldAdded: number;
}

export interface LoginQueueUpdate {
    positionInQueue: number;
    mayProceed: boolean;
    originalId: number;
    result: ResponseType;
}

export enum logMessagetype {

}

export interface logout {
    dummy?: number;
}

export interface logoutresponse {
    msg: ResponseType;
}

export interface MailMessage {
    id: Long;
    threadMessageId: Long;
    replyToMessageId: Long;
    fromPlayerId: Long;
    subject: string;
    text: string;
    timestamp: string;
    expiration: string;
}

export interface MailRUFinalizeTransactionRequest {
    transactionId: string;
    providerTransactionId: string;
}

export interface MailRUFinalizeTransactionResponse {
    response: string;
}

export interface MailRUInitializeTransactionRequest {
    mailRUId: Long;
    goldAmount: number;
    currencyType: string;
    discountPercentage: number;
}

export interface MailRUInitializeTransactionResponse {
    response: ResponseType;
    mailRUResponseCode: number;
    mailRUErrorMessage: string;
    url: string;
}

export interface MatchmakerWaitingTimeInfo {
    id: Long;
    warId: Long;
    hostingCenterId: Long;
    factionTemplateId: Long;
    characterTemplateId: Long;
    averageWaitingTimeSeconds: number;
    peakWaitingTimeSeconds: number;
    playerTier: number;
    missionTypeMask: number;
    squadResourceTemplateId: Long;
    missionPresetId: Long;
}

export interface MembershipBenefitTemplate {
    id: Long;
    creditMultiplier: number;
    warfundMultiplier: number;
    xpMultiplier: number;
    ribbonxpMultiplier: number;
    unlockSecondCombatBadgeSlot: boolean;
    unlockFourthEquipmentSlot: boolean;
    squadXPMultiplier: number;
}

export interface memorytestrequest {
    Bytes: Buffer;
}

export interface memorytestresponse {
    Bytes: Buffer;
}

export interface MessageRecipient {
    id: Long;
    playerId: Long;
    messageId: Long;
    isRead: boolean;
    isDeleted: boolean;
}

export interface MessageThread {
    threadId: Long;
    messages: MailMessage[];
    recipients: MessageThreadRecipient[];
}

export interface MessageThreadRecipient {
    playerId: Long;
    gamertag: string;
}

export interface MissionBattleReportAssaultTeam {
    assaultTeamName: string;
    assaultTeamId: Long;
    commandNodeTemplateId: Long;
    ownerGamerTag: string;
    ownerPlayerId: Long;
}

export interface MissionBattleReportCapturepointStatus {
    capturepointTemplateId: Long;
    ownerFactionId: Long;
}

export interface MissionBattleReportResourcesCaptured {
    armyResourceCategoryId: Long;
    value: number;
}

export interface MissionBattleReportResourcesLost {
    armyResourceCategoryId: Long;
    value: number;
}

export interface MissionCategory {
    id: Long;
    name: string;
    botControlledFaction: boolean;
    characterTemplateIdsList: string;
}

export interface MissionDetailsAccessPoint {
    accessPointTemplateId: Long;
    factionTemplateId: Long;
}

export interface MissionDetailsArmyResource {
    factionId: Long;
    armyResourceCategoryId: Long;
    accessPointTemplateId: Long;
    count: number;
    spawnInAir: boolean;
}

export interface MissionDetailsAssaultTeam {
    factionId: Long;
    commandNodeTemplateId: Long;
    accessPointTemplateId: Long;
    ownerPlayerId: Long;
}

export interface MissionDetailsCapturepointStatus {
    capturepointTemplateId: Long;
    ownerFactionId: Long;
}

export interface MissionDetailsFaction {
    factionId: Long;
    players: MissionDetailsPlayer[];
}

export interface MissionDetailsPlayer {
    gamerTag: string;
}

export interface MissionInfo {
    missionId: Long;
    battleId: Long;
    missionpreset: Long;
    mapEntityId: Long;
    mapEntityTypeId: Long;
    isAutogenerated: number;
    defenderFactionId: Long;
    status: MissionStatus;
    hostingCenterId: Long;
    activationTimeStamp: string;
    weatherTimeOfDay: number;
    weatherCondition: number;
}

export interface MissionListEntry {
    info: MissionInfo;
    factions: MissionListFaction[];
}

export interface MissionListFaction {
    factionId: Long;
    playerCount: number;
}

export interface missionpreset {
    id: Long;
    available: number;
    gamemap: Long;
    missiontype: Long;
    missioninfo: string;
    timelimit: number;
    aiSaBotCountPerFaction: number;
    aiGcCharacterProfile: Long;
    aiSaCharacterProfile: Long;
    objectiveHoldTime: number;
    maxPlayerCount: number;
    missionCategoryId: Long;
    minPlayerLevel: number;
    maxPlayerLevel: number;
    maxCharactersPerPlayer: number;
}

export interface missionresource {
    id: Long;
    missionid: Long;
    warid: Long;
    factionId: Long;
    commandNodeWarInstanceId: Long;
    commandNodeTemplateId: Long;
    accesspointTemplateId: Long;
    locked: number;
    allowedToLobby: boolean;
    spawnInAir: boolean;
}

export enum MissionSquadState {

}

export interface missiontype {
    id: Long;
    title: string;
    rules: string;
    capturepointCaptureTime: number;
    capturepointNeutralizeTime: number;
    objectiveCaptureTime: number;
    objectiveNeutralizeTime: number;
    accessPointCaptureTime: number;
    accessPointNeutralizeTime: number;
}

export interface ModifySquadRequest {
    squadSessionId: Long;
    removeSquadSupportSlot?: number;
    addSquadSupportSlotTemplateId?: Long;
}

export interface ModifySquadResponse {
    response: ResponseType;
}

export interface MonitorActionServer {
    serverId: string;
    factions: MonitorActionServerFaction[];
}

export interface MonitorActionServerFaction {
    factionTemplateId: number;
    players: number;
}

export interface MonitorAutoGeneratedMissions {
    openTrainingMissions: number;
    runningTrainingMissions: number;
    openCaptureHoldInfantryMissions: number;
    runningCaptureHoldInfantryMissions: number;
    openCaptureHoldTanksMissions: number;
    runningCaptureHoldTanksMissions: number;
    openCaptureHoldCombinedMissions: number;
    runningCaptureHoldCombinedMissions: number;
    openAssaultSmallMissions: number;
    runningAssaultSmallMissions: number;
    openAssaultMissions: number;
    runningAssaultMissions: number;
}

export interface MonitorConcurrentPlayers {
    sessions: number;
    actionSessions: number;
}

export interface MonitorCurrency {
    avgGoldAvailable: Long;
    avgCreditsAvailable: Long;
    avgWarfundsAvailable: Long;
    medianGoldAvailable: Long;
    medianCreditsAvailable: Long;
    medianWarfundsAvailable: Long;
}

export interface MonitorHostingCenter {
    name: string;
    free: number;
    busy: number;
    reserved: number;
    runningServers: MonitorActionServer[];
}

export interface MonitorLoadRequest {
    requestType: number;
}

export interface MonitorLoadResponse {
    wars: MonitorWar[];
    hostingCenters: MonitorHostingCenter[];
    playersInQueue: number;
    concurrentPlayers: MonitorConcurrentPlayers;
    currency: MonitorCurrency;
    waitingTimes: MonitorWaitingTime[];
    autoGeneratedMissions: MonitorAutoGeneratedMissions;
}

export interface MonitorResource {
    factionTemplateId: Long;
    armyResourceCategoryId: Long;
    count: Long;
    hq: boolean;
}

export interface MonitorWaitingTime {
    characterTemplateId: Long;
    factionTemplateId: Long;
    commandTemplateId: Long;
    missionTypeMask: number;
    missionPresetId: Long;
    playerTier: number;
    averageWaitingTime: number;
    peakWaitingTime: number;
    hostingCenterId: Long;
    onlyWarMissions: boolean;
    count: number;
    hostingCenterName: string;
}

export interface MonitorWar {
    name: string;
    factions: MonitorWarFaction[];
    resources: MonitorResource[];
    totalSkirmishMissions: number;
    activeSkirmishMissions: number;
    totalAssaulthMissions: number;
    activeAssaultMissions: number;
}

export interface MonitorWarFaction {
    factionTemplateId: Long;
    playersOnline: number;
}

export interface Notification {
    id: Long;
    playerId: Long;
    type: number;
    typeId: Long;
    readStatus: number;
    timestamp: string;
    expires: string;
}

export interface NotificationData {
    id: Long;
    notificationId: Long;
    key: string;
    value: Long;
}

export enum NotificationReadStatus {

}

export enum NotificationResponseCode {

}

export enum NotificationType {

}

export enum Notification_CurrencyReceivedReason {

}

export interface physicsComponent {
    id: Long;
    name: string;
    componentType: number;
    armorHP: number;
    internalHP: number;
    canPenetrate: boolean;
    secondaryCollision: boolean;
    secondaryCollisionSkip: boolean;
    minArmorPercent: number;
    totalDamageMultiplier: number;
    transferToSecondary: boolean;
}

export interface player {
    id: Long;
    gamertag: string;
    invertmouse: number;
    invertmouseairplane: number;
    mousesensitivity: number;
    administrator: string;
    mousecontrolledcars: number;
    showcrosshair: number;
    showcrosshairVehicles: number;
    war: Long;
    factionid: Long;
    subscribedupto: string;
    goldBought: Long;
    goldEarned: Long;
    goldUsed: Long;
    creditsBought: Long;
    creditsEarned: Long;
    creditsUsed: Long;
    firstActionGameDate: string;
    numloginsFlash: number;
    numloginsMobile: number;
    language: string;
    warfundsBought: Long;
    warfundsEarned: Long;
    warfundsUsed: Long;
    metricsUid?: string;
    yellowGriefPoints: number;
    redGriefPoints: number;
    latestRedGriefPointTimestamp: string;
    tier: number;
    lastLogin: string;
    tutorialsCompleted: number;
    goldBoughtSteam: Long;
    skillLevel: number;
    invertmouseturret: number;
    totalScore: Long;
    unlockBits: boolean[];
    level: number;
    achievementsBits: boolean[];
    isDeleted: boolean;
    currencyCode: string;
    currencyRegion: string;
}

export enum PlayerActionType {

}

export interface PlayerBattleReport {
    id: Long;
    missionBattleReportId: Long;
    missionBattleReportFactionId: Long;
    playerId: Long;
    playerGamerTag: string;
    veteranMember: boolean;
    playerScore: number;
    playerCaptures: number;
    playerKills: number;
    playerDeaths: number;
    squadName: string;
    characters: PlayerBattleReportCharacter[];
}

export interface PlayerBattleReportCharacter {
    characterId: Long;
    startXp: number;
    endXp: number;
    xpVeteranBonus: number;
    xpBoosterBonus: number;
    xpCampaignBonus: number;
    xpUnderdogBonus: number;
    xpSquadVetBonus: number;
    xpDailyBonus: number;
    creditEarnings: PlayerBattleReportEarnings;
    warfundEarnings: PlayerBattleReportEarnings;
    xpStatValues: PlayerBattleReportStatRequirement[];
    ribbons: PlayerBattleReportRibbon[];
    xpAnyFactionQuickplay: number;
    xpQuickplay: number;
    xpWarBonus: number;
}

export interface PlayerBattleReportEarnings {
    valueEarned: number;
    veteranBonus: number;
    boosterBonus: number;
    campaignBonus: number;
    underdogBonus: number;
    squadVetBonus: number;
    dailyBonus: number;
    statValues: PlayerBattleReportStatRequirement[];
    anyFactionQuickplay: number;
}

export interface PlayerBattleReportRibbon {
    ribbonTemplateId: Long;
    startValue: number;
    endValue: number;
    xpVeteranBonus: number;
    xpBoosterBonus: number;
    xpCampaignBonus: number;
    xpUnderdogBonus: number;
    xpSquadVetBonus: number;
    ribbonStatValues: PlayerBattleReportStatRequirement[];
}

export interface PlayerBattleReportStatRequirement {
    statRequirementId: Long;
    statValue: number;
    xpValue: number;
}

export interface PlayerDiscountVoucher {
    id: Long;
    expiredDatetime: string;
    playerId: Long;
    storeDiscountId?: Long;
    storeCampaignId?: Long;
}

export interface PlayerGoldOffer {
    id: Long;
    playerId: Long;
    goldAdded: number;
    expireDate: string;
}

export interface PlayerLevel {
    id: Long;
    value: number;
}

export interface PlayerLevelUnlock {
    id: Long;
    unlockMetaLevel: number;
    unlockItemType: number;
    unlockItemId: Long;
    available: boolean;
    unlockable: boolean;
}

export interface PlayerMatchMaking {
    id: Long;
    squadSessionId: Long;
    hostingCenterPings: HostingCenterPing[];
    timeEntered: string;
    metricsUserId: string;
    metricsSessionId: Long;
    metricsDeviceId: string;
    missionId: Long;
    missionPresetId: Long[];
    isMatchmaking: boolean;
    warId: Long;
    factionId: Long;
    missionTypeMask: number;
    forceStart: boolean;
    tier: number;
    skillLevel: number;
    playerVsBots: boolean;
    playersInQueueLocal: number;
    playersInQueueTotal: number;
    playersInGameLocal: number;
    playersInGameTotal: number;
    missionsMatchingPopulating: number;
    missionsMatchingRunning: number;
    quickplayInfo: QuickplayMatchmakingInfo[];
    missionCategoryId: Long;
}

export interface PlayerMatchMakingInfo {
    id: Long;
    warId: Long;
    hostingCenterId: Long;
    factionId: Long;
    characterTemplateId: Long;
    averageWaitingTimeSeconds: number;
    peakWaitingTimeSeconds: number;
    playerTier: number;
    missionTypeMask: number;
    armyResourceCategoryMask: Long;
    missionPresetId: Long;
}

export interface PlayerMembershipItem {
    id: Long;
    playerId: Long;
    shopMembershipItemsId: Long;
    acquisitionDate: string;
    expireDate: string;
    timeLeft: string;
    onPause: boolean;
}

export enum PlayerMissionConnectionState {

}

export interface PlayerMissionSession {
    id: Long;
    playerId: Long;
    playerGamerTag: string;
    characterId: Long;
    characterFactionId: Long;
    characterName: string;
    characterRank: number;
    missionId: Long;
    missionSessionId: Long;
    missionAssaultTeamId: Long;
    missionAssaultTeamSlot: number;
    timeAdmitted: string;
    connectionState: ResponseType;
    warId: Long;
    characterSpawned: number;
    metricsUserId: string;
    metricsSessionId: Long;
    metricsDeviceId: string;
    gameConnect: string;
    platform: string;
}

export interface PlayerOfferMetrics {
    id: Long;
    playerId: Long;
    matchesPlayed: number;
    goldOffersCount: number;
    dailyRewardCount: number;
    dailyRewardRedeemedCount: number;
    unredeemedConsecutiveDayRewards: string;
    consecutiveDayCount: number;
    lastFirstBattleDate: string;
    lastUpdatedConsecutiveDayCountDate?: string;
}

export enum PlayerPartnerId {

}

export interface PlayerPartnerInfo {
    id: Long;
    playerId: Long;
    partnerId: number;
    partnerUserId: string;
}

export interface PlayerReferral {
    id: Long;
    playerId: Long;
    referredByPlayerId: Long;
}

export interface PlayerReport {
    id: Long;
    status: ResponseType;
    timestamp: string;
    reporter: Long;
    reportedplayer: Long;
    category: ResponseType;
    actiongamesession?: Long;
    chatlogs?: string;
}

export interface playerresponse {
    msg: ResponseType;
}

export interface PlayerSkill {
    id: Long;
    playerId: Long;
    rating: number;
    deviation: number;
    volatility: number;
    matchesPlayed: number;
    matchesCounted: number;
}

export interface PlayerVerificationStatusRequest {
    dummy?: number;
}

export interface PlayerVerificationStatusResponse {
    msg: ResponseType;
}

export interface PlayerWarBonus {
    id: Long;
    playerId: Long;
    validWarId: Long;
    soldierXPPercent: number;
    aTXPPercent: number;
    previousFactionId: Long;
    pendingWarfund: number;
    pendingWarfundWarIds: string;
}

export interface Price {
    coins: number;
    isStarterPackItem: boolean;
    price: number;
    discountPercentage: number;
    discountStart: string;
    discountEnd: string;
    addedCoinsDiscount: number;
    addedValue: number;
    addedCoinsOffer: number;
}

export interface Pricing {
    id: Long;
    type: string;
    objectId: Long;
    costGold: number;
    costWarfunds: number;
    costCredits: number;
    relativeGoldValue: number;
}

export interface progressionUnlock {
    id: Long;
    unlockType: number;
    factionTemplateId: Long;
    characterType: number;
    unlockMetaName: string;
    unlockMetaLevel: number;
    unlockItemType: number;
    unlockItemId: Long;
    includeItemAsGift: boolean;
    available: boolean;
    unlockable: boolean;
}

export interface ProtobufChecksum32Request {
    types: string[];
    debug?: boolean;
}

export interface ProtobufChecksum32Response {
    responseCode: ResponseType;
    checksum: number;
    debugInfo: string[];
}

export enum ProtobufChecksumResponseCode {

}

export interface PurchaseBattlePassSeasonRequest {
    battlePassSeasonTemplateId: Long;
    playerId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface PurchaseBattlePassSeasonResponse {
    response: ResponseType;
    rewardedBattlePassTemplates: BattlePassTemplate[];
}

export interface PurchaseBattlePassTierRequest {
    battlePassTemplateId: Long;
    playerId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface PurchaseBattlePassTierResponse {
    response: ResponseType;
    rewardedBattlePassTemplates: BattlePassTemplate[];
}

export interface PurchaseUniformPartRequest {
    characterId: Long;
    uniformPartType: number;
    uniformPartTemplateId: Long;
    uniformPartPricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface PurchaseUniformPartResponse {
    response: ResponseType;
}

export interface QueryActiveSurveyRequest {

}

export interface QueryActiveSurveyResponse {
    queryURL: string;
    imageURL: string;
}

export interface QueryBannedMachineRequest {
    machineIdentifier: string;
    machineIdentifierOld: string;
}

export interface QueryBannedMachineResponse {
    isBanned: boolean;
    banReason: string;
}

export interface QueryFactionsOnBattlefieldRequest {
    battlefieldID: Long;
}

export interface QueryFactionsOnBattlefieldResponse {
    response: ResponseType;
    accesspointList: AccesspointFactionInfo[];
}

export interface QueryGamertagRequest {
    playerId: Long;
}

export interface QueryGamertagResponse {
    gamertag: string;
}

export interface QueryServerInfo {
    dummy?: number;
}

export interface QueryServerInfoResponse {
    servertime: string;
    playersInWar: number;
    onlineplayers: number;
    version: string;
    metricsUrl?: string;
    redShiftUrl?: string;
    engageUrl?: string;
}

export interface QuerySet {
    field: string;
    filter: ResponseType;
    value: string;
}

export interface QueryShopWarBondItemsRequest {
    dummy?: number;
}

export interface QueryShopWarBondItemsResponse {
    warBonds: ShopWarBondItem[];
}

export interface QueryVoucherPacksRequest {
    characterId: Long;
}

export interface QueryVoucherPacksResponse {
    response: ResponseType;
    infos: VoucherPackInfo[];
    validFactionTemplateIds?: string;
    validCharacterTemplateIds?: string;
}

export interface query_commandnode_owner {
    commandNodeWarInstanceId: Long;
}

export interface query_commandnode_owner_response {
    name: string;
}

export interface query_war_catalogue_request {
    includeWarId?: Long;
}

export interface query_war_catalogue_response {
    warcataloguedata: war_catalogue[];
    bonusId: Long;
}

export interface QuickplayMatchmakingInfo {
    factionTemplateId: Long;
    characterTemplateId: Long;
    missionPresetId: Long[];
    equippedVehicleArmyResourceCategoryIds: Long[];
    war: boolean;
}

export interface ReceiveBattlePassRewardRequest {
    battlePassSeasonTemplateId: Long;
}

export interface ReceiveBattlePassRewardResponse {
    response: ResponseType;
    rewardedBattlePassTemplates: BattlePassTemplate[];
}

export interface RedeemDailyLoginRewardRequest {
    playerId: Long;
}

export interface RedeemDailyLoginRewardResponse {
    response: ResponseType;
    infos: VoucherPackInfo[];
}

export interface RedeemVoucherRequest {
    voucherKey: string;
}

export interface RedeemVoucherResponse {
    result: ResponseType;
}

export interface RemoveFromFriendsListRequest {
    playerId: Long;
    addToIgnoreList?: boolean;
}

export interface RemoveFromFriendsListResponse {
    response: ResponseType;
}

export interface RemoveInsigniaRequest {
    insigniaId: Long;
}

export interface RemoveInsigniaResponse {
    status: ResponseType;
}

export interface RemoveSquadMemberRequest {
    squadMemberSessionId: Long;
}

export interface RemoveSquadMemberResponse {
    response: ResponseType;
}

export interface RemoveSquadRequest {
    dummy?: number;
}

export interface RemoveSquadResponse {
    response: ResponseType;
}

export interface remove_chatchannel_request {
    channelId: Long;
}

export interface remove_chatchannel_response {
    response: ResponseType;
}

export interface remove_equipmentselection {
    equipmentid: Long;
    itemType: ResponseType;
}

export interface remove_equipmentselection_response {
    msg: ResponseType;
}

export interface RenameCharacterRequest {
    characterId: Long;
    newName: string;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RenameCharacterResponse {
    result: ResponseType;
}

export interface RenameCommandnodeRequest {
    commandNodeWarInstanceId: Long;
    newName: string;
    newAbbreviation: string;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RenameCommandnodeResponse {
    result: ResponseType;
}

export interface RenameWeaponRequest {
    weaponId: Long;
    newName: string;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RenameWeaponResponse {
    result: ResponseType;
}

export interface ReorderSupplyQueueRequest {
    commandNodeWarInstanceId: Long;
    direction: number;
}

export interface ReorderSupplyQueueResponse {
    response: ResponseType;
}

export interface RepairVehicleAmmoRequest {
    vehicleAmmoId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairVehicleAmmoResponse {
    response: ResponseType;
}

export interface RepairVehicleRequest {
    vehicleId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    overrideCondition: number;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairVehicleResponse {
    response: ResponseType;
}

export interface RepairVehicleUpgradeRequest {
    vehicleUpgradeId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairVehicleUpgradeResponse {
    response: ResponseType;
}

export interface RepairWeaponAmmoRequest {
    weaponAmmoId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairWeaponAmmoResponse {
    response: ResponseType;
}

export interface RepairWeaponModifierRequest {
    weaponModifierId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairWeaponModifierResponse {
    response: ResponseType;
}

export interface RepairWeaponRequest {
    weaponId: Long;
    repairToCondition: number;
    maxConditionRepairPricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface RepairWeaponResponse {
    response: ResponseType;
}

export interface RequestBattleFieldSettings {
    missionid: Long;
}

export interface RequestBattleReportVeteranBonusRequest {
    battleReportId: Long;
}

export interface RequestBattleReportVeteranBonusResponse {
    result: ResponseType;
}

export interface ResetPlayerRequest {
    dummy?: number;
}

export interface ResetPlayerResponse {
    response: ResponseType;
}

export interface RespondToCompanyInvitationRequest {
    invitationId: Long;
    accept: boolean;
}

export interface RespondToCompanyInvitationResponse {
    result: ResponseType;
}

export interface RespondToUnlockNotificationRequest {
    notificationId: Long;
    notificationResponseCode: number;
}

export interface RespondToUnlockNotificationResponse {
    response: ResponseType;
}

export interface ResponseBattleFieldSettings {
    battlefieldid: Long;
    missionPresetId: Long;
    defender: Long;
    friendlyfire: number;
    gamemode: string;
    timelimit: number;
    fraglimit: number;
    deathlimit: number;
    timeofday: number;
    cities: string[];
    defencestructures: defencestructure[];
    accesspoints: accesspointinfo[];
    railway: train[];
    armyResourceList: ActionGameArmyResourceDefinition[];
    battlefieldRotation: number;
    daysSinceWarStarted: number;
    isCampaignMission: boolean;
    battlefieldFactions: BattlefieldSettingsFaction[];
    maxTotalPlayers: number;
    enableBots: boolean;
    weatherTimeOfDay: number;
    weatherCondition: number;
    metricsMissionName: string;
    supplyLineId: Long;
    supplyLineOffsetFromAP1: number;
    battlefieldStatuses: battlefieldstatus[];
    accessPointStatuses: accesspointstatus[];
    supplylineStatuses: supplylinestatus[];
    stagedPosX: number;
    stagedPosY: number;
    enableSaBots: boolean;
}

export interface resupply_request {
    commandNodeWarInstanceId: Long;
    soldierPricingId: Long;
    soldierDiscountId: Long;
    vehiclePricingId: Long;
    vehicleDiscountId: Long;
    nearCapitalBattlefieldId?: Long;
    path: transport_commandnode_request_segment[];
    paymentCurrency: VirtualCurrencyType;
}

export interface resupply_request_response {
    response: ResponseType;
}

export interface RetreatCommandNodeRequest {
    commandNodeWarInstanceId: Long;
    serverInitiated?: boolean;
}

export interface RetreatCommandNodeResponse {
    msg: ResponseType;
}

export interface RibbonBooster {
    id: Long;
    playerId: Long;
    ribbonBoosterTemplateId: Long;
    itemsAccumulated: number;
    expirationTime: string;
}

export interface RibbonBoosterTemplate {
    id: Long;
    ribbonTemplateId: Long;
    durationInMinutes: number;
    multiplier: number;
    forSale: boolean;
}

export interface RibbonBoosterTemplateBundle {
    id: Long;
    ribbonBoosterTemplateIds: string;
}

export interface ribbonlevel {
    id: Long;
    value: number;
}

export interface RibbonLevelUpgradeTemplate {
    id: Long;
    ribbonTemplateId: Long;
    ribbonLevelId: Long;
}

export interface RibbonRequirement {
    id: Long;
    ribbonTemplateId: Long;
    requirementTypeId: number;
    requirementId: Long;
}

export interface ribbontemplate {
    id: Long;
    name: string;
    ribbonCategory: number;
    sortingIndex: number;
    available: boolean;
    sendMetrics: boolean;
    characterClassRequirement1: number;
    characterClassRequirement2: number;
    characterClassRequirement3: number;
}

export interface RommelMultiplier {
    id: Long;
    playerId: Long;
    multiplierActive: boolean;
    xpmultiplier: number;
    multiplierEnd: string;
}

export interface SearchPlayerDetailRequest {
    playerGamerTag: string;
}

export interface SearchPlayerDetailResponse {
    response: ResponseType;
    playerId?: Long;
    gamertag?: string;
    factiontemplateid?: Long;
    warName?: string;
}

export interface SearchPlayersRequest {
    searchKeyword: string;
    searchByEmail?: boolean;
}

export interface SearchPlayersResponse {
    response: ResponseType;
    gamerTagsFound: string[];
}

export interface SendItemToDepotRequest {
    itemType: ResponseType;
    objectId: Long;
    pricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
    tabName: string;
    isFree: boolean;
}

export interface SendItemToDepotResponse {
    response: ResponseType;
}

export interface SendMailMessageRequest {
    replyToMessageId: Long;
    subject: string;
    text: string;
    recipientGamertags: string[];
}

export interface SendMailMessageResponse {
    response: ResponseType;
}

export interface SendUpgradesToDepotRequest {
    itemType: ResponseType;
    objectId: Long;
    characterId: Long;
}

export interface SendUpgradesToDepotResponse {
    response: ResponseType;
}

export interface ServerSystemEvent {
    id: Long;
    type: number;
    startTime: string;
    duration: string;
    msg: string;
}

export interface SetCharacterActiveStatusRequest {
    characterId: Long;
    isOnLeave: boolean;
}

export interface SetCharacterActiveStatusResponse {
    response: ResponseType;
    soldierMax: number;
}

export interface SetCommandNodeEquipmentItem {
    characterId: Long;
    commandNodeWarInstanceId: Long;
    doEquip: boolean;
    leaveSupplyQueue: boolean;
}

export interface SetCommandNodeEquipmentRequest {
    equipmentItems: SetCommandNodeEquipmentItem[];
}

export interface SetCommandNodeEquipmentResponse {
    msg: ResponseType;
}

export interface SetDailyRewardRequest {
    rewardDay: number;
}

export interface SetDailyRewardResponse {
    result: ResponseType;
}

export interface SetDepotItemViewedRequest {
    tabName: string;
    itemId: Long;
}

export interface SetDepotItemViewedResponse {
    response: ResponseType;
}

export interface SetInventoryItemToCharacterRequest {
    itemType: string;
    itemId: Long;
    characterId: Long;
}

export interface SetInventoryItemToCharacterResponse {
    msg: ResponseType;
}

export interface SetMessageRecipientsDeletedRequest {
    messageRecipientIds: Long[];
    isDeleted: boolean;
}

export interface SetMessageRecipientsDeletedResponse {
    response: ResponseType;
}

export interface SetMessageRecipientsReadRequest {
    messageRecipientIds: Long[];
    isRead: boolean;
}

export interface SetMessageRecipientsReadResponse {
    response: ResponseType;
}

export interface SetNotificationsReadRequest {
    notificationIds: Long[];
    readStatus: ResponseType;
}

export interface SetNotificationsReadResponse {
    response: ResponseType;
}

export interface SetPlayerDiscordIdRequest {
    discordId: Long;
}

export interface SetPlayerDiscordIdResponse {
    response: ResponseType;
}

export interface SetPlayerLanguageRequest {
    languageCode: string;
}

export interface SetPlayerLanguageResponse {
    response: ResponseType;
}

export interface SetPlayerMailRUIdResponse {
    response: ResponseType;
}

export interface SetPlayerSteamIdRequest {
    steamId: Long;
}

export interface SetPlayerSteamIdResponse {
    response: ResponseType;
}

export interface SetSquadDetailsRequest {
    characterId: Long;
    squadName?: string;
    pricingId?: Long;
    discountId?: Long;
    saveSessionState?: boolean;
    paymentCurrency: VirtualCurrencyType;
}

export interface SetSquadDetailsResponse {
    response: ResponseType;
}

export interface SetSquadMatchMakingFlagRequest {
    squadSessionId: Long;
    matchMakeWarMissionFlag: boolean;
    matchMakeStagedMissionPresetList: Long[];
    matchMakeSquadVehicleFilterArmyResourceTemplateIds: Long[];
}

export interface SetSquadMatchMakingFlagResponse {
    response: ResponseType;
}

export interface SetSquadMemberStatusRequest {
    squadSlotId: Long;
    memberCharacterId: Long;
    squadMemberSessionStatus: number;
}

export interface SetSquadMemberStatusResponse {
    response: ResponseType;
}

export interface SetTracerEffectRequest {
    isFree: boolean;
    tracerEffectTemplateId: Long;
    characterId: Long;
    weaponId: Long;
    pricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
    tracerEffectId: Long;
}

export interface SetTracerEffectResponse {
    response: ResponseType;
}

export interface SetTutorialCompletedRequest {
    tutorial: number;
}

export interface SetTutorialCompletedResponse {
    result: ResponseType;
}

export interface SetUniformPartRequest {
    characterId: Long;
    uniformPartId: Long;
    uniformPartType: number;
}

export interface SetUniformPartResponse {
    response: ResponseType;
}

export interface SetUniformVariantRequest {
    characterId: Long;
    variantId: Long;
}

export interface SetUniformVariantResponse {
    response: ResponseType;
}

export interface SetVehicleAmmoAutoRepairRequest {
    vehicleAmmoId: Long;
    autoRepair: number;
}

export interface SetVehicleAmmoAutoRepairResponse {
    response: ResponseType;
}

export interface SetVehicleAmmoRequest {
    vehicleId: Long;
    vehicleAmmoId: Long;
    vehicleAmmoStorageId: Long;
    slotIndex: number;
    doEquip: boolean;
}

export interface SetVehicleAmmoResponse {
    response: ResponseType;
}

export interface SetVehicleAutoRepairRequest {
    vehicleId: Long;
    autoRepair: number;
}

export interface SetVehicleAutoRepairResponse {
    response: ResponseType;
}

export interface SetVehicleEquipmentRequest {
    characterId: Long;
    vehicleId: Long;
    equipInSlot: number;
}

export interface SetVehicleEquipmentResponse {
    msg: ResponseType;
}

export interface SetVehicleUpgradeAutoRepairRequest {
    vehicleUpgradeId: Long;
    autoRepair: number;
}

export interface SetVehicleUpgradeAutoRepairResponse {
    response: ResponseType;
}

export interface SetVehicleUpgradeRequest {
    vehicleId: Long;
    vehicleUpgradeId: Long;
    vehicleUpgradeSlotId: Long;
    doEquip: boolean;
}

export interface SetVehicleUpgradeResponse {
    response: ResponseType;
}

export interface SetVehicleVariantRequest {
    vehicleId: Long;
    variantId: Long;
}

export interface SetVehicleVariantResponse {
    response: ResponseType;
}

export interface SetWeaponAmmoAutoRepairRequest {
    weaponAmmoId: Long;
    autoRepair: number;
}

export interface SetWeaponAmmoAutoRepairResponse {
    response: ResponseType;
}

export interface SetWeaponAmmoRequest {
    weaponId: Long;
    weaponAmmoId: Long;
    slotIndex: number;
    doEquip: boolean;
}

export interface SetWeaponAmmoResponse {
    response: ResponseType;
}

export interface SetWeaponAutoRepairRequest {
    weaponId: Long;
    autoRepair: number;
}

export interface SetWeaponAutoRepairResponse {
    response: ResponseType;
}

export interface SetWeaponClipCountRequest {
    equipmentId: Long;
    clipCount: number;
}

export interface SetWeaponClipCountResponse {
    response: ResponseType;
}

export interface SetWeaponModiferAutoRepairRequest {
    weaponModifierId: Long;
    autoRepair: number;
}

export interface SetWeaponModiferAutoRepairResponse {
    response: ResponseType;
}

export interface SetWeaponModifierRequest {
    weaponModifierId: Long;
    weaponId: Long;
    doEquip: boolean;
    selectedCharacterId: Long;
}

export interface SetWeaponModifierResponse {
    response: ResponseType;
}

export interface SetWeaponVariantRequest {
    weaponId: Long;
    variantId: Long;
}

export interface SetWeaponVariantResponse {
    response: ResponseType;
}

export interface set_combatbadge_request {
    characterid: Long;
    combatbadgeid: Long;
    slotnumber: number;
}

export interface set_combatbadge_response {
    msg: ResponseType;
}

export interface set_equipmentselection {
    characterid: Long;
    equipmentid: Long;
    equipmentslot: number;
}

export interface set_equipmentselection_response {
    msg: ResponseType;
}

export interface ShopCharacterPacks {
    id: Long;
    identifier: string;
    factionTemplateId: Long;
    characterTemplateId: Long;
    weaponTemplateIdSlot1: Long;
    weaponTemplateIdSlot2: Long;
    weaponTemplateIdSlot3: Long;
    rank: number;
}

export interface ShopMembershipItems {
    id: Long;
    identifier: string;
    durationDays: number;
    membershipBenefitTemplateId: Long;
    forSale: number;
}

export interface ShopWarBondItem {
    id: Long;
    templateId: Long;
    serialNumber: number;
    playerId: Long;
    aquiredDate: string;
    lastInterestDate: string;
    isExpired: boolean;
}

export interface ShopWarBondItemCounter {
    id: Long;
    templateId: Long;
    counter: number;
}

export interface ShopWarBondItemTemplate {
    id: Long;
    series: string;
    seriesSize: number;
    durationMonths: number;
    nominalValue: number;
    interestPerMonth: number;
    identifier?: string;
    currency: string;
}

export interface SpawnAreaTemplate {
    id: Long;
    gamemap: Long;
    posx: number;
    posy: number;
    allowPlayerSpawn: boolean;
    allowBotSpawn: boolean;
}

export interface Squad {
    id: Long;
    playerId: Long;
    characterId: Long;
    name: string;
    supportSlotTemplateId1: Long;
    supportSlotTemplateId2: Long;
    supportSlotTemplateId3: Long;
    matchMakeWarMissionFlag: boolean;
    matchMakeStagedMissionPresetList: Long[];
}

export interface SquadInvitePlayerRequest {
    ownerCharacterId: Long;
    friendPlayerId: Long;
    matchMakeWarMissionFlag: boolean;
    matchMakeStagedMissionPresetList: Long[];
    matchMakeSquadVehicleFilterArmyResourceTemplateIds: Long[];
}

export interface SquadInvitePlayerResponse {
    result: ResponseType;
}

export interface SquadMemberSession {
    id: Long;
    squadSessionId: Long;
    squadPlayerSlotTemplateId: Long;
    playerId: Long;
    gamerTag: string;
    playerFactionTemplateId: Long;
    characterId: Long;
    uniformVariantTemplateId: Long;
    weaponVariantTemplateId: Long;
    characterRank: number;
    shopMembershipItemId: Long;
    squadMemberSessionStatus: number;
    verifiedSquadResourceTemplates: Long[];
    characterName?: string;
    playerSessionId: Long;
    playerTier: number;
    squadCustomizationPoints: number;
    wasInvited: boolean;
}

export enum SquadMemberSessionStatus {

}

export interface SquadPlayerSlotTemplate {
    id: Long;
    squadTemplateId: Long;
    defaultSlot: boolean;
    slotNumber: number;
    customizationCost: number;
}

export interface SquadRequest {
    missionSessionId: Long;
    squadId: Long;
}

export interface SquadResource {
    id: Long;
    playerId: Long;
    squadId: Long;
    armyResourceCategoryId: Long;
    count: number;
}

export interface SquadResourcePurchaseSet {
    armyResourceCategoryId: Long;
    resourcePricingId: Long;
}

export interface SquadResourceState {
    armyResourceCategoryId: Long;
    count: number;
}

export interface SquadResourceTemplate {
    id: Long;
    characterTemplateId: Long;
    resourceCategoryId: Long;
    rule: number;
    minResourcesRequired: number;
}

export interface SquadRespondToInviteRequest {
    squadMemberSessionId: Long;
    hasAccepted: boolean;
    characterId: Long;
}

export interface SquadRespondToInviteResponse {
    result: ResponseType;
}

export interface SquadResponse {
    squadId: Long;
    squadDefinition: ActionGameSquadDefinition;
}

export interface SquadSession {
    id: Long;
    ownerPlayerId: Long;
    characterTemplateId: Long;
    factionTemplateId: Long;
    supportSlotTemplateId1: Long;
    supportSlotTemplateId2: Long;
    supportSlotTemplateId3: Long;
    totalCustomizationPoints: number;
    usedCustomizationPoints: number;
    name: string;
    matchMakeWarMissionFlag: boolean;
    matchMakeStagedMissionPresetList: Long[];
    matchMakeSquadVehicleFilterArmyResourceTemplateIds: Long[];
    squadResourceList: SquadResourceState[];
    ignorePlayerIdList: Long[];
    missionId: Long;
    squadId: Long;
    actionGamesEntered: number;
    isLockedForMembers: boolean;
    isLockedForCustomization: boolean;
    forceReady: boolean;
}

export interface SquadSupportSlotTemplate {
    id: Long;
    squadTemplateId: Long;
    characterTemplateId: Long;
    defaultSlot: boolean;
    slotNumber: number;
    customizationCost: number;
}

export interface SquadTemplate {
    id: Long;
    characterTemplateId: Long;
}

export interface StagedMissionSetup {
    id: Long;
    data: string;
}

export interface StagingAreaTemplate {
    id: Long;
    gamemap: Long;
    spawnAreaTemplateId: Long;
    accessPointTemplateId: Long;
    posx: number;
    posy: number;
}

export interface StartLogin {
    dummy?: number;
}

export interface StatElement {
    statType: string;
    meta1: Long;
    meta2: Long;
    value: Long;
}

export interface statRequirement {
    id: Long;
    eParentType: number;
    parentId: Long;
    variableName: string;
    variableVar1: string;
    variableVar2: string;
    variableVar3: string;
    targetPlayerType: string;
    multiplier: number;
    statCategoryId: number;
    hudGroupId: number;
    eProcessorType: number;
    warMissionOnlyRequirement: number;
    winOnlyRequirement: number;
    rankOnlyRequirement: number;
    available: boolean;
}

export interface SteamFinalizeTransactionRequest {
    orderId: Long;
}

export interface SteamFinalizeTransactionResponse {
    response: ResponseType;
    steamResponseCode: number;
}

export interface SteamInitializeTransactionRequest {
    orderId: Long;
    steamId: Long;
    languageId: string;
    currency: string;
    items: SteamTransactionItem[];
}

export interface SteamInitializeTransactionResponse {
    response: ResponseType;
    steamResponseCode: number;
    orderId: Long;
}

export interface SteamQueryBundlesRequest {
    characterId: Long;
}

export interface SteamQueryBundlesResponse {
    response: ResponseType;
    steamResponseCode: number;
    infos: VoucherPackInfo[];
    validFactionTemplateIds?: string;
    validCharacterTemplateIds?: string;
}

export interface SteamTransactionItem {
    type: ResponseType;
    quantity: number;
    discountPercentage: number;
}

export enum SteamTransactionItemType {

}

export interface StoreBundle {
    id: Long;
    identifier: string;
    targetType: string;
    factionTemplateIds: string;
    characterTemplateIds: string;
    forSale: boolean;
    items: string;
    epicIdentifier?: string;
}

export interface StoreCampaign {
    id: Long;
    type: number;
    assetIdentifier: string;
    callToAction: string;
    iconType: string;
    activeFromTime: string;
    activeToTime: string;
}

export enum StoreCampaignType {

}

export interface StoreDiscount {
    id: Long;
    objectType: string;
    objectId: Long;
    virtualCurrencyType: number;
    discountValue: number;
    campaignId: Long;
    excludedObjectId?: string;
}

export interface subscribeassaultteamview {
    dummy?: number;
}

export interface subscribebattlesview {
    dummy?: number;
}

export interface subscribechatview {
    dummy?: number;
}

export interface subscribecommandnodeview {
    dummy?: number;
}

export interface subscribefriendview {
    dummy?: number;
}

export interface SubscribeHostingCenterInfoView {
    dummy?: number;
}

export interface subscribeignoredplayerview {
    dummy?: number;
}

export interface SubscribeMessageView {
    dummmy?: number;
}

export interface SubscribePlayerMissionViewRequest {
    dummy?: number;
}

export interface SubscribePlayerSessionView {
    dummy?: number;
}

export interface subscribeplayerview {
    dummy?: number;
}

export interface subscriberesourceview {
    dummy?: number;
}

export interface subscriberesponse {
    dummy?: number;
}

export interface SubscribeShopView {
    dummy?: number;
}

export interface subscribesoldierview {
    dummy?: number;
}

export interface subscribetestview {
    dummy?: number;
}

export interface subscribewarmaplightview {
    dummy?: number;
}

export interface subscribewarmapview {
    dummy?: number;
}

export interface supplyline {
    id: Long;
    mapid: Long;
    accesspoint1Id: Long;
    accesspoint2Id: Long;
    supplylinetemplateid: Long;
}

export interface supplylinestatus {
    id: Long;
    warid: Long;
    factionid: Long;
    supplylineid: Long;
}

export interface SwapHeadRequest {
    characterId: Long;
    uniformPartTemplateId: Long;
    uniformPartType: number;
    pricingId: Long;
    storeDiscountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface SwapHeadResponse {
    response: ResponseType;
}

export enum SystemEventType {

}

export interface testsmallobjectsubdata {
    intdata: number;
    stringdata: string;
}

export interface Ticket {
    id: Long;
    ticketTemplateId: Long;
    playerId: Long;
    earnedTicket: Long;
    consumedTicket: Long;
}

export interface TicketTemplate {
    id: Long;
    type: number;
}

export interface TicketTimed {
    id: Long;
    expiredDatetime: string;
    playerId: Long;
    ticketTimedTemplateId: Long;
    earnedTimedTicket: Long;
    consumedTimedTicket: Long;
}

export interface TicketTimedTemplate {
    id: Long;
    durationInHours: number;
    storeDiscountId: Long;
    storeCampaignId: Long;
}

export interface TracerEffect {
    id: Long;
    tracerEffectTemplateId: Long;
    playerId: Long;
    characterId: Long;
    weaponId: Long;
    isEquipped: boolean;
}

export interface TracerEffectTemplate {
    id: Long;
    displayName: string;
    effectName: string;
    rate: number;
}

export interface TracerEffectWeaponMapping {
    id: Long;
    tracerEffectTemplateId: Long;
    weaponTemplateId: Long;
}

export interface train {
    id: Long;
    railwayId: number;
    vehicleIds: string;
}

export interface transport_commandnode {
    commandNodeWarInstanceId: Long;
    targetId: Long;
    targetType: string;
    overrideTargetAccesspointId?: Long;
    overrideMove?: boolean;
    path: transport_commandnode_request_segment[];
}

export interface transport_commandnode_destination {
    id: Long;
    commandNodeWarInstanceId: Long;
    battlefieldid: Long;
    accesspointid: Long;
    cachedpath: string;
    warid: Long;
    retreatFlag: boolean;
    timeEstimate: number;
    beginPosition: number;
}

export interface transport_commandnode_request_segment {
    mapEntityId: Long;
    mapEntityType: Long;
}

export interface transport_commandnode_response {
    commandNodeWarInstanceId: Long;
    battlefieldId: Long;
    msg: ResponseType;
}

export interface transport_commandnode_segment {
    id: Long;
    commandNodeWarInstanceId: Long;
    supplylineid: Long;
    fromAccesspoint: Long;
    toAccesspoint: Long;
    begintime: string;
    endtime: string;
    warid: Long;
    approachingSkirmish?: number;
}

export interface UniformPart {
    id: Long;
    playerId: Long;
    characterId: Long;
    uniformPartTemplateId: Long;
    uniformPartType: number;
}

export interface UniformPartTemplate {
    id: Long;
    available: boolean;
    identifier: string;
    eUniformPartType: number;
    uniformPart: string;
    variantId: number;
    variantType: number;
    isDefault: boolean;
    linkedUniformPartTemplateId?: string;
    factionTemplateId: number;
    parentCharacterTemplateId: Long;
}

export interface UniformVariant {
    id: Long;
    playerId: Long;
    characterId: Long;
    uniformVariantTemplateId: Long;
}

export interface UniformVariantTemplate {
    id: Long;
    identifier: string;
    parentCharacterTemplateId: Long;
    factionTemplateId: Long;
    available: boolean;
    bodyPartHead: string;
    bodyPartHeadVariantId: number;
    bodyPartHelmet: string;
    bodyPartHelmetVariantId: number;
    bodyPartJacket: string;
    bodyPartJacketVariantId: number;
    bodyPartPants: string;
    bodyPartPantsVariantId: number;
    bodyPartBoots: string;
    bodyPartBootsVariantId: number;
    bodyPartHands: string;
    bodyPartHandsVariantId: number;
    bodyPartAccessory1: string;
    bodyPartAccessory1VariantId: number;
    bodyPartAccessory2: string;
    bodyPartAccessory2VariantId: number;
    bodyPartAccessory3: string;
    bodyPartAccessory3VariantId: number;
    bodyPartAccessory4: string;
    bodyPartAccessory4VariantId: number;
    bodyPartAccessory5: string;
    bodyPartAccessory5VariantId: number;
    bodyPartAccessory6: string;
    bodyPartAccessory6VariantId: number;
    bodyPartAccessory7: string;
    bodyPartAccessory7VariantId: number;
    bodyPartAccessory8: string;
    bodyPartAccessory8VariantId: number;
    variantType: number;
}

export interface UnlockNotification {
    id: Long;
    playerId: Long;
    characterId: Long;
    progressionUnlockId: Long;
    ribbonTemplateId: Long;
    ribbonLevel: Long;
    unlockTimestamp: string;
    notificationResponse: number;
    markedForDelete: boolean;
}

export interface unsubscribeassaultteamview {
    dummy?: number;
}

export interface unsubscribebattlesview {
    dummy?: number;
}

export interface unsubscribechatview {
    dummy?: number;
}

export interface unsubscribecommandnodeview {
    dummy?: number;
}

export interface unsubscribefriendview {
    dummy?: number;
}

export interface UnsubscribeHostingCenterInfoView {
    dummy?: number;
}

export interface unsubscribeignoredplayerview {
    dummy?: number;
}

export interface UnsubscribeMessageView {
    dummmy?: number;
}

export interface UnsubscribePlayerMissionViewRequest {
    dummy?: number;
}

export interface UnsubscribePlayerSessionView {
    dummy?: number;
}

export interface unsubscribeplayerview {
    dummy?: number;
}

export interface unsubscriberesourceview {
    dummy?: number;
}

export interface unsubscriberesponse {
    reply: string;
}

export interface UnsubscribeShopView {
    dummy?: number;
}

export interface unsubscribesoldierview {
    dummy?: number;
}

export interface unsubscribetestview {
    dummy?: number;
}

export interface unsubscribewarmaplightview {
    dummy?: number;
}

export interface unsubscribewarmapview {
    dummy?: number;
}

export interface UpdateSquadResourceRequest {
    squadSessionId: Long;
    resourcePurchaseList: SquadResourcePurchaseSet[];
    paymentCurrency: VirtualCurrencyType;
}

export interface UpdateSquadResourceResponse {
    response: ResponseType;
}

export interface UpdateWarBondsItem {
    warBondId: Long;
    interestsEarnedGold: number;
    interestsEarnedCredits: number;
    isExpired: boolean;
}

export interface UpdateWarBondsRequest {
    dummy?: number;
}

export interface UpdateWarBondsResponse {
    warBonds: UpdateWarBondsItem[];
}

export interface UpgradeCommandNodeRequest {
    commandNodeWarInstanceId: Long;
    upgradeToCommandnodeTemplateId: Long;
    pricingId: Long;
    discountId: Long;
    paymentCurrency: VirtualCurrencyType;
}

export interface UpgradeCommandNodeResponse {
    result: ResponseType;
}

export interface Vehicle {
    id: Long;
    vehicleVariantTemplateId: Long;
    playerId: Long;
    characterId: Long;
    equippedInSlot: Long;
    condition: number;
    autoRepair: number;
    equippedVehicleVariantId: Long;
}

export interface VehicleAmmo {
    id: Long;
    ammoTemplateId: Long;
    vehicleId: Long;
    equippedVehicleAmmoStorageId: Long;
    equippedAmmoSlotIndex: number;
    playerId: Long;
    characterId: Long;
    condition: number;
    autoRepair: number;
}

export interface VehicleAmmoStorage {
    id: Long;
    maxAmmoClips: number;
    storageSlots: number;
}

export interface VehicleDrivingMaterial {
    id: Long;
    name: string;
    onRoadPercent: number;
    tractionMul: number;
    wobbliness: number;
}

export interface VehicleFlightModelTemplate {
    id: Long;
    rollSpeedAtPeak: number;
    rollSpeedAtMax: number;
    rollPeakPercent: number;
    rollAcceleration: number;
    rollFrictionSpin: number;
    yawSpeedAtPeak: number;
    yawSpeedAtMax: number;
    yawPeakPercent: number;
    yawAcceleration: number;
    yawFrictionSpin: number;
    yawFrictionPushSpin: number;
    yawFrictionPush: number;
    pitchSpeedAtPeak: number;
    pitchSpeedAtMax: number;
    pitchPeakPercent: number;
    pitchAcceleration: number;
    pitchFrictionSpin: number;
    pitchFrictionPushSpin: number;
    pitchFrictionPush: number;
    speedMaxHorizontal: number;
    speedMaxDive: number;
    speedAcceleration: number;
    speedAccelerationGround: number;
    speedMaxHorizontalReverse: number;
    speedAccelerationBrake: number;
    liftFadeInPercent: number;
    stallSpeedPercent: number;
    stallPushFrictionScale: number;
    stallSpinFrictionScale: number;
    stallPitchPushSpinFriction: number;
    stallYawPushSpinFriction: number;
}

export interface vehicletemplate {
    id: Long;
    name: string;
    factiontemplateid: Long;
    armyresourcecategoryid: Long;
    available: boolean;
    eVehicleType: number;
    engineStartTime: number;
    mobileSpawn: boolean;
    fuelCapacity: number;
    fuelLiterPerKm: number;
    mass: number;
    airFrictionArea: number;
    speed: number;
    speedOffRoadKph: number;
    rpmLow: number;
    rpmHgh: number;
    maxRpmPerSecLow: number;
    maxRpmPerSecHgh: number;
    gearCountBackwards: number;
    gearCountForward: number;
    inertiaDimX: number;
    inertiaDimY: number;
    inertiaDimZ: number;
    wheelTurnSpeed: number;
    wheelTurnResetBoost: number;
    wheelTurnSlack: number;
    maxSteeringAngle: number;
    maxSteeringAngleSpeedPerc: number;
    cameraLimitEnabled: boolean;
    cameraLimit: number;
    cameraDampening: number;
    thirdPersonCamHeight: number;
    thirdPersonCamDistance: number;
    animToken: string;
    maxCondition: number;
    wearPerSpawn: number;
    wearPerBattle: number;
    upgradeSlots: number;
    waterSetupDesiredDepth: number;
    waterSetupMaxSpeedForward: number;
    waterSetupMaxSpeedBackwards: number;
    waterSetupDampScaleVertical: number;
    waterSetupResScaleFront: number;
    waterSetupResScaleSide: number;
    waterSetupAnimNodeName: string;
    flightModelTemplateId: Long;
    accelerationBase: number;
    accelerationGamma: number;
    accelerationFrictionGamma: number;
    handlingSuspensionDampScale: number;
    handlingWheelForceHeight: number;
    handlingDynSpeedTH: number;
    handlingDynFadeIn: number;
    handlingDynAngleTH: number;
    handlingBrakePower: number;
    handlingCoastDeacceleration: number;
    handlingDynamicFriction: number;
    wheelSuspensionUp: number;
    wheelSuspensionDown: number;
    wheelStaticFrictionSide: number;
    wheelStaticFrictionFront: number;
    trackSuspensionUp: number;
    trackSuspensionDown: number;
    trackStaticFrictionSide: number;
    trackStaticFrictionFront: number;
    suspensionMinDist: number;
    tankMinTurnRadius: number;
    reverseSpeedKPH: number;
    trackLinkCount: number;
    maxTractionAngleFront: number;
    maxTractionAngleSide: number;
    tankTurnSpeed: number;
    tankTurnBoost: number;
    tankTurnBoostSlowPercent: number;
    sturdiness: number;
    wobblinessScale: number;
    gravity: number;
    turnAccBoost: number;
    gravityScaleUp: number;
    gravityScaleDown: number;
    hitPoints: number;
    deployPoolCost: number;
    armorHPMul: number;
}

export interface vehicletemplatelayout {
    id: Long;
    supplyCrateX: number;
    supplyCrateY: number;
    supplyCrateLabelOffsetX: number;
    supplyCrateLabelOffsetY: number;
}

export interface VehicleUpgrade {
    id: Long;
    vehicleUpgradeTemplateId: Long;
    vehicleId: Long;
    equippedVehicleUpgradeSlotId: Long;
    playerId: Long;
    characterId: Long;
    condition: number;
    autoRepair: number;
}

export interface VehicleUpgradeSlot {
    id: Long;
    vehicleTemplateId: Long;
    vehicleUpgradeTemplateId: Long;
}

export interface vehicleupgradetemplate {
    id: Long;
    name: string;
    upgradeMasterCompoundId: number;
    vehicleUpgradeType: number;
    itemId: Long;
    maxCondition: number;
    wearPerSpawn: number;
    wearPerBattle: number;
    deployPoolCost: number;
}

export interface VehicleVariant {
    id: Long;
    playerId: Long;
    characterId: Long;
    vehicleId: Long;
    vehicleVariantTemplateId: Long;
}

export interface VehicleVariantTemplate {
    id: Long;
    name: string;
    parentVehicleTemplateId: Long;
    textureIndex: number;
    available: boolean;
    factionTemplateId: Long;
    defaultVariant: boolean;
    variantType: number;
}

export interface VehicleWeaponLayout {
    id: Long;
    posX: number;
    posY: number;
    labelOffsetX: number;
    labelOffsetY: number;
    vehicleWeaponSlotId: Long;
    vehicleAmmoStorageIndex: number;
    visible: boolean;
}

export interface VehicleWeaponSlot {
    id: Long;
    vehicleTemplateId: Long;
    weaponTemplateId: Long;
    firingSequence: number;
    weaponSlotUser: number;
    vehicleAmmoStorageId: Long;
    weaponPriority: number;
}

export interface VerifyPremiumStatusRequest {
    dummy?: number;
}

export interface VerifyPremiumStatusResponse {
    msg: ResponseType;
}

export interface ViewHandlerPulse {
    id: Long;
    lastTickTime: Long;
    serverTime: Long;
}

export interface VoucherPackInfo {
    identifier: string;
    factionTemplateId: Long;
    status: ResponseType;
    names: VoucherPackName[];
    items: VoucherPackItem[];
}

export interface VoucherPackItem {
    objectType: string;
    objectId: Long;
    info?: string;
}

export interface VoucherPackName {
    language: string;
    name: string;
}

export enum VoucherPackStatus {

}

export interface war {
    id: Long;
    name: string;
    begintime: string;
    endtime: string;
    web: string;
    friendlyfire: string;
    winningfactionid: Long;
    pointsNeededForVictory: number;
    automissionnormal: number;
    automissionskirmish: number;
    automissionsupply: number;
    strategytimescale: number;
    daycycletimescale: number;
    disablestrategy: number;
    maxPlayerPerFaction: number;
    sequelwarid: Long;
    mapid: Long;
    cleanupStatus: number;
    fowGridSize: number;
    fowGridOriginX: number;
    fowGridOriginY: number;
    queueReinforcements: boolean;
    firstResourceFree: boolean;
    moraleMinValue: number;
    moraleMaxValue: number;
    moraleLostPerBattle: number;
    moraleGainedPerWin: number;
    moraleGainedPerMinute: number;
    moraleSurrenderLimit: number;
}

export interface WarBonusTemplate {
    id: Long;
    warfundBonus: number;
    xpBonusPercent: number;
    aTDeployCostPercent: number;
    isActive: boolean;
}

export interface war_catalogue {
    id: Long;
    name: string;
    wartime: string;
    pointsNeededForVictory: number;
    winningFactionId: Long;
    battlefieldCount: number;
    assaultTeamCount: number;
    playerCount: number;
    generalCount: number;
    infantryCount: number;
    tankCount: number;
    planeCount: number;
    vehicleCount: number;
    sequelWarId: Long;
    warCatalogueFactions: war_catalogue_faction[];
}

export interface war_catalogue_faction {
    factionId: Long;
    factionTemplateId: Long;
    factionTag: string;
    factionVictoryPoints: number;
    factionPlayerCount: number;
    factionMinPlayerCount: number;
    factionMaxPlayerCount: number;
    factionPlayerOnlineCount: number;
    factionBonus: number;
    factionDeployedCommandPointsInfantry: number;
    factionDeployedCommandPointsArmor: number;
    factionDeployedCommandPointsAir: number;
    factionControlledBattlefields: number;
    battlesWon: number;
    battlesLost: number;
    infantryLost: number;
    vehiclesLost: number;
    tanksLost: number;
    planesLost: number;
    ownedMajorCities: Long[];
}

export interface war_create_request {
    name: string;
}

export interface war_create_response {
    response: ResponseType;
}

export interface weapon {
    id: Long;
    name: string;
    weapontemplateid: Long;
    playerid: Long;
    characterId: Long;
    posx: number;
    posy: number;
    decals: string;
    containerType: string;
    containerId: Long;
    containerSlot: number;
    condition: number;
    autoRepair: number;
    clipCount: number;
    equippedWeaponVariantId: Long;
}

export interface WeaponAmmo {
    id: Long;
    ammoTemplateId: Long;
    playerId: Long;
    characterId: Long;
    weaponId: Long;
    equippedAmmoSlotIndex: number;
    condition: number;
    autoRepair: number;
}

export interface weaponAmmoMapping {
    id: Long;
    weaponTemplateId: Long;
    ammoTemplateId: Long;
    defaultAmmo: boolean;
}

export enum WeaponCategory {

}

export interface WeaponGroupMapping {
    id: Long;
    weaponTemplateId: Long;
    weaponGroup: number;
}

export interface WeaponModCategory {
    id: Long;
    identifier: string;
    weaponCategoryId: Long;
    weaponModSlotId: number;
}

export interface WeaponModifier {
    id: Long;
    templateId: Long;
    playerId: Long;
    characterId: Long;
    weaponId: Long;
    condition: number;
    autoRepair: number;
}

export interface WeaponModifierTemplate {
    id: Long;
    name: string;
    fRangeNear: number;
    fRangeFar: number;
    fDamage: number;
    fDamageFar: number;
    fCameraRecoilRight: number;
    fCameraRecoilUp: number;
    fCameraRecoilVariance: number;
    fRecoilTime: number;
    fChamberTime: number;
    fConeStandMode: number;
    fConeCrouchMode: number;
    fConeProneMode: number;
    fConeAimModifier: number;
    fConeContractionPerSecond: number;
    maxCondition: number;
    wearPerShot: number;
    wearPerBattle: number;
    forSale: number;
    imageName: string;
    weaponModCategoryId: number;
    masterId: number;
    subMasterId: number;
    sightMagnification: number;
    sightDistMin: number;
    sightDistMax: number;
    sightDistIncrement: number;
    deployPoolCost: number;
}

export interface WeaponModMapping {
    id: Long;
    weaponModifierTemplateId: Long;
    weaponTemplateId: Long;
}

export enum WeaponModSlot {

}

export interface weaponslotcategory {
    id: Long;
    identifier: string;
}

export interface weapontemplate {
    id: Long;
    name: string;
    fireForce: number;
    camerarecoilright: number;
    camerarecoilup: number;
    camerarecoilvariance: number;
    swaystandmode: number;
    swaycrouchmode: number;
    swaypronemode: number;
    swayprecisionmodifier: number;
    aimpenaltyprecisionmodifier: number;
    aimpenaltyperbullet: number;
    aimpenaltyturn: number;
    aimpenaltycontractionpersec: number;
    baseconefire: number;
    recoiltime: number;
    fireat: number;
    chambertime: number;
    reloadtime: number;
    clipsize: number;
    maglowlimit: number;
    respawntime: number;
    chargetime: number;
    effectscopemindist: number;
    effectscopemaxdist: number;
    effectscopesteps: number;
    effectscopedefaultdist: number;
    aimfov1: number;
    aimfov2: number;
    aimfov3: number;
    equiptime: number;
    effectshellspeed: number;
    dofSprintStart: number;
    dofSprintEnd: number;
    dofViewStart: number;
    dofViewEnd: number;
    dofAimStart: number;
    dofAimEnd: number;
    paththickness: number;
    swayfatigue: number;
    swayspeed: number;
    pathred: number;
    pathgreen: number;
    pathblue: number;
    usewhilesprinting: number;
    reloadtimescoped: number;
    recoilcamera: number;
    clipautoeject: number;
    pathdisplay: number;
    reloadattachrighthand: number;
    ammofeedanim: number;
    usewhilerunning: number;
    proneandaimonly: number;
    clipCount: number;
    factiontemplateid: Long;
    weaponcategoryid: Long;
    weaponslotcategoryid: Long;
    equipmentPointsCost: number;
    maxCondition: number;
    wearPerShot: number;
    wearPerBattle: number;
    canAdjustClipCount: number;
    managabilitycost: number;
    available: boolean;
    animToken: string;
    twoHanded: boolean;
    ignoreGrief: boolean;
    audioShotDelay: number;
    audioMechanicsDelay: number;
    audioHammerDelay: number;
    audioAutoEjectDelay: number;
    audioUseAnimEventsAsReloadSequenceTriggers: boolean;
    itemType: number;
    precCameraOffset: number;
    precCameraOffsetProne: number;
    precisionModeAcceleration: number;
    bobCatagoryToken: string;
    ammoSpeedMod: number;
    ammoRangeMaxMod: number;
    ammoDamageMod: number;
    ammoDamageFarMod: number;
    ammoRangeNearMod: number;
    ammoRangeFarMod: number;
    ammoArmorPenetrationAngleMod: number;
    ammoArmorPenetrationAngleFalloffMod: number;
    ammoArmorMinDamageMod: number;
    ammoArmorMaxDamageMod: number;
    ammoArmorMinPenetrationMod: number;
    ammoArmorMaxPenetrationMod: number;
    catridgeTypeID: number;
    extraBulletTracer: string;
    extraBulletTracerRate: number;
    fireModeAuto: boolean;
    fireModeSingle: boolean;
    masterId: number;
    dofPower: number;
    deployPoolCost: number;
    cameraKickGroupTemplateId: Long;
    allowInVehicles: boolean;
}

export interface weapontemplatelayout {
    id: Long;
    ammoX: number;
    ammoY: number;
    barrelX: number;
    barrelY: number;
    internalX: number;
    internalY: number;
    sightX: number;
    sightY: number;
    triggerX: number;
    triggerY: number;
    ammoLabelOffsetX: number;
    ammoLabelOffsetY: number;
    barrelLabelOffsetX: number;
    barrelLabelOffsetY: number;
    internalLabelOffsetX: number;
    internalLabelOffsetY: number;
    sightLabelOffsetX: number;
    sightLabelOffsetY: number;
    triggerLabelOffsetX: number;
    triggerLabelOffsetY: number;
}

export interface WeaponVariant {
    id: Long;
    playerId: Long;
    characterId: Long;
    weaponId: Long;
    weaponVariantTemplateId: Long;
}

export interface WeaponVariantTemplate {
    id: Long;
    identifier: string;
    parentWeaponTemplateId: Long;
    textureIndex: number;
    available: boolean;
    weaponVariantType: number;
}

export enum WeatherCondition {

}

export enum WeatherTimeOfDay {

}
