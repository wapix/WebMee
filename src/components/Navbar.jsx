import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="navbar-list">
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Appearance</a>
          </li>
        </ul>
      </div>
      <div className="navbar-profile">
        <a href="#">S</a>
      </div>
    </div>
  );
}

export default Navbar;
