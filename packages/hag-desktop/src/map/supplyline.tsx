import { DataStore } from "hag-network-client/dist/datastore";


const Supplyline = ({
    supplylineId,
    datastore
}: {
    supplylineId: string;
    datastore: DataStore;
}): JSX.Element => {
    const supplyline = datastore.GetData("supplyline", supplylineId);
    const accesspoint1 = datastore.GetData("accesspoint", supplyline.accesspoint1Id);
    const accesspoint2 = datastore.GetData("accesspoint", supplyline.accesspoint2Id);
    const battlefield1 = datastore.GetData("battlefield", accesspoint1.battlefield);
    const battlefield2 = datastore.GetData("battlefield", accesspoint2.battlefield);

    return <line
        x1={battlefield1.posx}
        y1={battlefield1.posy}
        x2={battlefield2.posx}
        y2={battlefield2.posy}
        stroke="black"
        strokeWidth="10"
    />;
};

export default Supplyline;