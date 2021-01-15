import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutH1 = styled.h1`
  color: #000;
  font-size 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 1.3rem;
  text-align: left;
  max-width: 600px;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: auto;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 75px;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const VideoWrap = styled.div`
  max-width: 500px;
  height: auto;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 203px;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const AssetsWrap = styled.div`
  display: flex;
  flex-direction: inline-block;
`;