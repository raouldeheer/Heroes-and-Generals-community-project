import { ClassKeys, packetClassParser } from "../protolinking/classKeys";
import { getDefaultClass } from "./proto";

export const requestClasses: Iterable<readonly [ClassKeys, packetClassParser]> = [
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
];
