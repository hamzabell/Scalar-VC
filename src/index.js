import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { MenuProvider, ImageProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
