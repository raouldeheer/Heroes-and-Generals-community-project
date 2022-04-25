import { Client } from "../client";
import { DataStore } from "../datastore";
import { drawToCanvas } from "../utils/canvas";
import { loadTemplate } from "../utils/assetLoading";
import fs from "fs";
import { pipeline } from "stream/promises";
import dotenv from "dotenv";
dotenv.config();

(async () => {
    const dataStore = new DataStore;

    await loadTemplate(dataStore, "battlefield");
    await loadTemplate(dataStore, "supplyline");
    await loadTemplate(dataStore, "accesspoint");
    await loadTemplate(dataStore, "capital");

    const cl = await Client.connectToHQ(
        String(process.env.HAG_USERAGENT),
        String(process.env.HAG_USERNAME),
        String(process.env.HAG_PASSWORD));
    if (!cl) return;
    const startTime = Date.now();
    const lookupFactions = new Map<string, any>();

    cl.once("loggedin", async () => {
        cl.sendPacket("subscribewarmapview");
        cl.sendPacket("query_war_catalogue_request");
        setTimeout(async () => {
            const canvas = await drawToCanvas(dataStore, dataStore, id => lookupFactions.get(id).color);
            await pipeline(canvas.createJPEGStream(), fs.createWriteStream("./screenshot.jpg"));
            cl.close();
        }, 5000);
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
    }).on("message", async (typetext, data) => {
        if (typetext == "KeyValueChangeSet") dataStore.SaveData(data);
    }).on("closed", () => {
        console.log("Socket closed!");
        console.log(`After ${Date.now() - startTime}ms`);
        process.exit(0);
    });
})();

