import React from "react";
import { Link } from "react-router-dom";
import backarrow from "../assets/arrow_back.png";

import "./Postit.scss";
export default function Postit({ setPostZoom, postZoom }) {
  const handleZoom = () => {
    setPostZoom(!postZoom);
  };
  const handleZoomOut = (e) => {
    e.preventDefault();
    setPostZoom(false);
    console.log("postzoom", postZoom);
  };
  return (
    <div
      className={`postitContainer ${postZoom ? "postItOnZoom" : ""} `}
      onClick={
        !postZoom
          ? () => {
              handleZoom();
            }
          : null
      }
    >
      <h2>contact me</h2>
      {postZoom && (
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
          <div className="buttonContainer">
            <button className="contactback" onClick={(e) => handleZoomOut(e)}>
              <img src={backarrow} alt="back to Home" />
            </button>
            <button className="contactSubmit" type="submit">
              submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
