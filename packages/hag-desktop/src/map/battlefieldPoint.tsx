import { DataStore } from "hag-network-client/dist/datastore";
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
    datastore
}: {
    battlefieldId: string;
    datastore: DataStore;
}): JSX.Element => {
    const bfdata: Battlefield = datastore.GetData("battlefield", battlefieldId);
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
