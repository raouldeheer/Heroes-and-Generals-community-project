import { loadTemplate } from "..";
import { DataStore } from "hagcp-utils";
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
    await toJsonDB("armyresourcecategory");
})();
