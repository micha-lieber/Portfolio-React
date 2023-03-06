import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./fonts/FrederickatheGreat-Regular.ttf";
import { ThemeProvider } from "./context/Theme";
import { CursorCtxProvider } from "./context/CursorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CursorCtxProvider>
        <App />
      </CursorCtxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
