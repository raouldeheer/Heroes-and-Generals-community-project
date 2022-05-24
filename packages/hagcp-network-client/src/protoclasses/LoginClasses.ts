import { ClassKeys, packetClassParser } from "../protolinking/classKeys";
import { getDefaultClass } from "./proto";

export const loginClasses: Iterable<readonly [ClassKeys, packetClassParser]> = [
    [ClassKeys.login2_begin, getDefaultClass("HnG_States.login2_begin")],
    [ClassKeys.login2_challenge, getDefaultClass("HnG_States.login2_challenge")],
    [ClassKeys.login2_response, getDefaultClass("HnG_States.login2_response")],
    [ClassKeys.login2_result, getDefaultClass("HnG_States.login2_result")],
    [ClassKeys.LoginQueueUpdate, getDefaultClass("HnG_States.LoginQueueUpdate")],
    [ClassKeys.login2_postlogin, getDefaultClass("HnG_States.login2_postlogin")],
    [ClassKeys.login2_postlogin_result, getDefaultClass("HnG_States.login2_postlogin_result")],
    [ClassKeys.QueryBannedMachineRequest, getDefaultClass("HnG_States.QueryBannedMachineRequest", {
        machineIdentifier: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
        machineIdentifierOld: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
    })],
    [ClassKeys.QueryBannedMachineResponse, getDefaultClass("HnG_States.QueryBannedMachineResponse")],
    [ClassKeys.RedeemDailyLoginRewardRequest, getDefaultClass("HnG_States.RedeemDailyLoginRewardRequest")],
    [ClassKeys.RedeemDailyLoginRewardResponse, getDefaultClass("HnG_States.RedeemDailyLoginRewardResponse")],
    [ClassKeys.QueryVoucherPacksRequest, getDefaultClass("HnG_States.QueryVoucherPacksRequest")],
    [ClassKeys.QueryVoucherPacksResponse, getDefaultClass("HnG_States.QueryVoucherPacksResponse")],
    [ClassKeys.SteamQueryBundlesRequest, getDefaultClass("HnG_States.SteamQueryBundlesRequest")],
    [ClassKeys.SteamQueryBundlesResponse, getDefaultClass("HnG_States.SteamQueryBundlesResponse")],
    [ClassKeys.QueryActiveSurveyRequest, getDefaultClass("HnG_States.QueryActiveSurveyRequest")],
    [ClassKeys.QueryActiveSurveyResponse, getDefaultClass("HnG_States.QueryActiveSurveyResponse")],
]




