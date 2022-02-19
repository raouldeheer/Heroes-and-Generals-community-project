import { KeyValueChangeKey, ProtoParser, SortedArray } from "./protoTypes";

export const SetProtoServerParsers: Iterable<readonly [String, ProtoParser]> = [
    [KeyValueChangeKey.HostingCenterInfo, (sorted: SortedArray) => ({
        id: sorted[1],                  // INT64
        pingServiceConnect: sorted[2],  // STRING
        hostingCenterName: sorted[3],   // STRING
    })],
    [KeyValueChangeKey.MessageRecipient, (sorted: SortedArray) => ({
        id: sorted[1],          // INT64
        playerId: sorted[2],    // INT64
        messageId: sorted[3],   // INT64
        isRead: sorted[4],      // BOOL
        isDeleted: sorted[5],   // BOOL
    })],
    [KeyValueChangeKey.ShopWarBondItemCounter, (sorted: SortedArray) => ({
        id: sorted[1],          // INT64
        templateId: sorted[2],  // INT64
        counter: sorted[3],     // UINT32
    })],
    [KeyValueChangeKey.ViewHandlerPulse, (sorted: SortedArray) => ({
        id: sorted[1],              // INT64
        lastTickTime: sorted[2],    // INT64
        serverTime: sorted[3],      // INT64
    })],
];