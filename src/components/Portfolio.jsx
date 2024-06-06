import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const PortfolioSection = styled.section`
  /* Your CSS styles for the portfolio section here */
`;

function Portfolio() {
  return (
    <PortfolioSection>
      <h2>My Projects</h2>
      <Project title="Project 1" />
      <Project title="Project 2" />
      {/* Add more Project components as needed */}
    </PortfolioSection>
  );
}

export default Portfolio;
