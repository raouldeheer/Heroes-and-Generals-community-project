import express from "express";
import { ClassKeys, Client, KeyValueChangeKey } from "hagcp-network-client";
import { DataStore } from "hagcp-utils";
import Long from "long";
import { Accesspoint, AccesspointTemplate, Battle, Battlefield, Faction, MapPoint, Supplyline } from "./interfaces";

export async function startAPI(datastore: DataStore, client: Client, lookupFactions: Map<string, any>, expressDatastore: DataStore, lookupTemplateFaction: Map<string, any>) {
    const resolveTitle = (bftitle: string): MapPoint => {
        if (bftitle.includes(" - ")) {
            const battlefield = Array.from(expressDatastore.GetItemStore<Battlefield>(KeyValueChangeKey.battlefield)?.values() || [])
                .find(value => value.bftitle === bftitle.split(" - ")[0]);
            if (!battlefield) throw 404;

            const accesspoint = Array.from(expressDatastore.GetItemStore<Accesspoint>(KeyValueChangeKey.accesspoint)?.values() || [])
                .find(value => {
                    if (value.battlefield === battlefield.id) {
                        const template = expressDatastore.GetData<AccesspointTemplate>(KeyValueChangeKey.accesspointtemplate, value.template);
                        return bftitle === `${battlefield.bftitle} - ${template.abbr}`;
                    }
                    return false;
                });
            if (!accesspoint) throw 404;

            const supplyline = Array.from(expressDatastore.GetItemStore<Supplyline>(KeyValueChangeKey.supplyline)?.values() || [])
                .find(value => (value.accesspoint1Id === accesspoint.id) || (value.accesspoint2Id === accesspoint.id));
            if (!supplyline) throw 404;
            return supplyline;
        } else {
            const battlefield = Array.from(expressDatastore.GetItemStore<Battlefield>(KeyValueChangeKey.battlefield)?.values() || [])
                .find(value => value.bftitle === bftitle);
            if (!battlefield) throw 404;
            return battlefield;
        }
    };
    
    const app = express();
    app.get("/battles", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.factionTemplateId) {
            const factionTemplateId = String(req.query.factionTemplateId);
            if (/^\d+$/.test(factionTemplateId)) {
                res.json(await Promise.all(
                    Array.from<Battle>(datastore.GetItemStore(KeyValueChangeKey.battle)?.values() || [])
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

    app.get("/missiondetails", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "no-store");
        if (req.query.bftitle) {
            try {
                const mapPoint = resolveTitle(String(req.query.bftitle));

                const battle = Array.from(datastore.GetItemStore<Battle>(KeyValueChangeKey.battle)?.values() || [])
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

    app.get("/hostingcenter", async (req, res) => {
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

    app.get("/battlefield", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.id) {
            const id = String(req.query.id);
            if (/^\d+$/.test(id)) {
                let result = expressDatastore.GetData(KeyValueChangeKey.battlefield, id);
                if (!result) {
                    res.sendStatus(404);
                    return;
                }
                res.json(result);
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

    app.get("/supplyline", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.id) {
            const id = String(req.query.id);
            if (/^\d+$/.test(id)) {
                let result = expressDatastore.GetData(KeyValueChangeKey.supplyline, id);
                if (!result) {
                    res.sendStatus(404);
                    return;
                }
                res.json(result);
                return;
            }
        }
        res.sendStatus(412);
    });

    app.get("/faction", async (req, res) => {
        if (!client) res.sendStatus(500);
        res.set("Cache-control", "public, max-age=60");
        if (req.query.factionId) {
            const factionId = String(req.query.factionId);
            if (/^\d+$/.test(factionId)) {
                const faction: Faction = lookupFactions.get(factionId);
                if (!faction) {
                    res.sendStatus(404);
                    return;
                }
                res.json(faction);
                return;
            }
        } else if (req.query.factionTemplateId) {
            const factionTemplateId = String(req.query.factionTemplateId);
            if (/^\d+$/.test(factionTemplateId)) {
                const faction: Faction = lookupTemplateFaction.get(factionTemplateId);
                if (!faction) {
                    res.sendStatus(404);
                    return;
                }
                res.json(faction);
                return;
            }
        }
        res.sendStatus(412);
    });

    return app;
}
