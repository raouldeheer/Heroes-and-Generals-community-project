import BufferCursor from "./buffercursor";
import { createCanvas, loadImage } from 'canvas';
import fs from "fs";
import { DataStore } from "./datastore";
import { Canvas } from "canvas";
import { pipeline } from "stream/promises";

export function bytesToString(source: Buffer | BufferCursor): string {
    const buf = source instanceof BufferCursor ? source.buffer : source;
    const bytes = [];
    for (const value of buf) {
        bytes.push((value >= 33 && value <= 126) ? value : 46);
    }
    return Buffer.from(bytes).toString("ascii");
}

export function parseGroups(source: Buffer | BufferCursor): Buffer[] {
    const buf = source instanceof BufferCursor ? source : new BufferCursor(source);
    const groups = [];
    const len = buf.readUInt32LE() - 4;
    do {
        const partLen = buf.readUInt32LE();
        if (partLen !== 0) {
            groups.push(buf.slice(partLen - 4));
            if (buf.length - buf.tell() !== 0) buf.move(4);
        }
    } while (len > buf.tell());
    return groups.map(v => v.buffer);
}

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
    const context = canvas.getContext('2d');

    loadImage('./background.png').then(image => {
        // Draw background
        context.drawImage(image, 0, 0, image.width, image.height);

        // Draw battles
        context.fillStyle = '#fff';
        infos.forEach(e => context.fillRect(e.posX / 8, e.posY / 8, 10, 10));

        // Save output to file
        fs.writeFileSync('./warmap.png', canvas.toBuffer('image/png'));
    });

}


export async function toCanvasColored(dataStore: DataStore, imageName = "./warmap.png") {
    const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"];
    const factions: string[] = [];
    const battlefieldstatus = dataStore.ToObject().battlefieldstatus;

    const canvas = createCanvas(2048, 1440);
    const context = canvas.getContext("2d");

    const image = await loadImage("./background.png");
    // Draw background
    context.drawImage(image, 0, 0, image.width, image.height);

    // Draw battles
    for (const infokey in battlefieldstatus) {
        if (battlefieldstatus.hasOwnProperty(infokey)) {
            const element = battlefieldstatus[infokey];
            if (!factions.includes(element.factionid)) factions.push(element.factionid);
            context.fillStyle = colors[factions.indexOf(element.factionid)];
            const battlefield = dataStore.GetData("battlefield", element.battlefieldid);
            context.fillRect(
                (battlefield.posx / 8) - 5,
                (battlefield.posy / 8) - 5,
                10, 10);
        }
    }

    // Save output to file
    await pipeline(canvas.createJPEGStream(), fs.createWriteStream(imageName));
}
