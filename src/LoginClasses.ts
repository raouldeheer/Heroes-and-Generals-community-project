import BufferCursor from "./buffercursor";
import { dummyBuffer } from "./classes";
import { userAgent, userName, uuid } from "./env";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const LoginPackage = protobuf.loadSync("./src/protos/Login.proto");

export class LoginQueueUpdate {
    static proto = LoginPackage.lookupType("Login.LoginQueueUpdate");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_begin {
    static proto = LoginPackage.lookupType("Login.login2_begin");
    static example = dummyBuffer; // TODO remove
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
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_response {
    static proto = LoginPackage.lookupType("Login.login2_response");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        tempSessionid: string,
        digest: string,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class login2_result {
    static proto = LoginPackage.lookupType("Login.login2_result");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin {
    static proto = LoginPackage.lookupType("Login.login2_postlogin");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class login2_postlogin_result {
    static proto = LoginPackage.lookupType("Login.login2_postlogin_result");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class RedeemDailyLoginRewardRequest {
    static proto = LoginPackage.lookupType("Login.RedeemDailyLoginRewardRequest");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        playerId: number,
    }): Buffer => ProtoToBuf(this.proto, payload);
}

export class RedeemDailyLoginRewardResponse {
    static proto = LoginPackage.lookupType("Login.RedeemDailyLoginRewardResponse");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}

export class QueryBannedMachineRequest {
    static proto = LoginPackage.lookupType("Login.QueryBannedMachineRequest");
    static uuid = Buffer.from(uuid, "utf8").toString("hex");
    static example = Buffer.from(
        "5400000050000000" +
        "1224" + QueryBannedMachineRequest.uuid +
        "0a24" + QueryBannedMachineRequest.uuid,
        "hex"
    ); // TODO remove
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
    static example = Buffer.from([
        0x0c, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x00, 0x00,
        0x08, 0x00, 0x12, 0x00
    ]); // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
}