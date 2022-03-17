import { Client } from "./client";
import { DataStore } from "./datastore";
import { ip, port } from "./env";
import mylas from "mylas";
import Long from "long";
import { setTimeout } from "timers/promises";
import { ResponseType } from "./protolinking/classKeys";

const dataStore = new DataStore;
const cl = new Client(ip, port);
let saveMapTimer: NodeJS.Timer;
let warId: string | null = null;
cl.once("loggedin", async () => {
    cl.sendPacket("subscribeplayerview");
    cl.sendPacket("subscribewarmaplightview");
    cl.sendPacket("query_war_catalogue_request");

    await setTimeout(2000);

    saveMapTimer = setInterval(saveMapNow, 30000);
}).on("join_war_response", async (data: {msg: ResponseType, redirectSrv?: string }) => {
    if (data.msg === ResponseType.ok) {
        if (data.redirectSrv) {
            console.log(`redirectSrv detected: ${data.redirectSrv}`);
        }
        cl.sendPacket("unsubscribeplayerview");
        cl.sendPacket("unsubscribewarmaplightview");
        await setTimeout(1000);
        cl.sendPacket("subscribeplayerview");
        cl.sendPacket("subscribewarmaplightview");
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
    clearInterval(saveMapTimer);
    process.exit(1);
});

function saveMapNow() {
    const date = (new Date).toISOString().replace(/[-:.]/g, "");
    if (warId) {
        console.log(`saving to: ./saves/${warId}/${date}.jsonc`);
        mylas.json.saveS(`./saves/${warId}/${date}.jsonc`, {
            battlefieldstatus: dataStore.ToObject().battlefieldstatus,
        });
    }
}
