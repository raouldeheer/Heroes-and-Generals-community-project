// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
// @ts-expect-error no dts
import { MapInteractionCSS } from "react-map-interaction";
import BattlefieldPoint from "./battlefieldPoint";
import React from "react";
const electron = window.require("electron");
import Supplyline from "./supplyline";
import accesspoint from "hag-network-client/jsondb/accesspoint.json";
import battlefield from "hag-network-client/jsondb/battlefield.json";
import supplyline from "hag-network-client/jsondb/supplyline.json";

// electron.ipcRenderer.send("get-setup-data");

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
    width: `${2048 * 8}px`,
    height: `${1440 * 8}px`
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
            <svg style={mapStyles} >
                {sups.map(element => <Supplyline
                    key={element}
                    supplylineId={element}
                    battlefields={battlefieldsMap}
                    accesspoints={accesspointsMap}
                    supplylines={supplylinesMap}
                />)}
                {bfs.map(element => <BattlefieldPoint
                    key={element}
                    battlefieldId={element}
                    battlefields={battlefieldsMap}
                />)}
            </svg>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
