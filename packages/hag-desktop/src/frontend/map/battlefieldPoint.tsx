import { useEffect, useState } from "react";
import { Circle, Text } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";
import { Battlefield, battlefieldstatus } from "./mapInterfaces";

const pointSize = 15;

const BattlefieldPoint = ({
    battlefield,
    warmapEventHandler
}: {
    battlefield: Battlefield;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const [battleId, setBattleId] = useState<string>(null);
    const [battlefieldstatusId, setbattlefieldstatusId] = useState<string>(null);

    const color = battlefieldstatusId
        ? warmapEventHandler.lookupFactions.get(
            warmapEventHandler.datastore.GetData<battlefieldstatus>(
                "battlefieldstatus", battlefieldstatusId
            ).factionid
        )?.color || "#888"
        : "#888";
    const battle = warmapEventHandler.GetBattle(battleId);

    useEffect(() => {
        warmapEventHandler.on(`battlefield${battlefield.id}`, setbattlefieldstatusId);
        warmapEventHandler.on(`battlesetmapEntityId${battlefield.id}`, (data: string) => {
            setBattleId(data);
            warmapEventHandler.on(`battledelete${data}`, () => {
                setBattleId(null);
            });
        });
    }, []);

    function clicked() {
        if (battleId)
            warmapEventHandler.emit("BattlefieldInfoPopup_Show", battleId);
    }
    return <>
        <Circle
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
