import { Client, DataStore, loadTemplate } from "hag-network-client";
import express from "express";
import compression from "compression";
import { drawToCanvas } from "hag-network-client/dist/utils/canvas";
import { pipeline } from "stream/promises";

export async function startApp(datastore:DataStore, client: Client, lookupFactions: Map<string, any>, expressPort: number) {
    const app = express();
    const expressDatastore = new DataStore;
    await loadTemplate(expressDatastore, "battlefield");
    await loadTemplate(expressDatastore, "supplyline");
    await loadTemplate(expressDatastore, "accesspoint");
    await loadTemplate(expressDatastore, "capital");
    
    app.use(compression());
    
    app.get("/status", (_, res) => {
        if (client) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });
    
    app.get("/warmap", async (_, res) => {
        if (!client) res.sendStatus(500);
        const canvas = await drawToCanvas(expressDatastore, datastore, id => lookupFactions.get(id).color);
        res.contentType("image/jpeg");
        await pipeline(canvas.createJPEGStream(), res);
    });
    
    app.listen(expressPort, () => {
        console.log(`Listing on http://localhost:${expressPort}`);
    });

    return app;
}
