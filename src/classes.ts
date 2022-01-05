export const requestBuf = Buffer.from([0x0a, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x08, 0x00]);

export function bytesToString(buf: Buffer): string {
    const bytes = [];
    for (const value of buf) {
        bytes.push((value >= 33 && value <= 126) ? value : 46);
    }
    return Buffer.from(bytes).toString("ascii");
}

export function parseGroups(buf: Buffer) {
    const groups = [];
    const len = buf.readUInt32LE() - 4;
    let cursor = 4;
    do {
        const partLen = buf.readUInt32LE(cursor);
        cursor += 4;
        if (partLen !== 0) {
            groups.push(buf.slice(cursor, cursor + partLen - 4));
            cursor += partLen;
        }
    } while (len > cursor);
    return groups;
}

export class QueryServerInfo {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class QueryServerInfoResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" {
        return "Response";
        // TODO do QueryServerInfoResponse parsing here.
    }
}

export class QueryBannedMachineRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" {
        return "Request";
        // TODO do QueryBannedMachineRequest parsing here.
    }
}

export class QueryBannedMachineResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x12, 0x00
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class zipchunk {
    constructor() { }
    static parse(buf: Buffer): "Zipped map data" {
        return "Zipped map data";
    }
}

export class query_war_catalogue_request {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class query_war_catalogue_response {
    constructor() { }
    static parse(buf: Buffer): "War data" {
        return "War data";
        // TODO do query_war_catalogue_response parsing here.
    }
}

export class QueryShopWarBondItemsRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class QueryShopWarBondItemsResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class GetChatChannelsSubscribedRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class GetChatChannelsSubscribedResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class RequestReadCharacterStats {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsRequest {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsResponse {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class QueryVoucherPacksRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class QueryVoucherPacksResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x0a, 0x00, 0x00, 0x00,
            0x06, 0x00, 0x00, 0x00,
            0x08, 0x01
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class SteamQueryBundlesRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return requestBuf.equals(buf) ? "Request" : "Error";
    }
}

export class SteamQueryBundlesResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x08, 0x01, 0x10, 0x01
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class QueryActiveSurveyRequest {
    constructor() { }
    static parse(buf: Buffer): "Request" | "Error" {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf) ? "Request" : "Error";
    }
}

export class QueryActiveSurveyResponse {
    constructor() { }
    static parse(buf: Buffer): "Response" | "Error" {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x0a, 0x00, 0x12, 0x00
        ]).equals(buf) ? "Response" : "Error";
    }
}

export class GetMissionDetailsRequest {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class GetMissionDetailsResponse {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class transport_commandnode {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class transport_commandnode_response {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class keepaliverequest {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class keepalive {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class query_commandnode_owner {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class query_commandnode_owner_response {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesRequest {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesResponse {
    constructor() { }
    static parse(buf: Buffer) {
        // TODO do parsing here.
    }
}
