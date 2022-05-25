import mylas from "mylas";
import { BufferCursor, DataStore } from "hagcp-utils";
import { ClassKeys, keyToClass } from "hagcp-network-client";
import { join } from "path";

export async function loadTemplate(dataStore: DataStore, name: string) {
    const element = new BufferCursor(await mylas.buf.load(join(__filename, `../../assets/${name}`)));

    element.move(4);
    const typeLength = element.readUInt32LE() - 4;
    const typeText = element.slice(typeLength).toString() as ClassKeys;

    const DataBuf = element.slice();
    DataBuf.seek(0);

    let result;
    if (keyToClass.has(typeText)) {
        try {
            // Find class to parse packet with.
            const klas = keyToClass.get(typeText);
            if (!klas) return;
            result = klas.parse(DataBuf);
            if (typeof result == "object") {
                if (typeText == "KeyValueChangeSet")
                    dataStore.SaveData(result);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(typeText);
    }
}
