import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons, 
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href="https://www.linkedin.com/in/truongnguyenlinh/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                <FaLinkedin/>
              </SocialIconLink>
              <SocialIconLink href="https://github.com/truongnguyenlinh/" target="_blank" aria-label="Github" rel="noopener noreferrer">
                <FaGithub/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
