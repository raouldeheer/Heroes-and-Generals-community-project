import { DataStore } from "hagcp-utils";
import fs from "fs";
import { pipeline } from "stream/promises";
import { drawToCanvas } from "./drawToCanvas";

export async function toCanvasColored(dataStore: DataStore, dataStore2: DataStore, imageName = "./warmap.png") {
    const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"];
    const factions: string[] = [];

    const lookup = (id: string) => {
        if (!factions.includes(id)) factions.push(id);
        return colors[factions.indexOf(id)];
    };

    const canvas = await drawToCanvas(dataStore, dataStore2, lookup);

    // Save output to file
    await pipeline(canvas.createJPEGStream(), fs.createWriteStream(imageName));
}
