// eslint-disable-next-line
// @ts-ignore
import image from "../background.png";
// @ts-expect-error no dts
import { MapInteractionCSS } from 'react-map-interaction';
import BattlefieldPoint from "./battlefieldPoint";
import React, { useState } from 'react';
const electron = window.require('electron');
import { DataStore } from "hag-network-client/dist/datastore";
import Supplyline from "./supplyline";

electron.ipcRenderer.send('anything-asynchronous', 'ping');

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
    const [getDatastore, setDatastore] = useState(new DataStore);
    electron.ipcRenderer.on("datastore", (_, data) => {
        console.log("Got Data!");
        setDatastore(new DataStore(data));
    });

    const battlefields = getDatastore.ToObject().battlefield || {};
    const bfs = [];
    for (const key in battlefields)
        if (Object.prototype.hasOwnProperty.call(battlefields, key))
            bfs.push(battlefields[key].id);

    const supplylines = getDatastore.ToObject().supplyline || {};
    const sups = [];
    for (const key in supplylines)
        if (Object.prototype.hasOwnProperty.call(supplylines, key))
            sups.push(supplylines[key].id);



    return <div style={componentStyling}>
        <MapInteractionCSS minScale={0.10}
            defaultValue={{
                scale: 0.10,
                translation: { x: 0, y: 0, },
            }}>
            <img src={image} style={mapStyles} />
            <svg style={mapStyles} >
                <line x1="50" y1="50" x2="350" y2="350" stroke="black" strokeWidth="10" />
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
                <circle cx="350" cy="350" r="40" stroke="black" strokeWidth="3" fill="green" />
                {sups.map(element => <Supplyline key={element} supplylineId={element} datastore={getDatastore} />)}
                {bfs.map(element => <BattlefieldPoint key={element} battlefieldId={element} datastore={getDatastore} />)}
            </svg>
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
