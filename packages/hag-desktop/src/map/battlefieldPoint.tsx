import { useState } from "react";

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

const BattlefieldPoint = ({
    battlefieldId,
    battlefields,
}: {
    battlefieldId: string;
    battlefields: Map<string, Battlefield>;
}): JSX.Element => {
    const bfdata: Battlefield = battlefields.get(battlefieldId);
    const [count, setCount] = useState(0);
    
    function clicked(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setCount(1);
        console.log(`You clicked on: ${battlefieldId}`);
    }
    return <circle style={{ cursor: "pointer" }}
        cx={bfdata.posx}
        cy={bfdata.posy}
        r={pointSize}
        stroke="black"
        strokeWidth="2"
        fill={count ? "green" : "red"}
        onClick={clicked} />;
};

export default BattlefieldPoint;
