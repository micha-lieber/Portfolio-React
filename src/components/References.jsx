import React, { useContext } from "react";
import ReferencesText from "./ReferencesText";
import "./References.scss";
import { ThemeContext } from "../context/Theme";

export default function References() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`referencesContainer ${theme === "light" ? "" : "dark"} `}>
      <ReferencesText />
    </div>
  );
}
