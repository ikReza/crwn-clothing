import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "Open Sans Condensed",
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
