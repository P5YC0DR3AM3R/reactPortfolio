import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; // Assuming you're using Font Awesome icons

const FooterContainer = styled.footer`
  /* Your CSS styles for the footer container here */
`;

const SocialLink = styled.a`
  /* Your CSS styles for the social media links here */
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
