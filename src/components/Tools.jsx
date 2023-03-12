import "./Tools.scss";
import React, { useContext, useState } from "react";

import { CursorCtx } from "../context/CursorContext";
import Skills from "./Skills";

const Confetto = ({ pos }) => {
  const { cursorPos } = useContext(CursorCtx);

  const mousehandler = (e) => {
    // get the position of the Confetti relative to viewport
    let posi = e.target.getBoundingClientRect();
    let left = posi.left;
    let bottom = posi.bottom;
    let movement = 30;

    let top = e.target.style.top;
    let leftDistance = e.target.style.left;

    if (cursorPos.x - left <= 5 && bottom - cursorPos.y <= 5) {
      e.target.style.top = Number(top.split("px")[0]) - movement + "px";
      e.target.style.left =
        Number(leftDistance.split("px")[0]) + movement + "px";
    } else if (cursorPos.x - left > 5 && bottom - cursorPos.y <= 5) {
      e.target.style.top = Number(top.split("px")[0]) - movement + "px";
      e.target.style.left =
        Number(leftDistance.split("px")[0]) - movement + "px";
    } else if (cursorPos.x - left <= 5 && bottom - cursorPos.y > 5) {
      e.target.style.top = Number(top.split("px")[0]) + movement + "px";
      e.target.style.left =
        Number(leftDistance.split("px")[0]) + movement + "px";
    } else if (cursorPos.x - left > 5 && bottom - cursorPos.y > 5) {
      e.target.style.top = Number(top.split("px")[0]) + movement + "px";
      e.target.style.left =
        Number(leftDistance.split("px")[0]) - movement + "px";
    }

    console.log(leftDistance.split("px")[0] + 1);
    console.log(posi);
  };

  return (
    <div
      className="confetti"
      style={pos}
      onMouseOver={(e) => {
        mousehandler(e);
      }}
    ></div>
  );
};

function Tools({ toolsZoom, setToolsZoom }) {
  const [lochen, setLochen] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const confettiHandler = () => {
    let color = Math.floor(Math.random() * 255);
    let pos = {
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      background: `rgb(${color}, ${color}, ${color})`,
    };
    setConfetti(confetti.concat(<Confetto key={confetti.length} pos={pos} />));
  };

  return (
    <div className="toolsContainer">
      <div className="tacker" onClick={() => setToolsZoom(!toolsZoom)}></div>
      <div
        className={`locher ${lochen ? "lochen" : ""}`}
        onMouseDown={() => {
          setLochen(true);
          confettiHandler();
        }}
        onMouseUp={() => {
          setLochen(false);
          confettiHandler();
        }}
      >
        <h2>skills</h2>
        <div className="lochImLocher"></div>
      </div>
      <div className="confettiContainer">{confetti}</div>
      {toolsZoom && <Skills />}
    </div>
  );
}

export default Tools;
