import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  /* Your CSS styles for the resume section here */
`;

const ResumeLink = styled.a`
  /* Your CSS styles for the resume download link here */
`;

const SkillsList = styled.ul`
  /* Your CSS styles for the skills list here */
`;

// ... (Rest of your skills list items)

function Resume() {
  return (
    <ResumeSection>
      <h2>Resume</h2>
      <ResumeLink href="/assets/resume.pdf" download>Download Resume</ResumeLink>
      <SkillsList>
        {/* Your skills list items here */}
      </SkillsList>
    </ResumeSection>
  );
}

export default Resume;
