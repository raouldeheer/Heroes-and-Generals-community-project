import { useEffect, useState } from "react";
import { CommandNodeWarInstance, CommandNodeDefinition } from "../map/mapInterfaces";
import { WarmapEventHandler } from "../warmapEventHandler";

const wrapperStyling: React.CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "20px",
    width: "30vw",
    height: "calc(100vh - 40px)",
    background: "#ffffff",
    zIndex: 10,
    borderLeft: "thin solid black",
    overflowY: "scroll",
};

const buttonStyling: React.CSSProperties = {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: "calc(30vw + 40px)",
    padding: "5px",
    width: "30px",
    height: "30px",
    background: "#ffffff",
    border: "thin solid black",
};

const SideMenu = ({
    warmapEventHandler
}: {
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const [updateId, setUpdateId] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        warmapEventHandler.on("CommandNodeWarInstanceUpdate", () => {
            setUpdateId(updateId + 1);
        });
    }, []);

    const CommandNodeWarInstances: Map<string, CommandNodeWarInstance> = warmapEventHandler.datastore.GetItemStore("CommandNodeWarInstance");

    let items;
    if (CommandNodeWarInstances) {
        items = Array.from(CommandNodeWarInstances.values())
            .map(element => {
                const CommandNodeDefinition: CommandNodeDefinition = warmapEventHandler.datastore.GetData("CommandNodeDefinition", element.commandNodeDefinitionId);
                return CommandNodeDefinition?.ownerPlayerId == warmapEventHandler.user.id
                    && CommandNodeDefinition?.generalCharacterId != "0"
                    && element.factionId == warmapEventHandler.user.factionid
                    ? {
                        CommandNodeDefinition,
                        CommandNodeWarInstance: element,
                    } : null;
            })
            .filter(e => e?.CommandNodeDefinition?.name)
            .sort((a, b) => a.CommandNodeDefinition.abbreviation.localeCompare(b.CommandNodeDefinition.abbreviation))
            .map(element => <tr key={element.CommandNodeWarInstance.id}>
                <td>{element.CommandNodeDefinition.abbreviation}</td>
                <td>{element.CommandNodeWarInstance.morale}</td>
                <td>{element.CommandNodeWarInstance.isDeployed == 0
                    ? "Not deployed"
                    : warmapEventHandler.datastore.GetData("battlefield", element.CommandNodeWarInstance.mapEntityId)?.bftitle
                    || element.CommandNodeWarInstance.mapEntityId}</td>
            </tr>);
    }

    if (isVisible) {
        return <>
            <button style={buttonStyling} onClick={() => { setIsVisible(false); }}>{">"}</button>
            <div style={wrapperStyling}>
                <h1>SideMenu</h1>
                <h2>AT list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Morale</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </>;
    } else {
        return <button style={{ ...buttonStyling, right: 0 }} onClick={() => { setIsVisible(true); }}>{"<"}</button>;
    }
};

export default SideMenu;
