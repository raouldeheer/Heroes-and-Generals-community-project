import BufferCursor from "../buffercursor";

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