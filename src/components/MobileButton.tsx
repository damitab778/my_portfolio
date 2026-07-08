import "../style/MobileButton.css";
import { FaBars } from "react-icons/fa";

interface MobileButtonProps {
  onToggle: () => void;
}

function MobileButton({ onToggle }: MobileButtonProps) {
  return (
    <div className="mobileButton" onClick={onToggle}>
      <FaBars />
    </div>
  );
}

export default MobileButton;
