import "react";
import * as ReactDOM from "react-dom";
import Login from "./login";
import Warmap from "./map/warmap";
import Popups from "./popup/popups";

const App = (): JSX.Element => {

  return <>
    <p>Empty app______  </p>
    <Login />
    <Warmap />
    <Popups />
  </>;
};

ReactDOM.render(<App />, document.getElementById("app"));

