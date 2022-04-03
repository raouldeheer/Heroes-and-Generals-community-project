import "mylas";
const accesspoint = JSON.loadS("./jsondb/accesspoint.json");
const battlefield = JSON.loadS("./jsondb/battlefield.json");
const supplyline = JSON.loadS("./jsondb/supplyline.json");

const battlefields = new Map;
const supplylines = new Map;
const accesspoints = new Map;

battlefield.forEach((element: { id: string; }) => { battlefields.set(element.id, element); });
supplylines.forEach((element: { id: string; }) => { supplyline.set(element.id, element); });
accesspoints.forEach((element: { id: string; }) => { accesspoint.set(element.id, element); });

const sups = Array.from(supplylines.keys());

const result = sups.map(id => {
    const sup = supplylines.get(id);
    const battlefield1 = battlefields.get(accesspoints.get(sup.accesspoint1Id).battlefield);
    const battlefield2 = battlefields.get(accesspoints.get(sup.accesspoint2Id).battlefield);
    return [id, {
        ...sup,
        posx1: battlefield1.posx,
        posy1: battlefield1.posy,
        posx2: battlefield2.posx,
        posy2: battlefield2.posy
    }];
});

JSON.saveS("./jsondb/supplylinenew.json", result);
