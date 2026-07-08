import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../style/Experience.css";
import { gsap } from "gsap";
import { useSectionInView } from "../hooks/useSectionInView";
import { mergeRefs } from "../utils/mergeRefs";

interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

const experienceTab: ExperienceEntry[] = [
  {
    period: "03/2026 – Present",
    role: "Frontend Developer",
    company: "Nubisoft (Project: KITA)",
    description:
      "Developing the React/TypeScript frontend using a modern component-driven architecture with Radix UI primitives, TanStack Router/Query, and AG Grid for data-heavy views. Performing manual testing of new features against acceptance criteria and maintaining direct contact with the client to clarify requirements.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router/Query",
      "Radix UI",
      "Tailwind CSS",
      "React Hook Form + Zod",
      "AG Grid",
      "Manual Testing",
      "Client Communication",
    ],
  },
  {
    period: "07/2024 – Present",
    role: "E2E Tester",
    company: "Nubisoft (Project: ID Berlin)",
    description:
      "Developing and maintaining Cypress E2E tests, refactoring to the Page Object Model to improve suite stability and reduce flaky tests. Approximately 600 test scripts written in the monorepo. Working closely with a frontend team building the application in Angular, analyzing backend responses to validate data flows. Running regression and manual exploratory testing alongside test automation, planning testing work and analyzing test artifacts, and maintaining CI/CD integration on Azure Pipelines.",
    tech: [
      "Cypress",
      "TypeScript",
      "React",
      "Angular",
      "Visual Regression Tracker",
      "Regression Testing",
      "Azure DevOps / Azure Pipelines",
      "Manual Testing",
    ],
  },
  {
    period: "04/2022 – 03/2025",
    role: "Frontend Developer",
    company: "Nubisoft (Project: DataGenie)",
    description:
      "Built and refactored data-processing views with chart visualizations, using a scalable design system of reusable components and state management with Redux Toolkit. Integrated with REST APIs, verified data in PostgreSQL, and tested backend endpoints with Postman. Implemented Plotly/ECharts charts, added Cypress E2E tests, performed manual testing of chart visualizations and data flows before automation, improved rendering performance, and worked directly with the client and in Figma on UI design.",
    tech: [
      "React",
      "TypeScript/JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "PostgreSQL",
      "Postman",
      "Figma",
      "Cypress",
      "CSS Modules",
      "react-konva",
      "Docker",
      "GitLab CI/CD",
      "Manual Testing",
    ],
  },
  {
    period: "07/2021 – 04/2022",
    role: "Junior Frontend Developer",
    company: "Nubisoft (internal projects)",
    description:
      "Onboarded into the React/TypeScript ecosystem, supporting smaller frontend tasks and familiarising with team workflows and CI/CD tooling.",
    tech: ["React", "TypeScript", "Git", "CI/CD"],
  },
];

function Experience() {
  const wrapper = useRef<HTMLDivElement>(null);
  const sectionRef = useSectionInView("experience");
  const { ref: revealRef, inView: revealInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const el = wrapper.current;
    if (!el || !revealInView) return;

    const ctx = gsap.context(() => {
      const [elements] = el.children;
      const header = elements.querySelectorAll(".experience__header");
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

  return (
    <div
      className="experience"
      id="experience"
      ref={mergeRefs(wrapper, sectionRef, revealRef)}
    >
      <div className="experience__wrapper">
        <h1 className="experience__header">Experience</h1>
        <div className="experience__timeline">
          {experienceTab.map((entry) => (
            <div className="experience__entry" key={entry.period + entry.role}>
              <p className="experience__period">{entry.period}</p>
              <h2 className="experience__role">{entry.role}</h2>
              <p className="experience__company">{entry.company}</p>
              <p className="experience__description">{entry.description}</p>
              <ul className="experience__tech">
                {entry.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
