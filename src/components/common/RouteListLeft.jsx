import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

function RouteListLeft({ onClick }) {
  return (
    <ul>
      <li>
        <Link to="/ff" activeClassName="active" onClick={onClick}>
          Find Professional
        </Link>
      </li>
    </ul>
  );
}

RouteListLeft.propTypes = {
  onClick: PropTypes.func,
};

RouteListLeft.defaultProps = {
  onClick: null,
};

export default RouteListLeft;
