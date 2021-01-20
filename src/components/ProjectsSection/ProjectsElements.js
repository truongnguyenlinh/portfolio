import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background: #000;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 13000px) / 2);
  color: #FFF;
`;

export const ProjectsHeader = styled.h2`
  color: #FFF;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProjectImgLink = styled.a`
  color: #FFF;
  font-size: 24px;
  text-decoration: none;
`;

export const ProjectImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 5px 5px #8f8f8f;
`;

export const ProjectTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProjectDesc = styled.p`
  margin-bottom: 1rem;
`;
