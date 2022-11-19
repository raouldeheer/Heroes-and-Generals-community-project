import { LongToString, PacketClass, Packets } from "hagcp-network-client";
import { BufferCursor, DataStore } from "hagcp-utils";
import Long from "long";

export function toHGMap(
    warName: string,
    factions: Packets.war_catalogue_faction[],
    QueryServerInfoResponse: Packets.QueryServerInfoResponse,
    dataStore: DataStore
) {
    const supplylines = dataStore.GetItemStore("supplylinestatus")?.values();
    const battlefields = dataStore.GetItemStore("battlefieldstatus")?.values();

    const supMap = new Map<string, Set<string>>();
    for (const sup of supplylines || []) {
        const fac = sup.factionid;
        const id = sup.supplylineid;

        const faction = supMap.get(fac) || new Set;
        faction.add(id);
        supMap.set(fac, faction);
    }
    const bfsMap = new Map<string, Set<string>>();
    for (const bf of battlefields || []) {
        const fac = bf.factionid;
        const id = bf.battlefieldid;

        const faction = bfsMap.get(fac) || new Set;
        faction.add(id);
        bfsMap.set(fac, faction);
    }

    const factionBufs = factions.map(faction =>
        PacketClass.war_catalogue_faction.toBuffer({
            ...faction,
            factionId: Long.fromString(faction.factionId.toString()),
            factionTemplateId: Long.fromString(faction.factionTemplateId.toString()),
            ownedMajorCities: faction.ownedMajorCities.map(e => Long.fromString(e.toString())),
        })
    );
    const factionsSize = factionBufs.reduce((prev, curr) => prev + curr.byteLength + 8, 0);

    const serverInfo = PacketClass.QueryServerInfoResponse.toBuffer(QueryServerInfoResponse);

    const supSize = Array.from(supMap.values()).reduce((prev, curr) => curr.size + prev, 0);
    const bfsSize = Array.from(bfsMap.values()).reduce((prev, curr) => curr.size + prev, 0);

    const buff = new BufferCursor(Buffer.allocUnsafe(
        + 1 // Version
        + ( // Supplylines
            + 1 // Number of factions
            + ((
                + 8 // FactionId
                + 2 // Number of supplylines
            ) * supMap.size) // Amount of factions
            + (supSize * 8) // SupplylineIds
        )
        + ( // Battlefield
            + 1 // Number of factions
            + ((
                + 8 // FactionId
                + 2 // Number of battlefield
            ) * bfsMap.size) // Amount of factions
            + (bfsSize * 8) // BattlefieldIds
        )
        + ( // warName
            + 1 // warNameSize
            + warName.length
        )
        + (
            + 1 // factionsSize
            + factionsSize
        )
        + (
            + 8 // serverInfoSize
            + serverInfo.byteLength
        )
    ));

    buff.writeUInt8(1); // Version 1

    buff.writeUInt8(supMap.size); // Supplyline factions
    for (const [faction, lines] of supMap) {
        buff.writeBigInt64LE(BigInt(faction));
        buff.writeUInt16LE(lines.size);
        for (const line of lines) {
            buff.writeBigInt64LE(BigInt(line));
        }
    }

    buff.writeUInt8(bfsMap.size); // Battlefield factions
    for (const [faction, battles] of bfsMap) {
        buff.writeBigInt64LE(BigInt(faction));
        buff.writeUInt16LE(battles.size);
        for (const battle of battles) {
            buff.writeBigInt64LE(BigInt(battle));
        }
    }

    buff.writeUInt8(warName.length);
    buff.write(warName); // warName

    buff.writeUInt8(factionBufs.length); // catalogue factions
    for (const faction of factionBufs) {
        buff.writeBigUInt64LE(BigInt(faction.byteLength));
        buff.writeBuff(faction);
    }

    buff.writeBigUInt64LE(BigInt(serverInfo.byteLength));
    buff.writeBuff(serverInfo);

    return buff.buffer;
}

export function parseHGMap(
    data: Buffer
): {
    version: 1;
    warName: string;
    factions: LongToString<Packets.war_catalogue_faction>[];
    serverInfo: LongToString<Packets.QueryServerInfoResponse>;
    supplylines: Map<string, Set<string>>;
    battlefields: Map<string, Set<string>>;
} | undefined {
    const buff = new BufferCursor(data);

    const version = buff.readUInt8(); // Version 1
    if (version === 1) return parseVersion1(buff);
}

function parseVersion1(buff: BufferCursor): {
    version: 1;
    warName: string;
    factions: LongToString<Packets.war_catalogue_faction>[];
    serverInfo: LongToString<Packets.QueryServerInfoResponse>;
    supplylines: Map<string, Set<string>>;
    battlefields: Map<string, Set<string>>;
} {
    const supLen = buff.readUInt8(); // Supplyline factions
    const sups = new Map<string, Set<string>>();
    for (let i = 0; i < supLen; i++) {
        const fac = buff.readBigInt64LE().toString();
        const lines = buff.readUInt16LE();
        for (let j = 0; j < lines; j++) {
            const faction = sups.get(fac) || new Set;
            faction.add(buff.readBigInt64LE().toString());
            sups.set(fac, faction);
        }
    }

    const bfsLen = buff.readUInt8(); // Supplyline factions
    const bfs = new Map<string, Set<string>>();
    for (let i = 0; i < bfsLen; i++) {
        const fac = buff.readBigInt64LE().toString();
        const lines = buff.readUInt16LE();
        for (let j = 0; j < lines; j++) {
            const faction = bfs.get(fac) || new Set;
            faction.add(buff.readBigInt64LE().toString());
            bfs.set(fac, faction);
        }
    }

    const warNameLen = buff.readUInt8();
    const warName = buff.toString("utf8", warNameLen); // warName

    const factionsLen = buff.readUInt8(); // catalogue factions
    const factions = [];
    for (let i = 0; i < factionsLen; i++) {
        const bytesToRead = buff.readBigUInt64LE();
        factions.push(PacketClass.war_catalogue_faction.parse(new BufferCursor(buff.slice(Number(bytesToRead)).buffer)));
    }

    const serverInfoLen = buff.readBigUInt64LE();
    const serverInfo = PacketClass.QueryServerInfoResponse.parse(new BufferCursor(buff.slice(Number(serverInfoLen)).buffer));

    return {
        version: 1,
        warName,
        factions,
        serverInfo,
        supplylines: sups,
        battlefields: bfs,
    };
}

