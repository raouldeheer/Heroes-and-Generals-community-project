import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './login';
import Warmap from "./map/warmap";

const App = (): JSX.Element => {

  return <>
    <p>Empty app______  </p>
    {/* <Login /> */}
    <Warmap />
  </>;
};

ReactDOM.render(<App />, document.getElementById("app"));

