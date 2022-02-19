import { KeyValueChangeKey, ProtoParser, SortedArray } from "./protoTypes";

export const SetProtoWarParsers: Iterable<readonly [String, ProtoParser]> = [
    [KeyValueChangeKey.BattleInfo, (sorted: SortedArray) => ({
        id: sorted[1],                              // INT64
        posX: (sorted[2] as Buffer)?.readFloatLE(), // FLOAT
        posY: (sorted[3] as Buffer)?.readFloatLE(), // FLOAT
    })],
    [KeyValueChangeKey.battlefieldstatus, (sorted: SortedArray) => ({
        id: (sorted[1] as Buffer)?.readBigInt64LE(),    // SFIXED64
        warid: sorted[2],                               // INT64
        battlefieldid: sorted[3],                       // INT64
        factionid: sorted[4],                           // INT64
    })],
    [KeyValueChangeKey.FactionResourceQueue, (sorted: SortedArray) => ({
        id: sorted[1],              // INT64
        factionId: sorted[2],       // INT64
        warId: sorted[3],           // INT64
        supplyQueueHead: sorted[4], // INT32
        supplyQueueTail: sorted[5], // INT32
    })],
    [KeyValueChangeKey.FactionResourceProduction, (sorted: SortedArray) => ({
        id: sorted[1],                                  // INT64
        factionId: sorted[2],                           // INT64
        warId: sorted[3],                               // INT64
        factionHQCommandNodeWarInstanceId: sorted[4],   // INT64
        armyResourceCategoryId: sorted[5],              // INT64
        armyResourceProductionTemplateId: sorted[6],    // INT64
        nextRunTimeStamp: sorted[7],                    // STRING
        nextProductionValue: sorted[8],                 // INT32
        warStartValue: sorted[9],                       // INT32
    })],
    [KeyValueChangeKey.FactionResourceConsumption, (sorted: SortedArray) => ({
        id: sorted[1],                                  // INT64
        factionId: sorted[2],                           // INT64
        warId: sorted[3],                               // INT64
        factionHQCommandNodeWarInstanceId: sorted[4],   // INT64
        armyResourceCategoryId: sorted[5],              // INT64
        previousConsumptionTimeStamp: sorted[6],        // STRING
        previousConsumptionValue: sorted[7],            // INT32
        supplyQueueHead: sorted[8],                     // INT32
        supplyQueueTail: sorted[9],                     // INT32
    })],
    [KeyValueChangeKey.armyresource, (sorted: SortedArray) => ({
        id: sorted[1],                          // INT64
        commandNodeWarInstanceId: sorted[2],    // INT64
        armyResourceCategoryId: sorted[3],      // INT64
        count: sorted[4],                       // UINT32
        warid: sorted[5],                       // INT64
    })],
    [KeyValueChangeKey.battle, (sorted: SortedArray) => ({
        id: (sorted[1] as Buffer)?.readBigInt64LE(),        // SFIXED64
        warid: sorted[2],                                   // INT64
        mapEntityId: sorted[3],                             // INT64
        mapEntityTypeId: sorted[4],                         // INT64
        start: sorted[5],                                   // STRING
        factioncount: sorted[9],                            // UINT32
        excludedFactionId: sorted[10],                      // INT64
        position: (sorted[11] as Buffer)?.readFloatLE(),    // FLOAT
        activationTimeStamp: sorted[12],                    // STRING
    })],
    [KeyValueChangeKey.CommandNodeDefinition, (sorted: SortedArray) => ({
        id: sorted[1],                          // INT64
        name: sorted[2],                        // STRING
        abbreviation: sorted[3],                // STRING
        ownerPlayerId: sorted[4],               // INT64
        factionTemplateId: sorted[5],           // INT64
        commandNodeTemplateId: sorted[6],       // INT64
        rank: sorted[7],                        // INT32
        supplyResourceCategoryId: sorted[8],    // INT64
        generalCharacterId: sorted[9],          // INT64
        statUpdateTimeStamp: sorted[10],        // INT64
        suppliedOnCreation: sorted[11],         // BOOL
    })],
    [KeyValueChangeKey.CommandNodeWarInstance, (sorted: SortedArray) => ({
        id: sorted[1],                                              // INT64
        commandNodeDefinitionId: sorted[2],                         // INT64
        parentCommandNodeInstanceId: sorted[3],                     // INT64
        factionId: sorted[4],                                       // INT64
        mapEntityId: sorted[5],                                     // INT64
        mapEntityTypeId: sorted[6],                                 // INT64
        warId: sorted[7],                                           // INT64
        morale: sorted[8],                                          // UINT32
        lastReset: sorted[9],                                       // INT64
        isDeployed: sorted[10],                                     // UINT32
        hasGottenSoldierResourcesForFree: sorted[11],               // BOOL
        hasGottenVehicleResourcesForFree: sorted[12],               // BOOL
        maxMorale: sorted[13],                                      // UINT32
        moraleGainModifier: (sorted[14] as Buffer)?.readFloatLE(),  // FLOAT
    })],
    [KeyValueChangeKey.faction, (sorted: SortedArray) => ({
        id: sorted[1],                                                          // INT64
        factiontemplateid: sorted[2],                                           // INT64
        supremecommand: sorted[4],                                              // INT64
        war: sorted[5],                                                         // INT64
        underdogBonusXpMultiplier: (sorted[6] as Buffer)?.readFloatLE(),        // FLOAT
        underdogBonusWarfundsMultiplier: (sorted[7] as Buffer)?.readFloatLE(),  // FLOAT
    })],
    [KeyValueChangeKey.accesspointstatus, (sorted: SortedArray) => ({
        id: (sorted[1] as Buffer)?.readBigInt64LE(),    // SFIXED64
        warid: sorted[2],                               // INT64
        accesspointid: sorted[3],                       // INT64
        factionid: sorted[4],                           // INT64
    })],
    [KeyValueChangeKey.supplylinestatus, (sorted: SortedArray) => ({
        id: (sorted[1] as Buffer)?.readBigInt64LE(),    // SFIXED64
        warid: sorted[2],                               // INT64
        factionid: sorted[3],                           // INT64
        supplylineid: sorted[4],                        // INT64
    })],
    [KeyValueChangeKey.air_commandnode_base, (sorted: SortedArray) => ({
        id: sorted[1],                          // INT64
        commandNodeWarInstanceId: sorted[2],    // INT64
        battlefieldid: sorted[3],               // INT64
        targetentityid: sorted[4],              // INT64
        targetentitytype: sorted[5],            // STRING
        warid: sorted[6],                       // INT64
    })],
    [KeyValueChangeKey.air_transport, (sorted: SortedArray) => ({
        id: sorted[1],      	                // INT64
        commandNodeWarInstanceId: sorted[2],    // INT64
        fromentityid: sorted[3],                // INT64
        fromentitytype: sorted[4],              // INT32
        toentityid: sorted[5],                  // INT64
        toentitytype: sorted[6],                // INT32
        begintime: sorted[7],                   // INT64
        endtime: sorted[8],                     // INT64
        warid: sorted[9],                       // INT64
    })],
];
