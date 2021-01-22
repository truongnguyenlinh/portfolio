import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  FooterContainer,
  SocialIconLink,
  FooterSocialWrapper,
  FooterSocialIcons,
  FooterText
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <SocialIconLink href="https://www.linkedin.com/in/truongnguyenlinh/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <FaLinkedin/>
          </SocialIconLink>
          <SocialIconLink href="https://github.com/truongnguyenlinh/" target="_blank" aria-label="Github" rel="noopener noreferrer">
            <FaGithub/>
          </SocialIconLink>
        </FooterSocialIcons>
        <FooterText>© 2021 Linh Truong. All rights reserved.</FooterText>
      </FooterSocialWrapper>
    </FooterContainer>
  )
}

export default Footer;
