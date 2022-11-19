import { DataStore } from "hagcp-utils";
import { multiplier } from "../settings";
import { CanvasRenderingContext2D } from "canvas";

export function drawSupplylines(supplylines: Map<string, Set<string>>, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    context.lineWidth = 1.25 * multiplier;
    for (const [factionId, lines] of supplylines) {
        context.strokeStyle = factionColorLookup(factionId);
        for (const line of lines) {
            const supplyline = dataStore.GetData("supplyline", line);
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
