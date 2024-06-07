import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
`;

const NavItem = styled(NavLink)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 1.2em;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #007bff;
  }
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

export default Navigation;