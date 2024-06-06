import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  /* Your CSS styles here */
`;

const NavItem = styled(NavLink)`
  /* Your CSS styles here */
`;

function Navigation() {
  return (
    <Nav>
      <NavItem to="/" exact>About Me</NavItem>
      <NavItem to="/portfolio">Portfolio</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/resume">Resume</NavItem>
    </Nav>
  );
}

export default Navigation;,[--]