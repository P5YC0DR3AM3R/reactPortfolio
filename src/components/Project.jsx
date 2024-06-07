import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  background-color: #fff;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

function Project({ title }) {
  return (
    <ProjectContainer>
      <ProjectImage src="/assets/images/project-image.jpg" alt={`${title} Screenshot`} />
      <ProjectTitle>{title}</ProjectTitle>
    </ProjectContainer>
  );
}

export default Project;
