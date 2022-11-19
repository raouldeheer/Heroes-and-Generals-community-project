import { DataStore } from "hagcp-utils";
import { multiplier } from "../settings";
import { CanvasRenderingContext2D } from "canvas";

export function drawBattlefields(battlefields: Map<string, Set<string>>, dataStore: DataStore, context: CanvasRenderingContext2D, factionColorLookup: (id: string) => string) {
    const dotSize = 2 * multiplier;
    for (const [factionId, dots] of battlefields) {
        context.fillStyle = factionColorLookup(factionId);
        for (const dot of dots) {
            const battlefield = dataStore.GetData("battlefield", dot);

            context.beginPath();
            context.arc(
                (battlefield.posx / (8 / multiplier)) - (dotSize / 2),
                (battlefield.posy / (8 / multiplier)) - (dotSize / 2),
                dotSize, 0, 2 * Math.PI);
            context.fill();
        }
    }
}
