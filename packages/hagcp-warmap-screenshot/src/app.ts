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

interface MapPoint {
    id: string;
    mapid: string;
}

interface Battlefield extends MapPoint {
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: string;
}

interface Accesspoint {
    id: string;
    mapid: string;
    template: string;
    battlefield: string;
}

interface AccesspointTemplate {
    id: string;
    gamemap: string;
    posx: number;
    posy: number;
    abbr: string;
    actionid: number;
}

interface Supplyline extends MapPoint {
    accesspoint1Id: string;
    accesspoint2Id: string;
    supplylinetemplateid: string;
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

    const resolveTitle = (bftitle: string): MapPoint => {
        if (bftitle.includes(" - ")) {
            const battlefield = Array.from(expressDatastore.GetItemStore<Battlefield>(KeyValueChangeKey.battlefield)?.values()!)
                .find(value => value.bftitle === bftitle.split(" - ")[0]);
            if (!battlefield) throw 404;

            const accesspoint = Array.from(expressDatastore.GetItemStore<Accesspoint>(KeyValueChangeKey.accesspoint)?.values()!)
                .find(value => {
                    if (value.battlefield === battlefield.id) {
                        const template = expressDatastore.GetData<AccesspointTemplate>(KeyValueChangeKey.accesspointtemplate, value.template);
                        return bftitle === `${battlefield.bftitle} - ${template.abbr}`;
                    }
                    return false;
                });
            if (!accesspoint) throw 404;

            const supplyline = Array.from(expressDatastore.GetItemStore<Supplyline>(KeyValueChangeKey.supplyline)?.values()!)
                .find(value => (value.accesspoint1Id === accesspoint.id) || (value.accesspoint2Id === accesspoint.id));
            if (!supplyline) throw 404;
            return supplyline;
        } else {
            const battlefield = Array.from(expressDatastore.GetItemStore<Battlefield>(KeyValueChangeKey.battlefield)?.values()!)
                .find(value => value.bftitle === bftitle);
            if (!battlefield) throw 404;
            return battlefield;
        }
    };

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

    app.get("/api/battles", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.factionTemplateId) {
            const factionTemplateId = String(req.query.factionTemplateId);
            if (/^\d+$/.test(factionTemplateId)) {
                res.json(await Promise.all(
                    Array.from<Battle>(datastore.GetItemStore(KeyValueChangeKey.battle)?.values()!)
                        .filter(e => e.excludedFactionId !== lookupTemplateFaction.get(factionTemplateId).factionId)
                        .map(async value => ({
                            ...value,
                            MissionDetails: await client.sendPacketAsync(ClassKeys.GetMissionDetailsRequest, { missionId: 0, battleId: Long.fromString(value.id) }),
                        }))
                ));
                return;
            }
        }
        res.sendStatus(412);
    });

    app.get("/api/missiondetails", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "no-store");
        if (req.query.bftitle) {
            try {
                const mapPoint = resolveTitle(String(req.query.bftitle));

                const battle = Array.from(datastore.GetItemStore<Battle>(KeyValueChangeKey.battle)?.values()!)
                    .find(value => value.mapEntityId === mapPoint.id);
                if (!battle) throw 404;

                res.json(await client.sendPacketAsync(ClassKeys.GetMissionDetailsRequest, {
                    missionId: 0,
                    battleId: Long.fromString(battle.id),
                }));
            } catch (error) {
                if (typeof error == "number") res.sendStatus(error);
            }
            return;
        } else if (req.query.battleId) {
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
            try {
                const mapPoint = resolveTitle(String(req.query.bftitle));
                res.json(mapPoint);
            } catch (error) {
                if (typeof error == "number") res.sendStatus(error);
            }
            return;
        }
        res.sendStatus(412);
    });

    app.listen(expressPort, ip.address(), () => {
        console.log(`Listing on http://${ip.address()}:${expressPort}/warmap.jpeg`);
    });

    return app;
}
