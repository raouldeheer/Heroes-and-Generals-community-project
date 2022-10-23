import { DataStore } from "hagcp-utils";
import mylas from "mylas";
import Long from "long";
import { setTimeout } from "timers/promises";
import { ResponseType, Client, ClassKeys, PacketClass } from "hagcp-network-client";
import dotenv from "dotenv";
dotenv.config();

const dataStore = new DataStore;
let saveMapTimer: NodeJS.Timer;
let warId: string | null = null;
// const cl = new Client(
//     "127.69.69.69",
//     6969,
//     String(process.env.HAG_USERAGENT),
//     String(process.env.HAG_USERNAME),
//     String(process.env.HAG_PASSWORD),
//     true);
Client.connectToHQ(
    String(process.env.HAG_USERAGENT),
    String(process.env.HAG_USERNAME),
    String(process.env.HAG_PASSWORD),
    true,
).then(cl => {
    if (!cl) return;
    const startTime = Date.now();
    cl.once("loggedin", async () => {
        // cl.sendClass(PacketClass.subscribesoldierview);
        // cl.sendClass(PacketClass.subscribecommandnodeview);
        cl.sendClass(PacketClass.query_war_catalogue_request);
        await setTimeout(2000);

        saveMapTimer = setInterval(saveMapNow, 30000);
    }).on(ClassKeys.join_war_response, async (data) => {
        if (data.msg === ResponseType.ok) {
            if (data.redirectSrv) {
                console.log(`redirectSrv detected: ${data.redirectSrv}`);
            }
            cl.sendClass(PacketClass.unsubscribewarmapview);
            await setTimeout(1000);
            cl.sendClass(PacketClass.subscribewarmapview);
            cl.sendClass(PacketClass.query_war_catalogue_request);
        } else {
            console.error(`ERROR: ${data}`);
            console.error(data);
        }
    }).on(ClassKeys.KeyValueChangeSet, async (data) => {
        dataStore.SaveData(data);
        if (data?.set) {
            for (const iterator of data.set) {
                if (iterator.key == "war") {
                    const value = iterator.value;
                    warId = value.id.toString();
                    if (value.sequelwarid.toString() !== "0") {
                        saveMapNow();
                        saveMapTimer.refresh();
                        console.log(`${value.id} ended, switching to: ${value.sequelwarid}`);
                        dataStore.ResetData("battlefieldstatus");
                        cl.sendClass(PacketClass.join_war_request, {
                            warid: value.sequelwarid,
                            factionid: Long.ZERO,
                            playedFirstBlood: 0,
                        });
                    }
                }
            }
        }
    }).on("close", () => {
        console.log("Socket closed!");
        console.log(`After ${Date.now() - startTime}ms`);
        clearInterval(saveMapTimer);
        process.exit(1);
    });
});

function saveMapNow() {
    const date = (new Date).toISOString().replace(/[-:.]/g, "");
    if (warId) {
        console.log(`saving to: ./saves/${warId}/${date}.jsonc`);
        const obj = dataStore.ToObject();
        mylas.json.saveS(`./saves/${warId}/${date}.jsonc`, {
            battlefieldstatus: obj.battlefieldstatus,
            supplylinestatus: obj.supplylinestatus,
        });
    }
}
