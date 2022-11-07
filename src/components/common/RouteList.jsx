import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

function RouteList({ onClick }) {
  return (
    <ul>
      <li>
        <Link to="/" exact activeClassName="active" onClick={onClick}>
          blog
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active" onClick={onClick}>
          about
        </Link>
      </li>
    </ul>
  );
}

RouteList.propTypes = {
  onClick: PropTypes.func,
};

RouteList.defaultProps = {
  onClick: null,
};

export default RouteList;
