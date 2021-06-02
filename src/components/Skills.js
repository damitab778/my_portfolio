import React, { useEffect, useRef } from "react";
import "../style/Skills.css";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiRedux,
  SiNodeDotJs,
  SiCss3,
  SiSass,
  SiHtml5,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
function Skills() {
  useEffect(() => {
    const [skills, elements] = wrapper.current.children;
    const barSpan = elements.querySelectorAll(".bar__span");
    const header = skills.querySelector(".skills__header");
    gsap.fromTo(
      header,
      { x: "-=400", opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        delay: 0.2,
        x: "+=400",
        scrollTrigger: {
          trigger: barSpan,
          start: "top 50%",
        },
        ease: "elastic",
      }
    );

    barSpan.forEach((curr) => {
      gsap.fromTo(
        curr,
        { x: "-=1200", backgroundColor: "white" },
        {
          duration: 2,
          delay: 0.1,
          x: "+=1200",
          backgroundColor: "#36BEC3",
          scrollTrigger: {
            trigger: barSpan,
            start: "top 50%",
          },
          ease: "stepped",
        }
      );
    });
  }, []);
  let skillTab = [
    {
      name: "JavaScript",
      lvl: "90%",
      icon: <SiJavascript />,
      color: "#EFD81D",
    },
    { name: "React.js", lvl: "80%", icon: <SiReact />, color: "white" },
    {
      name: "TypeScript",
      lvl: "65%",
      icon: <SiTypescript />,
      color: "#2F74C0",
    },
    { name: "Redux", lvl: "80%", icon: <SiRedux />, color: "#7248B6" },
    { name: "Node.js", lvl: "55%", icon: <SiNodeDotJs />, color: "#7FC728" },
    { name: "CSS", lvl: "90%", icon: <SiCss3 />, color: "#254BDD" },
    { name: "SASS", lvl: "65%", icon: <SiSass />, color: "#C76494" },
    { name: "HTML5", lvl: "70%", icon: <SiHtml5 />, color: "#E44D26" },
    { name: "Git", lvl: "50%", icon: <SiGithub />, color: "#E94E31" },
    { name: "SQL", lvl: "70%", icon: <SiMysql />, color: "#005E86" },
  ];

  const wrapper = useRef(null);

  const skillBars = skillTab.map((current, id) => {
    return (
      <div className="skill" key={id}>
        <div className="bar__div">
          <span className="bar__span" style={{ width: current.lvl }}>
            <p className="bar__span__paragraph">
              <span style={{ color: current.color }}>{current.icon}</span>
              {current.name}
            </p>
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="skills" id="skills" ref={wrapper}>
      <div className="skills__wrapper">
        <h1 className="skills__header">Skills</h1>
      </div>
      <div className="skills__bar__wrapper">{skillBars}</div>
    </div>
  );
}

export default Skills;
/*



*/
