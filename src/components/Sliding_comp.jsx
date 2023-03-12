import React, { useState } from "react";
import "./Sliding_comp.scss";

export function SlidingComp() {
  const [translation, setTranslation] = useState(0);

  const slideClickHandler = (n) => {
    if (n === 100 && translation === 0) {
      setTranslation(-200);
    } else if (n === -100 && translation === -200) {
      setTranslation(0);
    } else {
      setTranslation((prevTranslation) => prevTranslation + n);
    }
    console.log("previous slide");
  };

  return (
    <div className="slideshowContainer">
      <div className="slideContainer">
        <div
          className="slide slideOne"
          style={{ transform: `translateY(${translation}%)` }}
        ></div>
        <div
          className="slide slideTwo"
          style={{ transform: `translateY(${translation}%)` }}
        ></div>
        <div
          className="slide slideThree"
          style={{ transform: `translateY(${translation}%)` }}
        ></div>
      </div>
      <div
        className="sliderBtn prevSlide"
        onClick={(e) => slideClickHandler(+100)}
      >
        &#x227A;
      </div>
      <div
        className="sliderBtn nextSlide"
        onClick={(e) => slideClickHandler(-100)}
      >
        &#x227B;
      </div>
      <div className="dots">
        <div className="dot dotOne"></div>
        <div className="dot dotTwo"></div>
        <div className="dot dotThree"></div>
      </div>
    </div>
  );
}
