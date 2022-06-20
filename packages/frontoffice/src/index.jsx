// render
import React from "react";
import { render } from "react-dom";

// style
import { CssBaseline } from "@material-ui/core";
import { withWidth } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

// routing
import Routes from "./routes";

const Application = ({ width }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <Routes />
  </StylesProvider>
);

const EnhancedApplication = withWidth()(Application);

const root = document.getElementById("root");

if (root !== null) render(<EnhancedApplication />, root);

//serviceWorker.unregister();
