// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
// @ts-expect-error no dts
import { MapInteractionCSS } from "react-map-interaction";
import BattlefieldPoint from "./battlefieldPoint";
import React from "react";
const electron = window.require("electron");
import Supplyline from "./supplyline";
import { useMap } from "./mapState";

electron.ipcRenderer.send("get-setup-data", "ping");

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

const Warmap = (): JSX.Element => {
    const battlefieldsMap = useMap<string, any>();
    const supplylinesMap = useMap<string, any>();
    const accesspointsMap = useMap<string, any>();

    electron.ipcRenderer.on("datastore", (_, data: Map<string, Map<string, unknown>>) => {
        console.log("Got Data!");
        battlefieldsMap.setState(data.get("battlefield"));
        accesspointsMap.setState(data.get("accesspoint"));
        supplylinesMap.setState(data.get("supplyline"));
    });

    const bfs = Array.from(battlefieldsMap.state.keys());
    const sups = Array.from(supplylinesMap.state.keys());

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
                    battlefields={battlefieldsMap.state}
                    accesspoints={accesspointsMap.state}
                    supplylines={supplylinesMap.state}
                />)}
                {bfs.map(element => <BattlefieldPoint
                    key={element}
                    battlefieldId={element}
                    battlefields={battlefieldsMap.state}
                />)}
            </svg>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
