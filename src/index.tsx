import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import AppState from "./store";

const appState = new AppState();

ReactDOM.render(
  <App content={"world"} appState={appState} />,
  document.getElementById("root")
);
