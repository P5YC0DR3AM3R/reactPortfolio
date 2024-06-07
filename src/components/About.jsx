import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
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
