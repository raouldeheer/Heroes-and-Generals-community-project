import { Client, DataStore, loadTemplate } from "hagcp-network-client";
import express from "express";
import compression from "compression";
import { drawToCanvas } from "hagcp-network-client/dist/utils/canvas";
import morgan from "morgan";


function cached<T>(threshold: number, action: () => Promise<T>): () => Promise<T> {
    let cachedData: T | null;
    return async () => {
        if (!cachedData) {
            cachedData = await action();
            setTimeout(() => {
                cachedData = null;
            }, threshold * 1000);
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
        res.sendStatus(client.connected ? 200 : 500);
    });

    app.get("/warmap", async (_, res) => {
        if (!client) res.sendStatus(500);
        res.contentType("image/jpeg");
        res.send(await cachedBuffer());
    });

    app.listen(expressPort, () => {
        console.log(`Listing on http://localhost:${expressPort}`);
    });

    return app;
}
