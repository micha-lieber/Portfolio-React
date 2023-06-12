import React, { useContext } from "react";
import "./ReferencesText.scss";
import { ThemeContext } from "../context/Theme";

export default function ReferencesText() {
  const references = [
    {
      id: "ref1",
      person: "ChatGPT",
      testimonial:
        "[Colleague's name] is a valuable asset to any team. They bring a positive attitude, strong work ethic, and excellent collaboration skills to every project.",
    },
    { id: "ref2", person: "somebody else", testimonial: "Can do work." },
    { id: "ref3", person: "My Plants", testimonial: "Waters us accordingly." },
  ];
  return (
    <div className={`refTextCon `}>
      {references.map((ref) => (
        <div key={ref.id}>
          <h4>{ref.person} says:</h4>
          <p>{ref.testimonial}</p>
        </div>
      ))}
    </div>
  );
}
