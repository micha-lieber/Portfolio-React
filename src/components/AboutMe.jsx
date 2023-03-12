import React from "react";
import "./AboutMe.scss";
import arrow from "../assets/arrow.png";
import AboutMeText from "./AboutMeText";

function AboutMe({ aboutZoom, setAboutZoom }) {
  const handleZoom = () => {
    setAboutZoom(true);
  };
  return (
    <div className="aboutMeContainer" onClick={() => setAboutZoom(!aboutZoom)}>
      <h2>about me</h2>
      {/* "Exposure to a broad spectrum of challenging international working
      environments and working cultures" */}
      {aboutZoom && <AboutMeText />}
    </div>
  );
}

export default AboutMe;
