import BufferCursor from "./buffercursor";

export const requestBuf = Buffer.from([0x0a, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x08, 0x00]);

export class QueryServerInfo {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryServerInfoResponse {
    static parse(buf: BufferCursor): string {
        return "🔽 Response";
        // TODO do QueryServerInfoResponse parsing here.
    }
}

export class QueryBannedMachineRequest {
    static parse(buf: BufferCursor): string {
        return "🔼 Request";
        // TODO do QueryBannedMachineRequest parsing here.
    }
}

export class QueryBannedMachineResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x12, 0x00
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class zipchunk {
    static parse(buf: BufferCursor): string {
        return "🔽 Zipped map data";
    }
}

export class query_war_catalogue_request {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class query_war_catalogue_response {
    static parse(buf: BufferCursor): string {
        return "🔽 War data";
        // TODO do query_war_catalogue_response parsing here.
    }
}

export class QueryShopWarBondItemsRequest {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryShopWarBondItemsResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class GetChatChannelsSubscribedRequest {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class GetChatChannelsSubscribedResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class RequestReadCharacterStats {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsRequest {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsResponse {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class QueryVoucherPacksRequest {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryVoucherPacksResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x0a, 0x00, 0x00, 0x00,
            0x06, 0x00, 0x00, 0x00,
            0x08, 0x01
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class SteamQueryBundlesRequest {
    static parse(buf: BufferCursor): string {
        return requestBuf.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SteamQueryBundlesResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x08, 0x01, 0x10, 0x01
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class QueryActiveSurveyRequest {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x08, 0x00, 0x00, 0x00,
            0x04, 0x00, 0x00, 0x00
        ]).equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryActiveSurveyResponse {
    static parse(buf: BufferCursor): string {
        return Buffer.from([
            0x0c, 0x00, 0x00, 0x00,
            0x08, 0x00, 0x00, 0x00,
            0x0a, 0x00, 0x12, 0x00
        ]).equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class GetMissionDetailsRequest {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetMissionDetailsResponse {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class transport_commandnode {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class transport_commandnode_response {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class keepaliverequest {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class keepalive {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class query_commandnode_owner {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class query_commandnode_owner_response {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesRequest {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesResponse {
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}
