import BufferCursor from "./buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const Protos = protobuf.loadSync("./src/protos/All.proto");

export class QueryServerInfoResponse {
    static proto = Protos.lookupType("ServerInfo.QueryServerInfoResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class zipchunk {
    static proto = Protos.lookupType("Common.zipchunk");
    static parse = (buf: BufferCursor) =>
        (() => BufToDecodedProto(this.proto, buf.buffer.slice(8)));
}

export class query_war_catalogue_request {
    static proto = Protos.lookupType("War.query_war_catalogue_request");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        includeWarId?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class query_war_catalogue_response {
    static proto = Protos.lookupType("War.query_war_catalogue_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryShopWarBondItemsResponse {
    static proto = Protos.lookupType("Player.QueryShopWarBondItemsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetChatChannelsSubscribedResponse {
    static proto = Protos.lookupType("Player.GetChatChannelsSubscribedResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RequestReadCharacterStats {
    static proto = Protos.lookupType("Player.RequestReadCharacterStats");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    // TODO implement toBuffer
}

export class GetAssaultTeamStatsRequest {
    static proto = Protos.lookupType("War.GetAssaultTeamStatsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        commandNodeDefinitionIds?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetAssaultTeamStatsResponse {
    static proto = Protos.lookupType("War.GetAssaultTeamStatsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryVoucherPacksRequest {
    static proto = Protos.lookupType("Player.QueryVoucherPacksRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryVoucherPacksResponse {
    static proto = Protos.lookupType("Player.QueryVoucherPacksResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class SteamQueryBundlesRequest {
    static proto = Protos.lookupType("Player.SteamQueryBundlesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class SteamQueryBundlesResponse {
    static proto = Protos.lookupType("Player.SteamQueryBundlesResponse");

    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryActiveSurveyRequest {
    static proto = Protos.lookupType("Player.QueryActiveSurveyRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (): Buffer =>
        ProtoToBuf(this.proto, {});
}

export class QueryActiveSurveyResponse {
    static proto = Protos.lookupType("Player.QueryActiveSurveyResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetMissionDetailsRequest {
    static proto = Protos.lookupType("MissionDetails.GetMissionDetailsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        missionId: Long,
        battleId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetMissionDetailsResponse {
    static proto = Protos.lookupType("MissionDetails.GetMissionDetailsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode {
    static proto = Protos.lookupType("War.transport_commandnode");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode_response {
    static proto = Protos.lookupType("War.transport_commandnode_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliverequest {
    static proto = Protos.lookupType("ServerInfo.keepaliverequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliveresponse {
    static proto = Protos.lookupType("ServerInfo.keepaliveresponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepalive {
    static proto = Protos.lookupType("ServerInfo.keepalive");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner {
    static proto = Protos.lookupType("War.query_commandnode_owner");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner_response {
    static proto = Protos.lookupType("War.query_commandnode_owner_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesRequest {
    static proto = Protos.lookupType("Player.GetGoldPricesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesResponse {
    static proto = Protos.lookupType("Player.GetGoldPricesResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
