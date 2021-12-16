import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./routers/AppRouter";
import { GlobalStyle } from "./styles/StyledComp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
