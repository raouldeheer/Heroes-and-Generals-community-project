import { BufferCursor } from "hagcp-utils";
import Long from "long";
import { PacketClass, packetClassParser } from "../dist/index";

type TestType = {
    packet: packetClassParser;
    data: any;
};

type specialObject<T> = {
    [P in keyof T]: Long | number | string | object | boolean;
};

function mapLongToString<T>(obj: specialObject<T>) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (element instanceof Long) obj[key] = element.toString();
            else if (typeof element === "object") obj[key] = mapLongToString(element);
        }
    }
    return obj;
}

describe('Test packet parsing', () => {

    const tests: TestType[] = [
        {
            packet: PacketClass.unsubscriberesponse,
            data: { reply: "ok" },
        },
        {
            packet: PacketClass.query_war_catalogue_request,
            data: {
                includeWarId: Long.ZERO,
            },
        },
    ];

    const addDummyClass = (packet: packetClassParser) => {
        tests.push({
            packet,
            data: {
                dummy: 0,
            }
        });
    };

    addDummyClass(PacketClass.StartLogin);
    addDummyClass(PacketClass.QueryServerInfo);
    addDummyClass(PacketClass.subscribeplayerview);
    addDummyClass(PacketClass.unsubscribeplayerview);
    addDummyClass(PacketClass.subscribecommandnodeview);
    addDummyClass(PacketClass.SubscribeHostingCenterInfoView);
    addDummyClass(PacketClass.subscribefriendview);
    addDummyClass(PacketClass.SubscribeShopView);
    addDummyClass(PacketClass.subscribeignoredplayerview);
    addDummyClass(PacketClass.SubscribeMessageView);
    addDummyClass(PacketClass.subscribewarmaplightview);
    addDummyClass(PacketClass.subscribebattlesview);
    addDummyClass(PacketClass.subscriberesourceview);
    addDummyClass(PacketClass.QueryShopWarBondItemsRequest);
    addDummyClass(PacketClass.GetChatChannelsSubscribedRequest);
    addDummyClass(PacketClass.subscriberesponse);
    addDummyClass(PacketClass.SubscribePlayerMissionViewRequest);
    addDummyClass(PacketClass.subscribesoldierview);
    addDummyClass(PacketClass.unsubscribecommandnodeview);
    addDummyClass(PacketClass.unsubscribewarmapview);
    addDummyClass(PacketClass.unsubscriberesourceview);
    addDummyClass(PacketClass.UnsubscribePlayerMissionViewRequest);
    addDummyClass(PacketClass.unsubscribebattlesview);
    addDummyClass(PacketClass.unsubscribewarmaplightview);
    addDummyClass(PacketClass.subscribewarmapview);
    addDummyClass(PacketClass.ChangeTierRequest);

    tests.forEach(item => {
        it(`Parse ${item.packet.name}`, () => {
            const data = item.packet.toBuffer(item.data);
            const parsed = item.packet.parse(new BufferCursor(data));
            expect(parsed).toStrictEqual(mapLongToString(item.data));
        });
    });
});
