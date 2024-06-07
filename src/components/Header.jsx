// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #007bff;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Your Name</Title>
    </HeaderContainer>
  );
}

export default Header;

