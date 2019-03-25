import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header>
    <nav>
      <div>T</div>
      <div>
        <Link to="/">THE LOGO</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/about">AboutPage</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
