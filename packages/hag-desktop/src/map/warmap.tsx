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
import battlefield from "hag-network-client/jsondb/battlefield.json";
import supplyline from "hag-network-client/jsondb/supplyline.json";

const baseWidth = 2048;
const baseHeight = 1440;
const width = baseWidth * 8;
const height = baseHeight * 8;

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

const posToSector = (x: number, y: number) =>
    (Math.floor(y / baseHeight) * 8) + Math.floor(x / baseWidth);


const bfsSectors: any[][] = [];
battlefield.map(v => v[1]).forEach((element: any) => {
    const index = posToSector(element.posx, element.posy);
    if (index > 64) return;
    if (!bfsSectors[index]) bfsSectors[index] = [];
    bfsSectors[index].push(element);
});
const supsSectors: any[][] = [];
supplyline.map(v => v[1]).forEach((element: any) => {
    const index = posToSector(element.posx1, element.posy1);
    const index2 = posToSector(element.posx2, element.posy2);
    if (!supsSectors[index]) supsSectors[index] = [];
    supsSectors[index].push(element);
    if (index !== index2) {
        if (!supsSectors[index2]) supsSectors[index2] = [];
        supsSectors[index2].push(element);
    }
});

const Warmap = (): JSX.Element => {
    // const {
    //     state: battles,
    //     insertbatch: insertBattles,
    //     deletebatch: deleteBattles
    // } = useMap<any, any>();

    // useEffect(() => {
    //     electron.ipcRenderer.on("setBattlesBatch", (_, data: any[]) => {
    //         insertBattles(data.map(v => ({ key: v.id, value: v })));
    //     });
    //     electron.ipcRenderer.on("deleteBattlesBatch", (_, data: any[]) => {
    //         deleteBattles(data);
    //     });
    // }, []);

    const sectors = [];
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const index = (y * 8) + x;
            if (bfsSectors[index] || supsSectors[index]) {
                sectors.push(<Stage style={{
                    position: "absolute",
                    top: `${baseHeight * y}px`,
                    left: `${baseWidth * x}px`,
                    width: `${baseWidth}px`,
                    height: `${baseHeight}px`
                }} key={`sector${index}`} width={baseWidth} height={baseHeight} offsetX={baseWidth * x} offsetY={baseHeight * y}>
                    <Layer>
                        {supsSectors[index]?.map(element => <Supplyline
                            key={element.id}
                            supplyline={element}
                            warmapEventHandler={warmapEventHandler}
                        />)}
                        {bfsSectors[index]?.map(element => <BattlefieldPoint
                            key={element.id}
                            battlefield={element}
                            warmapEventHandler={warmapEventHandler}
                        />)}
                    </Layer>
                </Stage>);
            }
        }
    }

    return <div style={componentStyling}>
        <MapInteractionCSS minScale={0.10}
            defaultValue={{
                scale: 0.10,
                translation: { x: 0, y: 0, },
            }}>
            <img src={image} style={mapStyles} />
            {sectors}
            {/* <Stage style={mapStyles} width={width} height={height}>
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
            </Stage> */}
        </MapInteractionCSS>
    </div>;
};

export default Warmap;
