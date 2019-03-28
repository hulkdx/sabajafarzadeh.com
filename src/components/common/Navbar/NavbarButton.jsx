import React from "react";
import PropTypes from "prop-types";

import "./NavbarButton.css";

const NavBarButton = ({ onClick }) => (
  <button className="navbar-button" type="button" onClick={onClick}>
    <div className="navbar-button-line" />
    <div className="navbar-button-line" />
    <div className="navbar-button-line" />
  </button>
);

NavBarButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavBarButton;
