import { DataStore } from "hagcp-utils";
import { startApp } from "./app";
import { startClient } from "./client";

const expressPort = 4269;
const lookupFactions = new Map<string, any>();
const lookupTemplateFaction = new Map<string, any>();
const datastore = new DataStore;

(async () => {
    const client = await startClient(datastore, lookupFactions, lookupTemplateFaction);
    if (!client) return;
    await startApp(datastore, client, lookupFactions, expressPort, lookupTemplateFaction);
})();
