import BufferCursor from "./buffercursor";

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

export function splitOnMultipleOf8(source: Buffer | BufferCursor) {
    const buf = source instanceof BufferCursor ? source : new BufferCursor(source);

    let multiple = 8, multiple2 = 16, start: number = NaN, stop: number = NaN;
    const arr = [];

    for (let i = 0; i < buf.length; i++) {
        const value = buf.readUInt8();
        if (value === multiple || value === multiple2) {
            const pos = buf.tell();
            multiple += 8;
            multiple2 += 8;
            if (start && stop) {
                buf.seek(start);
                arr.push(buf.slice(stop - start));
                stop = NaN;
            }
            start = pos;
            buf.seek(pos);
        } else {
            stop = buf.tell();
        }
    }
    if (start && stop) {
        buf.seek(start);
        arr.push(buf.slice(stop - start));
        stop = NaN;
    }
    return arr;
}

export function splitOnChar(buf: BufferCursor, char: string | number): BufferCursor | undefined {
    const charInt = typeof char == "string" ? char.charCodeAt(0) : char;
    const start = buf.tell();

    for (let i = 0; i < buf.length; i++) {
        const value = buf.readUInt8();
        if (value === charInt) {
            const stop = buf.tell();
            buf.seek(start);
            const resultBuf = buf.slice(stop - start - 1);
            buf.seek(stop);
            return resultBuf;
        }
    }
}
