import BufferCursor from "./buffercursor";
import { uuid } from "./env";
import { BufToDecodedProto, ProtoToBuf, ProtoToString } from "./proto";
import protobuf from "protobufjs";
import long from "long";

export const dummyBuffer = Buffer.from("0a000000060000000800", "hex");
export const emptyBuffer = Buffer.from("0800000004000000", "hex");

export class QueryServerInfo {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryServerInfoResponse {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return "🔽 Response";
        // TODO do QueryServerInfoResponse parsing here.
    }
}

export class QueryBannedMachineRequest {
    static uuid = Buffer.from(uuid, "utf8").toString("hex");
    static example = Buffer.from(
        "5400000050000000" +
        "1224" + QueryBannedMachineRequest.uuid +
        "0a24" + QueryBannedMachineRequest.uuid,
        "hex"
    );
    static parse(buf: BufferCursor): string {
        return "🔼 Request";
        // TODO do QueryBannedMachineRequest parsing here.
    }
}

export class QueryBannedMachineResponse {
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x12, 0x00
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class zipchunk {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return "🔽 Zipped data";
    }
}

export class query_war_catalogue_request {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class query_war_catalogue_response {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return "🔽 War data";
        // TODO do query_war_catalogue_response parsing here.
    }
}

export class QueryShopWarBondItemsRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryShopWarBondItemsResponse {
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class GetChatChannelsSubscribedRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class GetChatChannelsSubscribedResponse {
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class RequestReadCharacterStats {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class GetAssaultTeamStatsResponse {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class QueryVoucherPacksRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryVoucherPacksResponse {
    static example = Buffer.from([
        0x0a, 0x00, 0x00, 0x00,
        0x06, 0x00, 0x00, 0x00,
        0x08, 0x01
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class SteamQueryBundlesRequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class SteamQueryBundlesResponse {
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x08, 0x01, 0x10, 0x01
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}

export class QueryActiveSurveyRequest {
    static example = Buffer.from([
        0x08, 0x00, 0x00, 0x00,
        0x04, 0x00, 0x00, 0x00
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔼 Request" : "Error";
    }
}

export class QueryActiveSurveyResponse {
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x0a, 0x00, 0x12, 0x00
    ]);
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}
const MissionDetailsPackage = protobuf.loadSync("./src/protos/MissionDetails.proto");

export class GetMissionDetailsRequest {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsRequest");
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        const object = BufToDecodedProto(this.proto, buf.buffer.slice(8));
        const str = ProtoToString(object);
        return str;
    }
    static toBuffer = (payload: {
        missionId: Long,
        battleId: Long,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class GetMissionDetailsResponse {
    static proto = MissionDetailsPackage.lookupType("MissionDetails.GetMissionDetailsResponse");
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        const object = BufToDecodedProto(this.proto, buf.buffer.slice(8));
        const str = ProtoToString(object);
        return str;
    }
}

export class transport_commandnode {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class transport_commandnode_response {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class keepaliverequest {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
}

export class keepalive {
    static example = dummyBuffer;
    static parse(buf: BufferCursor) {
        // TODO do parsing here.
    }
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
