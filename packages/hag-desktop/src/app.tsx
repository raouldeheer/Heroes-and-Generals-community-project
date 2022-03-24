import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Warmap from "./map/warmap";

const App = (): JSX.Element => (
  <>
    <p>Empty app______  </p>
    <Warmap />
  </>
);

function render() {
  ReactDOM.render(<App />, document.getElementById("app"));
}

render();