import React from "react";
import "./Projects.scss";
import toffeePrev from "../assets/Toffeespypreview.png";

export const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="con">
        <h2 className="projectsheading">Projects</h2>
        <div className="slideshow-container">
          <div className="slide">
            <a
              href="https://spotify-clone1-omega.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src={toffeePrev} alt="Preview for Toffeespy" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
