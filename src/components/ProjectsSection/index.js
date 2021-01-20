import React from 'react';
import { 
  ProjectsContainer, 
  ProjectsHeader, 
  ProjectsWrapper,
  ProjectCard,
  ProjectImgLink,
  ProjectImg,
  ProjectInfo,
  ProjectTitle,
  ProjectDesc 
} from "./ProjectsElements";

const ProjectsSection = ({heading, data}) => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsHeader>{heading}</ProjectsHeader>
        <ProjectsWrapper>
          {data.map((project, index) => {
            return(
              <ProjectCard key={index}>
                <ProjectImgLink href={project.link}>
                  <ProjectImg src={project.img} alt={project.alt}/>
                </ProjectImgLink>
                <ProjectInfo>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </ProjectInfo>
              </ProjectCard>
            )
          })}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default ProjectsSection;
