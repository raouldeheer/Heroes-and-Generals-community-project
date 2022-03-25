import { createCanvas, loadImage } from 'canvas';
import fs from "fs";
import { pipeline } from "stream/promises";
import { DataStore } from '../datastore';

export function toCanvas(dataStore: DataStore) {
    interface InfoT {
        id: string;
        posX: number;
        posY: number;
    }
    const BattleInfo: { [key: string]: InfoT; } = dataStore.ToObject().BattleInfo;
    const infos: InfoT[] = [];

    for (const infokey in BattleInfo)
        if (Object.prototype.hasOwnProperty.call(BattleInfo, infokey))
            infos.push(BattleInfo[infokey]);

    const width = 2048;
    const height = 1440;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    loadImage("./background.png").then(image => {
        // Draw background
        context.drawImage(image, 0, 0, image.width, image.height);

        // Draw battles
        context.fillStyle = "#fff";
        infos.forEach(e => context.fillRect(e.posX / 8, e.posY / 8, 10, 10));

        // Save output to file
        fs.writeFileSync("./warmap.png", canvas.toBuffer("image/png"));
    });

}

export async function toCanvasColored(dataStore: DataStore, dataStore2: DataStore, imageName = "./warmap.png") {
    const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"];
    const factions: string[] = [];

    const canvas = createCanvas(2048, 1440);
    const context = canvas.getContext("2d");
    const dotSize = 2;

    const image = await loadImage("./background.png");
    // Draw background
    context.drawImage(image, 0, 0, image.width, image.height);

    // Draw battles
    const battlefieldstatus = dataStore2.ToObject().battlefieldstatus;
    for (const infokey in battlefieldstatus) {
        if (battlefieldstatus.hasOwnProperty(infokey)) {
            const element = battlefieldstatus[infokey];
            if (!factions.includes(element.factionid)) factions.push(element.factionid);
            context.fillStyle = colors[factions.indexOf(element.factionid)];
            const battlefield = dataStore.GetData("battlefield", element.battlefieldid);

            context.beginPath();
            context.arc(
                (battlefield.posx / 8) - (dotSize / 2),
                (battlefield.posy / 8) - (dotSize / 2),
                dotSize, 0, 2 * Math.PI);
            context.fill();
        }
    }

    // Draw battles
    context.lineWidth = 1;
    const supplylinestatus = dataStore2.ToObject().supplylinestatus;
    for (const infokey in supplylinestatus) {
        if (supplylinestatus.hasOwnProperty(infokey)) {
            const element = supplylinestatus[infokey];
            context.strokeStyle = colors[factions.indexOf(element.factionid)];
            const supplyline = dataStore.GetData("supplyline", element.supplylineid);
            const accesspoint1 = dataStore.GetData("accesspoint", supplyline.accesspoint1Id);
            const accesspoint2 = dataStore.GetData("accesspoint", supplyline.accesspoint2Id);
            const battlefield1 = dataStore.GetData("battlefield", accesspoint1.battlefield);
            const battlefield2 = dataStore.GetData("battlefield", accesspoint2.battlefield);

            context.beginPath();
            context.moveTo(battlefield1.posx / 8, battlefield1.posy / 8);
            context.lineTo(battlefield2.posx / 8, battlefield2.posy / 8);
            context.stroke();
        }
    }

    // Save output to file
    await pipeline(canvas.createJPEGStream(), fs.createWriteStream(imageName));
}
