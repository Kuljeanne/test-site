import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-wrapper wrapper">
        <div className="shadow-container">
          <div className="shadow header__shadow"></div>
          <Logo />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
