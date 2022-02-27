import BufferCursor from "./buffercursor";
import { userAgent, userName, uuid } from "./env";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const LoginPackage = protobuf.loadSync("./src/protos/Login.proto");

export class LoginQueueUpdate {
    static proto = LoginPackage.lookupType("Login.LoginQueueUpdate");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_begin {
    static proto = LoginPackage.lookupType("Login.login2_begin");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        username: string,
        deviceid: string,
        acceptingPrivacyPolicy: boolean,
        acceptingBattlEyePolicy: boolean,
    } = {
            username: userName,
            deviceid: userAgent,
            acceptingPrivacyPolicy: false,
            acceptingBattlEyePolicy: false,
        }): Buffer => ProtoToBuf(this.proto, payload);
}

export class login2_challenge {
    static proto = LoginPackage.lookupType("Login.login2_challenge");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_response {
    static proto = LoginPackage.lookupType("Login.login2_response");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        tempSessionid: string,
        digest: string,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class login2_result {
    static proto = LoginPackage.lookupType("Login.login2_result");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin {
    static proto = LoginPackage.lookupType("Login.login2_postlogin");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin_result {
    static proto = LoginPackage.lookupType("Login.login2_postlogin_result");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RedeemDailyLoginRewardRequest {
    static proto = LoginPackage.lookupType("Login.RedeemDailyLoginRewardRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        playerId: number,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class RedeemDailyLoginRewardResponse {
    static proto = LoginPackage.lookupType("Login.RedeemDailyLoginRewardResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryBannedMachineRequest {
    static proto = LoginPackage.lookupType("Login.QueryBannedMachineRequest");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        machineIdentifier: string,
        machineIdentifierOld: string,
    } = {
        machineIdentifier: uuid,
        machineIdentifierOld: uuid,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class QueryBannedMachineResponse {
    static proto = LoginPackage.lookupType("Login.QueryBannedMachineResponse");
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}
