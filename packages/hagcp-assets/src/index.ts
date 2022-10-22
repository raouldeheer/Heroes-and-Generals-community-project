import mylas from "mylas";
import { DataStore } from "hagcp-utils";
import { PacketClass } from "hagcp-network-client";
import { join } from "path";
import { BufferCursor } from "buffercursor.ts";

export async function loadTemplate(dataStore: DataStore, name: string) {
    const element = new BufferCursor(await mylas.buf.load(join(__filename, `../../assets/${name}`)));

    element.move(4);
    const typeLength = element.readUInt32LE() - 4;
    element.move(typeLength);

    const DataBuf = element.slice();

    const result = PacketClass.KeyValueChangeSet.parse(DataBuf);
    dataStore.SaveData(result);
}
