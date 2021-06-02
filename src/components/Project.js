import React from "react";
import "../style/Project.css";
import "aos/dist/aos.css";
function Project({ img, description, title, link, from }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: "url(" + img + ")" }}
      data-aos={from}
      data-aos-anchor-placement="top-center"
      data-aos-offset="0"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="button">
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Project;
