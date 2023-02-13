import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Projects } from "./Projects";
import "./Home.scss";
import Postit from "./Postit";
import Lamp from "./Lamp";
import { ThemeContext } from "../context/Theme";
import Tools from "./Tools";

export const Home = () => {
  const [postZoom, setPostZoom] = useState(false);
  const [anima, setAnima] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  console.log(anima);
  const clickHandler = (e) => {
    setAnima(!anima);
    setTimeout(() => navigate("/projects"), 1000);
  };

  return (
    <div
      className={`homeContainer ${anima ? "moveAnim" : ""} ${
        postZoom ? "zoomOnPost" : ""
      } ${theme === "dark" ? "dark" : ""}`}
    >
      <h1>Hi, i'm Michael</h1>
      <button
        // to="/projects"
        onClick={(e) => clickHandler(e)}
      >
        to Projects
      </button>
      <Lamp />
      <Postit setPostZoom={setPostZoom} postZoom={postZoom} />
      <Tools />
    </div>
  );
};
