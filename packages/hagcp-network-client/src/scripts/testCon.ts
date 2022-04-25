import { DataStore } from "hagcp-utils";
import mylas from "mylas";
import Long from "long";
import { setTimeout } from "timers/promises";
import { ResponseType, Client } from "..";
import dotenv from "dotenv";
dotenv.config();

const dataStore = new DataStore;
let saveMapTimer: NodeJS.Timer;
let warId: string | null = null;
Client.connectToHQ(
    String(process.env.HAG_USERAGENT),
    String(process.env.HAG_USERNAME),
    String(process.env.HAG_PASSWORD)
).then(cl => {
    if (!cl) return;
    const startTime = Date.now();
    cl.once("loggedin", async () => {
        // cl.sendPacket("subscribewarmapview");
        // cl.sendPacket("query_war_catalogue_request");

        await setTimeout(2000);

        saveMapTimer = setInterval(saveMapNow, 30000);
    }).on("join_war_response", async (data: { msg: ResponseType, redirectSrv?: string; }) => {
        if (data.msg === ResponseType.ok) {
            if (data.redirectSrv) {
                console.log(`redirectSrv detected: ${data.redirectSrv}`);
            }
            cl.sendPacket("unsubscribewarmapview");
            await setTimeout(1000);
            cl.sendPacket("subscribewarmapview");
            cl.sendPacket("query_war_catalogue_request");
        } else {
            console.error(`ERROR: ${data}`);
        }
    }).on("message", async (typetext, data) => {
        if (typetext == "KeyValueChangeSet") {
            dataStore.SaveData(data);
            if (data?.set) {
                for (const iterator of data.set) {
                    if (iterator.key == "war") {
                        const value = iterator.value;
                        warId = value.id;
                        if (value.sequelwarid !== "0") {
                            saveMapNow();
                            saveMapTimer.refresh();
                            console.log(`${value.id} ended, switching to: ${value.sequelwarid}`);
                            dataStore.ResetData("battlefieldstatus");
                            cl.sendPacket("join_war_request", {
                                warid: Long.fromString(value.sequelwarid),
                                factionid: Long.ZERO,
                                playedFirstBlood: 0,
                            });
                        }
                    }
                }
            }
        }
    }).on("closed", () => {
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
