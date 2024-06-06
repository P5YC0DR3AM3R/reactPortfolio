import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  /* Your CSS styles here */
`;

const Avatar = styled.img`
  /* Your CSS styles here */
`;

function About() {
  return (
    <AboutSection>
      <Avatar src="/assets/images/avatar.jpg" alt="Your Avatar" />
      <p>Your short bio goes here.</p>
    </AboutSection>
  );
}

export default About;
