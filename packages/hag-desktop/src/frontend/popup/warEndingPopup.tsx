const electron = window.require("electron");
import { useEffect, useState } from "react";
import { war } from "../map/mapInterfaces";
import { WarmapEventHandler } from "../warmapEventHandler";
import Long from "long";

const wrapperStyling: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20vw",
    height: "20vh",
    background: "#ffffff",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    zIndex: 10,
};

const WarEndingPopup = ({
    warmapEventHandler,
    war,
}: {
    warmapEventHandler: WarmapEventHandler;
    war: war;
}): JSX.Element => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!data) {
            getData();
        }
    }, []);

    const getData = async () => {
        const result = await electron.ipcRenderer
            .invoke("query_war_catalogue_request", {
                includeWarId: Long.fromString(war.sequelwarid)
            });
        console.log(result);
        setData(result); // TODO Make this popup work with everything.
    };

    function joinNext() {
        electron.ipcRenderer.send("join_war_request", {
            warid: Long.fromString(war.sequelwarid),
            factionid: Long.ZERO,
            playedFirstBlood: 0,
        });
    }

    return <div style={wrapperStyling}>
        {data ? <div>
            <h1>War has ended!</h1>
            <p>Please join the new war and restart the program.</p>
            <button onClick={joinNext}>Join next</button>
        </div> : null}
    </div>;
};

export default WarEndingPopup;
