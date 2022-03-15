import { Client } from "./client";
import { DataStore } from "./datastore";
import { ip, port } from "./env";
import mylas from "mylas";
import Long from "long";
import { setTimeout } from "timers/promises";

const dataStore = new DataStore;
const cl = new Client(ip, port);
cl.once("loggedin", async () => {
    cl.sendPacketToBuffer("subscribeplayerview");
    cl.sendPacketToBuffer("subscribewarmaplightview");

    await setTimeout(2000);

    setInterval(saveMapNow, 30000);
}).on("message", (typetext, data) => {
    if (typetext == "KeyValueChangeSet") {
        if (data?.set) {
            for (const iterator of data.set) {
                if (iterator.key == "war") {
                    const value = iterator.value;
                    if (value.sequelwarid !== "0") {
                        saveMapNow();
                        console.log(`${value.id} ended, switching to: ${value.sequelwarid}`);
                        dataStore.ResetData("battlefieldstatus");
                        cl.sendPacketToBuffer("join_war_request", {
                            warid: Long.fromString(value.sequelwarid),
                            factionid: Long.ZERO,
                            playedFirstBlood: 0,
                        });
                    }
                }
            }
        }

        dataStore.SaveData(data);
    }
}).on("closed", () => {
    console.log("Socket closed!");
    process.exit(1);
});

function saveMapNow() {
    const date = (new Date).toISOString().replace(/[-:.]/g, "");

    const battlefieldstatus = dataStore.ToObject().battlefieldstatus;
    if (!battlefieldstatus) return
    const aBattleField = battlefieldstatus[Object.keys(battlefieldstatus)[0]];
    if (aBattleField?.warid) {
        console.log(`saving to: ./saves/${aBattleField.warid}/${date}.jsonc`);
        mylas.json.saveS(`./saves/${aBattleField.warid}/${date}.jsonc`, {
            battlefieldstatus: dataStore.ToObject().battlefieldstatus,
        });
    }
}
