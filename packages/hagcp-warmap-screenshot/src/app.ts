import { Client, DataStore, loadTemplate } from "hag-network-client";
import express from "express";
import compression from "compression";
import { drawToCanvas } from "hag-network-client/dist/utils/canvas";
import morgan from "morgan";


function cached<T>(threshold: number, action: () => Promise<T>): () => Promise<T> {
    let cachedData: T | null;
    let cachedTime: number | null;
    return async () => {
        if (!cachedTime || !cachedData || Date.now() - cachedTime >= threshold * 1000) {
            cachedData = await action();
            cachedTime = Date.now();
        }
        return cachedData;
    };
}

export async function startApp(datastore: DataStore, client: Client, lookupFactions: Map<string, any>, expressPort: number) {
    const cachedBuffer = cached(300, async () => {
        const canvas = await drawToCanvas(expressDatastore, datastore, id => lookupFactions.get(id).color);
        return canvas.toBuffer("image/jpeg");
    });

    const app = express();
    const expressDatastore = new DataStore;
    await loadTemplate(expressDatastore, "battlefield");
    await loadTemplate(expressDatastore, "supplyline");
    await loadTemplate(expressDatastore, "accesspoint");
    await loadTemplate(expressDatastore, "capital");

    app.use(morgan('tiny'));
    app.use(compression());

    app.get("/status", (_, res) => {
        res.sendStatus(client.connected? 200: 500);
    });

    app.get("/warmap", async (_, res) => {
        if (!client) res.sendStatus(500);
        const t1 = Date.now();
        res.contentType("image/jpeg");
        res.send(await cachedBuffer());
        const t2 = Date.now();
        console.log(`t2-t1: ${t2 - t1}`);
    });

    app.listen(expressPort, () => {
        console.log(`Listing on http://localhost:${expressPort}`);
    });

    return app;
}
