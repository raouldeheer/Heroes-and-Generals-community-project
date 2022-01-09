import * as all from "./classes";
import * as login from "./LoginClasses";
import * as subs from "./SubscribtionClasses";
import { KeyValueChangeSet } from "./KeyValueChangeSet";
import BufferCursor from "./buffercursor";

export interface packetClassParser {
    parse: (buf: BufferCursor) => string | void;
}

const keys = new Map<String, packetClassParser>([
    ["StartLogin", login.StartLogin],
    ["zipchunk", all.zipchunk],
    ["login2_begin", login.login2_begin],
    ["QueryServerInfo", all.QueryServerInfo],
    ["login2_challenge", login.login2_challenge],
    ["login2_response", login.login2_response],
    ["login2_result", login.login2_result],
    ["subscribeplayerview", subs.subscribeplayerview],
    ["subscribecommandnodeview", subs.subscribecommandnodeview],
    ["SubscribeHostingCenterInfoView", subs.SubscribeHostingCenterInfoView],
    ["subscribefriendview", subs.subscribefriendview],
    ["SubscribeShopView", subs.SubscribeShopView],
    ["subscribeignoredplayerview", subs.subscribeignoredplayerview],
    ["SubscribeMessageView", subs.SubscribeMessageView],
    ["subscribewarmaplightview", subs.subscribewarmaplightview],
    ["subscribebattlesview", subs.subscribebattlesview],
    ["subscriberesourceview", subs.subscriberesourceview],
    ["QueryShopWarBondItemsRequest", all.QueryShopWarBondItemsRequest],
    ["QueryShopWarBondItemsResponse", all.QueryShopWarBondItemsResponse],
    ["GetChatChannelsSubscribedRequest", all.GetChatChannelsSubscribedRequest],
    ["GetChatChannelsSubscribedResponse", all.GetChatChannelsSubscribedResponse],
    ["RequestReadCharacterStats", all.RequestReadCharacterStats],
    ["GetAssaultTeamStatsRequest", all.GetAssaultTeamStatsRequest],
    ["GetAssaultTeamStatsResponse", all.GetAssaultTeamStatsResponse],
    ["LoginQueueUpdate", login.LoginQueueUpdate],
    ["subscriberesponse", subs.subscriberesponse],
    ["KeyValueChangeSet", KeyValueChangeSet],
    ["QueryServerInfoResponse", all.QueryServerInfoResponse],
    ["QueryBannedMachineRequest", all.QueryBannedMachineRequest],
    ["QueryBannedMachineResponse", all.QueryBannedMachineResponse],
    ["SubscribePlayerMissionViewRequest", subs.SubscribePlayerMissionViewRequest],
    ["query_war_catalogue_request", all.query_war_catalogue_request],
    ["query_war_catalogue_response", all.query_war_catalogue_response],
    ["login2_postlogin", login.login2_postlogin],
    ["login2_postlogin_result", login.login2_postlogin_result],
    ["subscribesoldierview", subs.subscribesoldierview],
    ["QueryVoucherPacksRequest", all.QueryVoucherPacksRequest],
    ["QueryVoucherPacksResponse", all.QueryVoucherPacksResponse],
    ["SteamQueryBundlesRequest", all.SteamQueryBundlesRequest],
    ["SteamQueryBundlesResponse", all.SteamQueryBundlesResponse],
    ["QueryActiveSurveyRequest", all.QueryActiveSurveyRequest],
    ["QueryActiveSurveyResponse", all.QueryActiveSurveyResponse],
    ["RedeemDailyLoginRewardRequest", login.RedeemDailyLoginRewardRequest],
    ["RedeemDailyLoginRewardResponse", login.RedeemDailyLoginRewardResponse],
    ["unsubscribecommandnodeview", subs.unsubscribecommandnodeview],
    ["unsubscriberesponse", subs.unsubscriberesponse],
    ["unsubscribewarmaplightview", subs.unsubscribewarmaplightview],
    ["subscribewarmapview", subs.subscribewarmapview],
    ["GetMissionDetailsRequest", all.GetMissionDetailsRequest],
    ["GetMissionDetailsResponse", all.GetMissionDetailsResponse],
    ["transport_commandnode", all.transport_commandnode],
    ["transport_commandnode_response", all.transport_commandnode_response],
    ["keepaliverequest", all.keepaliverequest],
    ["keepalive", all.keepalive],
    ["query_commandnode_owner", all.query_commandnode_owner],
    ["query_commandnode_owner_response", all.query_commandnode_owner_response],
    ["GetGoldPricesRequest", all.GetGoldPricesRequest],
    ["GetGoldPricesResponse", all.GetGoldPricesResponse],
]);

export { keys };
