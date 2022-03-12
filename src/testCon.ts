import { Client } from "./client";
import { DataStore } from "./datastore";
import { ip, port } from "./env";
import mylas from "mylas";
import fs from "fs";
import { toCanvas, toCanvasColored } from "./utils";
import BufferCursor from "./buffercursor";
import { keys } from "./types";
import { ProtoToString } from "./proto";


const sleep = (delay: number) => new Promise(res => setTimeout(res, delay));

const dataStore = new DataStore;
const cl = new Client(ip, port);
cl.once("loggedin", async () => {
    cl.sendPacketToBuffer("subscribecommandnodeview");
    await sleep(1000);
    cl.sendPacketToBuffer("SubscribeHostingCenterInfoView");
    await sleep(1000);
    cl.sendPacketToBuffer("subscribebattlesview");
    await sleep(1000);
    cl.sendPacketToBuffer("subscribewarmaplightview");
    await sleep(2000);

    setInterval(() => {
        const date = (new Date).toISOString().replace(/[-:.]/g, "");
        console.log(`saving to: ./saves/${date}.jsonc`);
        mylas.json.saveS(`./saves/${date}.jsonc`, dataStore.ToObject());
    }, 30000);
    // toCanvas(dataStore);

});
cl.on("message", (typetext, data) => {
    if (typetext == "KeyValueChangeSet") {
        dataStore.SaveData(data);
        // fs.writeFileSync("total.jsonc", dataStore.ToString(), "utf-8");
        // toCanvasColored(dataStore);
    }

});
cl.on("closed", () => {
    console.log("Socket closed!");
    process.exit(1);
});
