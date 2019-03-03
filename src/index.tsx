import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import AppState from "./store";
import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    /*need to be replaced as an real dsn*/
    dsn: process.env.SENTRY_DSN
  });

  try {
    throw new Error("Caught");
  } catch (err) {
    Sentry.captureException(err);
  }
}

const appState = new AppState();

ReactDOM.render(
  <App content={"world"} appState={appState} />,
  document.getElementById("root")
);
