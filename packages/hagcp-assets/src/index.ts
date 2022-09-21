import mylas from "mylas";
import { BufferCursor, DataStore } from "hagcp-utils";
import { ClassKeys, PacketClass } from "hagcp-network-client";
import { join } from "path";

export async function loadTemplate(dataStore: DataStore, name: string) {
    const element = new BufferCursor(await mylas.buf.load(join(__filename, `../../assets/${name}`)));

    element.move(4);
    const typeLength = element.readUInt32LE() - 4;
    const typeText = element.slice(typeLength).toString() as ClassKeys;

    const DataBuf = element.slice();
    DataBuf.seek(0);

    let result;
    if (Reflect.has(PacketClass, typeText)) {
        try {
            // Find class to parse packet with.
            const klas = Reflect.get(PacketClass, typeText);
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
