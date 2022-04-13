/* eslint-disable no-case-declarations */
const electron = window.require("electron");
import { useEffect, useState } from "react";
import { GetMissionDetailsResponse, Armyresourcecategory } from "../map/mapInterfaces";
import { WarmapEventHandler } from "../warmapEventHandler";
import Long from "long";
import armyresourcecategory from "hag-network-client/jsondb/armyresourcecategory.json";

const armyresourcecategorys = new Map<string, Armyresourcecategory>();
armyresourcecategory.forEach(element => {
    armyresourcecategorys.set(element.id, element);
});

const wrapperStyling: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50vw",
    minHeight: "20vh",
    background: "#ffffff",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    zIndex: 10,
};

const BattlefieldInfoPopup = ({
    warmapEventHandler,
    battleId,
}: {
    warmapEventHandler: WarmapEventHandler;
    battleId: string;
}): JSX.Element => {
    const [data, setData] = useState<GetMissionDetailsResponse>(null);

    useEffect(() => {
        if (!data) {
            getData();
        }
    }, []);

    const getData = async () => {
        const result = await electron.ipcRenderer.invoke("GetMissionDetailsRequest", { missionId: 0, battleId: Long.fromString(battleId) });
        console.log(result);
        setData(result);
    };

    let displayData = null;
    if (data) {
        switch (data.response) {
            case 43:
                displayData = <div>
                    <h1>Battle information</h1>
                    <h2>Battle not found...</h2>
                </div>;
                break;
            case 44:
                displayData = <div>
                    <h1>Battle information</h1>
                    <h2>Battle starting...</h2>
                </div>;
                break;
            default:
                const totalResources = data.armyResources.reduce<Map<number, Map<number, number>>>((prev, curr) => {
                    const factionId = Number(curr.factionId);
                    const CategoryId = Number(curr.armyResourceCategoryId);

                    if (!prev.has(factionId)) prev.set(factionId, new Map);
                    const faction = prev.get(factionId);
                    const value = faction.get(CategoryId);

                    faction.set(CategoryId, value ? value + curr.count : curr.count);
                    prev.set(factionId, faction);
                    return prev;
                }, new Map);
                const usFactionId = Number(warmapEventHandler.lookupFactionsByTemplateId.get("1").factionId);
                const geFactionId = Number(warmapEventHandler.lookupFactionsByTemplateId.get("2").factionId);
                const suFactionId = Number(warmapEventHandler.lookupFactionsByTemplateId.get("3").factionId);
                console.log(totalResources);

                displayData = <div>
                    <h1>Battle information</h1>
                    <h2>Resources</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>US</th>
                                <th>GE</th>
                                <th>SU</th>
                            </tr>
                        </thead>
                        <tbody>
                            {armyresourcecategory.map(element => {
                                const id = Number(element.id);
                                return <tr>
                                    <td>{element.name}</td>
                                    <td>{totalResources?.get(usFactionId)?.get(id) || "0"}</td>
                                    <td>{totalResources?.get(geFactionId)?.get(id) || "0"}</td>
                                    <td>{totalResources?.get(suFactionId)?.get(id) || "0"}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>;
                break;
        }
    }



    return <div style={wrapperStyling}>{displayData}</div>;
};

export default BattlefieldInfoPopup;
