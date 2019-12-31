import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';

const NavBar = () => {
  const {
    isAuthenticated, loginWithRedirect, logout, user,
  } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/calendar">Calendar</Link>&nbsp;
          <Link to="/journal">Journal</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
