import { Image, loadImage, CanvasRenderingContext2D } from "canvas";
import fs from "fs";
import mylas from "mylas";
import { join } from "path";
import { multiplier } from "../settings";

let cachedImage: Image | null = null;

export async function drawBackground(context: CanvasRenderingContext2D) {
    const fileLocation = mylas.dir.nodeModules().reduce<string | null>((prev, curr) => {
        if (prev)
            return prev;
        const result = join(curr, "hagcp-assets/images/background.png");
        return fs.existsSync(result) ? result : null;
    }, null);
    if (fileLocation) {
        if (!cachedImage)
            cachedImage = await loadImage(fileLocation);
        context.drawImage(cachedImage, 0, 0, cachedImage.width * multiplier, cachedImage.height * multiplier);
    }
}