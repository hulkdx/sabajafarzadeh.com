import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./Navbar.css";

import NavBarButton from "./NavbarButton";

const MIN_WIDTH_TO_SHOW_NAV_BAR_BUTTON = 600;

class NavBar extends React.Component {
  state = {
    showNavBarButton: false
  };
  //----------
  // Lifecycle
  //----------

  componentWillMount = () => {
    this.onResize();
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.onResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.onResize);
  };

  //----------
  // functions
  //----------

  onResize = () => {
    const width = window.innerWidth;
    this.setState({
      showNavBarButton: width < MIN_WIDTH_TO_SHOW_NAV_BAR_BUTTON
    });
  };

  //----------
  // render
  //----------

  render() {
    const { showNavBarButton } = this.state;

    return (
      <header className="navbar-header">
        <nav className="navbar-container">
          <div className="navbar-logo">Saba Jafarzadeh</div>
          <div className="navbar-items-container">
            {showNavBarButton ? (
              <NavBarButton />
            ) : (
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
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
