const electron = window.require("electron");
import { useEffect, useState } from "react";

interface supplylinestatus {
    id: string;
    warid: string;
    factionid: string;
    supplylineid: string;
    color: string;
}

const Supplyline = ({
    supplylineId,
    supplylines,
    accesspoints,
    battlefields,
}: {
    supplylineId: string;
    supplylines: Map<string, { accesspoint1Id: string, accesspoint2Id: string; }>;
    accesspoints: Map<string, { battlefield: string; }>;
    battlefields: Map<string, { posx: number, posy: number; }>;
}): JSX.Element => {
    const { accesspoint1Id, accesspoint2Id } = supplylines.get(supplylineId);
    const battlefield1 = battlefields.get(accesspoints.get(accesspoint1Id).battlefield);
    const battlefield2 = battlefields.get(accesspoints.get(accesspoint2Id).battlefield);
    const [color, setColor] = useState("#888");

    useEffect(() => {
        electron.ipcRenderer.on(`supplyline${supplylineId}`, (_, data: supplylinestatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
    }, []);
    
    return <line
        x1={battlefield1.posx}
        y1={battlefield1.posy}
        x2={battlefield2.posx}
        y2={battlefield2.posy}
        stroke={color}
        strokeWidth="10"
    />;
};

export default Supplyline;