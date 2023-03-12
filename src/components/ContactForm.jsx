import React from "react";
import backarrow from "../assets/arrow_back.png";
import { useWindowSize } from "../hooks/useWindowSize";
import "./ContactForm.scss";
import LinkedIn from "../assets/icons/LinkedIn.png";

import { Link } from "react-router-dom";

export default function ContactForm({ setPostZoom }) {
  const size = useWindowSize();

  const handleZoomOut = (e) => {
    e.preventDefault();
    setPostZoom(false);
  };
  return (
    // using formsubmit.co
    <>
      {size.width < 761 && <h2>Get in touch!</h2>}
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
          {size.width > 761 && (
            <button className="contactback" onClick={(e) => handleZoomOut(e)}>
              <img src={backarrow} alt="back to Home" />
            </button>
          )}
          <Link
            to="https://github.com/micha-lieber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height={size.width < 761 ? "32" : "16"}
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width={size.width < 761 ? "32" : "16"}
              data-view-component="true"
              alt="Link to github.com"
            >
              <path
                fill="black"
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              ></path>
            </svg>
          </Link>
          <Link
            to="https://www.linkedin.com"
            className={`linked`}
            style={
              size.width < 761
                ? { width: "32px", height: "32px" }
                : { width: "16px", height: "16px" }
            }
          >
            <img src={LinkedIn} alt="Link to linkedin.com" />
          </Link>
          <button className="contactSubmit" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
}
