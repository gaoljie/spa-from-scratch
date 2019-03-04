import React from "react";
import { render } from "react-dom";
import Sentry from "@sentry/browser";
import App from "./App";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    /* need to be replaced as an real dsn */
    dsn: process.env.SENTRY_DSN
  });

  try {
    throw new Error("Caught");
  } catch (err) {
    Sentry.captureException(err);
  }
}

render(<App />, document.getElementById("root"));
