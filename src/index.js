import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { MenuProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
