import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => (
  <header className="navbar-header">
    <nav className="navbar-container">
      <div>T</div>
      <div className="navbar-logo">Saba Jafarzadeh</div>
      <div className="navbar-items-container">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
