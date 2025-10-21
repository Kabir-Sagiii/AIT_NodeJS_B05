import React, { useState } from "react";
import "./Nav.css";

const Nav = ({ logout }) => {
  return (
    <nav className="navbar">
      <div className="logo">MyCompany</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button type="button" onClick={logout} className="logoutButton">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
