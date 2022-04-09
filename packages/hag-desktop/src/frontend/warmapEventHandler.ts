const electron = window.require("electron");
import EventEmitter from "events";
import { battle } from "./map/mapInterfaces";

const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"]; // TODO fix colors!
const factions: string[] = [];

const lookupBattlefieldToMapEntityId = new Map<string, string>();

export class WarmapEventHandler extends EventEmitter {
    constructor() {
        super();
        electron.ipcRenderer.setMaxListeners(64);
        electron.ipcRenderer.on("updateBattlefieldstatusBatch", (_, data: any[]) => {
            data.forEach(element => {
                if (!factions.includes(element.factionid)) factions.push(element.factionid);
                element.color = colors[factions.indexOf(element.factionid)];
                this.emit(`battlefield${element.battlefieldid}`, element);
            });
        });
        electron.ipcRenderer.on("updateBattlesBatch", (_, data: battle[]) => {
            data.forEach(element => {
                lookupBattlefieldToMapEntityId.set(element.id, element.mapEntityId);
                this.emit(`battlesetmapEntityId${element.mapEntityId}`, element);
            });
        });
        electron.ipcRenderer.on("deleteBattlesBatch", (_, data: any[]) => {
            data.forEach(element => {
                this.emit(`battledelete${element}`);
            });
        });
        electron.ipcRenderer.on("updateSupplylinestatusBatch", (_, data: any[]) => {
            data.forEach(element => {
                if (!factions.includes(element.factionid)) factions.push(element.factionid);
                element.color = colors[factions.indexOf(element.factionid)];
                this.emit(`supplyline${element.supplylineid}`, element);
            });
        });
    }
}
