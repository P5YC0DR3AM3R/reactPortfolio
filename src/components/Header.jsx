// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  /* Your CSS styles here */
`;

const Title = styled.h1`
  /* Your CSS styles here */
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Your Name</Title>
      <Navigation />
    </HeaderContainer>
  );
}

export default Header;

