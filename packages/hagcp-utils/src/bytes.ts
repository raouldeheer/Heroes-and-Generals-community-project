import { BufferCursor } from "buffercursor.ts";

export function bytesToString(source: Buffer | BufferCursor): string {
    const buf = BufferCursor.isBufferCursor(source) ? source.buffer : source;
    const bytes = Array.from(buf.values()).map(value => (value >= 33 && value <= 126) ? value : 46);
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
    } while (!buf.eof());
    return groups;
}

export const prefixJoin = (buffers: Buffer[]) =>
    Buffer.concat(buffers.flatMap(v => {
        const buf = Buffer.allocUnsafe(4);
        buf.writeUint32LE(v.byteLength + 4);
        return [buf, v];
    }));

