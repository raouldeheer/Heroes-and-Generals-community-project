import { DataStore } from "hagcp-utils";
import { Json } from "mylas";
import { loadTemplate } from "..";

async function toJson(name:string) {
    const dataStore = new DataStore;
    await loadTemplate(dataStore, name);
    await Json.save(`./json/${name}.json`, Array.from(dataStore.GetMap().get(name)!.values()));
}

(async () => {
    await toJson("accesspointtemplate");
    await toJson("battlefield");
    await toJson("supplyline");
    await toJson("accesspoint");
    await toJson("armyresourcecategory");
    await toJson("CapturepointTemplate");
    await toJson("gamemap");
})();
