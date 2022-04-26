import mylas from "mylas";
import { DataStore } from "hagcp-utils";
import { drawToCanvas, toCanvasColored } from "hagcp-utils/canvas";
import { readdir } from "fs/promises";
import { existsSync, createWriteStream } from "fs";
import { loadTemplate } from "hagcp-assets";
import { pipeline } from "stream/promises";

async function jsonToMap(filename: string, imageName: string, dataStore: DataStore) {
    const { factions, ...data } = await mylas.json.load(filename);
    const dataStore2 = new DataStore;

    for (const key in data) if (data.hasOwnProperty(key))
        for (const key2 in data[key]) if (data[key].hasOwnProperty(key2))
            dataStore2.SaveData({ set: [{ key, value: data[key][key2] }] });

    if (factions) {
        const lookupFactions = new Map<string, any>();
        factions.forEach((element: any) => {
            lookupFactions.set(element.factionId, element);
        });
        const canvas = await drawToCanvas(dataStore, dataStore2, id => lookupFactions.get(id).color, lookupFactions);
        await pipeline(canvas.createJPEGStream(), createWriteStream(imageName));
    } else {
        await toCanvasColored(dataStore, dataStore2, imageName);
    }
}

(async () => {
    const dataStore = new DataStore;

    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "supplyline");
    await loadTemplate(dataStore, "accesspoint");
    await loadTemplate(dataStore, "capital");
    console.log("Loaded template");
    const warId = process.argv[2];
    console.log(`Loading ${warId}`);
    if (!warId) return;
    if (!existsSync(`./saves/${warId}`)) mylas.dir.mkS(`./saves/${warId}`);
    if (!existsSync(`./savesMap/${warId}`)) mylas.dir.mkS(`./savesMap/${warId}`);
    const files = await readdir(`./saves/${warId}`);
    for (let i = 0; i < files.length; i++) {
        const imageName = `./savesMap/${warId}/image_${(i + 1).toString().padStart(5, "0")}.jpg`;
        await jsonToMap(`./saves/${warId}/${files[i]}`, imageName, dataStore);
        console.log(`saved: ${imageName} (${i + 1}/${files.length})`);
    }
    console.log("Done");
})();


