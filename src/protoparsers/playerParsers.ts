import { KeyValueChangeKey, ProtoParser, SortedArray } from "./protoTypes";

export const SetProtoPlayerParsers: Iterable<readonly [String, ProtoParser]> = [
    [KeyValueChangeKey.player, (sorted: SortedArray) => ({
        id: sorted[1],                                          // INT64
        gamertag: sorted[2],                                    // STRING
        invertmouse: sorted[3],                                 // UINT32
        invertmouseairplane: sorted[4],                         // UINT32
        mousesensitivity: (sorted[5] as Buffer)?.readFloatLE(), // FLOAT
        administrator: sorted[6],                               // STRING
        mousecontrolledcars: sorted[7],                         // UINT32
        showcrosshair: sorted[8],                               // UINT32
        showcrosshairVehicles: sorted[9],                       // UINT32
        war: sorted[10],                                        // INT64
        factionid: sorted[11],                                  // INT64
        subscribedupto: sorted[12],                             // STRING
        goldBought: sorted[13],                                 // INT64
        goldEarned: sorted[14],                                 // INT64
        goldUsed: sorted[15],                                   // INT64
        creditsBought: sorted[16],                              // INT64
        creditsEarned: sorted[17],                              // INT64
        creditsUsed: sorted[18],                                // INT64
        firstActionGameDate: sorted[19],                        // STRING
        numloginsFlash: sorted[20],                             // INT32
        numloginsMobile: sorted[21],                            // INT32
        language: sorted[22],                                   // STRING
        warfundsBought: sorted[23],                             // INT64
        warfundsEarned: sorted[24],                             // INT64
        warfundsUsed: sorted[25],                               // INT64
        metricsUid: sorted[26],                                 // STRING
        yellowGriefPoints: sorted[27],                          // INT32
        redGriefPoints: sorted[28],                             // INT32
        latestRedGriefPointTimestamp: sorted[29],               // STRING
        tier: sorted[30],                                       // INT32
        lastLogin: sorted[31],                                  // STRING
        tutorialsCompleted: sorted[32],                         // INT32
        goldBoughtSteam: sorted[33],                            // INT64
        skillLevel: (sorted[34] as Buffer)?.readFloatLE(),      // FLOAT
        invertmouseturret: sorted[35],                          // UINT32
        totalScore: sorted[36],                                 // INT64
        unlockBits: sorted[37],                                 // BOOL
        level: sorted[38],                                      // INT32
        achievementsBits: sorted[39],                           // BOOL
        isDeleted: sorted[40],                                  // BOOL
        currencyCode: sorted[41],                               // STRING
        currencyRegion: sorted[42],                             // STRING
    })],
    [KeyValueChangeKey.PlayerPartnerInfo, (sorted: SortedArray) => ({
        id: sorted[1],              // INT64
        playerId: sorted[2],        // INT64
        partnerId: sorted[3],       // INT32
        partnerUserId: sorted[4],   // STRING
    })],
    [KeyValueChangeKey.friendinfo, (sorted: SortedArray) => ({
        id: sorted[1],                          // INT64
        gamertag: sorted[2],                    // STRING
        onlinestatus: sorted[3],                // UINT32
        factionTemplateId: sorted[4],           // INT64
        factionId: sorted[5],                   // INT64
        missionId: sorted[6],                   // INT64
        missionFactionId: sorted[7],            // INT64
        warId: sorted[8],                       // INT64
        warName: sorted[9],                     // STRING
        otherPlayerAlsoFriend: sorted[10],      // BOOL
        friendshipInitiatedByMe: sorted[11],    // BOOL
        squadSessionId: sorted[12],             // INT64
        mapEntityId: sorted[13],                // INT64
        mapEntityTypeId: sorted[14],            // INT64
    })],
    [KeyValueChangeKey.ignoredplayerwithname, (sorted: SortedArray) => ({
        id: sorted[1],              // INT64
        ignorerid: sorted[2],       // INT64
        ignoredid: sorted[3],       // INT64
        ignoredname: sorted[4],     // STRING
    })],
];