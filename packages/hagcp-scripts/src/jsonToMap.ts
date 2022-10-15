/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { createCanvas, loadImage } from "canvas";
import mylas from "mylas";
import { DataStore } from "hagcp-utils";
import { existsSync, createWriteStream } from "fs";
import { join } from "path";
import { loadTemplate } from "hagcp-assets";
import { pipeline } from "stream/promises";
import globby from "globby";
import cp from "node:child_process";
// @ts-expect-error fake ts(1471) error
import { pLimit } from "plimit-lit";

const processes: (cp.ChildProcess & { busy: boolean; })[] = [];
const MAX_THREADS = 16;
const threadLimit = pLimit(MAX_THREADS);

for (let i = 0; i < MAX_THREADS; i++) {
    const n = cp.fork(`${__dirname}/convertSaves.js`) as cp.ChildProcess & { busy: boolean; };
    n.busy = false;
    processes.push(n);
}

const jsonToMap = (filename: string, imageName: string) => threadLimit(() => {
    const n = processes.find(e => !e.busy);
    if (!n) throw new Error("Thread busy!");
    n.busy = true;
    return new Promise<void>((resolve) => {
        n.once("message", () => {
            n.busy = false;
            resolve();
        });
        n.send({ file: filename, image: imageName });
    });
});

(async () => {
    const dataStore = new DataStore;

    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "factiontemplate");
    console.log("Loaded template");

    const warId = process.argv[2];
    console.log(`Loading ${warId}`);
    if (!warId) return;

    const savesDir = "./saves";
    const savesMapDir = "./savesMap";
    if (!existsSync(join(savesDir, warId))) mylas.dir.mkS(join(savesDir, warId));
    if (!existsSync(join(savesMapDir, warId))) mylas.dir.mkS(join(savesMapDir, warId));

    const files = await globby(`${savesDir}/${warId}/*.jsonc`);
    const latestTimes: number[] = [];
    let [lastDone, done] = [0, 0];
    let [lastTime, time] = [Date.now(), Date.now()];

    const inter = setInterval(() => {
        if (latestTimes.length > 15) latestTimes.shift();
        latestTimes.push((time - lastTime) / ((done - lastDone) || 1));

        const diff = latestTimes.reduce((prev, curr) => (prev + curr) / 2);
        const remainingTime = (files.length - done) * diff;
        console.log(`(${done}/${files.length}) ` +
            `${Math.floor(remainingTime / 60000).toString().padStart(2, "0")}m ` +
            `${(Math.floor(remainingTime / 1000) % 60).toString().padStart(2, "0")}s`);

        lastDone = done;
        lastTime = time;
        time = Date.now();
    }, 1000);

    await Promise.all(
        files.map((file, i) => {
            const imageName = join(savesMapDir, warId, `image_${(i + 1).toString().padStart(5, "0")}.jpg`);
            if (!existsSync(imageName)) {
                return jsonToMap(file, imageName).then(() => { done++; });
            } else done++;
        })
    );
    clearInterval(inter);
    processes.forEach(e => e.kill());

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
            data.factions.forEach((element: Faction, i) => {
                if (i < 3) lookupFactions.set(element.factionId, element);
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
                if (data.factions.length !== 3 && element.battlesWon <= 10) return;
                factionMap.set(element.factionTemplateId, element);
            });

            const factionToAbbr = (faction: Faction) => dataStore.GetData("factiontemplate", faction.factionTemplateId).abbreviation;
            const factionToString = (faction: Faction) => `${factionToAbbr(faction)}: ${faction.infantryLost} Inf, ${faction.vehiclesLost} Vehicles, ${faction.tanksLost} Tanks, ${faction.planesLost} Planes`;

            const totalEnding = `${factionToAbbr(winner)} won the war\n\nLosses:\n${factionToString(factionMap.get("1")!)}\n${factionToString(factionMap.get("2")!)}\n${factionToString(factionMap.get("3")!)}`;

            console.log(totalEnding);

            {
                // Create canvas
                const [x, y] = [1920, 1080];
                const canvas = createCanvas(x, y);
                const context = canvas.getContext("2d");

                // Draw background
                const image = await loadImage("./images/thumbnail.png");
                context.drawImage(image, 0, 0, image.width, image.height);

                // Draw war number
                context.beginPath();
                context.fillStyle = "#000";
                context.font = "200px sans-serif, segoe-ui-emoji";
                context.fillText(`#${data.warName.slice(data.warName.length - 4) || "0000"}`, 1300, 200);
                context.stroke();

                // Draw winner image
                const winnerImage = await loadImage(`./images/${factionToAbbr(winner)}.png`);
                context.drawImage(winnerImage, (x / 2) - ((winnerImage.width * 2) / 2), (y / 2) - ((winnerImage.height * 2) / 2), winnerImage.width * 2, winnerImage.height * 2);

                // Save thumbnail
                await pipeline(canvas.createJPEGStream(), createWriteStream(`./savesMap/${warId}/thumbnail.jpg`));
            }
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
    warName: string;
    factions: Faction[];
    queryServerInfo: {
        servertime: string;
        playersInWar: number;
        onlineplayers: number;
        version: string;
        metricsUrl: string;
        redShiftUrl: string;
    };
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
