import React, { useEffect, useRef } from "react";
import "../style/Projects.css";
import Project from "./Project";
import amazone from "../img/amazone.png";
import spotify from "../img/spotify.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

function Projects() {
  const wrapper = useRef(null);
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const header = elements.querySelectorAll(".projects__header");
    gsap.fromTo(
      header,
      { x: "-=400", opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        delay: 0.2,
        x: "+=400",
        scrollTrigger: {
          trigger: header,
          start: "top 30%",
        },
        ease: "elastic",
      }
    );
  });
  const projectsTab = [
    {
      img: amazone,
      title: "Amazone Clone",
      description: "Simple clone",
      link: "https://damitab778.github.io/amazone-clone/",
      from: "fade-down-right",
    },
    {
      img: spotify,
      title: "Spotify Clone",
      description: "Simple clone",
      link: "https://damitab778.github.io/Spotify-clone/",
      from: "fade-up-left",
    },
  ];

  const card = projectsTab.map((curr, id) => {
    return (
      <Project
        key={id}
        img={curr.img}
        title={curr.title}
        description={curr.description}
        link={curr.link}
        from={curr.from}
      />
    );
  });
  return (
    <div className="projects" id="projects" ref={wrapper}>
      <div className="projects__wrapper">
        <h1 className="projects__header">Projects</h1>

        <div className="card__wrapper">{card}</div>
      </div>
    </div>
  );
}

export default Projects;
