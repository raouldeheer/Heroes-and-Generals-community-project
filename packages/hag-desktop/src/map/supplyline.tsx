
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

    return <line
        x1={battlefield1.posx}
        y1={battlefield1.posy}
        x2={battlefield2.posx}
        y2={battlefield2.posy}
        stroke="#888"
        strokeWidth="10"
    />;
};

export default Supplyline;