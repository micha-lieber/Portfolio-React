import React, { useState } from "react";
import "./Projects.scss";
import { SlidingComp } from "./Sliding_comp";

export const Projects = () => {
  const [activation, setActivation] = useState(false);

  return (
    <div className={`projectsContainer ${activation ? "turnOff" : ""}`}>
      <div className={`con ${activation ? "turnScreenOff" : ""}`}>
        <h2 className="projectsheading">Projects</h2>
        <SlidingComp activation={activation} />
      </div>
      <div className="button" onClick={() => setActivation(!activation)}>
        <div className="strich"></div>
      </div>
    </div>
  );
};
