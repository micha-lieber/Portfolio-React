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
import CoffeeStain from "./CoffeeStain";
import References from "./References";
import { Link } from "react-router-dom";

export const Home = () => {
  const [postZoom, setPostZoom] = useState(false);
  const [aboutZoom, setAboutZoom] = useState(false);
  const [toolsZoom, setToolsZoom] = useState(false);

  const size = useWindowSize();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {size.width > 760 && (
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
          <References />
          <CoffeeStain />
          <p className="mention">
            <Link
              to="https://www.freepik.com/free-photo/scratched-gray-wood-textured-background_15665097.htm#page=3&query=table%20background&position=1&from_view=search&track=ais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background by rawpixel.com
            </Link>{" "}
            on Freepik
          </p>
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
