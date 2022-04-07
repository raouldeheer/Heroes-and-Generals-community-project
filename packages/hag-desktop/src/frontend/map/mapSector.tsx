import BattlefieldPoint, { battle } from "./battlefieldPoint";
import { Stage, Layer, Circle } from 'react-konva';
const electron = window.require("electron");
import Supplyline from "./supplyline";
import { WarmapEventHandler } from "../warmapEventHandler";
import { useEffect, useState } from "react";
import { useMap } from "./mapState";
import { posToSector } from "./warmap";
import BattleInfoIcon from "./battle";

const MapSector = ({
    posx,
    posy,
    offsetx,
    offsety,
    index,
    supsSectors,
    bfsSectors,
    warmapEventHandler,
}: {
    posx: number;
    posy: number;
    offsetx: number;
    offsety: number;
    index: number;
    supsSectors: any[][];
    bfsSectors: any[][];
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const {
        state: battleinfos,
        setState: setBattleinfos,
    } = useMap<string, any>(new Map);

    useEffect(() => {
        electron.ipcRenderer.on("setBattleInfosBatch", (_, data: any[]) => {
            const localData = data.filter(element =>
                element.posX >= (offsetx - 50) &&
                element.posX <= (offsetx + posx + 50) &&
                element.posY >= (offsety - 50) &&
                element.posY <= (offsety + posy + 50));

            if (localData.length > 0) {
                setBattleinfos((oldState) =>
                    localData.reduce((prev, element) =>
                        prev.set(element.id, element), new Map(oldState)));
            }
        });
        electron.ipcRenderer.on("deleteBattleInfosBatch", (_, data: string[]) => {
            const localData = data.filter(e => battleinfos.has(e));

            if (localData.length > 0) {
                setBattleinfos((oldState) =>
                    data.reduce((prev, key) => {
                        prev.delete(key);
                        return prev;
                    }, new Map(oldState)));
            }
        });
    }, []);

    return <Stage style={{
        position: "absolute",
        top: `${offsety}px`,
        left: `${offsetx}px`,
        width: `${posx}px`,
        height: `${posy}px`
    }} key={`sector${index}`} width={posx} height={posy} offsetX={offsetx} offsetY={offsety}>
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
            {Array.from(battleinfos.values()).map(v => <BattleInfoIcon
                key={v.id}
                battleinfo={v}
                warmapEventHandler={warmapEventHandler}
            />)}
        </Layer>
    </Stage>;
};
export default MapSector;

