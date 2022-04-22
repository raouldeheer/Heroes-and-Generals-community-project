import BufferCursor from "../buffercursor";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const Protos = protobuf.loadSync("../hagcp-network-client/src/protos/All.proto");

export class LoginQueueUpdate {
    static proto = Protos.lookupType("HnG_States.LoginQueueUpdate");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_begin {
    static proto = Protos.lookupType("HnG_States.login2_begin");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        username: string,
        deviceid: string,
        acceptingPrivacyPolicy: boolean,
        acceptingBattlEyePolicy: boolean,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class login2_challenge {
    static proto = Protos.lookupType("HnG_States.login2_challenge");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_response {
    static proto = Protos.lookupType("HnG_States.login2_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        tempSessionid: string,
        digest: string,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class login2_result {
    static proto = Protos.lookupType("HnG_States.login2_result");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin {
    static proto = Protos.lookupType("HnG_States.login2_postlogin");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin_result {
    static proto = Protos.lookupType("HnG_States.login2_postlogin_result");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RedeemDailyLoginRewardRequest {
    static proto = Protos.lookupType("HnG_States.RedeemDailyLoginRewardRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        playerId: number,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class RedeemDailyLoginRewardResponse {
    static proto = Protos.lookupType("HnG_States.RedeemDailyLoginRewardResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryBannedMachineRequest {
    static proto = Protos.lookupType("HnG_States.QueryBannedMachineRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        machineIdentifier: string,
        machineIdentifierOld: string,
    } = {
        machineIdentifier: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
        machineIdentifierOld: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryBannedMachineResponse {
    static proto = Protos.lookupType("HnG_States.QueryBannedMachineResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
