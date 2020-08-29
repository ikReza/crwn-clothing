import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { store, persistor } from "./redux/store";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "Open Sans Condensed",
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
