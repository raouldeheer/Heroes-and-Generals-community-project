const electron = window.require("electron");
import EventEmitter from "events";

const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"]; // TODO fix colors!
const factions: string[] = [];

const lookupBattlefieldToBattle = new Map<string, string>();

export class WarmapEventHandler extends EventEmitter {
    constructor() {
        super();
        electron.ipcRenderer.on("updateBattlefieldstatusBatch", (_, data: any[]) => {
            data.forEach(element => {
                if (!factions.includes(element.factionid)) factions.push(element.factionid);
                element.color = colors[factions.indexOf(element.factionid)];
                this.emit(`battlefield${element.battlefieldid}`, element);
            });
        });
        electron.ipcRenderer.on("updateBattlesBatch", (_, data: any[]) => {
            data.forEach(element => {
                if (element.mapEntityTypeId == "1") {
                    lookupBattlefieldToBattle.set(element.id, element.mapEntityId);
                    this.emit(`battlefield${element.mapEntityId}receivebattleset`, element);
                }
            });
        });
        electron.ipcRenderer.on("deleteBattlesBatch", (_, data: any[]) => {
            data.forEach(element => {
                this.emit(`battlefield${element}receivebattledelete`);
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
