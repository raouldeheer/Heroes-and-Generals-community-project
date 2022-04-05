import { useEffect, useState } from "react";
import { Circle, Text } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";

const pointSize = 15;

export interface Battlefield {
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
    battlefield,
    warmapEventHandler
}: {
    battlefield: Battlefield;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const [color, setColor] = useState("#888");

    useEffect(() => {
        warmapEventHandler.on(`battlefield${battlefield.id}`, (data: battlefieldstatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
    }, []);

    function clicked() {
        console.log(`You clicked on: ${battlefield.bftitle}`);
        warmapEventHandler.emit("BattlefieldInfoPopup_Show", battlefield);
    }
    return <>
        <Circle style={{ cursor: "pointer" }}
            x={battlefield.posx}
            y={battlefield.posy}
            radius={pointSize}
            stroke="black"
            strokeWidth={2}
            fill={color}
            onClick={clicked}
            transformsEnabled={"position"}
        />
        <Text
            text={battlefield.bftitle}
            x={battlefield.posx}
            y={battlefield.posy + pointSize}
            listening={false}
            transformsEnabled = {"position"}
        />
    </>;
};

export default BattlefieldPoint;
