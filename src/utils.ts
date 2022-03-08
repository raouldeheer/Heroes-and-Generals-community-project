import BufferCursor from "./buffercursor";
import { createCanvas, loadImage } from 'canvas';
import fs from "fs";
import { DataStore } from "./datastore";

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

    fs.writeFileSync("infos.jsonc", JSON.stringify(infos), "utf-8");

    let xMax: number, xMin: number, yMax: number, yMin: number;
    infos.forEach(e => {
        if (!xMax || e.posX > xMax) xMax = e.posX;
        if (!xMin || e.posX < xMin) xMin = e.posX;
        if (!yMax || e.posY > yMax) yMax = e.posY;
        if (!yMin || e.posY < yMin) yMin = e.posY;
    });

    console.log(xMax!);
    console.log(xMin!);
    console.log(yMax!);
    console.log(yMin!);


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
