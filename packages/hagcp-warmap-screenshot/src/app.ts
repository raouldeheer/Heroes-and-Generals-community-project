import { ClassKeys, Client, KeyValueChangeKey } from "hagcp-network-client";
import { DataStore } from "hagcp-utils";
import { drawToCanvas } from "hagcp-utils/canvas";
import { loadTemplate } from "hagcp-assets";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import ip from "ip";
import Long from "long";
import { startAPI } from "./api";


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

export async function startApp(datastore: DataStore, client: Client, lookupFactions: Map<string, any>, expressPort: number, lookupTemplateFaction: Map<string, any>) {
    const cachedBuffer = cached(60 * 15, async () => {
        const canvas = await drawToCanvas(expressDatastore, datastore, id => lookupFactions.get(id).color, lookupFactions);
        return canvas.toBuffer("image/jpeg");
    });

    const app = express();
    const expressDatastore = new DataStore;
    await loadTemplate(expressDatastore, "battlefield");
    await loadTemplate(expressDatastore, "supplyline");
    await loadTemplate(expressDatastore, "accesspoint");
    await loadTemplate(expressDatastore, "accesspointtemplate");
    await loadTemplate(expressDatastore, "capital");

    app.use(morgan("tiny"));
    app.use(express.urlencoded({ extended: true }));
    app.use(compression());

    app.get("/status", (_, res) => {
        res.set("Cache-control", "no-store");
        res.sendStatus(client.connected ? 200 : 500);
    });

    app.get("/warmap.jpeg", async (_, res) => {
        if (!client) res.sendStatus(500);
        res.contentType("image/jpeg");
        res.set("Cache-control", "public, max-age=60");
        res.send(await cachedBuffer());
    });

    app.use("/api", await startAPI(datastore, client, lookupFactions, expressDatastore, lookupTemplateFaction))

    app.listen(expressPort, ip.address(), () => {
        console.log(`Listing on http://${ip.address()}:${expressPort}/warmap.jpeg`);
    });

    return app;
}
