import React, { useContext } from "react";
import { useState } from "react";

import { Projects } from "./Projects";
import "./Home.scss";
import Postit from "./Postit";
import Lamp from "./Lamp";
import { ThemeContext } from "../context/Theme";
import Tools from "./Tools";
import AboutMe from "./AboutMe";
import { useWindowSize } from "../hooks/useWindowSize";
import Mobile from "./Mobile";

export const Home = () => {
  const [postZoom, setPostZoom] = useState(false);
  const [aboutZoom, setAboutZoom] = useState(false);
  const [toolsZoom, setToolsZoom] = useState(false);

  const size = useWindowSize();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {size.width > 761 && (
        <div
          className={`homeContainer ${postZoom ? "zoomOnPost" : ""} ${
            theme === "dark" ? "dark" : ""
          } ${aboutZoom ? "zoomOnAbout" : ""}${toolsZoom ? "zoomOnTools" : ""}`}
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
      )}
      {size.width < 761 && (
        <div className="mobileHome">
          <Mobile />
        </div>
      )}
    </>
  );
};
