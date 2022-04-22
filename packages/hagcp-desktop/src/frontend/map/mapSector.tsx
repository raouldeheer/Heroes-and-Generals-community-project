import BattlefieldPoint from "./battlefieldPoint";
import { Stage, Layer } from "react-konva";
import Supplyline from "./supplyline";
import { WarmapEventHandler } from "../warmapEventHandler";
import { useEffect } from "react";

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

    useEffect(() => {
        // effect
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
        </Layer>
    </Stage>;
};
export default MapSector;

