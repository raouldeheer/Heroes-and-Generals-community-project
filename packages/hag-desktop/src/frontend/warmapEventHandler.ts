const electron = window.require("electron");
import EventEmitter from "events";
import { DataStore } from "hag-network-client/dist/datastore";
import { battle } from "./map/mapInterfaces";

export class WarmapEventHandler extends EventEmitter {
    public readonly lookupFactions: Map<string, any>;
    public readonly lookupFactionsByTemplateId: Map<string, any>;
    public readonly datastore: DataStore;
    constructor() {
        super();
        this.lookupFactions = new Map<string, any>();
        this.lookupFactionsByTemplateId = new Map<string, any>();
        this.datastore = new DataStore;
        electron.ipcRenderer.setMaxListeners(64);
        electron.ipcRenderer.on("warCatalogueFactions", (_, data: any[]) => {
            data.forEach(element => {
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
                this.lookupFactions.set(element.factionId, element);
                this.lookupFactionsByTemplateId.set(element.factionTemplateId, element);
            });
        });
        electron.ipcRenderer.on("KeyValueChangeSet", (_, data: any) => {
            this.datastore.SaveData(data);
            this.handleNewData(data);
        });
    }

    private handleNewData(data: any) {
        if (data?.set) {
            for (const iterator of data.set) {
                switch (iterator.key) {
                    case "battle":
                        this.emit(`battlesetmapEntityId${iterator.value.mapEntityId}`, iterator.value.id);
                        break;
                    case "battlefieldstatus":
                        this.emit(`battlefield${iterator.value.battlefieldid}`, iterator.value.id);
                        break;
                    case "supplylinestatus":
                        this.emit(`supplyline${iterator.value.supplylineid}`, iterator.value.id);
                        break;
                }
            }
        } else if (data?.delete) {
            for (const iterator of data.delete) {
                switch (iterator.key) {
                    case "battle":
                        this.emit(`battledelete${iterator.value}`);
                        break;
                    // TODO Add supplylinestatus delete key and logic!!!
                }
            }
        }
    }

    public GetBattle = (battleId?: string): battle | null => battleId
        ? this.datastore.GetData<battle>("battle", battleId)
        : null;
}
