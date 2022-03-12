import mylas from "mylas";
import { DataStore } from "./datastore";
import { toCanvasColored } from "./utils";
import fs from "fs";
import BufferCursor from "./buffercursor";
import { keys } from "./types";
import { ProtoToString } from "./proto";


const data = mylas.json.loadS("./total.jsonc");

const dataStore = new DataStore;

(() => {
    const tempFile = fs.readFileSync("./captures/battlefield");

    const element = new BufferCursor(tempFile);

    const size = element.readUInt32LE() - 4;
    const typeLength = element.readUInt32LE() - 4;
    const typeText = element.slice(typeLength).toString("ascii");

    const DataBuf = element.slice();
    const DataLen = DataBuf.readUInt32LE() - 4;
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
})();

for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        for (const key2 in element) {
            if (Object.prototype.hasOwnProperty.call(element, key2)) {
                const element2 = element[key2];
                dataStore.SaveData({
                    set: [
                        { key, value: element2 }
                    ]
                });
            }
        }
    }
}

toCanvasColored(dataStore);

