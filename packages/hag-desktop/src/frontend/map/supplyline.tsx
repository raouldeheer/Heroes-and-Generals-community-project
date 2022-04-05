import { useEffect, useState } from "react";
import { Line } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";

interface supplylinestatus {
    id: string;
    warid: string;
    factionid: string;
    supplylineid: string;
    color: string;
}

const Supplyline = ({
    supplyline,
    warmapEventHandler,
}: {
    supplyline: {
        id: string;
        accesspoint1Id: string;
        accesspoint2Id: string;
        posx1: number;
        posy1: number;
        posx2: number;
        posy2: number;
    };
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const { posx1, posy1, posx2, posy2 } = supplyline;
    const [color, setColor] = useState("#888");

    useEffect(() => {
        warmapEventHandler.on(`supplyline${supplyline.id}`, (data: supplylinestatus) => {
            // console.log(data.color);
            setColor(data.color);
        });
    }, []);

    return <Line
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
    />;
};

export default Supplyline;