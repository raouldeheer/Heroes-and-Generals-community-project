import { DataStore, loadTemplate } from "..";
import { Json } from "mylas";

async function toJsonDB(name:string) {
    const dataStore = new DataStore;
    await loadTemplate(dataStore, name);
    await Json.save(`./jsondb/${name}.json`, Array.from(dataStore.GetMap().get(name)!.values()));
}

(async () => {
    await toJsonDB("battlefield");
    await toJsonDB("supplyline");
    await toJsonDB("accesspoint");
})();
