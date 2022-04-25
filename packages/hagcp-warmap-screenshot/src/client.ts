import { Client, DataStore } from "hagcp-network-client";
import mylas from "mylas";
import Long from "long";
import { ResponseType } from "hagcp-network-client/dist/protolinking/classKeys";
import { setTimeout } from "timers/promises";
import dotenv from "dotenv";
dotenv.config();

export async function startClient(datastore: DataStore, lookupFactions: Map<string, any>) {
    const client = await Client.connectToHQ(
        String(process.env.HAG_USERAGENT),
        String(process.env.HAG_USERNAME),
        String(process.env.HAG_PASSWORD));
    if (!client) return;
    const startTime = Date.now();
    let saveMapTimer: NodeJS.Timer;
    let warId: string | null = null;

    async function saveMapNow() {
        const date = (new Date).toISOString().replace(/[-:.]/g, "");
        if (warId) {
            if (!client) return;
            await client.sendPacketAsync("query_war_catalogue_request");
            await setTimeout(100, true);
            const outDir = `./saves`;
            console.log(`saving to: ${outDir}/${warId}/${date}.jsonc`);
            const obj = datastore.ToObject();
            mylas.json.saveS(`${outDir}/${warId}/${date}.jsonc`, {
                battlefieldstatus: obj.battlefieldstatus,
                supplylinestatus: obj.supplylinestatus,
                factions: Array.from(lookupFactions.values()),
            });
        }
    }

    client.once("loggedin", async () => {
        await client.sendPacketAsync("query_war_catalogue_request");
        await client.sendPacketAsync("subscribewarmapview");
        saveMapTimer = setInterval(saveMapNow, 30000);
    }).on("query_war_catalogue_response", (data) => {
        data.warcataloguedata[0].warCatalogueFactions.forEach((element: { factionTemplateId: any; color: string; factionId: string; }) => {
            switch (element.factionTemplateId) {
                case "1":
                    element.color = "#0f0";
                    break;
                case "2":
                    element.color = "#00f";
                    break;
                case "3":
                    element.color = "#f00";
                    break;
                default:
                    element.color = "#000";
                    break;
            }
            lookupFactions.set(element.factionId, element);
        });
    }).on("join_war_response", async (data: { msg: ResponseType, redirectSrv?: string; }) => {
        if (data.msg === ResponseType.ok) {
            if (data.redirectSrv) {
                console.log(`redirectSrv detected: ${data.redirectSrv}`);
            }
            await client.sendPacketAsync("unsubscribewarmapview");
            await client.sendPacketAsync("subscribewarmapview");
            await client.sendPacketAsync("query_war_catalogue_request");
        } else {
            console.error(`ERROR: ${data}`);
        }
    }).on("message", async (typetext, data) => {
        if (typetext == "KeyValueChangeSet") {
            datastore.SaveData(data);
            if (data?.set) {
                for (const iterator of data.set) {
                    if (iterator.key == "war") {
                        const value = iterator.value;
                        warId = value.id;
                        if (value.sequelwarid !== "0") {
                            saveMapNow();
                            saveMapTimer?.refresh?.();
                            console.log(`${value.id} ended, switching to: ${value.sequelwarid}`);
                            datastore.ResetData("battlefieldstatus");
                            datastore.ResetData("supplylinestatus");
                            client.sendPacket("join_war_request", {
                                warid: Long.fromString(value.sequelwarid),
                                factionid: Long.ZERO,
                                playedFirstBlood: 0,
                            });
                        }
                    }
                }
            }
        }
    }).on("closed", () => {
        console.log("Socket closed!");
        console.log(`After ${Date.now() - startTime}ms`);
        clearInterval(saveMapTimer);
        process.exit(1);
    });
    return client;
}
