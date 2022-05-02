export type KeyValue = { key: string, value: any; };
export interface IKeyValueChangeSetResult {
    set?: KeyValue[],
    delete?: KeyValue[],
}

export class DataStore {
    private readonly mainStore: Map<string, Map<string, any>>;

    constructor(from?: Map<string, Map<string, any>>) {
        this.mainStore = from ? new Map(from) : new Map;
    }

    public SaveData(data: IKeyValueChangeSetResult) {
        data.set?.forEach(pair => {
            if (pair.value.id) this.SetData(pair.key, pair.value.id, pair.value);
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

    public HasData = (itemStoreName: string, id: string) =>
        this.mainStore.get(itemStoreName)?.has(id);

    public SetData<T = any>(itemStoreName: string, id: string, data: T) {
        const itemStore = this.mainStore.get(itemStoreName) || new Map;
        itemStore.set(id, data);
        this.mainStore.set(itemStoreName, itemStore);
    }

    public GetItemStore = <T = any>(itemStoreName: string): Map<string, T> | undefined =>
        this.mainStore.get(itemStoreName);

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

    public ItemstoreToKeyValueSet(itemStoreName: string): IKeyValueChangeSetResult {
        const itemStore = this.mainStore.get(itemStoreName);
        const result: IKeyValueChangeSetResult = { set: [] };
        if (itemStore) for (const item of itemStore) result.set?.push({ key: itemStoreName, value: item[1] });
        return result;
    }
}
