import { useEffect, useState } from "react";
import { WarmapEventHandler } from "./warmap";
import { Circle, Text } from 'react-konva';

const pointSize = 15;

interface Battlefield {
    id: string;
    mapid: string;
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: string;
    rotation?: number;
}

interface battlefieldstatus {
    id: string;
    warid: string;
    battlefieldid: string;
    factionid: string;
    color: string;
}

const BattlefieldPoint = ({
    battlefieldId,
    battlefields,
    warmapEventHandler
}: {
    battlefieldId: string;
    battlefields: Map<string, Battlefield>;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const bfdata: Battlefield = battlefields.get(battlefieldId);
    const [color, setColor] = useState("#888");

    useEffect(() => {
        warmapEventHandler.on(`battlefield${battlefieldId}`, (data: battlefieldstatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
    }, []);

    function clicked() {
        console.log(`You clicked on: ${bfdata.bftitle}`);
    }
    return <>
        <Circle style={{ cursor: "pointer" }}
            x={bfdata.posx}
            y={bfdata.posy}
            radius={pointSize}
            stroke="black"
            strokeWidth={2}
            fill={color}
            onClick={clicked}
            transformsEnabled={"position"}
        />
        <Text
            text={bfdata.bftitle}
            x={bfdata.posx}
            y={bfdata.posy + pointSize}
            listening={false}
            transformsEnabled = {"position"}
        />
    </>;
};

export default BattlefieldPoint;
