import "react";
import * as ReactDOM from "react-dom";
import Login from "./login";
import Warmap from "./map/warmap";
import Popups from "./popup/popups";
import SideMenu from "./sideMenu/sideMenu";
import { WarmapEventHandler } from "./warmapEventHandler";

const warmapEventHandler = new WarmapEventHandler();

const App = (): JSX.Element => {

  return <>
    <h1>Early alpha version!!!</h1>
    <Login />
    <Warmap warmapEventHandler={warmapEventHandler} />
    <Popups warmapEventHandler={warmapEventHandler} />
    <SideMenu warmapEventHandler={warmapEventHandler} />
  </>;
};

ReactDOM.render(<App />, document.getElementById("app"));

