import "mylas";
const accesspoint = JSON.loadS("./jsondb/accesspoint.json");
const battlefield = JSON.loadS("./jsondb/battlefield.json");
const supplyline = JSON.loadS("./jsondb/supplyline.json");


const battlefields = new Map<string, any>(battlefield as Iterable<readonly [string, any]>);
const supplylines = new Map<string, any>(supplyline as Iterable<readonly [string, any]>);
const accesspoints = new Map<string, any>(accesspoint as Iterable<readonly [string, any]>);

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
    }]
})

JSON.saveS("./jsondb/supplylinenew.json", result);
