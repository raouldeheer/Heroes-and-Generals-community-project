/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import mylas from "mylas";
import { BufferCursor, DataStore } from "hagcp-utils";
import { drawToCanvas, toCanvasColored } from "hagcp-canvas";
import { existsSync, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { gunzipSync } from "zlib";
import { PacketClass } from "hagcp-network-client";
import { loadTemplate } from "hagcp-assets";

async function jsonToMap(filename: string, imageName: string, dataStore: DataStore) {
    const { factions, ...data } = await mylas.json.load(filename);
    const dataStore2 = new DataStore;

    if (existsSync(filename.replace(".jsonc", ".protodata"))) {
        const buf = gunzipSync(await mylas.buf.load(filename.replace(".jsonc", ".protodata")));
        dataStore2.SaveData(PacketClass.KeyValueChangeSet.parse(new BufferCursor(buf)));
    } else {
        for (const key in data) if (data.hasOwnProperty(key))
            for (const key2 in data[key]) if (data[key].hasOwnProperty(key2))
                dataStore2.SaveData({ set: [{ key, value: data[key][key2] }] });
    }

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
    await loadTemplate(dataStore, "factiontemplate");
    console.log(`Loaded template process ${process.pid}`);

    process.on("message", async (m: { file: string, image: string; }) => {
        try {
            if (!existsSync(m.image))
                await jsonToMap(m.file, m.image, dataStore);
            process.send!(true);
        } catch (error) {
            console.log(error);
            console.log(`Error in file: ${m.file}`);
            process.send!(false);
        }
    });
})();
