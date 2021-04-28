import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../style/Nav.css";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  let className = "nav__container";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        currentScrollPos < 150
          ? true
          : false || currentScrollPos > 858
          ? true
          : false
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  if (visible) {
    className += " visible";
  }
  return (
    <div className={className}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Resume
      </Link>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="con"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Contact
      </Link>
    </div>
  );
}

export default Header;
