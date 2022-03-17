import mylas from "mylas";
import { DataStore } from "./datastore";
import { toCanvasColored } from "./utils";
import BufferCursor from "./buffercursor";
import { keys } from "./types";
import { ProtoToString } from "./proto";
import { readdir } from "fs/promises";
import { existsSync, mkdirSync } from "fs";


async function jsonToMap(filename: string, imageName: string, dataStore: DataStore) {
    const data = await mylas.json.load(filename);

    for (const key in data) if (data.hasOwnProperty(key))
        for (const key2 in data[key]) if (data[key].hasOwnProperty(key2))
            dataStore.SaveData({ set: [{ key, value: data[key][key2] }] });

    await toCanvasColored(dataStore, imageName);
    console.log(`saved: ${imageName}`);
}

(async () => {
    const tempFile = await mylas.buf.load("./captures/battlefield");
    const dataStore = new DataStore;
    const element = new BufferCursor(tempFile);

    element.move(4);
    const typeLength = element.readUInt32LE() - 4;
    const typeText = element.slice(typeLength).toString("ascii");

    const DataBuf = element.slice();
    DataBuf.seek(0);

    let result;
    if (keys.has(typeText)) {
        try {
            // Find class to parse packet with.
            const klas = keys.get(typeText)!;
            result = klas.parse(DataBuf);
            if (typeof result == "object") {
                if (typeText == "KeyValueChangeSet") dataStore.SaveData(result);
                result = ProtoToString(result);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(typeText);
    }
    console.log("Loaded template");
    const warId = "4399881207183542806";
    if (!existsSync(`./saves/${warId}`)) mkdirSync(`./saves/${warId}`);
    if (!existsSync(`./savesMap/${warId}`)) mkdirSync(`./savesMap/${warId}`);
    for (const iterator of await readdir(`./saves/${warId}`)) {
        await jsonToMap(
            `./saves/${warId}/${iterator}`,
            `./savesMap/${warId}/${iterator.replace("jsonc", "jpg")}`,
            new DataStore(dataStore.GetMap()));
    }
    console.log("Done");
})();


