import { KeyValueChangeKey, PacketClass, ClassKeys } from "hagcp-network-client";
import { BufferCursor } from "buffercursor.ts";
import { Json, Buf } from "mylas";

(async () => {
    const assetType = KeyValueChangeKey.capital;

    const assets = await Json.load(`./json/${assetType}.json`);

    const klas = PacketClass.KeyValueChangeSet;
    if (!klas) return;

    const data = klas.toBuffer({
        set: assets.map((item: unknown) => ({
            key: assetType,
            value: item,
        })),
    });
    const typeText = ClassKeys.KeyValueChangeSet;

    const final = new BufferCursor(Buffer.alloc(data.length + 4 + 4 + typeText.length));
    final.writeUInt32LE(data.length + 4 + 4 + typeText.length);
    final.writeUInt32LE(typeText.length + 4);
    final.write(typeText, typeText.length);
    final.writeBuff(data, data.length);

    const finalBuf = final.getBuffer();
    
    await Buf.save(`./${assetType}`, finalBuf);
})();
