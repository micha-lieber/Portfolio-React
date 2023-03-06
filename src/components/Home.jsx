import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Projects } from "./Projects";
import "./Home.scss";
import Postit from "./Postit";
import Lamp from "./Lamp";
import { ThemeContext } from "../context/Theme";
import Tools from "./Tools";
import AboutMe from "./AboutMe";

export const Home = () => {
  const [postZoom, setPostZoom] = useState(false);
  const [aboutZoom, setAboutZoom] = useState(false);
  const [toolsZoom, setToolsZoom] = useState(false);

  const [anima, setAnima] = useState(false);
  // const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  console.log(anima);
  // const clickHandler = (e) => {
  //   setAnima(!anima);
  //   setTimeout(() => navigate("/projects"), 1000);
  // };

  return (
    <div
      className={`homeContainer ${anima ? "moveAnim" : ""} ${
        postZoom ? "zoomOnPost" : ""
      } ${theme === "dark" ? "dark" : ""} ${aboutZoom ? "zoomOnAbout" : ""}${
        toolsZoom ? "zoomOnTools" : ""
      }`}
    >
      <h1 className="firstWords">
        Hi, i'm Michael,<br></br> <span>full-stack web developer.</span>
      </h1>
      <AboutMe setAboutZoom={setAboutZoom} aboutZoom={aboutZoom} />
      <Projects />
      <Lamp />
      <Postit setPostZoom={setPostZoom} postZoom={postZoom} />
      <Tools setToolsZoom={setToolsZoom} toolsZoom={toolsZoom} />
    </div>
  );
};
