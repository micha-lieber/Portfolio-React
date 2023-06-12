import React, { useState } from "react";
import "./Die.scss";

// Inspired by https://codepen.io/vicentemundim/pen/nXNvBw and https://matthewlein.com/experiments/20-sided-die
export default function Die() {
  const [side, setSide] = useState("");

  return (
    <div class="scene">
      <div className="dieShadow"></div>
      <div
        class={`die ${side}`}
        onClick={() => {
          setSide("show-" + Math.floor(Math.random() * 20 + 1));
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
