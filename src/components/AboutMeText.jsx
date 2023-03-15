import React from "react";
import { Link } from "react-router-dom";

export default function AboutMeText() {
  return (
    <div>
      <p>
        A passion for all things tech has always been part of my life, leading
        to people around me asking for advice and me self-learning about ubuntu,
        encryption and hardware. To deepen my understanding of technology and
        software, I started studying web development at the
        <Link
          to="https://digitalcareerinstitute.org/"
          title="Digital Career Institute"
          class="textLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          DCI
        </Link>{" "}
        in June '22.
      </p>
      <br></br>
      <p>
        In this course I realized, that I want to create accessable, secure and
        playful websites to ensure a pleasant user-experience for a wide range
        of people, working from my base in Berlin.
      </p>
    </div>
  );
}
