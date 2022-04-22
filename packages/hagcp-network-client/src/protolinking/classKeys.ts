import * as all from "../protoclasses/classes";
import * as login from "../protoclasses/LoginClasses";
import { DummyClass, unsubscriberesponse } from "../protoclasses/subscriptionClasses";
import { KeyValueChangeSet } from "../protoclasses/keyValueChangeSet";
import BufferCursor from "../buffercursor";

export interface packetClassParser {
    parse: (buf: BufferCursor) => void | object | Function;
    toBuffer?: (payload?: any) => Buffer;
}

const keyToClass = new Map<String, packetClassParser>([
    ["StartLogin", DummyClass],
    ["zipchunk", all.zipchunk],
    ["login2_begin", login.login2_begin],
    ["QueryServerInfo", DummyClass],
    ["login2_challenge", login.login2_challenge],
    ["login2_response", login.login2_response],
    ["login2_result", login.login2_result],
    ["subscribeplayerview", DummyClass],
    ["unsubscribeplayerview", DummyClass],
    ["subscribecommandnodeview", DummyClass],
    ["SubscribeHostingCenterInfoView", DummyClass],
    ["subscribefriendview", DummyClass],
    ["SubscribeShopView", DummyClass],
    ["subscribeignoredplayerview", DummyClass],
    ["SubscribeMessageView", DummyClass],
    ["subscribewarmaplightview", DummyClass],
    ["subscribebattlesview", DummyClass],
    ["subscriberesourceview", DummyClass],
    ["QueryShopWarBondItemsRequest", DummyClass],
    ["QueryShopWarBondItemsResponse", all.QueryShopWarBondItemsResponse],
    ["GetChatChannelsSubscribedRequest", DummyClass],
    ["GetChatChannelsSubscribedResponse", all.GetChatChannelsSubscribedResponse],
    ["RequestReadCharacterStats", all.RequestReadCharacterStats],
    ["GetAssaultTeamStatsRequest", all.GetAssaultTeamStatsRequest],
    ["GetAssaultTeamStatsResponse", all.GetAssaultTeamStatsResponse],
    ["LoginQueueUpdate", login.LoginQueueUpdate],
    ["subscriberesponse", DummyClass],
    ["KeyValueChangeSet", KeyValueChangeSet],
    ["QueryServerInfoResponse", all.QueryServerInfoResponse],
    ["QueryBannedMachineRequest", login.QueryBannedMachineRequest],
    ["QueryBannedMachineResponse", login.QueryBannedMachineResponse],
    ["SubscribePlayerMissionViewRequest", DummyClass],
    ["query_war_catalogue_request", all.query_war_catalogue_request],
    ["query_war_catalogue_response", all.query_war_catalogue_response],
    ["login2_postlogin", login.login2_postlogin],
    ["login2_postlogin_result", login.login2_postlogin_result],
    ["subscribesoldierview", DummyClass],
    ["QueryVoucherPacksRequest", all.QueryVoucherPacksRequest],
    ["QueryVoucherPacksResponse", all.QueryVoucherPacksResponse],
    ["SteamQueryBundlesRequest", all.SteamQueryBundlesRequest],
    ["SteamQueryBundlesResponse", all.SteamQueryBundlesResponse],
    ["QueryActiveSurveyRequest", all.QueryActiveSurveyRequest],
    ["QueryActiveSurveyResponse", all.QueryActiveSurveyResponse],
    ["RedeemDailyLoginRewardRequest", login.RedeemDailyLoginRewardRequest],
    ["RedeemDailyLoginRewardResponse", login.RedeemDailyLoginRewardResponse],
    ["unsubscribecommandnodeview", DummyClass],
    ["unsubscribewarmapview", DummyClass],
    ["unsubscriberesourceview", DummyClass],
    ["UnsubscribePlayerMissionViewRequest", DummyClass],
    ["unsubscribebattlesview", DummyClass],
    ["unsubscriberesponse", unsubscriberesponse],
    ["unsubscribewarmaplightview", DummyClass],
    ["subscribewarmapview", DummyClass],
    ["GetMissionDetailsRequest", all.GetMissionDetailsRequest],
    ["GetMissionDetailsResponse", all.GetMissionDetailsResponse],
    ["transport_commandnode", all.transport_commandnode],
    ["transport_commandnode_response", all.transport_commandnode_response],
    ["keepaliverequest", all.keepaliverequest],
    ["keepalive", all.keepalive],
    ["keepaliveresponse", all.keepaliveresponse],
    ["query_commandnode_owner", all.query_commandnode_owner],
    ["query_commandnode_owner_response", all.query_commandnode_owner_response],
    ["GetGoldPricesRequest", all.GetGoldPricesRequest],
    ["GetGoldPricesResponse", all.GetGoldPricesResponse],
    ["JoinMatchMakingRequest", all.JoinMatchMakingRequest],
    ["JoinMatchMakingResponse", all.JoinMatchMakingResponse],
    ["CancelJoinMatchMakingRequest", all.CancelJoinMatchMakingRequest],
    ["CancelJoinMatchMakingResponse", all.CancelJoinMatchMakingResponse],
    ["ResponseReadCharacterStats", all.ResponseReadCharacterStats],
    ["GetBattleReportRequest", all.GetBattleReportRequest],
    ["GetBattleReportResponse", all.GetBattleReportResponse],
    ["join_war_response", all.join_war_response],
    ["join_war_request", all.join_war_request],
    ["DeployCommandNodeRequest", all.DeployCommandNodeRequest],
    ["DeployCommandNodeResponse", all.DeployCommandNodeResponse],
]);

export { keyToClass };

export const enum ResponseType {
    fail = 0,
    ok = 1,
    add_operation_fail = 2,
    already_friend = 3,
    already_in_battle = 4,
    badge_already_selected = 5,
    badge_slot_only_for_premium_members = 6,
    cannot_find_commandnode = 7,
    censored = 8,
    channel_already_added = 9,
    channel_creation_failed = 10,
    channel_membership_failed = 11,
    channel_not_found = 12,
    character_locked = 13,
    character_not_controlled_by_player = 14,
    character_not_found = 15,
    character_not_in_mission = 16,
    character_not_owned_by_player = 17,
    character_wrong_faction = 18,
    commandnode_cannot_attack_stationary_supply = 19,
    commandnode_not_flying_type = 20,
    commandnode_relocating_to_new_airbase = 21,
    commandnode_transporting_to_attack_supply = 22,
    commandnode_transporting_to_join_battle = 23,
    commandnode_transporting_to_join_ongoing_battle = 24,
    condition_repair_to_less_than_condition = 25,
    equipment_already_selected = 26,
    equipment_not_equipped = 27,
    equipment_not_found = 28,
    equipment_not_owned_by_player = 29,
    equipment_unequipped = 30,
    faction_has_no_hq = 31,
    faction_not_found = 32,
    failure_already_in_transport = 33,
    hosting_center_info_invalid = 34,
    info_found = 35,
    invalid_name = 36,
    invalid_path = 37,
    invalid_slot = 38,
    last_remaining_character = 39,
    ldap_connection_error = 40,
    mission_already_running = 41,
    mission_locked = 42,
    mission_not_found = 43,
    mission_not_initiated = 44,
    mission_not_running = 45,
    modifier_not_found = 46,
    modifier_not_owned_by_player = 47,
    moving_to_same_war = 48,
    no_compatible_spawn_slot = 49,
    no_free_game_server = 50,
    no_free_spawn_slot = 51,
    no_info_found = 52,
    no_name = 53,
    no_such_membership_type = 54,
    no_such_war_bond_type = 55,
    not_enough_credits = 56,
    not_enough_gold = 57,
    not_owned_by_player = 58,
    not_subscribed_to_channel = 59,
    player_already_in_match_making = 60,
    player_already_joined = 61,
    player_faction_invalid = 62,
    player_in_match_making = 63,
    player_not_found = 64,
    player_not_friend = 65,
    player_not_joined = 66,
    players_found = 67,
    players_not_found = 68,
    price_in_credits_negative = 69,
    price_in_gold_negative = 70,
    reconnect = 71,
    remove_operation_fail = 72,
    series_closed = 73,
    shop_item_not_found = 74,
    slot_index_mismatch = 75,
    target_equals_source = 76,
    war_not_found = 77,
    war_not_running_strategy_side = 78,
    warning_cannot_switch_while_current_war_running = 79,
    weapon_modifier_incompatible_with_weapon = 80,
    weapon_modifier_not_equipped_on_weapon = 81,
    weapon_modifier_not_found = 82,
    weapon_modifier_not_owned_by_player = 83,
    weapon_modifier_template_not_found = 84,
    weapon_not_found = 85,
    weapon_not_owned_by_player = 86,
    server_error = 87,
    too_many_players = 88,
    unknown_user = 89,
    no_access = 90,
    user_ban_permanent = 91,
    user_ban_temporary = 92,
    redirect = 93,
    no_handlers_available = 94,
    already_logged_on = 95,
    challenge = 96,
    login_success = 97,
    wrong_password = 98,
    unknown_id = 99,
    login_timeout = 100,
    no_resupply_in_battle = 101,
    no_resupply_insufficient_resources = 102,
    no_resupply_already_full = 103,
    hq_move_not_allowed = 104,
    war_is_over = 105,
    commandnode_template_not_found = 106,
    commandnode_war_instance_not_found = 107,
    commandnode_definition_not_found = 108,
    commandnode_in_battle = 109,
    commandnode_already_reset = 123,
    no_armyresource = 110,
    commandnode_not_in_queue = 111,
    commandnode_last_in_queue = 112,
    commandnode_spawn_not_found = 113,
    commandnode_limit_reached = 114,
    commandnode_parent_not_found = 115,
    no_resupply_in_transport = 116,
    no_men = 121,
    no_resupply_commandnode_in_transport = 122,
    no_retreat_position_available = 268,
    no_player_commandnodes_found = 124,
    war_faction_is_full = 125,
    require_new_privacy_policy = 126,
    commandnode_already_deployed = 150,
    commandnode_deploy_limit = 151,
    commandnode_not_deployable = 152,
    not_enough_warfunds = 153,
    equipment_points_exceeded = 154,
    equipment_cant_remove_last_item = 155,
    character_template_not_found = 156,
    player_already_in_squad = 157,
    squad_slot_not_found = 158,
    player_not_owner = 159,
    weapon_clip_count_not_adjustable = 160,
    squad_not_found = 161,
    squad_size_too_small = 162,
    squad_slot_in_use = 163,
    squad_not_owned_by_player = 164,
    voucher_invalid_key = 165,
    voucher_only_valid_at_registration = 166,
    voucher_has_been_revoked = 167,
    voucher_already_used = 168,
    player_tier_mismatch = 169,
    company_insufficientPrivileges = 170,
    company_memberNotFound = 171,
    company_playerNotFound = 172,
    company_cannotKickSelf = 173,
    company_playerAlreadyInCompany = 174,
    company_playerHasInvitationPending = 175,
    company_companyIsFull = 176,
    company_companyNameAlreadyExists = 177,
    company_companyLongNameTooLong = 178,
    company_companyLongNameTooShort = 179,
    company_companyLongNameInvalid = 180,
    company_companyShortNameTooLong = 181,
    company_companyShortNameTooShort = 182,
    company_companyShortNameInvalid = 183,
    company_companyDescriptionTooLong = 184,
    company_invitationNotFound = 185,
    company_companyNoLongerExists = 186,
    notification_not_found = 187,
    incorrect_notification_owner = 188,
    invalid_owner = 189,
    weapon_clip_count_out_of_bounds = 190,
    no_flying_armyresource = 191,
    not_for_sale = 192,
    price_not_found = 193,
    progression_locked = 194,
    squad_slot_not_owned_by_player = 195,
    vehicle_not_found = 196,
    vehicle_not_owned_by_player = 197,
    vehicle_upgrade_not_found = 198,
    vehicle_upgrade_not_owned_by_player = 199,
    vehicle_upgrade_slot_not_found = 200,
    vehicle_upgrade_slot_mismatch = 201,
    ammo_template_not_found = 202,
    vehicle_ammo_not_found = 203,
    vehicle_ammo_not_owned_by_player = 204,
    vehicle_ammo_storage_not_found = 205,
    vehicle_ammo_slot_mismatch = 206,
    vehicle_ammo_mapping_mismatch = 207,
    booster_not_found = 208,
    booster_already_activated = 209,
    booster_empty = 210,
    variant_incompatible = 211,
    variant_not_equipped = 212,
    variant_not_found = 213,
    variant_not_owned_by_player = 214,
    variant_template_not_found = 215,
    steam_id_mismatch = 216,
    commandnode_already_equipped = 217,
    commandnode_already_unequipped = 218,
    equipment_not_allowed = 219,
    battlefield_not_found = 220,
    deploy_location_not_found = 221,
    a_bridge_too_far = 222,
    message_invalid_recipient = 223,
    message_invalid_replyTo = 224,
    battle_report_not_found = 225,
    commandnode_queued_for_resources = 226,
    mission_faction_full = 227,
    offer_expired = 228,
    player_not_premium = 229,
    player_already_premium = 230,
    equipment_broken = 231,
    equipment_depleted = 232,
    vehicle_broken = 233,
    player_not_in_war = 234,
    weapon_ammo_mapping_mismatch = 235,
    weapon_ammo_not_found = 236,
    weapon_ammo_not_owned_by_player = 237,
    character_already_added = 238,
    operation_not_permitted = 239,
    invalid_currency = 240,
    not_enough_morale = 241,
    membership_mismatch = 242,
    steam_not_logged_on = 243,
    progression_already_unlocked = 244,
    account_locked = 245,
    equipment_not_owned_by_character = 246,
    store_bundle_not_found = 247,
    store_bundle_not_for_sale = 248,
    store_discount_not_found = 249,
    store_discount_not_active = 250,
    store_discount_mismatch = 251,
    pricing_mismatch = 252,
    invite_pending = 253,
    invite_accepted = 254,
    player_ignored = 255,
    not_enough_squad_points = 256,
    squad_leader_not_found = 257,
    squad_type_not_found = 258,
    squad_support_slot_not_removable = 259,
    squad_does_not_support_resource = 260,
    squad_in_locked_state = 261,
    squad_members_not_ready = 262,
    squad_not_eligible = 263,
    character_id_needed = 264,
    invalid_steam_id = 265,
    steam_call_failed = 266,
    mailru_mismatch_id = 267,
    language_code_not_found = 269,
    linked_login_valid_account_exists = 270,
    linked_login_valid_account_is_new = 271,
    user_marked_for_deletion = 272,
    invalid_email = 273,
    email_already_registered = 274,
    require_new_battleye_policy = 275,
    invalid_discord_id = 276,
    discord_call_failed = 277,
    epic_invalid_id = 278,
    epic_call_failed = 279,
    voucher_expired = 280,
}

export enum VirtualCurrencyType {
    Credits = 1,
    Warfunds = 2,
    Gold = 3,
}

export enum MissionStatus {
    MissionOpen = 1,
    MissionRunning = 2,
    MissionEnding = 3,
}