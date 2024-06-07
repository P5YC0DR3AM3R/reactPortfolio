import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; // Assuming you're using Font Awesome icons

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 1.5em;

  &:hover {
    color: #007bff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLink href="your-github-link" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="your-linkedin-link" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="your-other-profile-link" target="_blank" rel="noopener noreferrer">
        <FaStackOverflow />
      </SocialLink> 
    </FooterContainer>
  );
}

export default Footer;
