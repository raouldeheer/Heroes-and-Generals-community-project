import { DataStore } from "hagcp-network-client";
import { startApp } from "./app";
import { startClient } from "./client";

const expressPort = 4269;
const lookupFactions = new Map<string, any>();
const datastore = new DataStore;

(async () => {
    const client = await startClient(datastore, lookupFactions);
    if (!client) return;
    startApp(datastore, client, lookupFactions, expressPort);
})();
