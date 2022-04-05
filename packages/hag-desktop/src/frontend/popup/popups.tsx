const electron = window.require("electron");
import { MouseEventHandler, useEffect, useState } from "react";
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

const Popups = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        // effect
    }, []);

    const close = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        console.log(event.target);
        console.log(event.currentTarget);
        
        if (event.target == event.currentTarget) {
            console.log("true");
            
            setIsVisible(false);
        } else {
            console.log("false")
        }
    };

    if (isVisible) {
        return <div style={wrapperStyling} onClick={close}>
            <BattlefieldInfoPopup />
        </div>;
    } else {
        return <></>;
    }
};

export default Popups;
