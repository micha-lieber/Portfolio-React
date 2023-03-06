import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import "./Lamp.scss";

function Lamp() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="lampContainer">
      <div className={`lampshade`}>Light/dark mode</div>
      <div className="shine">Lamp</div>
      {/* {theme === "light" && <div */}
      <div
        className={`lampButton ${theme === "dark" ? "clicked" : ""}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></div>
    </div>
  );
}

export default Lamp;
