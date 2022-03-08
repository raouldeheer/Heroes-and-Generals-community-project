import { Client } from "./client";
import { DataStore } from "./datastore";
import { ip, port } from "./env";
import fs from "fs";
import { toCanvas } from "./utils";


const sleep = (delay: number) => new Promise(res => setTimeout(res, delay));

const dataStore = new DataStore;
const cl = new Client(ip, port);
cl.once("loggedin", async () => {
    cl.sendPacketToBuffer("subscribecommandnodeview");
    await sleep(1000);
    cl.sendPacketToBuffer("SubscribeHostingCenterInfoView");
    await sleep(1000);
    cl.sendPacketToBuffer("subscribebattlesview");
    await sleep(2000);
    
    toCanvas(dataStore);
    
});
cl.on("message", (typetext, data) => {
    if(typetext == "KeyValueChangeSet") {
        dataStore.SaveData(data);
        fs.writeFileSync("total.jsonc", dataStore.ToString(), "utf-8");
    }

});
