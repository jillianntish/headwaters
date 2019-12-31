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
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/navbar.css';

const NavBar = () => {
  const {
    isAuthenticated, loginWithRedirect, logout, user,
  } = useAuth0();
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          headwaters
        </NavbarBrand>
        {isAuthenticated && (
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        )}
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/calendar">
                Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/journal">
                Journal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/pillbox">
                Pillbox
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" onClick={() => logout()}>
                Log out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
