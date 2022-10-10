/* eslint-disable @typescript-eslint/no-empty-interface */
import { Long } from "protobufjs";
import { ResponseType } from "../protolinking/classKeys";

export interface AddAssaultTeamStats {
    assaultteamId: Long;
    warId: Long;
    assaultteamStatistics: AssaultTeamStats;
}

export interface AddCharacterStats {
    characterId: Long;
    sessionId: Long;
    characterStatistics: CharacterStats;
}

export interface AddCharacterStatsList {
    elements: AddCharacterStats[];
}

export interface AddGeneralStats {
    ip: string;
    username: string;
    action: string;
    extradata: string[];
}

export interface AssaultTeamStats {
    battles: number;
    battlesWon: number;
    enemiesKilled: number;
    enemyArmorDestroyed: number;
    enemyAircraftDestroyed: number;
    cPCaptured: number;
    resourcesCaptured: number;
    key?: string;
}

export interface CharacterATStats {
    commandNodeId: Long;
    armyResourceCategoryId: Long;
    killCount: number;
}

export interface CharacterKillStats {
    character: Long;
    kills: number;
    damageDealt: number;
    revengeKill: number;
    killsInARow: number;
}

export interface CharacterStats {
    score: number;
    kills: number;
    deaths: number;
    suicides: number;
    spawns: number;
    bestMultiKill: number;
    saviorKills: number;
    runDistanceInM: number;
    walkDistanceInM: number;
    sprintDistanceInM: number;
    swimDistanceInM: number;
    crouchDistanceInM: number;
    timeOnFoot: number;
    timePlayed: number;
    timeCrouched: number;
    parachuteTime: number;
    parachuteFreefallTime: number;
    parachuteFreefallDistInM: number;
    parachuteSpawns: number;
    parachuteEscape: number;
    sessionsPlayed: number;
    characterDamageDealt: number;
    characterParachuteJumpsSuccessfull: number;
    characterFreefallJumps: number;
    characterTeamKills: number;
    characterRevengeKills: number;
    characterTeamScoreboard345: number;
    characterTeamScoreboard2: number;
    characterTeamScoreboard1: number;
    characterScoreboard1: number;
    characterBattlesWithoutDying: number;
    characterNrOfMultiKill: number;
    characterNrOfBattleWith1000ShotsFired: number;
    characterNrOfBattleWithKillSameEnemy4Times: number;
    characterXp: number;
    characterNrOfBattleInfantryKillXArmor: number;
    characterNrOfBattleArmorKillXArmor: number;
    characterNrOfBattlePlaneKillXArmor: number;
    characterNrOfBattleInfantryKillXInfantry: number;
    characterNrOfBattleArmorKillXInfantry: number;
    characterNrOfBattlePlaneKillXInfantry: number;
    characterNrOfBattleXSaviorKills: number;
    characterNrOfBattleXRevengeKills: number;
    characterNrOfBattleXHeadshots: number;
    characterNrOfBattleXKnifeKills: number;
    characterNrOfBattleXGrenadeKills: number;
    characterNrOfBattleXPistolKills: number;
    vehicleStatistics: VehicleStats[];
    weaponStatistics: WeaponStats[];
    characterkillsStatistics: CharacterKillStats[];
    gamemodeStatistics: GameModeStats[];
    vehiclekillsStatistics: VehicleKillStats[];
    assaultteamStatistics: CharacterATStats[];
    key?: string;
}

export interface DailyCleanup {
    dummy?: number;
}

export interface DoEraseCharacterStats {
    characterId: Long;
}

export interface ExtendedCharacterStats {
    characterId: Long;
    sessionsplayed: number;
    characterStatistics: CharacterStats;
}

export interface FinalizeCharacterStats {
    sessionId: Long;
    winners: Long[];
    premium: Long[];
}

export interface GameModeStats {
    gameMode: number;
    cPCaptures: number;
    cPAssists: number;
    cPTotalInfluence: number;
    resourcesCaptured: number;
    resourcesTotalInfluence: number;
    killAnEnemyCapturing: number;
    killedWhileCapturing: number;
    cPNotSpotted: number;
    gamemodeKillAnEnemyWhileCapturing: number;
    gamemodeAssaultAttackerWon: number;
    gamemodeAssaultDefenderWon: number;
    gamemodeAssaultBattles: number;
    gamemodeSkirmishBattlesWon: number;
    gamemodeSkirmishBattles: number;
}

export interface LeaderBoardRank {
    playerId: Long;
    characterId: Long;
    characterName: string;
    index: number;
    deaths: number;
    kills: number;
    gamerTag: string;
}

export interface Player_Character_ID {
    playerid: Long;
    characterids: Long[];
}

export interface RequestAddPlayerIp {
    playerId: Long;
    ipaddress: string;
}

export interface RequestCachePlayerData {
    playerId: Long;
    playerWarId: Long;
    characterIdList: Long[];
    commandNodeDefinitionIdList: Long[];
}

export interface RequestCacheStatus {
    objectId: Long;
    objectType: string;
}

export interface RequestCharacterRibbons {
    characterId: Long;
}

export interface RequestCharacterSessionRibbons {
    characterId: Long;
}

export interface RequestEarnings {
    playerId: Long;
}

export interface RequestExtractCharacterStats {
    characterId: Long;
    lowToHigh: boolean;
    start: number;
    end: number;
    orderby: string;
}

export interface RequestLeaderBoardRanking {
    start: number;
    stop: number;
    playerids: Player_Character_ID[];
}

export interface RequestLogPlayerPartnerInfo {
    playerId: Long;
    partnerUserId: string;
    partnerId: number;
}

export interface RequestPlayerOnlineData {
    year: number;
    hour: boolean[];
    day: boolean[];
    dayofweek: boolean[];
    week: boolean[];
    month: boolean[];
}

export interface RequestReadAssaultTeamStats {
    warId: Long;
    assaultteamId: Long;
}

export interface RequestReadCharacterStats {
    characterids: Long[];
    ignoreSessionId?: boolean;
}

export interface RequestReadRibbonValue {
    characterId: Long;
    ribbonTemplateId: Long;
}

export interface RequestSessionCharacterStats {
    sessionId: Long;
    characterId?: Long;
}

export interface RequestSetEarnings {
    playerId: Long;
    silverEarned: Long;
    goldEarned: Long;
    silverUsed: Long;
    goldUsed: Long;
}

export interface RequestSumCharacterStats {
    characterId: Long;
    buckets: number;
    startTime: Long;
    endTime: Long;
}

export interface RequestWriteAssaultTeamStats {
    warId: Long;
    assaultteamStatistics: WriteAssaultTeamStats[];
}

export interface RequestWriteCharacterStats {
    sessionId: Long;
    addToRibbon: boolean;
    characterStatistics: WriteCharacterStats[];
}

export interface RequestWriteCharacterXPDebug {
    characterId: Long;
    writeCombatXP: number;
    writeTacticalXP: number;
}

export interface RequestWriteRibbonValue {
    characterId: Long;
    ribbonTemplateId: Long;
    ribbonValue: number;
    ribbonLevel: number;
    nextValue: number;
}

export interface RequestXPs {
    characterId: Long;
}

export interface Response {

}

export interface ResponseAddPlayerIp {
    dummy?: number;
}

export interface ResponseCacheStatus {
    objectId: Long;
    objectType: string;
    isCached: boolean;
}

export interface ResponseCharacterRibbons {
    characterId: Long;
    sessionId: Long;
    characterStatistics: CharacterStats;
    ribbons: Ribbon[];
    actionGamePlayTime: number;
    strategyGamePlayTime: number;
    wins: number;
    losses: number;
    creditsEarned: number;
    creditsUsed: number;
}

export interface ResponseEarnings {
    playerId: Long;
    silverEarned: Long;
    goldEarned: Long;
    silverUsed: Long;
    goldUsed: Long;
}

export interface ResponseExtractCharacterStats {
    extendedCharacterStatistics: ExtendedCharacterStats[];
}

export interface ResponseFinalizeCharacterStats {
    rewards: ResponseFinalizeCharacterStatsPlayerReward[];
}

export interface ResponseFinalizeCharacterStatsPlayerReward {
    characterId: Long;
    creditsEarned: number;
    creditsUsed: number;
    isWinner: boolean;
    combatXP: number;
    tacticalXP: number;
}

export interface ResponseLeaderBoardRanking {
    startEnd: LeaderBoardRank[];
    characters: LeaderBoardRank[];
}

export interface ResponseLogPlayerPartnerInfo {
    dummy?: number;
}

export interface ResponsePlayerOnlineData {
    weekday: Long[];
    week: Long[];
    hour: Long[];
    month: Long[];
    day: Long[];
}

export interface ResponseReadAssaultTeamStats {
    warId: Long;
    assaultteamId: Long;
    assaultteamStatistics: AssaultTeamStats;
}

export interface ResponseReadCharacterStats {
    entries: ResponseReadCharacterStatsEntry[];
}

export interface ResponseReadCharacterStatsEntry {
    characterId: Long;
    alltimeCharacterStatistics: CharacterStats;
    attributes: Ribbon[];
}

export interface ResponseReadRibbonValue {
    characterId: Long;
    ribbonTemplateId: Long;
    ribbonValue: number;
    ribbonLevel: number;
}

export interface ResponseSessionCharacterStats {
    extended: ExtendedCharacterStats[];
}

export interface ResponseSumCharacterStats {
    characterStatistics: CharacterStats[];
}

export interface ResponseWriteCharacterXPDebug {
    characterId: Long;
    totalCombatXP: number;
    totalTacticalXP: number;
}

export interface ResponseXPs {
    combatXP: number;
    tacticalXP: number;
}

export interface Ribbon {
    ribbonTemplateId: Long;
    currentValue: number;
    currentLevel: number;
    nextValue: number;
}

export interface SR {
    response: ResponseType;
}

export interface VehicleKillStats {
    weapon: number;
    vehicle: number;
    kills: number;
    damage: number;
}

export interface VehicleStats {
    vehicle: number;
    destroyed: number;
    lost: number;
    distdriven: number;
    distdrivenpassenger: number;
    timespent: number;
    damagedealt: number;
}

export interface WeaponStats {
    weapon: number;
    shotsfired: number;
    headshots: number;
    hits: number;
    kills: number;
    killed: number;
    timespent: number;
    characterkills: number;
    mosthitsinarow: number;
    damagetoplayers: number;
    damagecloserange: number;
    damagemidlowrange: number;
    damagemidhighrange: number;
    damagefarrange: number;
    killscloserange: number;
    killsmidlowrange: number;
    killsmidhighrange: number;
    killsfarrange: number;
}

export interface WriteAssaultTeamStats {
    assaultteamId: Long;
    assaultteamStatistics: AssaultTeamStats;
}

export interface WriteCharacterStats {
    characterId: Long;
    characterStatistics: CharacterStats;
    attributes: Ribbon[];
}
