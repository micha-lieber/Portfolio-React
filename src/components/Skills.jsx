import React from "react";

import css from "../assets/icons/CSS3.png";
import html from "../assets/icons/html5.svg";
import sass from "../assets/icons/Sass_Logo_Color.svg";
import react from "../assets/icons/react.png";
import firebase from "../assets/icons/firebase.svg";
import bootstrap from "../assets/icons/bt-2.png";
import github from "../assets/icons/gh-1.png";
import javascript from "../assets/icons/js-1.png";
import tailwind from "../assets/icons/Tailwind_CSS.svg";
import mongoDB from "../assets/icons/MongoDB_Logo.svg";
import express from "../assets/icons/Expressjs.png";

import "./Skills.scss";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Skills() {
  const size = useWindowSize();
  return (
    <>
      {size.width < 761 && <h2 className="skillsHeading">Skills</h2>}
      <div className="tools">
        <div>
          <img src={css} alt="CSS" title="CSS 3" className="css" />
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
        <div>
          <img src={tailwind} alt="TailwindCSS" title="TailwindCSS" />
        </div>
        <div>
          <img src={mongoDB} alt="mongoDB" title="mongoDB" />
        </div>
        <div>
          <img src={express} alt="Express.js" title="Express.js" />
        </div>
      </div>
    </>
  );
}
