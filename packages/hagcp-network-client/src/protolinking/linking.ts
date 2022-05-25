import { BufferCursor } from "hagcp-utils";
import { KeyValueChangeSet } from "../protoclasses/keyValueChangeSet";
import { getDefaultClass } from "../protoclasses/proto";
import { ClassKeys } from "./classKeys";

export interface packetClassParser {
    parse: (buf: BufferCursor) => void | object;
    toBuffer: (payload?: any) => Buffer;
}

const dummyClass = getDefaultClass("Common.Dummy", { dummy: 0 });
const dummyClasses: Iterable<readonly [ClassKeys, packetClassParser]> = [
    ClassKeys.StartLogin,
    ClassKeys.QueryServerInfo,
    ClassKeys.subscribeplayerview,
    ClassKeys.unsubscribeplayerview,
    ClassKeys.subscribecommandnodeview,
    ClassKeys.SubscribeHostingCenterInfoView,
    ClassKeys.subscribefriendview,
    ClassKeys.SubscribeShopView,
    ClassKeys.subscribeignoredplayerview,
    ClassKeys.SubscribeMessageView,
    ClassKeys.subscribewarmaplightview,
    ClassKeys.subscribebattlesview,
    ClassKeys.subscriberesourceview,
    ClassKeys.QueryShopWarBondItemsRequest,
    ClassKeys.GetChatChannelsSubscribedRequest,
    ClassKeys.subscriberesponse,
    ClassKeys.SubscribePlayerMissionViewRequest,
    ClassKeys.subscribesoldierview,
    ClassKeys.unsubscribecommandnodeview,
    ClassKeys.unsubscribewarmapview,
    ClassKeys.unsubscriberesourceview,
    ClassKeys.UnsubscribePlayerMissionViewRequest,
    ClassKeys.unsubscribebattlesview,
    ClassKeys.unsubscribewarmaplightview,
    ClassKeys.subscribewarmapview,
].map(key => ([key, dummyClass]));

export const keyToClass = new Map<ClassKeys, packetClassParser>([
    /*
     * Login classes 
     */
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
    /*
     * Request classes 
     */
    [ClassKeys.RequestReadCharacterStats, getDefaultClass("statrequests.RequestReadCharacterStats")],
    [ClassKeys.ResponseReadCharacterStats, getDefaultClass("statrequests.ResponseReadCharacterStats")],
    [ClassKeys.GetMissionDetailsRequest, getDefaultClass("HnG_States.GetMissionDetailsRequest")],
    [ClassKeys.GetMissionDetailsResponse, getDefaultClass("HnG_States.GetMissionDetailsResponse")],
    [ClassKeys.transport_commandnode, getDefaultClass("HnG_States.transport_commandnode")],
    [ClassKeys.transport_commandnode_response, getDefaultClass("HnG_States.transport_commandnode_response")],
    [ClassKeys.keepaliverequest, getDefaultClass("netsysmessages.keepaliverequest")],
    [ClassKeys.keepalive, getDefaultClass("netsysmessages.keepalive")],
    [ClassKeys.keepaliveresponse, getDefaultClass("netsysmessages.keepaliveresponse")],
    [ClassKeys.query_commandnode_owner, getDefaultClass("HnG_States.query_commandnode_owner")],
    [ClassKeys.query_commandnode_owner_response, getDefaultClass("HnG_States.query_commandnode_owner_response")],
    [ClassKeys.GetGoldPricesRequest, getDefaultClass("HnG_States.GetGoldPricesRequest")],
    [ClassKeys.GetGoldPricesResponse, getDefaultClass("HnG_States.GetGoldPricesResponse")],
    [ClassKeys.JoinMatchMakingRequest, getDefaultClass("HnG_States.JoinMatchMakingRequest")],
    [ClassKeys.JoinMatchMakingResponse, getDefaultClass("HnG_States.JoinMatchMakingResponse")],
    [ClassKeys.CancelJoinMatchMakingRequest, getDefaultClass("HnG_States.CancelJoinMatchMakingRequest")],
    [ClassKeys.CancelJoinMatchMakingResponse, getDefaultClass("HnG_States.CancelJoinMatchMakingResponse")],
    [ClassKeys.GetBattleReportRequest, getDefaultClass("HnG_States.GetBattleReportRequest")],
    [ClassKeys.GetBattleReportResponse, getDefaultClass("HnG_States.GetBattleReportResponse")],
    [ClassKeys.join_war_response, getDefaultClass("HnG_States.join_war_response")],
    [ClassKeys.join_war_request, getDefaultClass("HnG_States.join_war_request")],
    [ClassKeys.DeployCommandNodeRequest, getDefaultClass("HnG_States.DeployCommandNodeRequest")],
    [ClassKeys.DeployCommandNodeResponse, getDefaultClass("HnG_States.DeployCommandNodeResponse")],
    [ClassKeys.SearchPlayerDetailRequest, getDefaultClass("HnG_States.SearchPlayerDetailRequest")],
    [ClassKeys.SearchPlayerDetailResponse, getDefaultClass("HnG_States.SearchPlayerDetailResponse")],
    [ClassKeys.QueryGamertagRequest, getDefaultClass("HnG_States.QueryGamertagRequest")],
    [ClassKeys.QueryGamertagResponse, getDefaultClass("HnG_States.QueryGamertagResponse")],
    [ClassKeys.query_war_catalogue_request, getDefaultClass("HnG_States.query_war_catalogue_request", {
        includeWarId: 0
    })],
    [ClassKeys.query_war_catalogue_response, getDefaultClass("HnG_States.query_war_catalogue_response")],
    [ClassKeys.GetAssaultTeamStatsRequest, getDefaultClass("HnG_States.GetAssaultTeamStatsRequest")],
    [ClassKeys.GetAssaultTeamStatsResponse, getDefaultClass("HnG_States.GetAssaultTeamStatsResponse")],
    [ClassKeys.QueryShopWarBondItemsResponse, getDefaultClass("HnG_States.QueryShopWarBondItemsResponse")],
    [ClassKeys.GetChatChannelsSubscribedResponse, getDefaultClass("HnG_States.GetChatChannelsSubscribedResponse")],
    [ClassKeys.QueryServerInfoResponse, getDefaultClass("HnG_States.QueryServerInfoResponse")],
    [ClassKeys.unsubscriberesponse, getDefaultClass("Common.unsubscriberesponse", { reply: "ok" })],
    /*
     * Other classes 
     */
    [ClassKeys.zipchunk, getDefaultClass("netsysmessages.zipchunk")],
    [ClassKeys.KeyValueChangeSet, KeyValueChangeSet],
    ...dummyClasses,
]);
