import { ClassKeys, Client, KeyValueChangeKey } from "hagcp-network-client";
import { DataStore } from "hagcp-utils";
import { drawToCanvas } from "hagcp-utils/canvas";
import { loadTemplate } from "hagcp-assets";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import ip from "ip";
import Long from "long";

interface Battle {
    id: string;
    warid: string;
    mapEntityId: string;
    mapEntityTypeId: string;
    start: string;
    factioncount: number;
    excludedFactionId: string;
    position: number;
    activationTimeStamp: string;
}

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
    const cachedBattles = cached(60 * 5, async () => Promise.all(
        Array.from<Battle>(datastore.GetItemStore("battle")?.values()!)
            .filter(e => e.excludedFactionId !== lookupTemplateFaction.get("1").id)
            .map(async value => ({
                ...value,
                MissionDetails: await client.sendPacketAsync(ClassKeys.GetMissionDetailsRequest, { missionId: 0, battleId: Long.fromString(value.id) }),
            }))
    ));

    const app = express();
    const expressDatastore = new DataStore;
    await loadTemplate(expressDatastore, "battlefield");
    await loadTemplate(expressDatastore, "supplyline");
    await loadTemplate(expressDatastore, "accesspoint");
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

    app.get("/api/battles", async (_, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        res.json(await cachedBattles());
    });

    app.get("/api/missiondetails", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.battleId) {
            const battleId = String(req.query.battleId);
            if (/^\d+$/.test(battleId)) {
                res.json(await client.sendPacketAsync(ClassKeys.GetMissionDetailsRequest, {
                    missionId: 0,
                    battleId: Long.fromString(battleId),
                }));
                return;
            }
        }
        res.sendStatus(412);
    });

    app.get("/api/hostingcenter", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.hostingCenterId) {
            const hostingCenterId = String(req.query.hostingCenterId);
            if (/^\d+$/.test(hostingCenterId)) {
                res.json(datastore.GetData(KeyValueChangeKey.HostingCenterInfo, hostingCenterId));
                return;
            }
        }
        res.sendStatus(412);
    });

    app.get("/api/battlefield", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.id) {
            const id = String(req.query.id);
            if (/^\d+$/.test(id)) {
                res.json(expressDatastore.GetData(KeyValueChangeKey.battlefield, id));
                return;
            }
        } else if (req.query.bftitle) {
            const bftitle = String(req.query.bftitle);
            res.json(Array.from(expressDatastore.GetItemStore(KeyValueChangeKey.battlefield)?.values()!)
                .find(value => value.bftitle === bftitle));
            return;
        }
        res.sendStatus(412);
    });

    app.listen(expressPort, ip.address(), () => {
        console.log(`Listing on http://${ip.address()}:${expressPort}/warmap.jpeg`);
    });

    return app;
}
