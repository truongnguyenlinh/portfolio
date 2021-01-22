import styled from 'styled-components';

export const FooterContainer = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 0;
  display: flex;

  @media screen and (max-width: 820px) {
    grid-column: 2 / span 6;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`;

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1.5rem;

  & a {
    transition: filter 0.3s ease;
    margin-right: 10px;
  }

  & a:hover, a:focus {
    filter: brightness(50%);
  }
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`;

export const FooterText = styled.p`
  font-size: .8rem;
`;
