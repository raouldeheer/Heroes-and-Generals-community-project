
export interface Battle {
    id: string;
    warid: string;
    mapEntityId: string;
    mapEntityTypeId: string;
    start: string;
    factioncount: number;
    excludedFactionId: string;
    position: number;
    activationTimeStamp: string;
}

export interface MapPoint {
    id: string;
    mapid: string;
}

export interface Battlefield extends MapPoint {
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: string;
}

export interface Accesspoint {
    id: string;
    mapid: string;
    template: string;
    battlefield: string;
}

export interface AccesspointTemplate {
    id: string;
    gamemap: string;
    posx: number;
    posy: number;
    abbr: string;
    actionid: number;
}

export interface Supplyline extends MapPoint {
    accesspoint1Id: string;
    accesspoint2Id: string;
    supplylinetemplateid: string;
}

export interface Faction {
    factionId: string;
    factionTemplateId: string;
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
    ownedMajorCities: string[];
}