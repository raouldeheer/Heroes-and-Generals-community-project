import { multiplier } from "../settings";
import { CanvasRenderingContext2D } from "canvas";

export function drawStats(factions: Map<string, any> | undefined, context: CanvasRenderingContext2D) {
    if (factions) {
        const templateToFaction = new Map<string, any>();
        Array.from(factions.values()).forEach(e => {
            templateToFaction.set(e.factionTemplateId, e);
        });

        const drawFaction = (name: string, id: string, y: number) => {
            context.beginPath();
            const faction = templateToFaction.get(id);
            if (!faction) return;
            context.fillStyle = faction.color;
            context.font = "50px sans-serif, segoe-ui-emoji";
            const infPoint = faction.factionDeployedCommandPointsInfantry.toString().padStart(5, "_") + " Inf - ";
            const armorPoint = faction.factionDeployedCommandPointsArmor.toString().padStart(5, "_") + " Armor - ";
            const airPoint = faction.factionDeployedCommandPointsAir.toString().padStart(5, "_") + " Air | ";
            const points = infPoint + armorPoint + airPoint;
            context.fillText(`${name} | ${faction.factionPlayerCount.toString().padStart(4, "_")} players - ${points} ${"⭐".repeat(faction.factionVictoryPoints)}`, 50, 1440 * multiplier - y);
            context.stroke();
        };

        drawFaction("US", "1", 150);
        drawFaction("GE", "2", 100);
        drawFaction("SU", "3", 50);
    }
}
