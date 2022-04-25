import { BufferCursor } from "hagcp-utils";

export function bytesToString(source: Buffer | BufferCursor): string {
    const buf = source instanceof BufferCursor ? source.buffer : source;
    const bytes = [];
    for (const value of buf) {
        bytes.push((value >= 33 && value <= 126) ? value : 46);
    }
    return Buffer.from(bytes).toString("ascii");
}

export function splitInGroups(buf: BufferCursor) {
    const groups = [];
    let partLen = 0;
    do {
        partLen = buf.readUInt32LE();
        if (partLen !== 0) {
            groups.push(buf.slice(partLen - 4));
        }
    } while (buf.tell() < buf.length);
    return groups;
}
