import { useEffect, useState } from "react";
import { war } from "../map/mapInterfaces";
import { WarmapEventHandler } from "../warmapEventHandler";
import BattlefieldInfoPopup from "./battlefieldInfoPopup";
import WarEndingPopup from "./warEndingPopup";

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
    const [battleId, setBattleId] = useState<string>(null);
    const [newWar, setNewWar] = useState<war>(null);


    useEffect(() => {
        warmapEventHandler.on("BattlefieldInfoPopup_Show", (bid: string) => {
            console.log(`Showing battle: ${bid}`);
            setBattleId(bid);
            setIsVisible(true);
        });
        warmapEventHandler.on("warEnding", (war: war) => {
            console.log("warEnding");
            console.log(war);
            setNewWar(war);
            setIsVisible(true);
        });
    }, []);

    const close = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target == event.currentTarget) setIsVisible(false);
    };

    if (isVisible) {
        if (battleId) {
            return <div style={wrapperStyling} onClick={close}>
                <BattlefieldInfoPopup
                    warmapEventHandler={warmapEventHandler}
                    battleId={battleId} />
            </div>;
        } else if (newWar) {
            return <div style={wrapperStyling} onClick={close}>
                <WarEndingPopup
                    warmapEventHandler={warmapEventHandler}
                    war={newWar} />
            </div>;
        } else {
            return <></>;
        }
    } else {
        return <></>;
    }
};

export default Popups;
