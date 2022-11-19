import mylas from "mylas";
import { BufferCursor, DataStore } from "hagcp-utils";
import { gunzip, gzip } from "zlib";
import { PacketClass } from "hagcp-network-client";
import globby from "globby";
import { promisify } from "util";
import { toHGMap } from "./hgmap";
import { Worker, isMainThread, parentPort } from "worker_threads";
// @ts-expect-error fake ts(1471) error
import { pLimit } from "plimit-lit";
import { existsSync } from "fs";

const unzip = promisify(gunzip);
const zip = promisify(gzip);
const workers: (Worker & { busy: boolean; })[] = [];
const MAX_THREADS = 16;
const threadLimit = pLimit(MAX_THREADS);

(async () => {
    if (!isMainThread) return;
    const warId = process.argv[2];
    console.log(`Loading ${warId}`);
    if (!warId) return;

    for (let i = 0; i < MAX_THREADS; i++) {
        const worker = new Worker(__filename) as Worker & { busy: boolean; };
        worker.busy = false;
        workers.push(worker);
    }

    const savesDir = "./saves";
    const files = await globby(`${savesDir}/${warId}/*.jsonc`);

    const latestTimes: number[] = [];
    let [lastDone, done] = [0, 0];
    let [lastTime, time] = [Date.now(), Date.now()];

    const inter = setInterval(() => {
        if (latestTimes.length > 15)
            latestTimes.shift();
        latestTimes.push((time - lastTime) / ((done - lastDone) || 1));

        const diff = latestTimes.reduce((prev, curr) => (prev + curr) / 2);
        const remainingTime = (files.length - done) * diff;
        console.log(`(${done}/${files.length}) ` +
            `${Math.floor(remainingTime / 60000).toString().padStart(2, "0")}m ` +
            `${(Math.floor(remainingTime / 1000) % 60).toString().padStart(2, "0")}s`);

        lastDone = done;
        lastTime = time;
        time = Date.now();
    }, 1000);

    await Promise.all(files.map(filename =>
        threadLimit(() => {
            const n = workers.find(e => !e.busy);
            if (!n) throw new Error("Thread busy!");
            n.busy = true;
            return new Promise<void>((resolve) => {
                n.once("message", () => {
                    n.busy = false;
                    done++;
                    resolve();
                });
                n.postMessage({ filename });
            });
        })
    ));
    clearInterval(inter);
    workers.forEach(e => e.terminate());
})();

async function toHgmap(filename: string) {
    if (existsSync(filename.replace(".jsonc", ".hgmap").replace("/saves/", "/savesHGMap/"))) return;
    const dataStore = new DataStore;
    const { factions, warName, queryServerInfo } = await mylas.json.load(filename);
    const buf = await unzip(await mylas.buf.load(filename.replace(".jsonc", ".protodata")));
    dataStore.SaveData(PacketClass.KeyValueChangeSet.parse(new BufferCursor(buf)));

    const buff = toHGMap(warName, factions, queryServerInfo, dataStore);

    await mylas.buf.save(filename.replace(".jsonc", ".hgmap").replace("/saves/", "/savesHGMap/"), await zip(buff));
}

parentPort?.on("message", async ({ filename }) => {
    try {
        if (!filename) throw new Error("No filename");
        await toHgmap(filename);
        parentPort?.postMessage(true);
    } catch (error) {
        console.error(error);
        parentPort?.postMessage(false);
    }
});
