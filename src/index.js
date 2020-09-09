import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reducer, { INITIAL_STATE } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={INITIAL_STATE}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
