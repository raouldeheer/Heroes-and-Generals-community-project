import { useEffect, useState } from "react";
import { Circle, Line } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";
import { battle, supplylinestatus, supplyline } from "./mapInterfaces";

const Supplyline = ({
    supplyline,
    warmapEventHandler,
}: {
    supplyline: supplyline;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const { posx1, posy1, posx2, posy2 } = supplyline;
    const [color, setColor] = useState("#888");
    const [battle, setBattle] = useState<battle>(null);

    useEffect(() => {
        warmapEventHandler.on(`supplyline${supplyline.id}`, (data: supplylinestatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
        warmapEventHandler.on(`battlesetmapEntityId${supplyline.id}`, (data: battle) => {
            setBattle(data);
            warmapEventHandler.on(`battledelete${data.id}`, () => {
                setBattle(null);
            });
        });
    }, []);

    function clicked() {
        console.log(`supplylineBattle: ${battle.id}`);
        console.log(battle);

        if (battle) {
            warmapEventHandler.emit("BattlefieldInfoPopup_Show", {
                battlefield: supplyline,
                battle,
            });
        }
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
            x={posx2 + (posx1 - posx2) * Number(battle.position)}
            y={posy2 + (posy1 - posy2) * Number(battle.position)}
            radius={8}
            fill="orange"
            onClick={clicked}
        /> : null}
    </>;
};

export default Supplyline;