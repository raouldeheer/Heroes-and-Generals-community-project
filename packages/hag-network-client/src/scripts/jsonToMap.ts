import mylas from "mylas";
import { DataStore } from "../datastore";
import { toCanvasColored } from "../utils";
import BufferCursor from "../buffercursor";
import { keyToClass } from "../protolinking/classKeys";
import { ProtoToString } from "../protoclasses/proto";
import { readdir } from "fs/promises";
import { existsSync } from "fs";


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

    async function loadTemplate(name: string) {
        const tempFile = await mylas.buf.load(`./captures/${name}`);
        const element = new BufferCursor(tempFile);

        element.move(4);
        const typeLength = element.readUInt32LE() - 4;
        const typeText = element.slice(typeLength).toString("ascii");

        const DataBuf = element.slice();
        DataBuf.seek(0);

        let result;
        if (keyToClass.has(typeText)) {
            try {
                // Find class to parse packet with.
                const klas = keyToClass.get(typeText)!;
                result = klas.parse(DataBuf);
                if (typeof result == "object") {
                    if (typeText == "KeyValueChangeSet")
                        dataStore.SaveData(result);
                    result = ProtoToString(result);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log(typeText);
        }
    }

    await loadTemplate("battlefield");
    await loadTemplate("supplyline");
    await loadTemplate("accesspoint");
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


