const electron = window.require("electron");
import { useEffect, useState } from "react";

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

const BattlefieldInfoPopup = (): JSX.Element => {

    useEffect(() => {
        // effect
    }, []);

    return <div style={wrapperStyling}>
        <p>Hello popup!</p>
    </div>;
};

export default BattlefieldInfoPopup;
