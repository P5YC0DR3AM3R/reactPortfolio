import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const PortfolioSection = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

function Portfolio() {
  return (
    <PortfolioSection>
      <h2>My Projects</h2>
      <ProjectList>
        <Project title="Project 1" />
        <Project title="Project 2" />
        {/* Add more Project components as needed */}
      </ProjectList>
    </PortfolioSection>
  );
}

export default Portfolio;
