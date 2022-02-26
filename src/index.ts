import fs from "fs";
import BufferCursor from "./buffercursor";
import { ProtoToString } from "./proto";
import { keys } from "./types";
import { bytesToString } from "./utils";
 
const data = fs.readFileSync("./captures/capturetext4.txt", "utf-8");
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
        // Find class to parse packet with.
        const klas = keys.get(typeText)!;
        result = klas.parse(DataBuf);
        if (typeof result == "object") {
            result = ProtoToString(result);
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
    console.log(outputStr);
    totalString += `${outputStr}\n`;

    // When packet doesn't match packet size print sizes.
    if (Number(plen) !== element.length) {
        console.log(`${Number(plen)} === ${element.length}`);
    }
});
console.log(loseEnd);
fs.writeFileSync("total.txt", totalString, "utf-8");

function dataLinesToBuffer(dataLines: RegExpMatchArray): Buffer {
    return Buffer.from(
        dataLines
            .map(v => v.substr(6, 50).trim())
            .join(" ")
            .split(" ")
            .map(e => Number.parseInt(e, 16))
    );
}
