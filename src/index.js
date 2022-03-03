import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider, Context } from "./Context";

import App from "./App";

import "./style.css";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
