import "react";
import * as ReactDOM from "react-dom";
import Login from "./login";
import Warmap from "./map/warmap";
import Popups from "./popup/popups";
import { WarmapEventHandler } from "./warmapEventHandler";

const warmapEventHandler = new WarmapEventHandler();

const App = (): JSX.Element => {

  return <>
    <p>Empty app______  </p>
    <Login />
    <Warmap warmapEventHandler={warmapEventHandler} />
    <Popups warmapEventHandler={warmapEventHandler} />
  </>;
};

ReactDOM.render(<App />, document.getElementById("app"));

