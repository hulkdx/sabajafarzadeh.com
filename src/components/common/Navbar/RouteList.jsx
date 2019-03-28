import React from "react";
import { NavLink as Link } from "react-router-dom";

const RouteList = () => (
  <ul>
    <li>
      <Link to="/about" activeClassName="active">
        About
      </Link>
    </li>
    <li>
      <Link to="/" exact activeClassName="active">
        Home
      </Link>
    </li>
  </ul>
);

export default RouteList;
