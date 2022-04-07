const electron = window.require("electron");
import { useEffect, useState } from "react";
import { battleBattlefieldPair } from "../map/battlefieldPoint";
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

const BattlefieldInfoPopup = ({
    warmapEventHandler,
    BattlefieldInfoPopupData,
}: {
    warmapEventHandler: WarmapEventHandler;
    BattlefieldInfoPopupData: battleBattlefieldPair;
}): JSX.Element => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!data) {
            getData();
        }
    }, []);

    const getData = async () => {
        const result = await electron.ipcRenderer.invoke("GetMissionDetailsRequest", { missionId: 0, battleId: Long.fromString(BattlefieldInfoPopupData.battle.id) });
        console.log(result);
        setData(result);
    };

    return <div style={wrapperStyling}>
        {data ? <div>
            <h1>Battle information</h1>
            <h2></h2>
        </div> : null}
    </div>;
};

export default BattlefieldInfoPopup;
