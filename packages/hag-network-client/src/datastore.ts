import { IKeyValueChangeSetResult } from "./protoclasses/keyValueChangeSet";

export class DataStore {
    private readonly mainStore: Map<string, Map<string, any>>;

    constructor(from?: Map<string, Map<string, any>>) {
        this.mainStore = from ? new Map(from) : new Map;
    }

    public SaveData(data: IKeyValueChangeSetResult) {
        data.set?.forEach(pair => {
            if (pair.value.id) {
                const itemStore = this.mainStore.get(pair.key) || new Map;
                itemStore.set(pair.value.id, pair.value);
                this.mainStore.set(pair.key, itemStore);
            }
        });
        data.delete?.forEach(pair => {
            if (pair.value) {
                const itemStore = this.mainStore.get(pair.key);
                if (!itemStore) return;
                itemStore.delete(pair.value);
                this.mainStore.set(pair.key, itemStore);
            }
        });
    }

    public ResetData(itemStoreName: string) {
        this.mainStore.set(itemStoreName, new Map);
    }

    public GetData = <T = any>(itemStoreName: string, id: string): T =>
        this.mainStore.get(itemStoreName)?.get?.(id);

    public ToObject() {
        const obj: any = {};
        for (const [k1, v1] of this.mainStore) {
            obj[k1] = {};
            for (const [k2, v2] of v1) obj[k1][k2] = v2;
        }
        return obj;
    }

    public ToString() {
        return JSON.stringify(this.ToObject());
    }

    public GetMap() {
        return this.mainStore;
    }
}
