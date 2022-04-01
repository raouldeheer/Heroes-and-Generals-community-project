// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
import MapInteractionCSS from "./MapInteraction";
import React, { useEffect } from "react";
import BattlefieldPoint from "./battlefieldPoint";
import { Stage, Layer, Circle } from 'react-konva';
const electron = window.require("electron");
import EventEmitter from "events";
import Supplyline from "./supplyline";
import { useMap } from "./mapState";
import accesspoint from "hag-network-client/jsondb/accesspoint.json";
import battlefield from "hag-network-client/jsondb/battlefield.json";
import supplyline from "hag-network-client/jsondb/supplyline.json";

const width = 2048 * 8;
const height = 1440 * 8;

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
        electron.ipcRenderer.on("updateSupplylinestatusBatch", (_, data: any[]) => {
            data.forEach(element => {
                if (!factions.includes(element.factionid)) factions.push(element.factionid);
                element.color = colors[factions.indexOf(element.factionid)];
                this.emit(`supplyline${element.supplylineid}`, element);
            });
        });
    }
}

const warmapEventHandler = new WarmapEventHandler();

const posStyling: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};

const componentStyling: React.CSSProperties = {
    ...posStyling,
    width: "100%",
    height: "100%",
    zIndex: "-1",
};

const mapStyles: React.CSSProperties = {
    ...posStyling,
    width: `${width}px`,
    height: `${height}px`
};

const battlefieldsMap = new Map<string, any>(battlefield as Iterable<readonly [string, any]>);
const supplylinesMap = new Map<string, any>(supplyline as Iterable<readonly [string, any]>);
const accesspointsMap = new Map<string, any>(accesspoint as Iterable<readonly [string, any]>);

const bfs = Array.from(battlefieldsMap.keys());
const sups = Array.from(supplylinesMap.keys());

const Warmap = (): JSX.Element => {
    const {
        state: battles,
        insertbatch: insertBattles,
        deletebatch: deleteBattles
    } = useMap<any, any>();

    useEffect(() => {
        electron.ipcRenderer.on("setBattlesBatch", (_, data: any[]) => {
            insertBattles(data.map(v => ({ key: v.id, value: v })));
        });
        electron.ipcRenderer.on("deleteBattlesBatch", (_, data: any[]) => {
            deleteBattles(data);
        });
    }, []);

    return <div style={componentStyling}>
        <MapInteractionCSS minScale={0.10}
            defaultValue={{
                scale: 0.10,
                translation: { x: 0, y: 0, },
            }}>
            <img src={image} style={mapStyles} />
            <Stage style={mapStyles} width={width} height={height}>
                <Layer>
                    {sups.map(element => <Supplyline
                        key={element}
                        supplylineId={element}
                        battlefields={battlefieldsMap}
                        accesspoints={accesspointsMap}
                        supplylines={supplylinesMap}
                        warmapEventHandler={warmapEventHandler}
                    />)}
                    {bfs.map(element => <BattlefieldPoint
                        key={element}
                        battlefieldId={element}
                        battlefields={battlefieldsMap}
                        warmapEventHandler={warmapEventHandler}
                    />)}
                </Layer>
                <Layer>
                    {Array.from(battles.values()).map(v => <Circle
                        key={v.id}
                        x={v.posX}
                        y={v.posY}
                        radius={3}
                        fill="black"
                        transformsEnabled={"position"}
                    />)}
                </Layer>
            </Stage>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
