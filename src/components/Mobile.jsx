import React, { useContext } from "react";
import AboutMeText from "./AboutMeText";
import ContactForm from "./ContactForm";
import { Projects } from "./Projects";
import Skills from "./Skills";
import "./Mobile.scss";
import { ThemeContext } from "../context/Theme";

export default function Mobile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mobileContainer ${theme === "dark" ? "dark" : ""}`}>
      <div className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <section className="mobileAbout" id="about">
        <h1 className="firstWords">
          Hi, i'm Michael,<br></br> <span>full-stack web - developer.</span>
        </h1>
        <AboutMeText />
      </section>
      <section className="mobileSkills" id="skills">
        <Skills />
      </section>
      <section className="mobileProjects" id="projects">
        <Projects />
      </section>
      <section className="mobileContact" id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
