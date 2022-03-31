// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
import MapInteractionCSS from "./MapInteraction";
import React from "react";
import BattlefieldPoint from "./battlefieldPoint";
import { Stage, Layer } from 'react-konva';
const electron = window.require("electron");
import EventEmitter from "events";
import Supplyline from "./supplyline";
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
        electron.ipcRenderer.on("updateBattlefieldstatus", (_, data) => {
            if (!factions.includes(data.factionid)) factions.push(data.factionid);
            data.color = colors[factions.indexOf(data.factionid)];
            this.emit(`battlefield${data.battlefieldid}`, data);
        });
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
        electron.ipcRenderer.on("updateSupplylinestatus", (_, data) => {
            if (!factions.includes(data.factionid)) factions.push(data.factionid);
            data.color = colors[factions.indexOf(data.factionid)];
            this.emit(`supplyline${data.supplylineid}`, data);
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
            </Stage>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
