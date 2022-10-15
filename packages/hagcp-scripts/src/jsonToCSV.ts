import mylas from "mylas";
import { existsSync } from "fs";
import globby from "globby";
// @ts-expect-error fake ts(1471) error
import { pLimit } from 'plimit-lit';

const fileLimit = pLimit(100);
const openFile = (file: string): Promise<SaveData> => fileLimit((name: string) => mylas.json.load<SaveData>(name), file);

const idToAbbr = new Map<string, FactionName>([
    ["1", "US"],
    ["2", "GE"],
    ["3", "USSR"],
]);

const FactionNameList: FactionName[] = ["US", "GE", "USSR"];
const OutputOptionsList: OutputOptions[] = ["victoryPoints", "playerCount", "deployedCommandPointsInfantry", "deployedCommandPointsArmor", "deployedCommandPointsAir", "controlledBattlefields", "battlesWon", "battlesLost", "infantryLost", "vehiclesLost", "tanksLost", "planesLost"];

(async () => {
    const warId = process.argv[2];
    console.log(`Loading ${warId}`);
    if (!warId) return;
    if (!existsSync(`./saves/${warId}`)) mylas.dir.mkS(`./saves/${warId}`);

    const files = await globby(`./saves/${warId}/*.jsonc`);
    if (files) {
        const data = await Promise.all(files.map(openFile));
        const outputData = data
            .filter(v => v.factions?.length === 3)
            .map(savedData => ({
                factions: savedData.factions
                    .sort((a, b) => Number(a.factionTemplateId) - Number(b.factionTemplateId))
                    .map<FactionOutput>(raw => ({
                        id: raw.factionTemplateId,
                        victoryPoints: raw.factionVictoryPoints,
                        playerCount: raw.factionPlayerCount,
                        deployedCommandPointsInfantry: raw.factionDeployedCommandPointsInfantry,
                        deployedCommandPointsArmor: raw.factionDeployedCommandPointsArmor,
                        deployedCommandPointsAir: raw.factionDeployedCommandPointsAir,
                        controlledBattlefields: raw.factionControlledBattlefields,
                        battlesWon: raw.battlesWon,
                        battlesLost: raw.battlesLost,
                        infantryLost: raw.infantryLost,
                        vehiclesLost: raw.vehiclesLost,
                        tanksLost: raw.tanksLost,
                        planesLost: raw.planesLost,
                    })),
                onlineplayers: savedData?.queryServerInfo?.onlineplayers ?? 0,
            }))
            .map(data => {
                // @ts-expect-error key
                const result: { [key: OutputFactionOptions]: never; } = {};
                data.factions.forEach(faction => {
                    for (const key in faction) {
                        if (key !== "id" && Reflect.has(faction, key))
                            Reflect.set(result, `${idToAbbr.get(faction.id)}_${key}`, Reflect.get(faction, key));
                    }
                });
                Reflect.set(result, "onlineplayers", data.onlineplayers);
                return result;
            })
            .map(data => {
                const result = [];
                for (const factionName of FactionNameList) {
                    for (const outputName of OutputOptionsList) {
                        result.push(Reflect.get(data, `${factionName}_${outputName}`));
                    }
                }
                result.push(Reflect.get(data, "onlineplayers"));
                return result.map(String).join(",");
            })
            .join("\n");


        const header = [];
        for (const factionName of FactionNameList) {
            for (const outputName of OutputOptionsList) {
                header.push(`${factionName}_${outputName}`);
            }
        }
        header.push("onlineplayers");
        await mylas.save(`./savesCSV/${warId}.csv`, header.join(",") + "\n" + outputData);
    }
    console.log("Done");
})();

interface SaveData {
    factions: Faction[];
    queryServerInfo?: {
        onlineplayers: number;
    };
}

interface Faction {
    factionId: string;
    factionTemplateId: string;
    factionTag: string;
    factionVictoryPoints: number;
    factionPlayerCount: number;
    factionMinPlayerCount: number;
    factionMaxPlayerCount: number;
    factionPlayerOnlineCount: number;
    factionBonus: number;
    factionDeployedCommandPointsInfantry: number;
    factionDeployedCommandPointsArmor: number;
    factionDeployedCommandPointsAir: number;
    factionControlledBattlefields: number;
    battlesWon: number;
    battlesLost: number;
    infantryLost: number;
    vehiclesLost: number;
    tanksLost: number;
    planesLost: number;
    ownedMajorCities: string[];
    color: string;
}

interface FactionOutput {
    id: string;
    victoryPoints: number;
    playerCount: number;
    deployedCommandPointsInfantry: number;
    deployedCommandPointsArmor: number;
    deployedCommandPointsAir: number;
    controlledBattlefields: number;
    battlesWon: number;
    battlesLost: number;
    infantryLost: number;
    vehiclesLost: number;
    tanksLost: number;
    planesLost: number;
}

type FactionName = "US" | "GE" | "USSR";
type OutputOptions =
    "victoryPoints" |
    "playerCount" |
    "deployedCommandPointsInfantry" |
    "deployedCommandPointsArmor" |
    "deployedCommandPointsAir" |
    "controlledBattlefields" |
    "battlesWon" |
    "battlesLost" |
    "infantryLost" |
    "vehiclesLost" |
    "tanksLost" |
    "planesLost";

type OutputFactionOptions = `${FactionName}_${OutputOptions}`;
