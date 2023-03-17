import React, { useRef, useState } from "react";
import "./Die.scss";

// Inspired by https://codepen.io/vicentemundim/pen/nXNvBw and https://matthewlein.com/experiments/20-sided-die
export default function Die() {
  const [side, setSide] = useState("");
  const [transfo, setTransfo] = useState({
    transform: `translateX(10px) translateY(10px)`,
  });
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);

  return (
    <div class="scene" style={transfo}>
      <div className="dieShadow"></div>
      <div
        class={`die ${side}`}
        onClick={() => {
          setTransX(Math.floor(Math.random() * 100) + "px");
          setTransY(Math.floor(Math.random() * 100) + "px");
          setSide("show-" + Math.floor(Math.random() * 20 + 1));
          setTransfo({
            transform: `translateX(${transX}) translateY(${transY})`,
          });
        }}
      >
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
      </div>
    </div>
  );
}
