import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-inner">
          {/* Left: Brand */}
          <Link to="/findprofessional" className="navbar-brand">
            <span className="navbar-logo-badge" aria-hidden="true" />
            <span>Find Professional</span>
          </Link>

          {/* Right: Links */}
          <ul className="navbar-links">
            <li>
              <Link to="/" exact activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
