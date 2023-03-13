import React from "react";

export default function ReferencesText() {
  const references = [
    {
      person: "ChatGPT",
      testimonial:
        "[Colleague's name] is a valuable asset to any team. They bring a positive attitude, strong work ethic, and excellent collaboration skills to every project. I highly recommend [colleague's name] and believe they would be a great addition to any organization.",
    },
  ];
  return (
    <div>
      {references.map((ref) => (
        <div>
          <h4>{ref.person} says:</h4>
          <p>{ref.testimonial}</p>
        </div>
      ))}
    </div>
  );
}
