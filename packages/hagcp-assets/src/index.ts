import mylas from "mylas";
import BufferCursor from "hagcp-network-client/dist/buffercursor";
import { DataStore } from "hagcp-network-client/dist/datastore";
import { keyToClass } from "hagcp-network-client/dist/protolinking/classKeys";
import { join } from "path";

export async function loadTemplate(dataStore: DataStore, name: string) {
    const element = new BufferCursor(await mylas.buf.load(join(__filename, `../../assets/${name}`)));

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