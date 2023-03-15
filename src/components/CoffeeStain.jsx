import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import "./Coffeestain.scss";

export default function CoffeeStain() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`coffeestain ${theme === "dark" ? "dark" : ""}`}>
      <div className="outerRing"></div>
      <div className="innerRing"></div>
      <div className="inBetweenRing"></div>
    </div>
  );
}
