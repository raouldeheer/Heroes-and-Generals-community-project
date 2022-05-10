import fs from "fs";
import { BufferCursor, DataStore, bytesToString } from "hagcp-utils";
import { toCanvasColored } from "hagcp-canvas";
import { gunzipSync } from "zlib";
import { ClassKeys, keyToClass, ProtoToString } from "hagcp-network-client";
import { loadTemplate } from "hagcp-assets";

const data = fs.readFileSync("./captures/capturetext17.txt", "utf-8");

/**
 * regex for finding client to server packets:
 * `Transmission Control Protocol, Src Port: 51702, Dst Port: 15110, Seq: \w+, Ack: \w+, Len: [^0]\w*`
 */

const dataLines = data
    .split("No.     Time           Source                Destination           Protocol Length Info")
    .map(e => e.split("Data")[1])                       // select dataLines in tcp packet
    .filter(e => e)                                     // filter only lines with data
    .map(e => e.match(/\w{4}\s{2}(\w{2}\s)+\s+.+/g))    // Match dataLine format
    .filter(e => e)                                     // filter only dataLines
    .map(e => Buffer.from(e!                            // parse dataLine to buffer
        .map(v => v.substr(6, 50).trim())               // select only byte chars
        .join(" ")                                      // join lines with space
        .split(" ")                                     // split bytes on space
        .map(e => Number.parseInt(e, 16))))             // parse int from byte char
    .filter(v => v.length > 0)                          // filter only chunks with data
    .filter((_, i, arr) => i < arr.length);             // Take limited amount of chunks


let loseEnd = "";
const bufs = [];
const bigBufferCursor = new BufferCursor(Buffer.concat(dataLines));
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
    /************************************************************
     * Name :   TotalLen|IDLen|ID|Size|HLen|Header  |Data       *
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
    const typeText = element.slice(typeLength).toString() as ClassKeys;

    if (size - typeLength == 4) return;

    const DataBuf = element.slice();
    const DataLen = DataBuf.readUInt32LE() - 4;
    DataBuf.seek(0);

    let result;
    if (keyToClass.has(typeText)) {
        try {
            // Find class to parse packet with.
            const klas = keyToClass.get(typeText)!;
            result = klas.parse(DataBuf);
            if (typeof result == "function" && typeText == "zipchunk") {
                // @ts-ignore
                const gunzipped = new BufferCursor(gunzipSync(result().data));
                parse(gunzipped);
                return;
            }
            if (typeof result == "object") {
                if (typeText == ClassKeys.KeyValueChangeSet) dataStore.SaveData(result);
                result = ProtoToString(result);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(typeText);
    }

    // Make output string.
    const outputStr = `${plen} ${id} ${typeText.padEnd(35)} ${result
        ? result // Print bytes when class didn't give any results.
        : `${DataLen.toString().padEnd(5)} ${bytesToString(element).substr(20 + typeLength, 50)}`
        }`;
    // console.log(outputStr);
    totalString += `${outputStr}\n`;

    // When packet doesn't match packet size print sizes.
    if (Number(plen) !== element.length) {
        console.log(`${Number(plen)} === ${element.length}`);
    }
};
const t1 = Date.now();
bufs.forEach(parse);
const t2 = Date.now();
console.log(`Time: ${t2 - t1}`);

console.log(loseEnd);
fs.writeFileSync("total.txt", totalString, "utf-8");
fs.writeFileSync("total.jsonc", dataStore.ToString(), "utf-8");

(async () => {
    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "supplyline");
    await loadTemplate(dataStore, "accesspointtemplate");
    await loadTemplate(dataStore, "accesspoint");
    fs.writeFileSync("total.jsonc", dataStore.ToString(), "utf-8");
    toCanvasColored(dataStore, dataStore);
})();


