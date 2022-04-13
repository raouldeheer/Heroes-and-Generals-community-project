import { useEffect, useState } from "react";
import { Circle, Line } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";
import { supplylinestatus, supplyline } from "./mapInterfaces";

const Supplyline = ({
    supplyline,
    warmapEventHandler,
}: {
    supplyline: supplyline;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const { posx1, posy1, posx2, posy2 } = supplyline;
    const [battleId, setBattleId] = useState<string>(null);
    const [supplylinestatusId, setsupplylinestatusId] = useState<string>(null);

    const color = supplylinestatusId
        ? warmapEventHandler.lookupFactions.get(
            warmapEventHandler.datastore.GetData<supplylinestatus>(
                "supplylinestatus", supplylinestatusId
            ).factionid
        )?.color || "#888"
        : "#888";
    const battle = warmapEventHandler.GetBattle(battleId);

    useEffect(() => {
        warmapEventHandler.on(`supplyline${supplyline.id}`, setsupplylinestatusId);
        warmapEventHandler.on(`battlesetmapEntityId${supplyline.id}`, (data: string) => {
            setBattleId(data);
            warmapEventHandler.once(`battledelete${data}`, () => {
                console.log(`Deleting ${data}`);
                setBattleId(null);
            });
        });
    }, []);

    function clicked() {
        if (battleId)
            warmapEventHandler.emit("BattlefieldInfoPopup_Show", battleId);
    }

    return <>
        <Line
            points={[
                posx1,
                posy1,
                posx2,
                posy2
            ]}
            stroke={color}
            strokeWidth={8}
            listening={false}
            transformsEnabled={"position"}
            perfectDrawEnabled={false}
        />
        {battle ? <Circle
            key={battle.id}
            x={posx1 + (posx2 - posx1) * Number(battle.position)}
            y={posy1 + (posy2 - posy1) * Number(battle.position)}
            radius={8}
            fill="orange"
            onClick={clicked}
        /> : null}
    </>;
};

export default Supplyline;