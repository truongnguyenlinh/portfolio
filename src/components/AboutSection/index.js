import React from 'react'
import { AboutContainer, AboutContent, 
AboutH1, AboutP, ImgWrap, Img} from './AboutElements';
import img1 from "../../../src/images/memoji.png";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH1>Hi, I'm Linh!</AboutH1>
        <ImgWrap>
          <Img src={img1} alt="Memoji of Linh"/>
        </ImgWrap>
        <AboutP>
          I'm currently in my last semester as a computer science student at the 
          British Columbia Institute of Technology. {"\n"}
          
          I just recently completed an 8-month co-op term at SAP, and have now started 
          working with Technovation as a Student Mentor, for girls aged 10-18 who are 
          partaking in a coding competition. I have experience in the Agile Methodology, 
          and Object Oriented Programming within a large code-base. 
        </AboutP>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection
