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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';
import Home from './Home.jsx';
import '../styles/home.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand className="mr-auto">headwaters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* Show menu tab when logged in */}
        {isAuthenticated && (
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/calendar">
                  Calendar
                </DropdownItem>
                <DropdownItem tag={Link} to="/journal">
                  Journal
                </DropdownItem>
                <DropdownItem tag={Link} to="/journalHistory">
                  Journal History
                </DropdownItem>
                <DropdownItem tag={Link} to="/pillbox">
                  Pillbox
                </DropdownItem>
                <DropdownItem tag={Link} to="/medTracker">
                  Medecine Tracker
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        )}
        {/* If now logged in show Log in button */}
        {!isAuthenticated && (
          <Button
          style={{ backgroundColor: '#148f86', border: '0px' }}
          onClick={() => loginWithRedirect({})}
          >
            Log in
          </Button>
        )}
        {/* If logged in show Log out button */}
        {isAuthenticated && (
          <Button
            style={{ backgroundColor: '#148f86', border: '0px' }}
            tag={Link}
            to="/"
            onClick={() => logout()}>
            Log out
          </Button>
        )}
      </Navbar>
      {!isAuthenticated && <Home />}
    </div>
  );
}

export default NavBar;