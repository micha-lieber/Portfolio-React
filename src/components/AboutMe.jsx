import React from "react";
import "./AboutMe.scss";
import arrow from "../assets/arrow.png";

function AboutMe({ aboutZoom, setAboutZoom }) {
  const handleZoom = () => {
    setAboutZoom(true);
  };
  return (
    <div className="aboutMeContainer" onClick={() => setAboutZoom(!aboutZoom)}>
      <h2>about me</h2>
      {/* "Exposure to a broad spectrum of challenging international working
      environments and working cultures" */}
      {aboutZoom && (
        <>
          <p>
            My goal is to create accessable, secure and playful websites to
            ensure a pleasant user-experience for a wide range of people.
          </p>
          <p>
            I studied social work a while ago, but realized after 10 years of
            struggling, that my talents lie in IT and tech. So i decided to
            pursue that career.
          </p>
          <p>My current base is Berlin</p>
        </>
      )}
    </div>
  );
}

export default AboutMe;
