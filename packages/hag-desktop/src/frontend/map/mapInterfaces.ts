
export interface Battlefield {
    id: string;
    mapid: string;
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: string;
    rotation?: number;
}

export interface battlefieldstatus {
    id: string;
    warid: string;
    battlefieldid: string;
    factionid: string;
    color: string;
}

export interface battle {
    id: string;
    warid: string;
    mapEntityId: string;
    mapEntityTypeId: string;
    start: string;
    factioncount: number;
    excludedFactionId: string;
    position: string;
    activationTimeStamp: string;
}

export interface supplylinestatus {
    id: string;
    warid: string;
    factionid: string;
    supplylineid: string;
    color: string;
}

export interface supplyline {
    id: string;
    accesspoint1Id: string;
    accesspoint2Id: string;
    posx1: number;
    posy1: number;
    posx2: number;
    posy2: number;
}

export type battleBattlefieldPair = { battle: battle, battlefield: Battlefield; };
