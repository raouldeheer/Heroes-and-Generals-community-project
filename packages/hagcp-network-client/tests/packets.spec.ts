import { BufferCursor } from "hagcp-utils";
import Long from "long";
import { PacketClass, packetClassParser, VirtualCurrencyType } from "../dist/index";

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
    const tests: TestType[] = [];

    const addTestClass = <T extends packetClassParser>(packet: T, data: ReturnType<T["parse"]>) => {
        tests.push({ packet, data });
    };

    [
        PacketClass.StartLogin,
        PacketClass.QueryServerInfo,
        PacketClass.subscribeplayerview,
        PacketClass.unsubscribeplayerview,
        PacketClass.subscribecommandnodeview,
        PacketClass.SubscribeHostingCenterInfoView,
        PacketClass.subscribefriendview,
        PacketClass.SubscribeShopView,
        PacketClass.subscribeignoredplayerview,
        PacketClass.SubscribeMessageView,
        PacketClass.subscribewarmaplightview,
        PacketClass.subscribebattlesview,
        PacketClass.subscriberesourceview,
        PacketClass.QueryShopWarBondItemsRequest,
        PacketClass.GetChatChannelsSubscribedRequest,
        PacketClass.subscriberesponse,
        PacketClass.SubscribePlayerMissionViewRequest,
        PacketClass.subscribesoldierview,
        PacketClass.unsubscribecommandnodeview,
        PacketClass.unsubscribewarmapview,
        PacketClass.unsubscriberesourceview,
        PacketClass.UnsubscribePlayerMissionViewRequest,
        PacketClass.unsubscribebattlesview,
        PacketClass.unsubscribewarmaplightview,
        PacketClass.subscribewarmapview,
        PacketClass.ChangeTierRequest,
    ].forEach(packet => {
        addTestClass(packet, { dummy: 0 });
    });

    addTestClass(PacketClass.AddMembershipRequest, {
        discountId: Long.ZERO,
        membershipTemplateId: Long.ZERO,
        paymentCurrency: VirtualCurrencyType.Credits,
        pricingId: Long.ZERO,
    });
    addTestClass(PacketClass.query_war_catalogue_request, {
        includeWarId: Long.ZERO,
    });
    addTestClass(PacketClass.unsubscriberesponse, { reply: "ok" });
    addTestClass(PacketClass.KeyValueChangeSet, {
        set: [{
            key: "accesspoint",
            value: {
                id: Long.ZERO,
                mapid: Long.ZERO,
                template: Long.ZERO,
                battlefield: Long.ZERO,
            },
        }],
    });

    tests.forEach(item => {
        it(`Parse ${item.packet.name}`, () => {
            const data = item.packet.toBuffer(item.data);
            const parsed = item.packet.parse(new BufferCursor(data));
            expect(parsed).toStrictEqual(mapLongToString(item.data));
        });
    });
});
