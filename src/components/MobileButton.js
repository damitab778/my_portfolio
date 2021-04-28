import React from "react";
import "../style/MobileButton.css";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setVisible } from "../features/mobile/mobileSlice";
function MobileButton() {
  const dispatch = useDispatch();
  return (
    <div className="mobileButton" onClick={() => dispatch(setVisible())}>
      <FaBars />
    </div>
  );
}

export default MobileButton;
