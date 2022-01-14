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
import img2 from "../../../src/images/memoji.png";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutContent>
          <AboutH1>
            Hi, I'm{' '}
            <Typical
                fontWeight="normal"
                wrapper="b"
                steps={[
                  1000,
                  "Linh!", 
                  1000, 
                  "a student 📚", 
                  1000,
                  "a developer 💻",
                  1000,
                  "Linh!"
                ]}/>
          </AboutH1>
          <AssetsWrap>
            <ImgWrap>
              <Img src={img} alt="Text bubble that says 'Hi'"/>
            </ImgWrap>
            <GifWrap>
              <Gif src={img2} alt="Memoji gif of Linh"/>
            </GifWrap>
          </AssetsWrap>
          <AboutP>
            I'm currently a third year Computer Science at Simon Fraser University (SFU), 
            with an interest in dev-ops, mobile development and data analysis. {'\n\n'}
            
            I recently completed an 8-month co-op term at SAP, as well as a Production Engineering Fellowship
            with Major League Hacking and Facebook, obtaining skills and learning new tools, such as AWS EC2 
            and Docker. I have experience with the Agile Methodology, monitoring Jenkins 
            CI/CD builds and Object Oriented Programming within a large code-base! {'\n\n'}

            I'm always interested in new opportunities and challenges. Feel free to connect with me! 
          </AboutP>
        </AboutContent>
      </AboutContainer>
    </>
  )
}

export default AboutSection
