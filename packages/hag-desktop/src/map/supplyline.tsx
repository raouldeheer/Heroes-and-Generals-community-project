import { useEffect, useState } from "react";
import { WarmapEventHandler } from "./warmap";
import { Line } from 'react-konva';

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
    warmapEventHandler,
}: {
    supplylineId: string;
    supplylines: Map<string, { accesspoint1Id: string, accesspoint2Id: string; }>;
    accesspoints: Map<string, { battlefield: string; }>;
    battlefields: Map<string, { posx: number, posy: number; }>;
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const { accesspoint1Id, accesspoint2Id } = supplylines.get(supplylineId);
    const battlefield1 = battlefields.get(accesspoints.get(accesspoint1Id).battlefield);
    const battlefield2 = battlefields.get(accesspoints.get(accesspoint2Id).battlefield);
    const [color, setColor] = useState("#888");

    useEffect(() => {
        warmapEventHandler.on(`supplyline${supplylineId}`, (data: supplylinestatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
    }, []);

    return <Line
        points={[
            battlefield1.posx,
            battlefield1.posy,
            battlefield2.posx,
            battlefield2.posy
        ]}
        stroke={color}
        strokeWidth={8}
        listening={false}
        transformsEnabled = {"position"}
        perfectDrawEnabled={false}
    />;
};

export default Supplyline;