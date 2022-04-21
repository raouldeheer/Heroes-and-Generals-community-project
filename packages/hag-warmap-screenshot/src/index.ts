import { Client, DataStore, loadTemplate } from "hag-network-client";
import { ip, port, password, userAgent, userName } from "hag-network-client/dist/env";
import mylas from "mylas";
import Long from "long";
import { setTimeout } from "timers/promises";
import { ResponseType } from "hag-network-client/dist/protolinking/classKeys";
import express from "express";
import compression from "compression";
import { drawToCanvas } from "hag-network-client/dist/utils/canvas";
import { pipeline } from "stream/promises";

const expressPort = 3000;

const lookupFactions = new Map<string, any>();
const dataStore = new DataStore;
const cl = new Client(ip, port, userAgent, userName, password);
const startTime = Date.now();
let saveMapTimer: NodeJS.Timer;
let warId: string | null = null;
cl.once("loggedin", async () => {
    cl.sendPacket("subscribewarmapview");
    cl.sendPacket("query_war_catalogue_request");

    await setTimeout(2000);

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
        cl.sendPacket("unsubscribewarmapview");
        await setTimeout(1000);
        cl.sendPacket("subscribewarmapview");
        cl.sendPacket("query_war_catalogue_request");
    } else {
        console.error(`ERROR: ${data}`);
    }
}).on("message", async (typetext, data) => {
    if (typetext == "KeyValueChangeSet") {
        dataStore.SaveData(data);
        if (data?.set) {
            for (const iterator of data.set) {
                if (iterator.key == "war") {
                    const value = iterator.value;
                    warId = value.id;
                    if (value.sequelwarid !== "0") {
                        saveMapNow();
                        saveMapTimer.refresh();
                        console.log(`${value.id} ended, switching to: ${value.sequelwarid}`);
                        dataStore.ResetData("battlefieldstatus");
                        cl.sendPacket("join_war_request", {
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

function saveMapNow() {
    const date = (new Date).toISOString().replace(/[-:.]/g, "");
    if (warId) {
        console.log(`saving to: ./saves/${warId}/${date}.jsonc`);
        const obj = dataStore.ToObject();
        mylas.json.saveS(`./saves/${warId}/${date}.jsonc`, {
            battlefieldstatus: obj.battlefieldstatus,
            supplylinestatus: obj.supplylinestatus,
        });
    }
}



// Express

(async () => {


    const app = express();
    const expressDatastore = new DataStore;
    await loadTemplate(expressDatastore, "battlefield");
    await loadTemplate(expressDatastore, "supplyline");
    await loadTemplate(expressDatastore, "accesspoint");
    await loadTemplate(expressDatastore, "capital");

    app.use(compression());
    
    app.get("/status", (_, res) => {
        if (cl) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });
    
    app.get("/warmap", async (_, res) => {
        if (!cl) res.sendStatus(500);
        const canvas = await drawToCanvas(expressDatastore, dataStore, id => lookupFactions.get(id).color);
        res.contentType("image/jpeg");
        await pipeline(canvas.createJPEGStream(), res);
    });
    
    app.listen(expressPort, () => {
        console.log(`Listing on http://localhost:${expressPort}`);
    });
})();
    
    
