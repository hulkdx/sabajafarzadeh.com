import React from "react";

import "./Navbar.css";

import NavBarButton from "./NavbarButton";
import NavSide from "./NavSide";
import RouteList from "./RouteList";

const MIN_WIDTH_TO_SHOW_NAV_BAR_BUTTON = 600;

class NavBar extends React.Component {
  state = {
    showNavBarButton: false,
    showNavSide: true
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

  onNavSide = open => () => {
    this.setState({
      showNavSide: open
    });
  };

  //----------
  // render
  //----------

  render() {
    const { showNavBarButton, showNavSide } = this.state;

    return (
      <React.Fragment>
        <div
          className={
            showNavSide
              ? "navbar-shadow navbar-shadow-show"
              : "navbar-shadow navbar-shadow-hide"
          }
        />
        <header className="navbar-header">
          <nav className="navbar-container">
            <div className="navbar-logo">Saba Jafarzadeh</div>
            <div className="navbar-items-container">
              {showNavBarButton ? (
                <NavBarButton onClick={this.onNavSide(true)} />
              ) : (
                <RouteList />
              )}
            </div>
          </nav>
        </header>
        <NavSide show={showNavSide} onClickClose={this.onNavSide(false)} />
      </React.Fragment>
    );
  }
}

export default NavBar;
