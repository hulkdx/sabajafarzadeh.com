import React from "react";
import RouteList from "../RouteList";

import "./Navbar.css";

class NavBar extends React.Component {
  //----------
  // render
  //----------

  render() {
    return (
      <React.Fragment>
        <div />
        <header className="navbar-header">
          <nav className="navbar-container">
            <div className="navbar-items-container">
            <RouteList />
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default NavBar;
