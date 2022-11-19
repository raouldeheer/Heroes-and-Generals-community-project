import { DataStore } from "hagcp-utils";
import { multiplier } from "../settings";
import { CanvasRenderingContext2D } from "canvas";

export function drawCapitals(dataStore: DataStore, context: CanvasRenderingContext2D) {
    const capitals = dataStore.ToObject().capital;
    for (const infokey in capitals) {
        if (Reflect.has(capitals, infokey)) {
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
                /* Reflect.get(context, action) */
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
