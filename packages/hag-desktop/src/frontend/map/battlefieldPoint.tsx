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

export interface battle {
    id: string;
    warid: string;
    mapEntityId: string;
    mapEntityTypeId: string;
    start: string;
    factioncount: number;
    excludedFactionId: string;
    position: string;
    activationTimeStamp: string;
}

export type battleBattlefieldPair = { battle: battle, battlefield: Battlefield; };

const BattlefieldPoint = ({
    battlefield,
    warmapEventHandler
}: {
    battlefield: Battlefield;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const [color, setColor] = useState("#888");
    const [battle, setBattle] = useState<battle>(null);

    useEffect(() => {
        warmapEventHandler.on(`battlefield${battlefield.id}`, (data: battlefieldstatus) => {
            setColor(data.color);
        });
        warmapEventHandler.on(`battlesetmapEntityId${battlefield.id}`, (data: battle) => {
            setBattle(data);
            warmapEventHandler.on(`battledelete${data.id}`, () => {
                setBattle(null);
            });
        });
    }, []);

    function clicked() {
        console.log(`You clicked on: ${battlefield.bftitle}`);
        console.log(battle);

        if (battle) {
            warmapEventHandler.emit("BattlefieldInfoPopup_Show", {
                battlefield,
                battle,
            });
        }
    }
    return <>
        <Circle style={{ cursor: "pointer" }}
            x={battlefield.posx}
            y={battlefield.posy}
            radius={pointSize}
            stroke={battle ? "orange" : "black"}
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
            transformsEnabled={"position"}
        />
    </>;
};

export default BattlefieldPoint;
