import { IKeyValueChangeSetResult } from "./KeyValueChangeSet";

export class DataStore {
    private mainStore: Map<string, Map<string, any> | object>;
    constructor() {
        this.mainStore = new Map();
    }
    public SaveData(data: IKeyValueChangeSetResult) {
        if (data.set) {
            data.set.forEach(pair => {
                if (pair.value.id) {
                    let i;
                    const itemStore =
                        ((i = this.mainStore.get(pair.key)) instanceof Map ? i : undefined)
                        || new Map<string, any>();
                    itemStore.set(pair.value.id, pair.value);
                    this.mainStore.set(pair.key, itemStore);
                } else {
                    this.mainStore.set(pair.key, pair.value);
                }
            });
        }
    }

    public GetData(itemStoreName: string, id: string) {
        return (this.mainStore.get(itemStoreName) as Map<string, any> | undefined)?.get?.(id)
            || this.mainStore.get(itemStoreName);
    }

    public ToString() {
        const obj = {};
        for (let [k, v] of this.mainStore) {
            if (v instanceof Map) {
                const obj1 = {};
                for (let [k1, v1] of v) {
                    // @ts-ignore
                    obj1[k1] = v1;
                }
                // @ts-ignore
                obj[k] = obj1;
            } else {
                // @ts-ignore
                obj[k] = v;
            }
        }
        return JSON.stringify(obj);
    }
}