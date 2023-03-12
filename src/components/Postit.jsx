import React from "react";
import ContactForm from "./ContactForm";

import "./Postit.scss";
export default function Postit({ setPostZoom, postZoom }) {
  const handleZoom = () => {
    setPostZoom(!postZoom);
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
      {postZoom && <ContactForm setPostZoom={setPostZoom} />}
    </div>
  );
}
