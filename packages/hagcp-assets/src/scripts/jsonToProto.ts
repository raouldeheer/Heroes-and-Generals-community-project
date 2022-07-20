import { ClassKeys, keyToClass } from "hagcp-network-client";
import { BufferCursor, IKeyValueChangeSetResult } from "hagcp-utils";
import { Json, Buf } from "mylas";

(async () => {
    const assetType = "capital";

    const assets = await Json.load(`./json/${assetType}.json`);

    const klas = keyToClass.get(ClassKeys.KeyValueChangeSet);
    if (!klas) return;

    const returnObj: IKeyValueChangeSetResult = {
        set: assets.map((item: any) => ({
            key: assetType,
            value: item,
        })),
    };

    const data = klas.toBuffer(returnObj);
    const typeText = "KeyValueChangeSet";

    const final = new BufferCursor(Buffer.alloc(data.length + 4 + 4 + typeText.length));
    final.writeUInt32LE(data.length + 4 + 4 + typeText.length);
    final.writeUInt32LE(typeText.length + 4);
    final.write(typeText, typeText.length);
    final.writeBuff(data, data.length);

    const finalBuf = final.getBuffer();
    
    await Buf.save(`./${assetType}`, finalBuf);
})();
