import { DataStore } from "hagcp-utils";
import { Json } from "mylas";
import { loadTemplate } from "..";
import { readdir } from "fs/promises";
import { join } from "path";

async function toJson(name:string) {
    const dataStore = new DataStore;
    await loadTemplate(dataStore, name);
    await Json.save(`./json/${name}.json`, Array.from(dataStore.GetItemStore(name)!.values()));
}

(async () => {
    const files = await readdir(join(__filename, "../../../assets"));
    await Promise.all(files.map(toJson));
})();
