import { CanvasRenderingContext2D, createCanvas, loadImage } from "canvas";
import fs from "fs";
import { pipeline } from "stream/promises";
import { DataStore } from "./datastore";

export async function toCanvasColored(dataStore: DataStore, dataStore2: DataStore, imageName = "./warmap.png") {
    const colors = ["#f00", "#0f0", "#00f", "#000", "#fff", "#888"];
    const factions: string[] = [];

    const lookup = (id: string) => {
        if (!factions.includes(id)) factions.push(id);
        return colors[factions.indexOf(id)];
    };

    const canvas = await drawToCanvas(dataStore, dataStore2, lookup);

    // Save output to file
    await pipeline(canvas.createJPEGStream(), fs.createWriteStream(imageName));
}

const multiplier = 2;

export async function drawToCanvas(dataStore: DataStore, dataStore2: DataStore, factionColorLookup: (id: string) => string, factions?: Map<string, any>) {
    const canvas = createCanvas(2048 * multiplier, 1440 * multiplier);
    const context = canvas.getContext("2d");

    // Draw background
    const image = await loadImage("../hagcp-assets/images/background.png");
    context.drawImage(image, 0, 0, image.width * multiplier, image.height * multiplier);

    // Draw capitals
    drawCapitals(dataStore, context);

    // Draw supplylines
    drawSupplylines(dataStore2, dataStore, context, factionColorLookup);

    // Draw battlefields
    drawBattlefields(dataStore2, dataStore, context, factionColorLookup);

    if (factions) {
        const templateToFaction = new Map<string, any>();
        Array.from(factions.values()).forEach(e => {
            templateToFaction.set(e.factionTemplateId, e);
        });

        context.beginPath();
        context.fillStyle = "#000";
        context.fillRect(0, 1440 * multiplier - 100 * multiplier, 600 * multiplier, 100 * multiplier);
        context.stroke();

        const drawFaction = (name: string, id: string, y: number) => {
            context.beginPath();
            const faction = templateToFaction.get(id);
            if (!faction) return;
            context.fillStyle = faction.color;
            context.font = "50px sans-serif, segoe-ui-emoji";
            context.fillText(`${name} ${"⭐".repeat(faction.ownedMajorCities.length)}`, 50, 1440 * multiplier - y);
            context.stroke();
        };

        drawFaction("US", "1", 150);
        drawFaction("GE", "2", 100);
        drawFaction("SU", "3", 50);
    }

    return canvas;
}

function drawSupplylines(dataStore2: DataStore, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    context.lineWidth = 1.25 * multiplier;
    const supplylinestatus = dataStore2.ToObject().supplylinestatus;
    for (const infokey in supplylinestatus) {
        if (supplylinestatus.hasOwnProperty(infokey)) {
            const element = supplylinestatus[infokey];
            context.strokeStyle = factionColorLookup(element.factionid);
            const supplyline = dataStore.GetData("supplyline", element.supplylineid);
            const accesspoint1 = dataStore.GetData("accesspoint", supplyline.accesspoint1Id);
            const accesspoint2 = dataStore.GetData("accesspoint", supplyline.accesspoint2Id);
            const battlefield1 = dataStore.GetData("battlefield", accesspoint1.battlefield);
            const battlefield2 = dataStore.GetData("battlefield", accesspoint2.battlefield);

            context.beginPath();
            context.moveTo(battlefield1.posx / (8 / multiplier), battlefield1.posy / (8 / multiplier));
            context.lineTo(battlefield2.posx / (8 / multiplier), battlefield2.posy / (8 / multiplier));
            context.stroke();
        }
    }
}

function drawBattlefields(dataStore2: DataStore, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    const dotSize = 2 * multiplier;
    const battlefieldstatus = dataStore2.ToObject().battlefieldstatus;
    for (const infokey in battlefieldstatus) {
        if (battlefieldstatus.hasOwnProperty(infokey)) {
            const element = battlefieldstatus[infokey];
            context.fillStyle = factionColorLookup(element.factionid);
            const battlefield = dataStore.GetData("battlefield", element.battlefieldid);

            context.beginPath();
            context.arc(
                (battlefield.posx / (8 / multiplier)) - (dotSize / 2),
                (battlefield.posy / (8 / multiplier)) - (dotSize / 2),
                dotSize, 0, 2 * Math.PI);
            context.fill();
        }
    }
}

function drawCapitals(dataStore: DataStore, context: CanvasRenderingContext2D) {
    const capitals = dataStore.ToObject().capital;
    for (const infokey in capitals) {
        if (capitals.hasOwnProperty(infokey)) {
            const element: { battlefieldId: string; } = capitals[infokey];
            const battlefield = dataStore.GetData("battlefield", element.battlefieldId);
            if (!battlefield) continue;

            const numPoints = 5;
            const outerRadius = 10 * multiplier;
            const innerRadius = 3 * multiplier;

            // set centerpoint
            context.lineWidth = 0.625 * multiplier;
            context.strokeStyle = "#000";

            // start the path
            context.beginPath();

            // write a function called drawLine.
            const draw = (radius: number, angle: number, action: string) => {
                // @ts-ignore
                context[action](
                    battlefield.posx / (8 / multiplier) + radius * Math.cos(angle),
                    battlefield.posy / (8 / multiplier) + radius * Math.sin(angle)
                );
            };

            draw(outerRadius, 0, "moveTo");

            const angle = 2 * Math.PI / numPoints;
            for (let i = 0; i <= numPoints; i++) {
                const outerAngle = i * angle;
                const innerAngle = outerAngle + angle / 2;

                draw(outerRadius, outerAngle, "lineTo");
                draw(innerRadius, innerAngle, "lineTo");
            }
            // add the outline
            context.stroke();

            // add the fill
            context.fillStyle = "#888";
            context.fill();
        }
    }
}
