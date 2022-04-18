/* eslint-disable no-case-declarations */
const electron = window.require("electron");
import { useEffect, useState } from "react";
import { GetMissionDetailsResponse, Armyresourcecategory } from "../map/mapInterfaces";
import { WarmapEventHandler } from "../warmapEventHandler";
import Long from "long";
import armyresourcecategory from "../data/armyresourcecategory.json";
import { MissionStatus } from "hag-network-client/dist/protolinking/classKeys";

const armyresourcecategorys = new Map<string, Armyresourcecategory>();
armyresourcecategory.forEach(element => {
    armyresourcecategorys.set(element.id, element);
});

const wrapperStyling: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#ffffff",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    zIndex: 7,
    borderRadius: "20px",
};

const containerStyling: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    gap: "0px 0px",
    gridTemplateAreas: `
      "Resources Players"
    `,
};

const DivStyling: React.CSSProperties = {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "5px",
    paddingBottom: "5px",
};

const BattlefieldInfoPopup = ({
    warmapEventHandler,
    battleId,
}: {
    warmapEventHandler: WarmapEventHandler;
    battleId: string;
}): JSX.Element => {
    const [data, setData] = useState<GetMissionDetailsResponse>(null);

    const getData = async () => {
        const result = await electron.ipcRenderer.invoke("GetMissionDetailsRequest", { missionId: 0, battleId: Long.fromString(battleId) });
        console.log(result);
        setData(result);
    };

    useEffect(() => {
        if (!data) {
            getData();
        }
    }, []);

    let titleContent = null;
    let resourcesContent = null;
    let playersContent = null;
    if (data) {
        switch (data.response) {
            case 43:
                titleContent = <h2>Battle not found...</h2>;
                break;
            case 44:
                titleContent = <h2>Battle starting...</h2>;
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

                resourcesContent = <>
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
                                return <tr key={id}>
                                    <td>{element.name}</td>
                                    <td>{totalResources?.get(usFactionId)?.get(id) || "0"}</td>
                                    <td>{totalResources?.get(geFactionId)?.get(id) || "0"}</td>
                                    <td>{totalResources?.get(suFactionId)?.get(id) || "0"}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </>;
                const status: MissionStatus = data?.info?.status;
                if (status) {
                    switch (status) {
                        case MissionStatus.MissionOpen:
                            titleContent = <h2>Battle is open.</h2>;
                            break;
                        case MissionStatus.MissionRunning:
                            titleContent = <h2>Battle is running.</h2>;
                            break;
                        case MissionStatus.MissionEnding:
                            titleContent = <h2>Battle is ending.</h2>;
                            break;
                        default:
                            titleContent = <h2>Unknown status...</h2>;
                            break;
                    }
                }

                playersContent = <>
                    <h2 style={{ marginBottom: 0 }}>Players</h2>
                    <div style={{ display: "flex" }}>
                        {data?.factions?.map(value => <div style={{ minWidth: "50px" }} key={value.factionId}>
                            <h3 style={{ marginBottom: 0 }}>{warmapEventHandler.GetFactionShort(value.factionId)} {value?.players?.length || 0}</h3>
                            {value?.players?.map(player => <p style={{ marginBottom: 0, marginTop: 0 }} key={player.gamerTag}>{player.gamerTag}</p>)}
                        </div>)}
                    </div>
                </>;
                break;
        }
    }

    return <div style={wrapperStyling}>
        <div style={DivStyling}>
            <h1>Battle information</h1>
            {titleContent}
        </div>
        <div style={containerStyling}>
            {resourcesContent ? <div style={{ ...DivStyling, gridArea: "Resources" }}>
                {resourcesContent}
            </div> : null}
            {playersContent ? <div style={{ ...DivStyling, gridArea: "Players" }}>
                {playersContent}
            </div> : null}
        </div>
    </div>;
};

export default BattlefieldInfoPopup;
