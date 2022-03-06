import { IKeyValueChangeSetResult } from "./KeyValueChangeSet";

export class DataStore {
    private mainStore: Map<string, Map<string, any>>;
    
    constructor() {
        this.mainStore = new Map();
    }

    public SaveData(data: IKeyValueChangeSetResult) {
        if (data.set) {
            data.set.forEach(pair => {
                if (pair.value.id) {
                    const itemStore = this.mainStore.get(pair.key) || new Map<string, any>();
                    itemStore.set(pair.value.id, pair.value);
                    this.mainStore.set(pair.key, itemStore);
                }
            });
        }
        if (data.delete) {
            data.delete.forEach(pair => {
                if (pair.value) {
                    const itemStore = this.mainStore.get(pair.key);
                    if (!itemStore) return;
                    itemStore.delete(pair.value);
                    this.mainStore.set(pair.key, itemStore);
                }
            });
        }
    }

    public GetData(itemStoreName: string, id: string) {
        return this.mainStore.get(itemStoreName)?.get?.(id);
    }

    public ToString() {
        const obj = {};
        for (const [k, v] of this.mainStore) {
            const obj1 = {};
            for (const [k1, v1] of v) {
                // @ts-ignore
                obj1[k1] = v1;
            }
            // @ts-ignore
            obj[k] = obj1;
        }
        return JSON.stringify(obj);
    }
}
