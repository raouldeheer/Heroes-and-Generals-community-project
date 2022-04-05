const electron = window.require("electron");
import EventEmitter from "events";

const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"]; // TODO fix colors!
const factions: string[] = [];

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
            console.log("updateBattlesBatch");
            console.log(data);
        });
        electron.ipcRenderer.on("deleteBattlesBatch", (_, data: any[]) => {
            console.log("deleteBattlesBatch");
            console.log(data);
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
