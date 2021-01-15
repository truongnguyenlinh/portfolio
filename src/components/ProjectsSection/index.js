import React from 'react';
import { 
  ProjectsContainer, 
  ProjectsWrapper, 
  Column2, 
  ImgWrap,
  ProjectsRow, 
  Column1, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Description,  
  Img 
} from "./ProjectsElements";

const ProjectsSection = ({id, imgStart, topLine, headline, description, img, alt}) => {
  return (
    <>
      <ProjectsContainer id={id}>
        <ProjectsWrapper>
          <ProjectsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Description>{description}</Description>
              </TextWrapper>
            </Column1> 
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </ProjectsRow> 
        </ProjectsWrapper> 
      </ProjectsContainer>
    </>
  )
}

export default ProjectsSection;
