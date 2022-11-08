import React from 'react';
import RouteList from '../RouteList';

import './Navbar.css';

function NavBar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-items-container">
          <RouteList />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
