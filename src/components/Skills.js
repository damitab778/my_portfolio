import React, { useEffect } from "react";
import "../style/Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
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

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
      offset: -600,
    });
  }, []);
  let skillTab = [
    {
      name: "JavaScript",
      lvl: "90%",
      icon: <SiJavascript />,
      color: "#EFD81D",
    },
    { name: "React.js", lvl: "80%", icon: <SiReact />, color: "#57D2F3" },
    {
      name: "TypeScript",
      lvl: "70%",
      icon: <SiTypescript />,
      color: "#2F74C0",
    },
    { name: "Redux", lvl: "80%", icon: <SiRedux />, color: "#7248B6" },
    { name: "Node.js", lvl: "60%", icon: <SiNodeDotJs />, color: "#7FC728" },
    { name: "CSS", lvl: "90%", icon: <SiCss3 />, color: "#254BDD" },
    { name: "SASS", lvl: "70%", icon: <SiSass />, color: "#C76494" },
    { name: "HTML5", lvl: "70%", icon: <SiHtml5 />, color: "#E44D26" },
    { name: "Git", lvl: "50%", icon: <SiGithub />, color: "#E94E31" },
    { name: "SQL", lvl: "80%", icon: <SiMysql />, color: "#005E86" },
  ];

  const skillBars = skillTab.map((current, id) => {
    return (
      <div className="skill" key={id}>
        <p>
          <span style={{ color: current.color }}>{current.icon}</span>
          {current.name}
        </p>

        <div className="bar__div">
          <span
            className="bar__span"
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            style={{ width: current.lvl }}
          ></span>
        </div>
      </div>
    );
  });
  return (
    <div className="skills" id="skills">
      <div className="skills__wrapper">
        <h1> Here you can check my skills</h1>
        {skillBars}
      </div>
    </div>
  );
}

export default Skills;
