import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../style/Nav.css";
import { useActiveSection } from "../context/ActiveSectionContext";

interface NavVisibility {
  visible: boolean;
  color?: string;
}

const navItems = [
  { to: "home", label: "Home", offset: -80 },
  { to: "about", label: "About", offset: -80 },
  { to: "skills", label: "Skills", offset: -80 },
  { to: "experience", label: "Experience", offset: -80 },
  { to: "projects", label: "Individual Projects", offset: -80 },
];

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState<NavVisibility>({
    visible: true,
    color: "transparent",
  });
  const { activeSection } = useActiveSection();
  let navCont = "nav__container";
  let nav = "nav";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(() => {
        if (currentScrollPos < 150 || currentScrollPos > 778) {
          if (currentScrollPos > 778) {
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
        {navItems.map((item) => (
          <Link
            key={item.to}
            className={activeSection === item.to ? "active" : undefined}
            to={item.to}
            smooth={true}
            offset={item.offset}
            duration={500}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
