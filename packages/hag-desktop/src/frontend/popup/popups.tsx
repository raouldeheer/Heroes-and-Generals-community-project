const electron = window.require("electron");
import { MouseEventHandler, useEffect, useState } from "react";
import { battleBattlefieldPair, Battlefield } from "../map/battlefieldPoint";
import { WarmapEventHandler } from "../warmapEventHandler";
import BattlefieldInfoPopup from "./battlefieldInfoPopup";

const wrapperStyling: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: "rgb(191 191 191 / 50%)",
    zIndex: 10,
};

const Popups = ({
    warmapEventHandler
}: {
    warmapEventHandler: WarmapEventHandler;
}): JSX.Element => {
    const [isVisible, setIsVisible] = useState(true);
    const [BattlefieldInfoPopupData, setBattlefieldInfoPopupData] = useState<battleBattlefieldPair>(null);


    useEffect(() => {
        warmapEventHandler.on("BattlefieldInfoPopup_Show", (pair: battleBattlefieldPair) => {
            console.log(`Showing battlefield: ${pair.battlefield.id}`);
            console.log(`Showing battle: ${pair.battle.id}`);
            setBattlefieldInfoPopupData(pair);
            setIsVisible(true);
        });
    }, []);

    const close = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target == event.currentTarget) {
            setIsVisible(false);
        }
    };

    if (isVisible) {
        if (BattlefieldInfoPopupData) {
            return <div style={wrapperStyling} onClick={close}>
                <BattlefieldInfoPopup warmapEventHandler={warmapEventHandler} BattlefieldInfoPopupData={BattlefieldInfoPopupData}/>
            </div>;
        } else {
            return <></>;
        }
    } else {
        return <></>;
    }
};

export default Popups;
