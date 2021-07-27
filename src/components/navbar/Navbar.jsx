import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img className="navbar__image" src={logo} alt="Sem logo" />
      </div>
    </header>
  );
};

export default Navbar;
