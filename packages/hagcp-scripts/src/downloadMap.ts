import { Buf } from "mylas";
import fetch from "node-fetch";
import { setTimeout } from "timers/promises";
import { createCanvas, loadImage, CanvasRenderingContext2D } from "canvas";

async function getId(context: CanvasRenderingContext2D, i: number, j: number) {
    const id = (i+64+64+64) + (j+64+64+64) * 256;
    const res = await fetch(`http://l3.live.heroesandgenerals.com/map/004/jpg/diffuse/CampaignMap_Europe_diffuse_zoom8.${id.toString().padStart(6, "0")}.jpg`);
    if (res.ok) {
        context.drawImage(await loadImage(await res.buffer()), i * 256, j * 256, 256, 256);
    } else {
        console.error(`getting ${id} failed`);
    }
}

(async () => {
    const canvas = createCanvas(256 * 64, 256 * 64);
    const context = canvas.getContext("2d");
    for (let i = 0; i < 64; i++) {
        console.log(`getting ${i}/64`);
        const requests = [];
        for (let j = 0; j < 64; j++) {
            requests.push(getId(context, i, j));
        }
        await Promise.all(requests);
        await setTimeout(10);
    }
    await Buf.save(`./images/total16.jpg`, canvas.toBuffer("image/jpeg"));
})();
