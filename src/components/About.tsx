import { useEffect } from "react";
import "../style/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../img/me.jpg";
import {
  FaClipboardCheck,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useSectionInView } from "../hooks/useSectionInView";

function About() {
  const sectionRef = useSectionInView("about");

  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 100,
      once: true,
    });
  }, []);
  return (
    <div className="about" id="about" ref={sectionRef}>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        className="about__wrapper"
      >
        <img src={me} alt="Damian Tabaka" />
        <div className="description">
          <div className="top">
            <h2>About me</h2>
            <div className="role__badges">
              <a
                className="role__badge"
                href={`${import.meta.env.BASE_URL}resume-frontend.pdf`}
                download="Damian-Tabaka-Frontend-Resume.pdf"
                title="Download Frontend Developer Resume"
              >
                <FaLaptopCode /> Frontend Developer
              </a>
              <a
                className="role__badge"
                href={`${import.meta.env.BASE_URL}resume-qa.pdf`}
                download="Damian-Tabaka-QA-Resume.pdf"
                title="Download QA Automation Engineer Resume"
              >
                <FaClipboardCheck /> QA Automation Engineer
              </a>
            </div>
            <p>
              I started my career as a Frontend Developer and, over 5 years,
              have also grown into an experienced QA Automation Engineer —
              combining performant, data-driven UIs in React and Next.js with
              reliable E2E test automation using Cypress and Playwright.
            </p>
            <p>
              I specialize in data visualizations, test architecture
              refactoring with the Page Object Model, and reducing flaky
              tests at scale — bridging frontend development and quality
              engineering.
            </p>
          </div>
          <div className="bottom">
            <div className="bottom__left">
              <h2>Contact Details</h2>
              <ul className="contact__list">
                <li>
                  <FaMapMarkerAlt /> Poland
                </li>
                <li>
                  <FaPhoneAlt /> +48 603 422 133
                </li>
                <li>
                  <FaEnvelope /> informatyka.tabaka1ti@gmail.com
                </li>
                <li>
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/damian-tabaka-a053901b9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <FaGithub />
                  <a
                    href="https://github.com/damitab778"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
