import fs from "fs";
import BufferCursor from "./buffercursor";
import { ProtoToString } from "./proto";
import { keys } from "./types";
import { bytesToString } from "./utils";
 
const data = fs.readFileSync("./captures/capturetext4.txt", "utf-8");
import { gunzipSync } from "zlib";
import { DataStore } from "./datastore";
const packets = data.split("No.     Time           Source                Destination           Protocol Length Info").map(e => e.split("Data")[1]);
 
/**
 * regex for finding client to server packets:
 * `Transmission Control Protocol, Src Port: 51702, Dst Port: 15110, Seq: \w+, Ack: \w+, Len: [^0]\w*`
 */

const dataLines = packets
    .filter(e => e)
    .map(e => e.match(/\w{4}\s{2}(\w{2}\s)+\s+.+/g))
    .filter(e => e)
    .map(e => dataLinesToBuffer(e!))
    .filter(v => v.length > 0);

const arr = [];

for (let i = 0; i < dataLines.length; i++) {
    arr.push(dataLines[i]);
}

/**
 * 
 * # Google Protobuf
 * [decoder](https://protobuf-decoder.netlify.app/)
 * 
 */


let loseEnd = "";
const bufs = [];
const bigBufferCursor = new BufferCursor(Buffer.concat(arr));
console.log(bigBufferCursor.length);

do {
    const len = bigBufferCursor.readUInt32LE();
    let buffy;
    try {
        buffy = bigBufferCursor.slice(len - 4);
    } catch (error) {
        console.log("Lose end");
        console.log(`len: ${len}`);
        console.log(`Data left: ${bigBufferCursor.length - bigBufferCursor.tell()}`);
        loseEnd = `Lose End - len: ${len} - Data left: ${bigBufferCursor.length - bigBufferCursor.tell()}`;
        break;
    }
    const lenBuffy = new BufferCursor(Buffer.allocUnsafe(buffy.length + 4));
    lenBuffy.writeUInt32LE(len);
    lenBuffy.writeBuff(buffy.buffer, buffy.length);
    lenBuffy.seek(0);
    bufs.push(lenBuffy);
} while (bigBufferCursor.length > bigBufferCursor.tell());


console.log(`PLen  ID    Header                              Data`);
console.log(`====================================================`);

let totalString = "";
const dataStore = new DataStore;

const parse = (element: BufferCursor) => {
    const text = bytesToString(element);

    /************************************************************
     * Name :   TotalLen|IDLen|ID|Size|Hlen|Header  |Data       *
     * Bytes:   4       |4    |4 |4   |4   |Variable|Variable   *
     *                  |     |  |    |    |   15   |   10      *
     *                  |     8  |    |    19       |   10      *
     *                  |     8  |    |             29          *
     *                  |     8  |    33                        *
     *                  |       41                              *
     *                  45                                      *
     * Total 45 bytes          OR 20 + Header + Data            *
     ************************************************************/

    const plen = element.readUInt32LE().toString().padEnd(5);
    element.move(4);
    const id = element.readUInt32LE().toString().padEnd(5);

    const size = element.readUInt32LE() - 4;
    const typeLength = element.readUInt32LE() - 4;
    const typeText = text.substr(20, typeLength);

    if (size - typeLength == 4) {
        return;
    }
    element.move(typeLength);
    const DataBuf = element.slice();
    const DataLen = DataBuf.readUInt32LE() - 4;
    DataBuf.seek(0);

    let result;
    if (keys.has(typeText)) {
        try {
            // Find class to parse packet with.
            const klas = keys.get(typeText)!;
            result = klas.parse(DataBuf);
            if (typeof result == "function" && typeText == "zipchunk") {
                // @ts-ignore
                const gunzipped = new BufferCursor(gunzipSync(result().data));
                parse(gunzipped);
                return;
            }
            if (typeof result == "object") {
                if (typeText == "KeyValueChangeSet") dataStore.SaveData(result);
                result = ProtoToString(result);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(typeText);
    }

    const startString = `${plen} ${id} ${typeText.padEnd(35)}`;
    const midString = `${DataLen.toString().padEnd(5)}`;
    const endString = `${text.substr(20 + typeLength, 50)}`;

    // Make output string.
    const outputStr = `${startString} ${result
        ? result // Print bytes when class didn't give any results.
        : `${midString} ${endString}`
        }`;
    // console.log(outputStr);
    totalString += `${outputStr}\n`;

    // When packet doesn't match packet size print sizes.
    if (Number(plen) !== element.length) {
        console.log(`${Number(plen)} === ${element.length}`);
    }
};

bufs.forEach(parse);
console.log(loseEnd);
fs.writeFileSync("total.txt", totalString, "utf-8");
fs.writeFileSync("total.jsonc", dataStore.ToString(), "utf-8");
console.log(dataStore.GetData("PlayerPartnerInfo", "1181427495443169983"));

function dataLinesToBuffer(dataLines: RegExpMatchArray): Buffer {
    return Buffer.from(
        dataLines
            .map(v => v.substr(6, 50).trim())
            .join(" ")
            .split(" ")
            .map(e => Number.parseInt(e, 16))
    );
}
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

import { createCanvas } from 'canvas';

const width = 15000;
const height = 15000;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, width, height);


context.fillStyle = '#fff';
infos.forEach(e => context.fillRect(e.posX, e.posY, 50, 50));

fs.writeFileSync('./warmap.png', canvas.toBuffer('image/png'));
