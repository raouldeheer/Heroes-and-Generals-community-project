/* eslint-disable @typescript-eslint/no-empty-interface */
import Long from "long";

export interface GetHandlerTypes {
    dummy?: number;
}

export interface keepalive {
    value: number;
}

export interface keepaliverequest {
    value: number;
}

export interface keepaliveresponse {
    value: number;
}

export interface KeyValueSyncCmd_GetVersion {
    dummy?: number;
}

export interface KeyValueSyncCmd_GetVersionResponse {
    version?: Long;
}

export interface KeyValueSyncCmd_RequestSync {

}

export interface KeyValueSyncCmd_RequestSyncResponse {
    dummy?: number;
}

export interface ResponseHandlerTypes {
    names: string[];
}

export interface zipchunk {
    data: Buffer;
}
