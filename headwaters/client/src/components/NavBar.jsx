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
  Button,
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
              <NavLink to="/" onClick={() => setCollapsed(true)}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/calendar" onClick={() => setCollapsed(true)}>
                Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/journal" onClick={() => setCollapsed(true)}>
                Journal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/pillbox" onClick={() => setCollapsed(true)}>
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
          <Button style={{ backgroundColor: '#148f86', border: '0px' }} onClick={() => loginWithRedirect({})}>Log in</Button>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
