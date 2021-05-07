import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../style/Nav.css";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState({
    visible: true,
    color: "transparent",
  });
  let navCont = "nav__container";
  let nav = "nav";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(() => {
        if (currentScrollPos < 150 || currentScrollPos > 858) {
          if (currentScrollPos > 858) {
            return { visible: true, color: "notransparent" };
          } else {
            return { visible: true, color: "transparent" };
          }
        } else {
          return { visible: false };
        }
      });
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  if (visible.visible) {
    if (visible.color === "notransparent") {
      nav += " nav--color";
      navCont += " visible";
    } else {
      navCont += " visible";
    }
  }
  return (
    <div className={nav}>
      <div className={navCont}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Skills
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
    </div>
  );
}

export default Header;
