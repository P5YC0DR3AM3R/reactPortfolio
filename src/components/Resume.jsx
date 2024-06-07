import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

const ResumeLink = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 4px;
`;

function Resume() {
  return (
    <ResumeSection>
      <h2>Resume</h2>
      <ResumeLink href="/assets/resume.pdf" download>Download Resume</ResumeLink>
      <SkillsList>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Node.js</SkillItem>
        <SkillItem>CSS</SkillItem>
        {/* Add more SkillItem components as needed */}
      </SkillsList>
    </ResumeSection>
  );
}

export default Resume;