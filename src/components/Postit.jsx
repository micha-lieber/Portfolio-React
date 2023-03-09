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
        // using formsubmit.co
        <form
          action="https://formsubmit.co/2e3e0fd2cde3c89e22647ab5b2264617"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            placeholder="Your Message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
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
