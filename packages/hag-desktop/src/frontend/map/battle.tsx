import { useEffect } from "react";
import { Circle } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";

export interface BattleInfo {
    id: string;
    posX: number;
    posY: number;
}

const BattleInfoIcon = ({
    battleinfo,
    warmapEventHandler
}: {
    battleinfo: BattleInfo;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {

    useEffect(() => {
        // effect
    }, []);

    function clicked() {
        console.log(battleinfo);
    }
    return <Circle
        key={battleinfo.id}
        x={battleinfo.posX}
        y={battleinfo.posY}
        radius={3}
        fill="black"
        onClick={clicked}
    />;
};

export default BattleInfoIcon;
