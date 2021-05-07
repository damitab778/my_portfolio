import React, { useEffect } from "react";
import "../style/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../img/me.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
function About() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 100,
    });
  }, []);
  return (
    <div className="about" id="about">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        className="about__wrapper"
      >
        <img src={me} alt="Damian Tabaka" />
        <div className="description">
          <div className="top">
            <h2>About me</h2>
            <p>
              My name is Damian. I love coding because with just a few lines of
              codes i can turn my ideas into reality which is very satisfying.
            </p>
            <p>
              Currently studying at the Silesian University of Technology
              broadening my knowledge of programming.
            </p>
          </div>
          <div className="bottom">
            <div className="bottom__left">
              <h2>Contact Details</h2>
              <p>
                <span>
                  Damian Tabaka
                  <br />
                </span>
                <span>
                  Podleska 66/1
                  <br />
                </span>
                <span>
                  Mikołów Poland 43-190
                  <br />
                </span>
                <span>
                  +48 603 422 133 <br />
                </span>
                <span>
                  informatyka.tabaka1ti@gmail.com <br />
                </span>
              </p>
            </div>

            <p className="resume__btn">
              <a
                href="https://drive.google.com/file/d/1jG7JWsiQE9DGr18YPn5PNFBwecp2_Gfk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FaCloudDownloadAlt className="download__icon" />
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
