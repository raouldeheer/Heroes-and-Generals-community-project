const electron = window.require("electron");
import EventEmitter from "events";
import { DataStore } from "hag-network-client/dist/datastore";
import { IKeyValueChangeSetResult } from "hag-network-client/dist/protoclasses/keyValueChangeSet";
import { battle, Player } from "./map/mapInterfaces";
import battlefield from "hag-network-client/jsondb/battlefield.json";


export class WarmapEventHandler extends EventEmitter {
    public readonly lookupFactions: Map<string, any>;
    public readonly lookupFactionsByTemplateId: Map<string, any>;
    private readonly tagToShort = new Map<string, string>([
        ["Soviet Union", "SU"],
        ["Germany", "GE"],
        ["United States", "US"]
    ]);
    public readonly datastore: DataStore;
    public user: Player;
    constructor() {
        super();
        this.lookupFactions = new Map<string, any>();
        this.lookupFactionsByTemplateId = new Map<string, any>();
        this.datastore = new DataStore;
        battlefield.forEach((element: { id: string; }) => { this.datastore.SetData("battlefield", element.id, element); });
        electron.ipcRenderer.setMaxListeners(64);
        electron.ipcRenderer.on("login2_result", (_, data) => {
            this.user = data.currentplayer;
        });
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
        electron.ipcRenderer.on("KeyValueChangeSet", (_, data: IKeyValueChangeSetResult) => {
            this.datastore.SaveData(data);
            this.handleNewData(data);
        });
    }

    private handleNewData(data: IKeyValueChangeSetResult) {
        for (const iterator of (data.set || [])) {
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
                case "CommandNodeWarInstance":
                    this.emit("CommandNodeWarInstanceUpdate");
                    break;
                case "war":
                    if (iterator.value.sequelwarid !== "0") {
                        console.log(`${iterator.value.id} ended, switching to: ${iterator.value.sequelwarid}`);
                        this.emit("warEnding", iterator.value);
                    }
                    break;
            }
        }
        for (const iterator of (data.delete || []))
            this.emit(`${iterator.key}delete${iterator.value}`);
    }

    public GetBattle = (battleId?: string): battle | null => battleId
        ? this.datastore.GetData<battle>("battle", battleId)
        : null;

    public GetFactionShort = (id: string): string =>
        this.tagToShort.get(this.lookupFactions.get(id).factionTag);
}
