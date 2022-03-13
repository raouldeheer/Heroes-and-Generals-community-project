import { Client } from "./client";
import { DataStore } from "./datastore";
import { ip, port } from "./env";
import mylas from "mylas";

const sleep = (delay: number) => new Promise(res => setTimeout(res, delay));

const dataStore = new DataStore;
const cl = new Client(ip, port);
cl.once("loggedin", async () => {
    // cl.sendPacketToBuffer("subscribecommandnodeview");
    // await sleep(1000);
    // cl.sendPacketToBuffer("SubscribeHostingCenterInfoView");
    // await sleep(1000);
    // cl.sendPacketToBuffer("subscribebattlesview");
    // await sleep(1000);
    cl.sendPacketToBuffer("subscribewarmaplightview");
    await sleep(2000);

    setInterval(() => {
        const date = (new Date).toISOString().replace(/[-:.]/g, "");

        const battlefieldstatus = dataStore.ToObject().battlefieldstatus;
        const aBattleField = battlefieldstatus[Object.keys(battlefieldstatus)[0]];
        if (aBattleField?.warid) {
            console.log(`saving to: ./saves/${aBattleField.warid}/${date}.jsonc`);
            mylas.json.saveS(`./saves/${aBattleField.warid}/${date}.jsonc`, dataStore.ToObject());
        }
    }, 30000);
});
cl.on("message", (typetext, data) => {
    if (typetext == "KeyValueChangeSet") {
        dataStore.SaveData(data);
    }

});
cl.on("closed", () => {
    console.log("Socket closed!");
    process.exit(1);
});
