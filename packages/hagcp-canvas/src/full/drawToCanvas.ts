import { createCanvas } from "canvas";
import { DataStore } from "hagcp-utils";
import { height, width } from "../settings";
import {
    drawSupplylines,
    drawBattlefields,
    drawCapitals,
    drawStats,
    drawBackground,
} from "../part";

export async function drawToCanvas(dataStore: DataStore, dataStore2: DataStore, factionColorLookup: (id: string) => string, factions?: Map<string, any>) {
    const supplylines = dataStore2.GetItemStore("supplylinestatus")?.values();
    const supMap = new Map<string, Set<string>>();
    for (const sup of supplylines || []) {
        const fac = sup.factionid;
        const id = sup.supplylineid;

        const faction = supMap.get(fac) || new Set;
        faction.add(id);
        supMap.set(fac, faction);
    }

    const battlefields = dataStore2.GetItemStore("battlefieldstatus")?.values();
    const bfsMap = new Map<string, Set<string>>();
    for (const bf of battlefields || []) {
        const fac = bf.factionid;
        const id = bf.battlefieldid;

        const faction = bfsMap.get(fac) || new Set;
        faction.add(id);
        bfsMap.set(fac, faction);
    }

    return await drawToCanvasWithMaps(dataStore, supMap, bfsMap, factionColorLookup, factions);
}

export async function drawToCanvasWithMaps(dataStore: DataStore, supMap: Map<string, Set<string>>, bfsMap: Map<string, Set<string>>, factionColorLookup: (id: string) => string, factions?: Map<string, any>) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    // Draw background
    await drawBackground(context);

    // Draw capitals
    drawCapitals(dataStore, context);

    // Draw supplylines
    drawSupplylines(supMap, dataStore, context, factionColorLookup);

    // Draw battlefields
    drawBattlefields(bfsMap, dataStore, context, factionColorLookup);

    // Draw stats
    drawStats(factions, context);

    return canvas;
}
