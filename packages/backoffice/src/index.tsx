import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, withWidth } from "@material-ui/core";
import Routes from "./routes";

const Application = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <Routes />
  </StylesProvider>
);

const EnhancedApplication = withWidth()(Application);
ReactDOM.render(<EnhancedApplication />, document.getElementById("root"));
