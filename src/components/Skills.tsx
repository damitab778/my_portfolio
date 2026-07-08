import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "../style/Skills.css";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiCypress,
  SiRedux,
  SiNextdotjs,
  SiTanstack,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiMysql,
  SiNodedotjs,
  SiVuedotjs,
  SiCssmodules,
} from "react-icons/si";
import { FaTheaterMasks, FaClipboardCheck } from "react-icons/fa";
import { gsap } from "gsap";
import { useSectionInView } from "../hooks/useSectionInView";
import { mergeRefs } from "../utils/mergeRefs";

interface Skill {
  name: string;
  lvl: string;
  icon: ReactNode;
}

function Skills() {
  const wrapper = useRef<HTMLDivElement>(null);
  const sectionRef = useSectionInView("skills");
  const { ref: revealRef, inView: revealInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const el = wrapper.current;
    if (!el || !revealInView) return;

    const ctx = gsap.context(() => {
      const [skills, elements] = el.children;
      const barSpan = elements.querySelectorAll(".bar__span");
      const header = skills.querySelector(".skills__header");
      gsap.fromTo(
        header,
        { x: "-=80", opacity: 0 },
        {
          duration: 0.9,
          opacity: 1,
          delay: 0.2,
          x: "+=80",
          ease: "power3.out",
        },
      );

      barSpan.forEach((curr, i) => {
        gsap.fromTo(
          curr,
          { x: "-=80", opacity: 0, backgroundColor: "white" },
          {
            duration: 0.95,
            delay: i * 0.08,
            x: "+=80",
            opacity: 1,
            backgroundColor: "#2b9298",
            ease: "power2.out",
          },
        );
      });
    }, wrapper);

    return () => ctx.revert();
  }, [revealInView]);

  const skillTab: Skill[] = [
    { name: "React", lvl: "95%", icon: <SiReact /> },
    { name: "JavaScript", lvl: "90%", icon: <SiJavascript /> },
    { name: "TypeScript", lvl: "85%", icon: <SiTypescript /> },
    { name: "Cypress", lvl: "90%", icon: <SiCypress /> },
    { name: "Playwright", lvl: "80%", icon: <FaTheaterMasks /> },
    { name: "Manual Testing", lvl: "85%", icon: <FaClipboardCheck /> },
    { name: "Redux Toolkit", lvl: "80%", icon: <SiRedux /> },
    { name: "Next.js", lvl: "70%", icon: <SiNextdotjs /> },
    { name: "TanStack Query/Router", lvl: "70%", icon: <SiTanstack /> },
    { name: "Tailwind CSS", lvl: "60%", icon: <SiTailwindcss /> },
    { name: "CSS Modules", lvl: "75%", icon: <SiCssmodules /> },
    { name: "Git", lvl: "75%", icon: <SiGit /> },
    { name: "Docker", lvl: "60%", icon: <SiDocker /> },
    { name: "SQL", lvl: "70%", icon: <SiMysql /> },
    { name: "Node.js", lvl: "60%", icon: <SiNodedotjs /> },
    { name: "Vue.js", lvl: "50%", icon: <SiVuedotjs /> },
  ];

  const skillBars = skillTab.map((current, id) => {
    return (
      <div className="skill" key={id}>
        <div className="bar__div">
          <span className="bar__span" style={{ width: current.lvl }}>
            <p className="bar__span__paragraph">
              <span className="bar__icon">{current.icon}</span>
              {current.name}
            </p>
          </span>
        </div>
      </div>
    );
  });
  return (
    <div
      className="skills"
      id="skills"
      ref={mergeRefs(wrapper, sectionRef, revealRef)}
    >
      <div className="skills__wrapper">
        <h1 className="skills__header">Skills</h1>
      </div>
      <div className="skills__bar__wrapper">{skillBars}</div>
    </div>
  );
}

export default Skills;
