import "../style/MobileNav.css";
import { Link } from "react-scroll";
import { useActiveSection } from "../context/ActiveSectionContext";

interface MobileNavProps {
  onClose: () => void;
}

const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Individual Projects" },
];

function MobileNav({ onClose }: MobileNavProps) {
  const { activeSection } = useActiveSection();

  return (
    <div className="mobileNav mobileNav--active" onClick={onClose}>
      <div className="mobileNav__content">
        {navItems.map((item) => (
          <Link
            key={item.to}
            className={activeSection === item.to ? "active" : undefined}
            to={item.to}
            smooth={true}
            offset={0}
            duration={500}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
