import "mylas";
const accesspoint = JSON.loadS("./json/accesspoint.json");
const battlefield = JSON.loadS("./json/battlefield.json");
const supplyline = JSON.loadS("./json/supplyline.json");

const battlefields = new Map;
const supplylines = new Map;
const accesspoints = new Map;

battlefield.forEach((element: { id: string; }) => { battlefields.set(element.id, element); });
supplyline.forEach((element: { id: string; }) => { supplylines.set(element.id, element); });
accesspoint.forEach((element: { id: string; }) => { accesspoints.set(element.id, element); });

const sups = Array.from(supplylines.keys());

const result = sups.map(id => {
    const sup = supplylines.get(id);
    const battlefield1 = battlefields.get(accesspoints.get(sup.accesspoint1Id).battlefield);
    const battlefield2 = battlefields.get(accesspoints.get(sup.accesspoint2Id).battlefield);
    return {
        ...sup,
        bf1: battlefield1.id,
        posx1: battlefield1.posx,
        posy1: battlefield1.posy,
        bf2: battlefield2.id,
        posx2: battlefield2.posx,
        posy2: battlefield2.posy
    };
});

JSON.saveS("./json/supplyline.json", result);
