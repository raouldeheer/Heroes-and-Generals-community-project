import { DataStore } from "hag-network-client";
import { startApp } from "./app";
import { startClient } from "./client";

const expressPort = 3000;
const lookupFactions = new Map<string, any>();
const datastore = new DataStore;

const client = startClient(datastore, lookupFactions);
startApp(datastore, client, lookupFactions, expressPort);
