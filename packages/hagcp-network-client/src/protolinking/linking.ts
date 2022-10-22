import { BufferCursor } from "buffercursor.ts";
import Long from "long";
import * as interfaces from "../interfaces";
import { KeyValueChangeSet } from "../protoclasses/keyValueChangeSet";
import { getDefaultClass } from "../protoclasses/proto";
import { ClassKeys } from "./classKeys";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface packetClassParser<T = string, Y = any> {
    name: T;
    parse: (buf: BufferCursor) => Y;
    toBuffer: (payload?: Y) => Buffer;
}

const dummyClass = (name: string) => getDefaultClass<{ dummy?: number; }>("Common.Dummy", { dummy: 0 }, name);

export type PacketClassKeys = keyof typeof PacketClass;
export const PacketClass = {
    /*
     * Login classes 
     */
    [ClassKeys.login2_begin]: getDefaultClass<interfaces.login2_begin>("HnG_States.login2_begin"),
    [ClassKeys.login2_challenge]: getDefaultClass<interfaces.login2_challenge>("HnG_States.login2_challenge"),
    [ClassKeys.login2_response]: getDefaultClass<interfaces.login2_response>("HnG_States.login2_response"),
    [ClassKeys.login2_result]: getDefaultClass<interfaces.login2_result>("HnG_States.login2_result"),
    [ClassKeys.LoginQueueUpdate]: getDefaultClass<interfaces.LoginQueueUpdate>("HnG_States.LoginQueueUpdate"),
    [ClassKeys.login2_postlogin]: getDefaultClass<interfaces.login2_postlogin>("HnG_States.login2_postlogin"),
    [ClassKeys.login2_postlogin_result]: getDefaultClass<interfaces.login2_postlogin_result>("HnG_States.login2_postlogin_result"),
    [ClassKeys.QueryBannedMachineRequest]: getDefaultClass<interfaces.QueryBannedMachineRequest>("HnG_States.QueryBannedMachineRequest", {
        machineIdentifier: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
        machineIdentifierOld: "e92e36b9-e761-4fe8-bbca-a287577ba81f",
    }),
    [ClassKeys.QueryBannedMachineResponse]: getDefaultClass<interfaces.QueryBannedMachineResponse>("HnG_States.QueryBannedMachineResponse"),
    [ClassKeys.RedeemDailyLoginRewardRequest]: getDefaultClass<interfaces.RedeemDailyLoginRewardRequest>("HnG_States.RedeemDailyLoginRewardRequest"),
    [ClassKeys.RedeemDailyLoginRewardResponse]: getDefaultClass<interfaces.RedeemDailyLoginRewardResponse>("HnG_States.RedeemDailyLoginRewardResponse"),
    [ClassKeys.QueryVoucherPacksRequest]: getDefaultClass<interfaces.QueryVoucherPacksRequest>("HnG_States.QueryVoucherPacksRequest"),
    [ClassKeys.QueryVoucherPacksResponse]: getDefaultClass<interfaces.QueryVoucherPacksResponse>("HnG_States.QueryVoucherPacksResponse"),
    [ClassKeys.SteamQueryBundlesRequest]: getDefaultClass<interfaces.SteamQueryBundlesRequest>("HnG_States.SteamQueryBundlesRequest"),
    [ClassKeys.SteamQueryBundlesResponse]: getDefaultClass<interfaces.SteamQueryBundlesResponse>("HnG_States.SteamQueryBundlesResponse"),
    [ClassKeys.QueryActiveSurveyRequest]: getDefaultClass<interfaces.QueryActiveSurveyRequest>("HnG_States.QueryActiveSurveyRequest"),
    [ClassKeys.QueryActiveSurveyResponse]: getDefaultClass<interfaces.QueryActiveSurveyResponse>("HnG_States.QueryActiveSurveyResponse"),
    /*
     * Request classes 
     */
    [ClassKeys.RequestReadCharacterStats]: getDefaultClass<interfaces.RequestReadCharacterStats>("statrequests.RequestReadCharacterStats"),
    [ClassKeys.ResponseReadCharacterStats]: getDefaultClass<interfaces.ResponseReadCharacterStats>("statrequests.ResponseReadCharacterStats"),
    [ClassKeys.GetMissionDetailsRequest]: getDefaultClass<interfaces.GetMissionDetailsRequest>("HnG_States.GetMissionDetailsRequest"),
    [ClassKeys.GetMissionDetailsResponse]: getDefaultClass<interfaces.GetMissionDetailsResponse>("HnG_States.GetMissionDetailsResponse"),
    [ClassKeys.transport_commandnode]: getDefaultClass<interfaces.transport_commandnode>("HnG_States.transport_commandnode"),
    [ClassKeys.transport_commandnode_response]: getDefaultClass<interfaces.transport_commandnode_response>("HnG_States.transport_commandnode_response"),
    [ClassKeys.keepaliverequest]: getDefaultClass<interfaces.keepaliverequest>("netsysmessages.keepaliverequest"),
    [ClassKeys.keepalive]: getDefaultClass<interfaces.keepalive>("netsysmessages.keepalive", { value: 8374 }),
    [ClassKeys.keepaliveresponse]: getDefaultClass<interfaces.keepaliveresponse>("netsysmessages.keepaliveresponse"),
    [ClassKeys.query_commandnode_owner]: getDefaultClass<interfaces.query_commandnode_owner>("HnG_States.query_commandnode_owner"),
    [ClassKeys.query_commandnode_owner_response]: getDefaultClass<interfaces.query_commandnode_owner_response>("HnG_States.query_commandnode_owner_response"),
    [ClassKeys.GetGoldPricesRequest]: getDefaultClass<interfaces.GetGoldPricesRequest>("HnG_States.GetGoldPricesRequest"),
    [ClassKeys.GetGoldPricesResponse]: getDefaultClass<interfaces.GetGoldPricesResponse>("HnG_States.GetGoldPricesResponse"),
    [ClassKeys.JoinMatchMakingRequest]: getDefaultClass<interfaces.JoinMatchMakingRequest>("HnG_States.JoinMatchMakingRequest"),
    [ClassKeys.JoinMatchMakingResponse]: getDefaultClass<interfaces.JoinMatchMakingResponse>("HnG_States.JoinMatchMakingResponse"),
    [ClassKeys.CancelJoinMatchMakingRequest]: getDefaultClass<interfaces.CancelJoinMatchMakingRequest>("HnG_States.CancelJoinMatchMakingRequest"),
    [ClassKeys.CancelJoinMatchMakingResponse]: getDefaultClass<interfaces.CancelJoinMatchMakingResponse>("HnG_States.CancelJoinMatchMakingResponse"),
    [ClassKeys.GetBattleReportRequest]: getDefaultClass<interfaces.GetBattleReportRequest>("HnG_States.GetBattleReportRequest"),
    [ClassKeys.GetBattleReportResponse]: getDefaultClass<interfaces.GetBattleReportResponse>("HnG_States.GetBattleReportResponse"),
    [ClassKeys.join_war_response]: getDefaultClass<interfaces.join_war_response>("HnG_States.join_war_response"),
    [ClassKeys.join_war_request]: getDefaultClass<interfaces.join_war_request>("HnG_States.join_war_request"),
    [ClassKeys.DeployCommandNodeRequest]: getDefaultClass<interfaces.DeployCommandNodeRequest>("HnG_States.DeployCommandNodeRequest"),
    [ClassKeys.DeployCommandNodeResponse]: getDefaultClass<interfaces.DeployCommandNodeResponse>("HnG_States.DeployCommandNodeResponse"),
    [ClassKeys.SearchPlayerDetailRequest]: getDefaultClass<interfaces.SearchPlayerDetailRequest>("HnG_States.SearchPlayerDetailRequest"),
    [ClassKeys.SearchPlayerDetailResponse]: getDefaultClass<interfaces.SearchPlayerDetailResponse>("HnG_States.SearchPlayerDetailResponse"),
    [ClassKeys.QueryGamertagRequest]: getDefaultClass<interfaces.QueryGamertagRequest>("HnG_States.QueryGamertagRequest"),
    [ClassKeys.QueryGamertagResponse]: getDefaultClass<interfaces.QueryGamertagResponse>("HnG_States.QueryGamertagResponse"),
    [ClassKeys.query_war_catalogue_request]: getDefaultClass<interfaces.query_war_catalogue_request>("HnG_States.query_war_catalogue_request", {
        includeWarId: Long.ZERO,
    }),
    [ClassKeys.query_war_catalogue_response]: getDefaultClass<interfaces.query_war_catalogue_response>("HnG_States.query_war_catalogue_response"),
    [ClassKeys.GetAssaultTeamStatsRequest]: getDefaultClass<interfaces.GetAssaultTeamStatsRequest>("HnG_States.GetAssaultTeamStatsRequest"),
    [ClassKeys.GetAssaultTeamStatsResponse]: getDefaultClass<interfaces.GetAssaultTeamStatsResponse>("HnG_States.GetAssaultTeamStatsResponse"),
    [ClassKeys.QueryShopWarBondItemsResponse]: getDefaultClass<interfaces.QueryShopWarBondItemsResponse>("HnG_States.QueryShopWarBondItemsResponse"),
    [ClassKeys.GetChatChannelsSubscribedResponse]: getDefaultClass<interfaces.GetChatChannelsSubscribedResponse>("HnG_States.GetChatChannelsSubscribedResponse"),
    [ClassKeys.QueryServerInfoResponse]: getDefaultClass<interfaces.QueryServerInfoResponse>("HnG_States.QueryServerInfoResponse"),
    [ClassKeys.unsubscriberesponse]: getDefaultClass<interfaces.unsubscriberesponse>("Common.unsubscriberesponse", { reply: "ok" }),
    [ClassKeys.RedeemVoucherRequest]: getDefaultClass<interfaces.RedeemVoucherRequest>("HnG_States.RedeemVoucherRequest"),
    [ClassKeys.RedeemVoucherResponse]: getDefaultClass<interfaces.RedeemVoucherResponse>("HnG_States.RedeemVoucherResponse"),
    /*
     * Other classes 
     */
    [ClassKeys.zipchunk]: getDefaultClass<interfaces.zipchunk>("netsysmessages.zipchunk"),
    [ClassKeys.KeyValueChangeSet]: KeyValueChangeSet,
    [ClassKeys.AdminToolPlayerStatRequest]: getDefaultClass<interfaces.AdminToolPlayerStatRequest>("HnG_States.AdminToolPlayerStatRequest"),
    [ClassKeys.AdminToolPlayerStatResponse]: getDefaultClass<interfaces.AdminToolPlayerStatResponse>("HnG_States.AdminToolPlayerStatResponse"),
    [ClassKeys.AdminToolGetDbInfoRequest]: getDefaultClass<interfaces.AdminToolGetDbInfoRequest>("HnG_States.AdminToolGetDbInfoRequest"),
    [ClassKeys.RequestEarnings]: getDefaultClass<interfaces.RequestEarnings>("statrequests.RequestEarnings"),
    [ClassKeys.ResponseEarnings]: getDefaultClass<interfaces.ResponseEarnings>("statrequests.ResponseEarnings"),
    [ClassKeys.GetHandlerTypes]: getDefaultClass<interfaces.GetHandlerTypes>("netsysmessages.GetHandlerTypes"),
    [ClassKeys.ResponseHandlerTypes]: getDefaultClass<interfaces.ResponseHandlerTypes>("netsysmessages.ResponseHandlerTypes"),
    [ClassKeys.AddMembershipRequest]: getDefaultClass<interfaces.AddMembershipRequest>("HnG_States.AddMembershipRequest"),
    [ClassKeys.AddMembershipResponse]: getDefaultClass<interfaces.AddMembershipResponse>("HnG_States.AddMembershipResponse"),
    [ClassKeys.ChangeTierResponse]: getDefaultClass<interfaces.ChangeTierResponse>("HnG_States.ChangeTierResponse"),
    [ClassKeys.DebugGetWarCatalogueRequest]: getDefaultClass<interfaces.DebugGetWarCatalogueRequest>("HnG_States.DebugGetWarCatalogueRequest"),
    [ClassKeys.MonitorLoadRequest]: getDefaultClass<interfaces.MonitorLoadRequest>("HnG_States.MonitorLoadRequest"),
    [ClassKeys.MonitorLoadResponse]: getDefaultClass<interfaces.MonitorLoadResponse>("HnG_States.MonitorLoadResponse"),
    [ClassKeys.war_create_request]: getDefaultClass<interfaces.war_create_request>("HnG_States.war_create_request"),
    [ClassKeys.war_create_response]: getDefaultClass<interfaces.war_create_response>("HnG_States.war_create_response"),
    [ClassKeys.delete_mission]: getDefaultClass<interfaces.delete_mission>("HnG_States.delete_mission"),
    [ClassKeys.delete_mission_response]: getDefaultClass<interfaces.delete_mission_response>("HnG_States.delete_mission_response"),
    [ClassKeys.EndMissionRequest]: getDefaultClass<interfaces.EndMissionRequest>("HnG_States.EndMissionRequest"),
    [ClassKeys.EndMissionResponse]: getDefaultClass<interfaces.EndMissionResponse>("HnG_States.EndMissionResponse"),
    [ClassKeys.SetSquadMatchMakingFlagRequest]: getDefaultClass<interfaces.SetSquadMatchMakingFlagRequest>("HnG_States.SetSquadMatchMakingFlagRequest"),
    [ClassKeys.SetSquadMatchMakingFlagResponse]: getDefaultClass<interfaces.SetSquadMatchMakingFlagResponse>("HnG_States.SetSquadMatchMakingFlagResponse"),
    [ClassKeys.GetBattlePassSeasonRequest]: getDefaultClass<interfaces.GetBattlePassSeasonRequest>("HnG_States.GetBattlePassSeasonRequest"),
    [ClassKeys.GetBattlePassSeasonResponse]: getDefaultClass<interfaces.GetBattlePassSeasonResponse>("HnG_States.GetBattlePassSeasonResponse"),
    [ClassKeys.SetNotificationsReadRequest]: getDefaultClass<interfaces.SetNotificationsReadRequest>("HnG_States.SetNotificationsReadRequest"),
    [ClassKeys.SetNotificationsReadResponse]: getDefaultClass<interfaces.SetNotificationsReadResponse>("HnG_States.SetNotificationsReadResponse"),
    [ClassKeys.DeleteCharacterRequest]: getDefaultClass<interfaces.DeleteCharacterRequest>("HnG_States.DeleteCharacterRequest"),
    [ClassKeys.DeleteCharacterResponse]: getDefaultClass<interfaces.DeleteCharacterResponse>("HnG_States.DeleteCharacterResponse"),
    [ClassKeys.GetMissionListRequest]: getDefaultClass<interfaces.GetMissionListRequest>("HnG_States.GetMissionListRequest"),
    [ClassKeys.GetMissionListResponse]: getDefaultClass<interfaces.GetMissionListResponse>("HnG_States.GetMissionListResponse"),
    [ClassKeys.GreenlightMissionRequest]: getDefaultClass<interfaces.GreenlightMissionRequest>("HnG_States.GreenlightMissionRequest"),
    [ClassKeys.GreenlightMissionResponse]: getDefaultClass<interfaces.GreenlightMissionResponse>("HnG_States.GreenlightMissionResponse"),
    /*
     * Dummy classes 
     */
    [ClassKeys.StartLogin]: dummyClass(ClassKeys.StartLogin),
    [ClassKeys.QueryServerInfo]: dummyClass(ClassKeys.QueryServerInfo),
    [ClassKeys.subscribeplayerview]: dummyClass(ClassKeys.subscribeplayerview),
    [ClassKeys.unsubscribeplayerview]: dummyClass(ClassKeys.unsubscribeplayerview),
    [ClassKeys.subscribecommandnodeview]: dummyClass(ClassKeys.subscribecommandnodeview),
    [ClassKeys.SubscribeHostingCenterInfoView]: dummyClass(ClassKeys.SubscribeHostingCenterInfoView),
    [ClassKeys.subscribefriendview]: dummyClass(ClassKeys.subscribefriendview),
    [ClassKeys.SubscribeShopView]: dummyClass(ClassKeys.SubscribeShopView),
    [ClassKeys.subscribeignoredplayerview]: dummyClass(ClassKeys.subscribeignoredplayerview),
    [ClassKeys.SubscribeMessageView]: dummyClass(ClassKeys.SubscribeMessageView),
    [ClassKeys.subscribewarmaplightview]: dummyClass(ClassKeys.subscribewarmaplightview),
    [ClassKeys.subscribebattlesview]: dummyClass(ClassKeys.subscribebattlesview),
    [ClassKeys.subscriberesourceview]: dummyClass(ClassKeys.subscriberesourceview),
    [ClassKeys.QueryShopWarBondItemsRequest]: dummyClass(ClassKeys.QueryShopWarBondItemsRequest),
    [ClassKeys.GetChatChannelsSubscribedRequest]: dummyClass(ClassKeys.GetChatChannelsSubscribedRequest),
    [ClassKeys.subscriberesponse]: dummyClass(ClassKeys.subscriberesponse),
    [ClassKeys.SubscribePlayerMissionViewRequest]: dummyClass(ClassKeys.SubscribePlayerMissionViewRequest),
    [ClassKeys.subscribesoldierview]: dummyClass(ClassKeys.subscribesoldierview),
    [ClassKeys.unsubscribecommandnodeview]: dummyClass(ClassKeys.unsubscribecommandnodeview),
    [ClassKeys.unsubscribewarmapview]: dummyClass(ClassKeys.unsubscribewarmapview),
    [ClassKeys.unsubscriberesourceview]: dummyClass(ClassKeys.unsubscriberesourceview),
    [ClassKeys.UnsubscribePlayerMissionViewRequest]: dummyClass(ClassKeys.UnsubscribePlayerMissionViewRequest),
    [ClassKeys.unsubscribebattlesview]: dummyClass(ClassKeys.unsubscribebattlesview),
    [ClassKeys.unsubscribewarmaplightview]: dummyClass(ClassKeys.unsubscribewarmaplightview),
    [ClassKeys.subscribewarmapview]: dummyClass(ClassKeys.subscribewarmapview),
    [ClassKeys.ChangeTierRequest]: dummyClass(ClassKeys.ChangeTierRequest),
};
