import fs from "fs";
import { packetBundle, keys } from "./types";

const data = fs.readFileSync("./captures/capturetext2.txt", "utf-8");
const packets = data.split("No.     Time           Source                Destination           Protocol Length Info").map(e => e.split("Data")[1]);

const dataLines = packets
    .filter(e => e)
    .map(e => e.match(/[\d\w]{4}\s{2}(([\d\w]{2}\s)+)\s+.+/g))
    .filter(e => e)
    .map(e => dataLinesToBuffer(e!))
    .filter(v => v.bytes.length > 0);

const arr = [];

for (let i = 0; i < 300; i++) {
    arr.push(dataLines[i]);
}

let loseEnd = "";
let bigBuffer = Buffer.concat(arr.map(v => v.buf));
const bufs = [];
console.log(bigBuffer.byteLength);

let cursor = 0;
do {
    const len = bigBuffer.readUInt32LE(cursor);
    const buffy = bigBuffer.slice(cursor, cursor + len);
    if (len !== buffy.byteLength) {
        console.log("Lose end");
        console.log(`len: ${len}`);
        console.log(`Data left: ${bigBuffer.byteLength - cursor}`);
        loseEnd = `Lose End - len: ${len} - Data left: ${bigBuffer.byteLength - cursor} = Data: ${bytesToString(bigBuffer.slice(cursor, cursor + 80))}`;
        break;
    }
    bufs.push(buffy);
    cursor += len;
} while (bigBuffer.byteLength > cursor);


console.log(`PLen  ID    Header                              Data`);
console.log(`====================================================`);

// let totalString = "";

bufs.forEach(element => {
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
     * Total 45 bytes                                           *
     ************************************************************/

    const func = (offset: number) => element.readUInt32LE(offset).toString().padEnd(5);
    const plen = func(0);
    const id = func(8);

    const size = element.readUInt32LE(12) - 4;
    const typeLength = element.readUInt32LE(16) - 4;
    const typeText = text.substr(20, typeLength);

    if (size - typeLength == 4) {
        return;
    }
    const DataLen = element.readUInt32LE(typeLength + 20) - 4;

    let result;
    if (keys.has(typeText)) {
        // Find class to parse packet with.
        const klas = keys.get(typeText)!;
        result = klas.parse(element.slice(typeLength + 20));
    } else {
        console.log(typeText);
    }

    const startString = `${plen} ${id} ${typeText.padEnd(35)}`;
    const midString = `${DataLen.toString().padEnd(5)}`;
    const endString = `${text.substr(20 + typeLength, 50)}`;

    if (DataLen < 4) return;
    const partLength = element.readUInt32LE(typeLength + 24) - 4;

    // Make output string.
    const outputStr = `${startString} ${result
        ? result // Print bytes when class didn't give any results.
        : `${midString} ${partLength.toString().padEnd(5)} ${endString}`
        }`;
    console.log(outputStr);
    // totalString += `${outputStr}\n`;

    // When packet doesn't match packet size print sizes.
    if (element.readUInt32LE() !== element.byteLength) {
        console.log(`${element.readUInt32LE()} === ${element.byteLength}`);
    }
});
console.log(loseEnd);
// fs.writeFileSync("total.txt", totalString, "utf-8");

function bytesToString(buf: Buffer): string {
    const bytes = [];
    for (const value of buf) {
        bytes.push((value >= 33 && value <= 126) ? value : 46);
    }
    return Buffer.from(bytes).toString("ascii");
}

function dataLinesToBuffer(dataLines: RegExpMatchArray): packetBundle {
    const bytes = dataLines.map(v => v.substr(6, 50).trim()).join(" ").split(" ").map(e => Number.parseInt(e, 16));
    const buf = Buffer.from(bytes);
    return { buf, bytes };
}
