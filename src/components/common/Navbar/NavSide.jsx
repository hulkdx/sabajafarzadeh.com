import React from "react";
import { Link } from "react-router-dom";

import "./NavSide.css";

const NavSide = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default NavSide;
