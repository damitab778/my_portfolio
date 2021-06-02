import React from "react";
import "../style/Home.css";
import Nav from "./Nav";
import Logo from "./Logo";
import MobileButton from "./MobileButton";
import MobileNav from "./MobileNav";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { isVisible } from "../features/mobile/mobileSlice";
function Home() {
  const mobilePopUpIsVisible = useSelector(isVisible);
  let navClass = "home__introduction";
  if (mobilePopUpIsVisible) {
    navClass += " home__introduction--disable";
  }
  return (
    <div className="home" id="home">
      <Nav />
      {mobilePopUpIsVisible && <MobileNav />}
      <MobileButton />

      <IconContext.Provider value={{ size: "40px" }}>
        <div className={navClass}>
          <Logo />
          <div className="social__media">
            <a
              href="https://www.facebook.com/damian.tabaka.54"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/damian-tabaka-a053901b9/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/damitab778"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="arrow">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="circle">
              <RiArrowDownSLine className="bird one" />
              <RiArrowDownSLine className="bird two" />
              <RiArrowDownSLine className="bird third" />
            </div>
          </Link>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Home;
