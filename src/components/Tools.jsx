import "./Tools.scss";
import React, { createElement, useContext, useRef, useState } from "react";
import css from "../assets/icons/CSS3_logo_and_wordmark.svg.png";
import html from "../assets/icons/html.png";
import sass from "../assets/icons/sass-1.png";
import react from "../assets/icons/react.png";
import firebase from "../assets/icons/firebase.png";
import bootstrap from "../assets/icons/bt-2.png";
import github from "../assets/icons/gh-1.png";
import javascript from "../assets/icons/js-1.png";
import { CursorCtx } from "../context/CursorContext";

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
      {toolsZoom && (
        <div className="tools">
          <div>
            <img src={css} alt="CSS" title="CSS 3" />
          </div>
          <div>
            <img src={html} alt="HTML" title="HTML 5" />
          </div>
          <div>
            <img src={sass} alt="SASS" title="SASS" />
          </div>
          <div>
            <img src={react} alt="React" title="React" />
          </div>
          <div>
            <img src={firebase} alt="Firebase" title="Google Firebase" />
          </div>
          <div>
            <img src={bootstrap} alt="Bootstrap" title="Bootstrap" />
          </div>
          <div>
            <img src={javascript} alt="Javascript" title="Javascript" />
          </div>
          <div>
            <img src={github} alt="Github" title="Github" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools;
