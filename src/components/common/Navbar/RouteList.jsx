import React from "react";
import PropTypes from "prop-types";
import { NavLink as Link } from "react-router-dom";

const RouteList = ({ onClick }) => (
  <ul>
    <li>
      <Link to="/about" activeClassName="active" onClick={onClick}>
        About
      </Link>
    </li>
    <li>
      <Link to="/" exact activeClassName="active" onClick={onClick}>
        Home
      </Link>
    </li>
  </ul>
);

RouteList.propTypes = {
  onClick: PropTypes.func
};

RouteList.defaultProps = {
  onClick: null
};

export default RouteList;
