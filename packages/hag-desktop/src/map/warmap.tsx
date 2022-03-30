// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
import MapInteractionCSS from "./MapInteraction";
import BattlefieldPoint from "./battlefieldPoint";
import React from "react";
const electron = window.require("electron");
import EventEmitter from "events";
import Supplyline from "./supplyline";
import accesspoint from "hag-network-client/jsondb/accesspoint.json";
import battlefield from "hag-network-client/jsondb/battlefield.json";
import supplyline from "hag-network-client/jsondb/supplyline.json";

const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"];
const factions: string[] = [];

export class WarmapEventHandler extends EventEmitter {
    constructor() {
        super();
        electron.ipcRenderer.on("updateBattlefieldstatus", (_, data) => {
            if (!factions.includes(data.factionid)) factions.push(data.factionid);
            data.color = colors[factions.indexOf(data.factionid)];
            this.emit(`battlefield${data.battlefieldid}`, data);
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
    width: `${2048}px`,
    height: `${1440}px`
};

const battlefieldsMap = new Map<string, any>(battlefield as Iterable<readonly [string, any]>);
const supplylinesMap = new Map<string, any>(supplyline as Iterable<readonly [string, any]>);
const accesspointsMap = new Map<string, any>(accesspoint as Iterable<readonly [string, any]>);

const bfs = Array.from(battlefieldsMap.keys());
const sups = Array.from(supplylinesMap.keys());

const Warmap = (): JSX.Element => {

    return <div style={componentStyling}>
        <MapInteractionCSS minScale={0.60}
            defaultValue={{
                scale: 0.60,
                translation: { x: 0, y: 0, },
            }}>
            <img src={image} style={mapStyles} />
            <svg style={mapStyles} >
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
            </svg>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
