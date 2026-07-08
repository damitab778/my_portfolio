import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../style/Projects.css";
import Project from "./Project";
import spotify from "../img/spotify.png";
import istqb from "../img/istqb.png";
import langusta from "../img/langusta.png";
import { gsap } from "gsap";
import { useSectionInView } from "../hooks/useSectionInView";
import { mergeRefs } from "../utils/mergeRefs";

interface ProjectEntry {
  img?: string;
  title: string;
  description: string;
  link: string;
  linkLabel?: string;
  from: string;
}

function Projects() {
  const wrapper = useRef<HTMLDivElement>(null);
  const sectionRef = useSectionInView("projects");
  const { ref: revealRef, inView: revealInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const el = wrapper.current;
    if (!el || !revealInView) return;

    const ctx = gsap.context(() => {
      const [elements] = el.children;
      const header = elements.querySelectorAll(".projects__header");
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
    }, wrapper);

    return () => ctx.revert();
  }, [revealInView]);

  const projectsTab: ProjectEntry[] = [
    {
      img: langusta,
      title: "Langusta",
      description:
        "AI-powered language learning — instant grammar corrections, live AI conversation practice, and AI-generated stories with comprehension quizzes.",
      link: "https://github.com/damitab778/langusta",
      linkLabel: "View on GitHub",
      from: "fade-up-right",
    },
    {
      img: istqb,
      title: "CTFL Exam Prep Quiz",
      description:
        "ISTQB® CTFL (Foundation Level) v4.0.1 exam prep — mock tests from a pool of 98 questions, with randomized order and a configurable question count.",
      link: "https://damitab778.github.io/ctfl-quiz/",
      from: "fade-up",
    },
    {
      img: spotify,
      title: "Spotify Clone",
      description:
        "Simple clone - a premium account and the path to the playlist required",
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
        linkLabel={curr.linkLabel}
        from={curr.from}
      />
    );
  });
  return (
    <div
      className="projects"
      id="projects"
      ref={mergeRefs(wrapper, sectionRef, revealRef)}
    >
      <div className="projects__wrapper">
        <h1 className="projects__header">Individual Projects</h1>

        <div className="card__wrapper">{card}</div>
      </div>
    </div>
  );
}

export default Projects;
