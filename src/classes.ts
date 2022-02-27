import BufferCursor from "./buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const ServerInfoPackage = protobuf.loadSync("./src/protos/ServerInfo.proto");
const WarPackage = protobuf.loadSync("./src/protos/War.proto");
const PlayerPackage = protobuf.loadSync("./src/protos/Player.proto");
const MissionDetailsPackage = protobuf.loadSync("./src/protos/MissionDetails.proto");

export class QueryServerInfoResponse {
    static proto = ServerInfoPackage.lookupType("ServerInfo.QueryServerInfoResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class zipchunk {
    static parse(buf: BufferCursor): string {
        return "🔽 Zipped data";
    }
}

export class query_war_catalogue_request {
    static proto = WarPackage.lookupType("War.query_war_catalogue_request");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        includeWarId?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class query_war_catalogue_response {
    static proto = WarPackage.lookupType("War.query_war_catalogue_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryShopWarBondItemsResponse {
    static proto = PlayerPackage.lookupType("Player.QueryShopWarBondItemsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetChatChannelsSubscribedResponse {
    static proto = PlayerPackage.lookupType("Player.GetChatChannelsSubscribedResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RequestReadCharacterStats {
    static proto = PlayerPackage.lookupType("Player.RequestReadCharacterStats");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    // TODO implement toBuffer
}

export class GetAssaultTeamStatsRequest {
    static proto = WarPackage.lookupType("War.GetAssaultTeamStatsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        commandNodeDefinitionIds?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetAssaultTeamStatsResponse {
    static proto = WarPackage.lookupType("War.GetAssaultTeamStatsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryVoucherPacksRequest {
    static proto = PlayerPackage.lookupType("Player.QueryVoucherPacksRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryVoucherPacksResponse {
    static proto = PlayerPackage.lookupType("Player.QueryVoucherPacksResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class SteamQueryBundlesRequest {
    static proto = PlayerPackage.lookupType("Player.SteamQueryBundlesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class SteamQueryBundlesResponse {
    static proto = PlayerPackage.lookupType("Player.SteamQueryBundlesResponse");

    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryActiveSurveyRequest {
    static proto = PlayerPackage.lookupType("Player.QueryActiveSurveyRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (): Buffer =>
        ProtoToBuf(this.proto, {});
}

export class QueryActiveSurveyResponse {
    static proto = PlayerPackage.lookupType("Player.QueryActiveSurveyResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetMissionDetailsRequest {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        missionId: Long,
        battleId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetMissionDetailsResponse {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode {
    static proto = WarPackage.lookupType("War.transport_commandnode");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode_response {
    static proto = WarPackage.lookupType("War.transport_commandnode_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliverequest {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepaliverequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliveresponse {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepaliveresponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepalive {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepalive");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner {
    static proto = WarPackage.lookupType("War.query_commandnode_owner");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner_response {
    static proto = WarPackage.lookupType("War.query_commandnode_owner_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesRequest {
    static proto = PlayerPackage.lookupType("Player.GetGoldPricesRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetGoldPricesResponse {
    static proto = PlayerPackage.lookupType("Player.GetGoldPricesResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
