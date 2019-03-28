import React from "react";
import PropTypes from "prop-types";

import "./NavSide.css";

import RouteList from "./RouteList";

const NavSide = ({ show, onClickClose }) => (
  <nav className={show ? "nav-side nav-side-show" : "nav-side nav-side-hidden"}>
    <button className="nav-side-close-btn" type="button" onClick={onClickClose}>
      &#x2715;
    </button>
    <RouteList onClick={onClickClose} />
  </nav>
);

NavSide.propTypes = {
  show: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default NavSide;
