import React from "react";
import "../style/MobileNav.css";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { isVisible, setVisible } from "../features/mobile/mobileSlice";
function MobileNav() {
  const mobilePopUpIsVisible = useSelector(isVisible);
  const dispatch = useDispatch();
  let navClass = "mobileNav";
  if (mobilePopUpIsVisible) {
    navClass += " mobileNav--active";
  }
  return (
    <div className={navClass} onClick={() => dispatch(setVisible())}>
      <div className="mobileNav__content">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => dispatch(setVisible())}
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
          onClick={() => dispatch(setVisible())}
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
          onClick={() => dispatch(setVisible())}
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
          onClick={() => dispatch(setVisible())}
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
          onClick={() => dispatch(setVisible())}
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
