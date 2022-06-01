/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import mylas from "mylas";
import { BufferCursor, DataStore, IKeyValueChangeSetResult } from "hagcp-utils";
import { drawToCanvas, toCanvasColored } from "hagcp-canvas";
import { existsSync, createWriteStream } from "fs";
import { loadTemplate } from "hagcp-assets";
import { pipeline } from "stream/promises";
import { gunzipSync } from "zlib";
import { ClassKeys, keyToClass } from "hagcp-network-client";
import globby from "globby";

async function jsonToMap(filename: string, imageName: string, dataStore: DataStore) {
    const { factions, ...data } = await mylas.json.load(filename);
    const dataStore2 = new DataStore;

    if (existsSync(filename.replace(".jsonc", ".protodata"))) {
        const buf = gunzipSync(await mylas.buf.load(filename.replace(".jsonc", ".protodata")));
        dataStore2.SaveData(keyToClass.get(ClassKeys.KeyValueChangeSet)?.parse(new BufferCursor(buf)) as IKeyValueChangeSetResult);
    } else {
        for (const key in data) if (data.hasOwnProperty(key))
            for (const key2 in data[key]) if (data[key].hasOwnProperty(key2))
                dataStore2.SaveData({ set: [{ key, value: data[key][key2] }] });
    }

    if (factions) {
        const lookupFactions = new Map<string, any>();
        factions.forEach((element: any) => {
            lookupFactions.set(element.factionId, element);
        });
        const canvas = await drawToCanvas(dataStore, dataStore2, id => lookupFactions.get(id).color, lookupFactions);
        await pipeline(canvas.createJPEGStream(), createWriteStream(imageName));
    } else {
        await toCanvasColored(dataStore, dataStore2, imageName);
    }
}

(async () => {
    const dataStore = new DataStore;

    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "supplyline");
    await loadTemplate(dataStore, "accesspoint");
    await loadTemplate(dataStore, "capital");
    await loadTemplate(dataStore, "factiontemplate");
    console.log("Loaded template");

    const warId = process.argv[2];
    console.log(`Loading ${warId}`);
    if (!warId) return;
    if (!existsSync(`./saves/${warId}`)) mylas.dir.mkS(`./saves/${warId}`);
    if (!existsSync(`./savesMap/${warId}`)) mylas.dir.mkS(`./savesMap/${warId}`);

    const files = await globby(`./saves/${warId}/*.jsonc`);
    const latestTimes: number[] = [];
    for (let i = 0; i < files.length; i++) {
        const startTime = Date.now();
        const imageName = `./savesMap/${warId}/image_${(i + 1).toString().padStart(5, "0")}.jpg`;
        try {
            if (!existsSync(imageName))
                await jsonToMap(files[i], imageName, dataStore);
        } catch (error) {
            console.log(error);
            console.log(`Error in file: ${files[i]}`);
        }
        const timeDiff = Date.now() - startTime;
        if (latestTimes.length > 5) latestTimes.shift();
        latestTimes.push(timeDiff);
        const diff = latestTimes.reduce((prev, curr) => (prev + curr) / 2);
        console.log(`saved: ${imageName} (${i + 1}/${files.length}) ` +
            `${Math.floor(((files.length - i) * diff) / 60000).toString().padStart(2, "0")}m ` +
            `${(Math.floor(((files.length - i) * diff) / 1000) % 60).toString().padStart(2, "0")}s`);
    }
    if (files) {
        let total = "00:00:00 War start\n";
        const first = mylas.json.loadS(files[0]);
        const lookupFactions = new Map<string, Faction>();
        first.factions.forEach((element: Faction) => {
            lookupFactions.set(element.factionId, element);
        });

        files.reduce((prev: Map<string, Faction>, element: string, i: number) => {
            const data: SaveData = mylas.json.loadS(element);
            if (!data?.factions) return prev;

            const lookupFactions = new Map<string, Faction>();
            data.factions.forEach((element: Faction) => {
                lookupFactions.set(element.factionId, element);
            });

            lookupFactions.forEach(faction => {
                if (faction.ownedMajorCities.length > (prev.get(faction.factionId)?.ownedMajorCities.length || Infinity)) {
                    const diff = faction.ownedMajorCities.filter(city => !prev.get(faction.factionId)!.ownedMajorCities.includes(city));
                    if (diff.length > 0) {
                        diff.forEach(newCity => {
                            const factionAbbr = dataStore.GetData("factiontemplate", faction.factionTemplateId).abbreviation;
                            if (i > 150) total += `${frameToTime(i)} ${factionAbbr} - ${dataStore.GetData("battlefield", newCity).bftitle}\n`;
                        });
                    }
                }
            });
            return lookupFactions;
        }, lookupFactions);
        const last = files.pop();
        if (last) {
            const data: SaveData = await mylas.json.load(last);
            const winner = data.factions.reduce((prev, curr) => prev.factionVictoryPoints > curr.factionVictoryPoints ? prev : curr);
            
            const factionMap = new Map<string, Faction>();
            data.factions.forEach(element => {
                factionMap.set(element.factionTemplateId, element);
            });

            const factionToAbbr = (faction: Faction) => dataStore.GetData("factiontemplate", faction.factionTemplateId).abbreviation;
            const factionToString = (faction: Faction) => `${factionToAbbr(faction)}: ${faction.infantryLost} Inf, ${faction.vehiclesLost} Vehicles, ${faction.tanksLost} Tanks, ${faction.planesLost} Planes`;
            
            const totalEnding = `${factionToAbbr(winner)} won the war\n\nLosses:\n${factionToString(factionMap.get("1")!)}\n${factionToString(factionMap.get("2")!)}\n${factionToString(factionMap.get("3")!)}`;

            console.log(totalEnding);
        }
        mylas.saveS(`./savesMap/${warId}/timestamps.txt`, total);
        console.log(total);
    }
    console.log("Done");
})();

function frameToTime(frame: number) {
    const sec = Math.floor(frame / 30);

    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = Math.floor(sec - hours * 3600 - minutes * 60);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

interface SaveData {
    factions: Faction[];
}

interface Faction {
    factionId: string;
    factionTemplateId: string;
    factionTag: string;
    factionVictoryPoints: number;
    factionPlayerCount: number;
    factionMinPlayerCount: number;
    factionMaxPlayerCount: number;
    factionPlayerOnlineCount: number;
    factionBonus: number;
    factionDeployedCommandPointsInfantry: number;
    factionDeployedCommandPointsArmor: number;
    factionDeployedCommandPointsAir: number;
    factionControlledBattlefields: number;
    battlesWon: number;
    battlesLost: number;
    infantryLost: number;
    vehiclesLost: number;
    tanksLost: number;
    planesLost: number;
    ownedMajorCities: string[];
    color: string;
}
