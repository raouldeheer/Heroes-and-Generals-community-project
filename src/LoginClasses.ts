import BufferCursor from "./buffercursor";
import { dummyBuffer } from "./classes";
import { userAgent, userName } from "./env";
import { BufToDecodedProto, ProtoToBuf } from "./proto";
import protobuf from "protobufjs";

const LoginPackage = protobuf.loadSync("./src/protos/Login.proto");

export class StartLogin {
    static proto = LoginPackage.lookupType("Login.StartLogin");
    static example = dummyBuffer; // TODO remove
    static parse = (buf: BufferCursor) =>
        BufToDecodedProto(this.proto, buf.buffer.slice(8));
    static toBuffer = (payload: {
        dummy: number,
    } = { dummy: 0 }): Buffer => ProtoToBuf(this.proto, payload);
}

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
    static example = dummyBuffer; 
    static parse(_buf: BufferCursor): string {
        return "🔼 Request";
        // TODO find out what these bytes do.
    }
}

export class RedeemDailyLoginRewardResponse {
    static example = dummyBuffer;
    static parse(buf: BufferCursor): string {
        return this.example.equals(buf.buffer) ? "🔽 Response" : "Error";
    }
}
