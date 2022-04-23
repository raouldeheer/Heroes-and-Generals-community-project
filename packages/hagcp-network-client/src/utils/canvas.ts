import { CanvasRenderingContext2D, createCanvas, loadImage } from 'canvas';
import fs from "fs";
import { pipeline } from "stream/promises";
import { DataStore } from '../datastore';

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


export async function drawToCanvas(dataStore: DataStore, dataStore2: DataStore, factionColorLookup: (id: string) => string) {
    const canvas = createCanvas(2048 * 8, 1440 * 8);
    const context = canvas.getContext("2d");

    // Draw background
    const image = await loadImage("./background.png");
    context.drawImage(image, 0, 0, image.width * 8, image.height * 8);

    // Draw capitals
    drawCapitals(dataStore, context);

    // Draw supplylines
    drawSupplylines(dataStore2, dataStore, context, factionColorLookup);

    // Draw battlefields
    drawBattlefields(dataStore2, dataStore, context, factionColorLookup);

    return canvas;
}

function drawSupplylines(dataStore2: DataStore, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    context.lineWidth = 10;
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
            context.moveTo(battlefield1.posx, battlefield1.posy);
            context.lineTo(battlefield2.posx, battlefield2.posy);
            context.stroke();
        }
    }
}

function drawBattlefields(dataStore2: DataStore, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    const dotSize = 16;
    const battlefieldstatus = dataStore2.ToObject().battlefieldstatus;
    for (const infokey in battlefieldstatus) {
        if (battlefieldstatus.hasOwnProperty(infokey)) {
            const element = battlefieldstatus[infokey];
            context.fillStyle = factionColorLookup(element.factionid);
            const battlefield = dataStore.GetData("battlefield", element.battlefieldid);

            context.beginPath();
            context.arc(
                (battlefield.posx) - (dotSize / 2),
                (battlefield.posy) - (dotSize / 2),
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
            const outerRadius = 80;
            const innerRadius = 25;

            // set centerpoint
            context.lineWidth = 5;
            context.strokeStyle = "#000";

            // start the path
            context.beginPath();

            // write a function called drawLine.
            const draw = (radius: number, angle: number, action: string) => {
                // @ts-ignore
                context[action](
                    battlefield.posx + radius * Math.cos(angle),
                    battlefield.posy + radius * Math.sin(angle)
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

