import React from "react";
import headerLogo from "../../assets/Rick_and_Morty.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="header" />
    </div>
  );
};
export default Header;