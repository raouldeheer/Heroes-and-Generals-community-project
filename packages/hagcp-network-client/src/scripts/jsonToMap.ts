import mylas from "mylas";
import { DataStore } from "../datastore";
import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { toCanvasColored } from "../utils/canvas";
import { loadTemplate } from "../utils/assetLoading";

async function jsonToMap(filename: string, imageName: string, dataStore: DataStore) {
    const data = await mylas.json.load(filename);
    const dataStore2 = new DataStore;

    for (const key in data) if (data.hasOwnProperty(key))
        for (const key2 in data[key]) if (data[key].hasOwnProperty(key2))
            dataStore2.SaveData({ set: [{ key, value: data[key][key2] }] });
    
    await toCanvasColored(dataStore, dataStore2, imageName);
    console.log(`saved: ${imageName}`);
}

(async () => {
    const dataStore = new DataStore;

    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "supplyline");
    await loadTemplate(dataStore, "accesspoint");
    console.log("Loaded template");
    const warId = "7772518062970218736";
    if (!existsSync(`./saves/${warId}`)) mylas.dir.mkS(`./saves/${warId}`);
    if (!existsSync(`./savesMap/${warId}`)) mylas.dir.mkS(`./savesMap/${warId}`);
    for (const iterator of await readdir(`./saves/${warId}`)) {
        await jsonToMap(
            `./saves/${warId}/${iterator}`,
            `./savesMap/${warId}/${iterator.replace("jsonc", "jpg")}`,
            dataStore);
    }
    console.log("Done");
})();


