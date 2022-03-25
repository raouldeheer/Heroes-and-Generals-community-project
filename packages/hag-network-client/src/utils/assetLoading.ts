import mylas from "mylas";
import BufferCursor from "../buffercursor";
import { DataStore } from "../datastore";
import { keyToClass } from "../protolinking/classKeys";

export async function loadTemplate(dataStore: DataStore, name: string) {
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
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(typeText);
    }
}