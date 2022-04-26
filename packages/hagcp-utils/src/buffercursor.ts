export class BufferCursor {
    private pos: number;
    buffer: Buffer;
    length: number;
    constructor(buff: Buffer) {
        this.pos = 0;
        this.buffer = buff;
        this.length = buff.length;
    }
    public move(step: number): void {
        const pos = this.pos + step;
        if (pos < 0) throw new RangeError("Cannot seek before start of buffer");
        if (pos > this.length) throw new RangeError("Trying to seek beyond buffer");
        this.pos = pos;
    }
    private checkWrite(size: number): void {
        if ((size > this.length) || (this.length - this.pos < size))
            throw new BufferCursorOverflow(this.length, this.pos, size);
    }
    getBuffer(offset: number = 0): Buffer {
        const result = Buffer.alloc(this.pos);
        this.buffer.copy(result, offset, 0, this.pos);
        return result;
    }
    seek(pos: number): this {
        if (pos < 0) throw new RangeError("Cannot seek before start of buffer");
        if (pos > this.length) throw new RangeError("Trying to seek beyond buffer");
        this.pos = pos;
        return this;
    }
    eof(): boolean {
        return this.pos == this.length;
    }
    tell(): number {
        return this.pos;
    }
    slice(length?: number): BufferCursor {
        const end = length === undefined ? this.length : this.pos + length;

        const buf = new BufferCursor(this.buffer.slice(this.pos, end));
        this.seek(end);

        return buf;
    }
    toString(encoding: BufferEncoding = "utf8", length?: number): string {
        const end = length === undefined ? this.length : this.pos + length;

        const ret = this.buffer.toString(encoding, this.pos, end);
        this.seek(end);
        return ret;
    }
    write(value: string, length: number, encoding?: BufferEncoding): this {
        const ret = this.buffer.write(value, this.pos, length, encoding);
        this.move(ret);
        return this;
    }
    writeBuff(value: Buffer, length: number): this {
        value.copy(this.buffer, this.pos, 0, length);
        this.move(length);
        return this;
    }
    fill(value: string | number | Uint8Array, length?: number): this {
        const end = length === undefined ? this.length : this.pos + length;
        this.checkWrite(end - this.pos);

        this.buffer.fill(value, this.pos, end);
        this.seek(end);
        return this;
    }
    copy(source: BufferCursor | Buffer, sourceStart?: number, sourceEnd?: number): this {
        if (!sourceEnd) sourceEnd = source.length;
        if (!sourceStart) sourceStart = source instanceof BufferCursor ? source.pos : 0;

        const length = sourceEnd - sourceStart;
        this.checkWrite(length);
        const buf = source instanceof BufferCursor ? source.buffer : source;

        buf.copy(this.buffer, this.pos, sourceStart, sourceEnd);
        this.move(length);
        return this;
    }
    readUInt8(): number {
        const ret = this.buffer.readUInt8(this.pos);
        this.move(1);
        return ret;
    }
    readInt8(): number {
        const ret = this.buffer.readInt8(this.pos);
        this.move(1);
        return ret;
    }
    readInt16BE(): number {
        const ret = this.buffer.readInt16BE(this.pos);
        this.move(2);
        return ret;
    }
    readInt16LE(): number {
        const ret = this.buffer.readInt16LE(this.pos);
        this.move(2);
        return ret;
    }
    readUInt16BE(): number {
        const ret = this.buffer.readUInt16BE(this.pos);
        this.move(2);
        return ret;
    }
    readUInt16LE(): number {
        const ret = this.buffer.readUInt16LE(this.pos);
        this.move(2);
        return ret;
    }
    readUInt32LE(): number {
        const ret = this.buffer.readUInt32LE(this.pos);
        this.move(4);
        return ret;
    }
    readUInt32BE(): number {
        const ret = this.buffer.readUInt32BE(this.pos);
        this.move(4);
        return ret;
    }
    readInt32LE(): number {
        const ret = this.buffer.readInt32LE(this.pos);
        this.move(4);
        return ret;
    }
    readInt32BE(): number {
        const ret = this.buffer.readInt32BE(this.pos);
        this.move(4);
        return ret;
    }
    readBigUint64LE(): bigint {
        const ret = this.buffer.readBigUint64LE(this.pos);
        this.move(8);
        return ret;
    }
    readBigUint64BE(): bigint {
        const ret = this.buffer.readBigUint64BE(this.pos);
        this.move(8);
        return ret;
    }
    readFloatBE(): number {
        const ret = this.buffer.readFloatBE(this.pos);
        this.move(4);
        return ret;
    }
    readFloatLE(): number {
        const ret = this.buffer.readFloatLE(this.pos);
        this.move(4);
        return ret;
    }
    readDoubleBE(): number {
        const ret = this.buffer.readDoubleBE(this.pos);
        this.move(8);
        return ret;
    }
    readDoubleLE(): number {
        const ret = this.buffer.readDoubleLE(this.pos);
        this.move(8);
        return ret;
    }
    writeUInt8(value: number): this {
        this.checkWrite(1);
        this.buffer.writeUInt8(value, this.pos);
        this.move(1);
        return this;
    }
    writeInt8(value: number): this {
        this.checkWrite(1);
        this.buffer.writeInt8(value, this.pos);
        this.move(1);
        return this;
    }
    writeUInt16BE(value: number): this {
        this.checkWrite(2);
        this.buffer.writeUInt16BE(value, this.pos);
        this.move(2);
        return this;
    }
    writeUInt16LE(value: number): this {
        this.checkWrite(2);
        this.buffer.writeUInt16LE(value, this.pos);
        this.move(2);
        return this;
    }
    writeInt16BE(value: number): this {
        this.checkWrite(2);
        this.buffer.writeInt16BE(value, this.pos);
        this.move(2);
        return this;
    }
    writeInt16LE(value: number): this {
        this.checkWrite(2);
        this.buffer.writeInt16LE(value, this.pos);
        this.move(2);
        return this;
    }
    writeUInt32BE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeUInt32BE(value, this.pos);
        this.move(4);
        return this;
    }
    writeUInt32LE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeUInt32LE(value, this.pos);
        this.move(4);
        return this;
    }
    writeInt32BE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeInt32BE(value, this.pos);
        this.move(4);
        return this;
    }
    writeInt32LE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeInt32LE(value, this.pos);
        this.move(4);
        return this;
    }
    writeFloatBE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeFloatBE(value, this.pos);
        this.move(4);
        return this;
    }
    writeFloatLE(value: number): this {
        this.checkWrite(4);
        this.buffer.writeFloatLE(value, this.pos);
        this.move(4);
        return this;
    }
    writeDoubleBE(value: number): this {
        this.checkWrite(8);
        this.buffer.writeDoubleBE(value, this.pos);
        this.move(8);
        return this;
    }
    writeDoubleLE(value: number): this {
        this.checkWrite(8);
        this.buffer.writeDoubleLE(value, this.pos);
        this.move(8);
        return this;
    }
}

export class BufferCursorOverflow extends Error {
    constructor(length: number, pos: number, size: number) {
        super(`BufferCursorOverflow: length ${length}, position ${pos}, size ${size}`);
        this.name = "BufferCursorOverflow";
        this.message = `BufferCursorOverflow: length ${length}, position ${pos}, size ${size}`;
    }
}
