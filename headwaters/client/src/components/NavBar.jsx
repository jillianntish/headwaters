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
import Home from './Home.jsx';
import '../styles/home.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        {isAuthenticated && (
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        )}
        <NavbarBrand
          style={{ cursor: 'pointer' }}
          onClick={() => setCollapsed(!collapsed)}
          className="mr-auto"
        >
          headwaters
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                tag={Link}
                to="/calendar"
                onClick={() => setCollapsed(true)}
              >
                Calendar
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/journal"
                onClick={() => setCollapsed(true)}
              >
                Journal
              </NavLink> 
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/journalHistory"
                onClick={() => setCollapsed(true)}
              >
                Journal History
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={Link}
                to="/pillbox"
                onClick={() => setCollapsed(true)}
              >
                Pillbox
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                tag={Link}
                to="/medTracker"
                onClick={() => setCollapsed(true)}
              >
                Medecine Tracker
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} 
              to="/" 
              onClick={() => logout()}>
                Log out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {!isAuthenticated && (
          <Button
            style={{ backgroundColor: '#148f86', border: '0px' }}
            onClick={() => loginWithRedirect({})}
          >
            Log in
          </Button>
        )}
      </Navbar>
      {!isAuthenticated && <Home />}
    </div>
  );
};

export default NavBar;
