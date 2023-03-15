import React, { useState } from "react";
import { Link } from "react-router-dom";
import github from "../assets/icons/gh-1.png";

import "./Sliding_comp.scss";

export function SlidingComp({ activation }) {
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
        >
          <div className="slideContent">
            <h3>Toffeespy</h3>
            <p>A simplified Spotify clone, realized with:</p>
            <ul>
              <li>Deezer API</li> <li>React</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>HTML5</li>
              <li>Firebase</li>
            </ul>
            <div className="linksCon">
              <h3>Take a look</h3>
              <div className="slideLinks">
                <Link
                  to="https://github.com/micha-lieber/Portfolio-React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Link to github" />
                </Link>
                <p>or</p>
                <Link
                  to="https://spotify-clone1-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF"
                    viewBox="0 0 284 65"
                  >
                    <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide slideTwo"
          style={{ transform: `translateY(${translation}%)` }}
        >
          {" "}
          <div className="slideContent">
            <h3>Article Manager</h3>
            <p>
              An Article Manager with contact form and the option to add
              articles. Created with:
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>SCSS</li>
              <li>HTML5</li>
            </ul>
            <div className="linksCon">
              <h3>Take a look</h3>
              <div className="slideLinks">
                <Link
                  to="https://github.com/micha-lieber/articleManager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Link to github" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide slideThree"
          style={{ transform: `translateY(${translation}%)` }}
        >
          {" "}
          <div className="slideContent">
            <h3>Upcoming project</h3>
            <p>
              You'll find something here using some kind of backend
              implementation like express.js, MongoDB, Mongoose and the like.
            </p>
            <ul>
              <li></li>
            </ul>
            <div className="linksCon">
              <h3>Take a look</h3>
              <div className="slideLinks">
                <Link
                  to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Link to github" />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
      <div className={`dots ${activation ? "invis" : ""}`}>
        <div className="dot dotOne"></div>
        <div className="dot dotTwo"></div>
        <div className="dot dotThree"></div>
      </div>
    </div>
  );
}
