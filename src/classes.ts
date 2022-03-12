import BufferCursor from "./buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const Protos = protobuf.loadSync("./src/protos/All.proto");

export class QueryServerInfoResponse {
    static proto = Protos.lookupType("HnG_States.QueryServerInfoResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class zipchunk {
    static proto = Protos.lookupType("netsysmessages.zipchunk");
    static parse = (buf: BufferCursor) =>
        (() => BufToDecodedProto(this.proto, buf.buffer.slice(8)));
}

export class query_war_catalogue_request {
    static proto = Protos.lookupType("HnG_States.query_war_catalogue_request");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        includeWarId?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class query_war_catalogue_response {
    static proto = Protos.lookupType("HnG_States.query_war_catalogue_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryShopWarBondItemsResponse {
    static proto = Protos.lookupType("HnG_States.QueryShopWarBondItemsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetChatChannelsSubscribedResponse {
    static proto = Protos.lookupType("HnG_States.GetChatChannelsSubscribedResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RequestReadCharacterStats {
    static proto = Protos.lookupType("statrequests.RequestReadCharacterStats");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    // TODO implement toBuffer
}

export class GetAssaultTeamStatsRequest {
    static proto = Protos.lookupType("HnG_States.GetAssaultTeamStatsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        commandNodeDefinitionIds?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetAssaultTeamStatsResponse {
    static proto = Protos.lookupType("HnG_States.GetAssaultTeamStatsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryVoucherPacksRequest {
    static proto = Protos.lookupType("HnG_States.QueryVoucherPacksRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryVoucherPacksResponse {
    static proto = Protos.lookupType("HnG_States.QueryVoucherPacksResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class SteamQueryBundlesRequest {
    static proto = Protos.lookupType("HnG_States.SteamQueryBundlesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class SteamQueryBundlesResponse {
    static proto = Protos.lookupType("HnG_States.SteamQueryBundlesResponse");

    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
 
export class QueryActiveSurveyRequest {
    static proto = Protos.lookupType("HnG_States.QueryActiveSurveyRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (): Buffer =>
        ProtoToBuf(this.proto, {});
}

export class QueryActiveSurveyResponse {
    static proto = Protos.lookupType("HnG_States.QueryActiveSurveyResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetMissionDetailsRequest {
    static proto = Protos.lookupType("HnG_States.GetMissionDetailsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        missionId: Long,
        battleId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetMissionDetailsResponse {
    static proto = Protos.lookupType("HnG_States.GetMissionDetailsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode {
    static proto = Protos.lookupType("HnG_States.transport_commandnode");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode_response {
    static proto = Protos.lookupType("HnG_States.transport_commandnode_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliverequest {
    static proto = Protos.lookupType("netsysmessages.keepaliverequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliveresponse {
    static proto = Protos.lookupType("netsysmessages.keepaliveresponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepalive {
    static proto = Protos.lookupType("netsysmessages.keepalive");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner {
    static proto = Protos.lookupType("HnG_States.query_commandnode_owner");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner_response {
    static proto = Protos.lookupType("HnG_States.query_commandnode_owner_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesRequest {
    static proto = Protos.lookupType("HnG_States.GetGoldPricesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesResponse {
    static proto = Protos.lookupType("HnG_States.GetGoldPricesResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class JoinMatchMakingRequest {
    static proto = Protos.lookupType("HnG_States.JoinMatchMakingRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class JoinMatchMakingResponse {
    static proto = Protos.lookupType("HnG_States.JoinMatchMakingResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class CancelJoinMatchMakingRequest {
    static proto = Protos.lookupType("HnG_States.CancelJoinMatchMakingRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class CancelJoinMatchMakingResponse {
    static proto = Protos.lookupType("HnG_States.CancelJoinMatchMakingResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class ResponseReadCharacterStats {
    static proto = Protos.lookupType("statrequests.ResponseReadCharacterStats");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetBattleReportRequest {
    static proto = Protos.lookupType("HnG_States.GetBattleReportRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetBattleReportResponse {
    static proto = Protos.lookupType("HnG_States.GetBattleReportResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
