import React from 'react';
import { 
  AboutContainer, 
  AboutContent, 
  AboutH1, 
  AboutP, 
  ImgWrap, 
  Img, 
  AssetsWrap, 
  GifWrap, 
  Gif
} from './AboutElements';
import Typical from 'react-typical';
import img from "../../../src/images/hi.png";
import gif from "../../../src/images/memoji.gif";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutContent>
          <AboutH1>
            Hi, I'm{' '}
            <Typical
                fontWeight="normal"
                loop={Infinity}
                wrapper="b"
                steps={[
                  1000,
                  "Linh!", 
                  1000, 
                  "a student 📚", 
                  1000, 
                  "a motorcyclist 🏍️",
                  1000,
                  "a dog lover 🐶",
                  1000,
                  "a developer 💻"]}/>
          </AboutH1>
          <AssetsWrap>
            <ImgWrap>
              <Img src={img} alt="Text bubble that says 'Hi'."/>
            </ImgWrap>
            <GifWrap>
              <Gif src={gif} alt="Memoji gif of Linh."/>
            </GifWrap>
          </AssetsWrap>
          <AboutP>
            I'm currently in my last semester as a Computer Systems Technology student at the 
            British Columbia Institute of Technology. {'\n\n'}
            
            I just recently completed an 8-month co-op term at SAP, and have now started 
            working with Technovation as a Student Mentor; guiding girls aged 10-18 who are 
            in a coding competition. I have experience in the Agile Methodology, monitoring Jenkins 
            CI/CD builds and Object Oriented Programming within a large code-base. {'\n\n'}

            I'm always interested in new opportunities and challenges. Feel free to connect with me! 
          </AboutP>
        </AboutContent>
      </AboutContainer>
    </>
  )
}

export default AboutSection
