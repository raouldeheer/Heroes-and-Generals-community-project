import { DataStore } from "hagcp-utils";
import { Json } from "mylas";
import { loadTemplate } from "..";

async function toJsonDB(name:string) {
    const dataStore = new DataStore;
    await loadTemplate(dataStore, name);
    await Json.save(`./json/${name}.json`, Array.from(dataStore.GetMap().get(name)!.values()));
}

(async () => {
    await toJsonDB("battlefield");
    await toJsonDB("supplyline");
    await toJsonDB("accesspoint");
    await toJsonDB("armyresourcecategory");
})();
