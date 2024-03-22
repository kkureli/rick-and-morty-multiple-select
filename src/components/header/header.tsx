import React from "react";
import headerLogo from "../../assets/Rick_and_Morty.png";
import "./header.css";
import SocialAccounts from "../socialAccounts/socialAccounts";

const Header = () => {
  return (
    <div className="header">
      <div />
      <img src={headerLogo} alt="header" className="header-logo-img" />
      <SocialAccounts />
    </div>
  );
};
export default Header;
