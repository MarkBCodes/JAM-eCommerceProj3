import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { InventoryProvider } from "./Context_api";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <InventoryProvider>
    <Router>
      <App />
    </Router>
  </InventoryProvider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
