import BufferCursor from "./buffercursor";
import { BufToDecodedProto, ProtoToBuf, ProtoToString } from "./proto";
import protobuf from "protobufjs";

export const dummyBuffer = Buffer.from("0a000000060000000800", "hex");
export const emptyBuffer = Buffer.from("0800000004000000", "hex");

const ServerInfoPackage = protobuf.loadSync("./src/protos/ServerInfo.proto");
const WarPackage = protobuf.loadSync("./src/protos/War.proto");
const PlayerPackage = protobuf.loadSync("./src/protos/Player.proto");
const MissionDetailsPackage = protobuf.loadSync("./src/protos/MissionDetails.proto");

export class QueryServerInfoResponse {
    static proto = ServerInfoPackage.lookupType("ServerInfo.QueryServerInfoResponse");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class zipchunk {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return "🔽 Zipped data";
    }
}

export class query_war_catalogue_request {
    static proto = WarPackage.lookupType("War.query_war_catalogue_request");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        includeWarId?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class query_war_catalogue_response {
    static proto = WarPackage.lookupType("War.query_war_catalogue_response");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryShopWarBondItemsResponse {
    static proto = PlayerPackage.lookupType("Player.QueryShopWarBondItemsResponse");
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetChatChannelsSubscribedResponse {
    static proto = PlayerPackage.lookupType("Player.GetChatChannelsSubscribedResponse");
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RequestReadCharacterStats {
    static proto = PlayerPackage.lookupType("Player.RequestReadCharacterStats");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    // TODO implement toBuffer
}

export class GetAssaultTeamStatsRequest {
    static proto = WarPackage.lookupType("War.GetAssaultTeamStatsRequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        commandNodeDefinitionIds?: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetAssaultTeamStatsResponse {
    static proto = WarPackage.lookupType("War.GetAssaultTeamStatsResponse");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryVoucherPacksRequest {
    static proto = PlayerPackage.lookupType("Player.QueryVoucherPacksRequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryVoucherPacksResponse {
    static proto = PlayerPackage.lookupType("Player.QueryVoucherPacksResponse");
    static example = Buffer.from([
        0x0a, 0x00, 0x00, 0x00,
        0x06, 0x00, 0x00, 0x00,
        0x08, 0x01
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class SteamQueryBundlesRequest {
    static proto = PlayerPackage.lookupType("Player.SteamQueryBundlesRequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        characterId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class SteamQueryBundlesResponse {
    static proto = PlayerPackage.lookupType("Player.SteamQueryBundlesResponse");
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x08, 0x01, 0x10, 0x01
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryActiveSurveyRequest {
    static proto = PlayerPackage.lookupType("Player.QueryActiveSurveyRequest");
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (): Buffer =>
        ProtoToBuf(this.proto, {});
}

export class QueryActiveSurveyResponse {
    static proto = PlayerPackage.lookupType("Player.QueryActiveSurveyResponse");
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x0a, 0x00, 0x12, 0x00
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class GetMissionDetailsRequest {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsRequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        missionId: Long,
        battleId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetMissionDetailsResponse {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsResponse");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode {
    static proto = WarPackage.lookupType("War.transport_commandnode");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class transport_commandnode_response {
    static proto = WarPackage.lookupType("War.transport_commandnode_response");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliverequest {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepaliverequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepaliveresponse {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepaliveresponse");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class keepalive {
    static proto = ServerInfoPackage.lookupType("ServerInfo.keepalive");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class query_commandnode_owner {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class query_commandnode_owner_response {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetGoldPricesResponse {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}
