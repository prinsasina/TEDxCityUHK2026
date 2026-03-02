import React, { useEffect } from "react";
import { styled } from "styled-components";
import p1 from "../Assets/About/p1.png"
import p2 from "../Assets/About/p2.png"
import p3 from "../Assets/About/p3.png"
import p4 from "../Assets/About/p4.png"
import p5 from "../Assets/About/p5.png"
import p6 from "../Assets/About/p6.png"
import p7 from "../Assets/About/p7.png"
import p8 from "../Assets/About/p8.png"
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

// import TEDTeam from "../Assets/TEDxTeam.png";
// import TEDPhotoX from "../Assets/Homepage-Photo.png";
// import XFrame from "../Assets/X-FrameHome.png";

import '@fontsource/bayon';
import '@fontsource/commissioner';

// Main Container
const Container = styled.div`
  width: 100%;
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

// Top Section - Two Column Layout
const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: stretch;
  height: 600px;

  @media (max-width: 1024px) {
    height: 450px;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    height: 350px;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    height: 250px;
    gap: 0.25rem;
  }
`;

// Left Panel - Two Stacked Images with Purple Border
const LeftPanel = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const StackedImage = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  background: #000;
  border: 4px solid black;

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const StackedImage2 = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  border: 4px solid black;
  
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 90%,
    0% 100%
  );

  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const ImageWithOverlay = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(80%) contrast(1.2);
`;

const ImageTextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Archivo Black', sans-serif;
  z-index: 2;

  text-shadow: 
    -4px -4px 0 #000,
    4px -4px 0 #000,
    -4px 4px 0 #000,
    4px 4px 0 #000,
    0 0 0 transparent;
  letter-spacing: 3px;
  text-align: center;
  white-space: nowrap;
  
  .about-part {
    display: block;
    font-size: 4rem; 
  }
  
  .tedx-part {
    display: block;
    color: #EB0028;
    font-size: 4rem; 
    margin-top: -0.5rem; 
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    
    .about-part, .tedx-part {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    
    .about-part, .tedx-part {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    
    .about-part, .tedx-part {
      font-size: 1rem;
    }
  }
`;

const ImageTextOverlay2 = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Bungee', sans-serif;
  z-index: 2;

  text-shadow: 
    -3px -3px 0 #000,
    3px -3px 0 #000,
    -3px 3px 0 #000,
    3px 3px 0 #000,
    0 0 0 transparent;
  letter-spacing: 3px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

// Right Panel - Event Photo
const RightPanel = styled.div`
  flex: 0 0 60%;
  position: relative;
  overflow: hidden;
  border: 4px solid black;
  height: 95%;

  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 92%,
    0% 100%
  );

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const EventPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(80%) contrast(1.2);
  overflow: hidden;
`;

// Mid-Upper Section
const MidUpperSection = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 4rem;
  height: 500px;

  @media (max-width: 1024px) {
    height: 400px;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    height: 200px;
    margin-bottom: 1rem;
  }
`;

const MonitorPanel = styled.div`
  flex: 0 0 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Monitor = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 4px solid black;
  height: 100%;
  filter: grayscale(80%) contrast(1.2);

  clip-path: polygon(
    0% 17%,
    100% 10%,
    95% 100%, 
    0% 100% 
  );

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const TextBlocksPanel = styled.div`
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const RedTextBlock = styled.div`
  background-color: #c60a14;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 4px solid black;

  clip-path: polygon(
    5% 23%,
    100% 0%, 
    100% 100%,
    3% 100%
  );

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
    padding: 0.5rem;
  }
`;

const BlackTextBlock = styled.div`
  padding: 2.5rem;
  color: white;
  background: black;
  border: 4px solid black;
  height: 55%;

  clip-path: polygon(
    3% 0%,
    100% 0%,
    100% 100%,
    0% 100%
  );

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-width: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    border-width: 1px;
  }
`;

const BlockTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Archivo Black', sans-serif;
  line-height: 1.1;
  text-align: center;
  
  .red-text {
    color: #EB0028;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const BlockSubtitle = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

// Mid-Lower Section
const MidLowerSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: stretch;
  min-height: 300px;

  @media (max-width: 1024px) {
    gap: 1rem;
    min-height: 250px;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    min-height: 200px;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    min-height: 150px;
  }
`;

const TealXPanel = styled.div`
  flex: 0 0 45%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 4px solid black;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 95%,
    0% 90%
  );
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const LoremPanel = styled.div`
  flex: 0 0 55%;
  padding: 2rem;
  color: white;
  display: flex;
  align-items: center;
  background: black;
  border: 4px solid black;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    0% 95%
  );
  min-height: 100%;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    border-width: 1px;
  }
`;

const LoremText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: 400;
  font-family: 'Bungee', sans-serif;
  letter-spacing: 2px;
  text-align: center;
  margin: 0;
  width: 100%;
  word-break: break-word;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    line-height: 1.4;
    letter-spacing: 1.2px;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
    line-height: 1.3;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
    line-height: 1.2;
    letter-spacing: 0.8px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    line-height: 1.15;
    letter-spacing: 0.6px;
  }

  @media (max-width: 480px) {
    font-size: 0.45rem;
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  @media (max-width: 375px) {
    font-size: 0.4rem;
    line-height: 1;
    letter-spacing: 0.4px;
  }

  @media (max-width: 320px) {
    font-size: 0.35rem;
    line-height: 0.95;
    letter-spacing: 0.3px;
  }
`;

// About TED Section
const AboutTedSection = styled.div`
  background-color: #000000;
  padding: 5rem 2rem;
  position: relative;

  border: 4px solid black;

  clip-path: polygon(
    0% 0%,
    100% 4%,
    100% 100%,
    0% 100%
  );

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    border-width: 1px;
  }
`;

const AboutTedTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AboutText = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: white;
  font-family: 'Bungee', sans-serif;
  line-height: 1;
  display: block;
  text-align: center;
  margin-top: 40%;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const TedText = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: red;
  font-family: 'Bungee', sans-serif;
  line-height: 1;
  display: block;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StarburstContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    margin-left: 0.5rem;
  }
`;

const Starburst = styled.div`
  width: 250px;
  height: 250px;
  background: #ee4037;
  position: relative;
  transform: rotate(0deg);
  
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.15) rotate(5deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
  
  clip-path: polygon(
    50% 0%,
    61% 23%,
    85% 10%,
    71% 30%,
    98% 35%,
    77% 43%,
    98% 68%,
    71% 58%,
    85% 90%,
    61% 73%,
    50% 98%,
    39% 73%,
    15% 90%,
    29% 58%,
    2% 68%,
    23% 43%,
    2% 35%, 
    29% 30%,
    15% 10%,
    39% 23%,
    50% 0%
  );
  
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const QuestionMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  font-weight: 900;
  color: white;
  font-family: 'Archivo Black', sans-serif;
  z-index: 2;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const AboutTedContent = styled.div`
  max-width: 900px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  text-align: center;
  
  p {
    font-size: 1.2rem;
    line-height: 2;
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
    p {
      font-size: 1rem;
      line-height: 1.9;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    p {
      font-size: 0.95rem;
      line-height: 1.8;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    p {
      font-size: 0.875rem;
      line-height: 1.7;
    }
  }
`;

// Footer Section
const FooterSection = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SocialPanel = styled.div`
  flex: 0 0 40%;
  background-color: #000000;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const FollowUs = styled.h3`
  color: white;
  margin-bottom: 2rem;
  margin-top: 20%;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem !important;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem !important;
    margin-bottom: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: bold;

    transition: all 0.3s ease-in-out;
    
    &:hover {
      color: #EB0028;
    }
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const ImageCollage = styled.div`
  flex: 0 0 60%;
  display: flex;
  gap: 0.8rem;
  height: 500px;

  @media (max-width: 1024px) {
    height: 400px;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    height: 300px;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

//Left side for p6
const LeftCollage = styled.div`
  flex: 1;
  border: 4px solid black;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

// Right side for p7 and p8
const RightCollage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// for p7
const RightImage1 = styled.div`
  flex: 1;
  border: 4px solid black;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 90%,
    0% 100%
  );

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

//For p8
const RightImage2 = styled.div`
  flex: 1;
  border: 4px solid black;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  clip-path: polygon(
    0% 10%,
    100% 0%,
    100% 100%,
    0% 100%
  );

  @media (max-width: 768px) {
    border-width: 2px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`;

const CollageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%) contrast(1.2);
  display: block;
`;

export default function AboutTedx({ show = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ContentWrapper>
        {/* Top Section */}
        <TopSection>
          <LeftPanel>
            <StackedImage>
              <ImageWithOverlay src={p1} alt="Image Title 1" />
              <ImageTextOverlay2>
                <span className="about-part">WHY NOT LEARN </span>
              </ImageTextOverlay2>
            </StackedImage>
            <StackedImage2>
              <ImageWithOverlay src={p2} alt="Image Title 2" />
              <ImageTextOverlay>
                <span className="about-part">ABOUT</span>
                <span className="tedx-part">TEDX</span>
              </ImageTextOverlay>
            </StackedImage2>
          </LeftPanel>
          <RightPanel>
            <EventPhoto src={p3} alt="Image Title 3" />
          </RightPanel>
        </TopSection>

        {/* Mid-Upper Section */}
        <MidUpperSection>
          <MonitorPanel>
            <Monitor>
              <img
                src={p5}
                alt="TEDx Event"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Monitor>
          </MonitorPanel>

          <TextBlocksPanel>
            <RedTextBlock>
            </RedTextBlock>
            <BlackTextBlock>
              <BlockTitle>
                ABOUT <span className="red-text">TEDx</span>
              </BlockTitle>
              <BlockSubtitle>
                Independently organized event
              </BlockSubtitle>
            </BlackTextBlock>
          </TextBlocksPanel>
        </MidUpperSection>

        {/* Mid-Lower Section */}
        <MidLowerSection>
          <TealXPanel>
            <EventPhoto src={p4} alt="TEDx Event" />
          </TealXPanel>
          <LoremPanel>
            <LoremText>
              In the spirit of ideas worth spreading, <span className="text-red font-bold">TEDx </span>
              is a program of local, self-organized events that bring people together to share a
              <span className="text-red font-bold"> TED</span>-like experience. At a
              <span className="text-red font-bold"> TEDx</span> event,
              <span className="text-red font-bold"> TED</span> Talks video and live speakers combine to
              spark deep discussion and connection. These local, self-organized events are branded
              <span className="text-red font-bold"> TEDx</span>, where <span className="text-red font-bold">x </span>
              = independently organized <span className="text-red font-bold">TED</span> event. The
              <span className="text-red font-bold"> TED</span> Conference provides general guidance for
              the <span className="text-red font-bold">TEDx</span> program, but individual
              <span className="text-red font-bold"> TEDx</span> events are self-organized.
              (Subject to certain rules and regulations.)
            </LoremText>
          </LoremPanel>
        </MidLowerSection>

        {/* About TED Section */}
        <AboutTedSection>
          <AboutTedTitle>
            <TitleTextContainer>
              <AboutText>ABOUT</AboutText>
              <TedText>TED</TedText>
            </TitleTextContainer>
          </AboutTedTitle>
          <StarburstContainer>
            <Starburst>
              <QuestionMark>?</QuestionMark>
            </Starburst>
          </StarburstContainer>
          <AboutTedContent>
            <p>
              <span className="text-red font-bold">TED</span> is on a mission to discover and spread ideas
              that spark imagination, embrace possibility and catalyze impact. 
            </p>
            <p> 
              Our organization is devoted to
              curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from
              every discipline and culture who seek a deeper understanding of the world and connection with others,
              and we invite everyone to engage with ideas and activate them in your community.
            </p>
            <p>
              <span className="text-red font-bold"> TED</span> began in 1984 as a conference where Technology,
              Entertainment and Design converged, but today it spans a multitude of worldwide communities and
              initiatives exploring everything from science and business to education, arts and global issues.
            </p>
            <p>
              In addition to the hundreds of <span className="text-red font-bold">TED</span> Talks curated from
              our annual conferences and published on <span className="text-red font-bold">TED</span>.com, we
              produce original podcasts, short video series, animated educational lessons (<span className="text-red font-bold">TED</span>-Ed) and TV
              programs that are translated into more than 100 languages and distributed via partnerships around the world.
              Each year, more than 3,000 independently run <span className="text-red font-bold">TEDx</span> events
              bring people together to share ideas and bridge divides in communities on every continent. 
            </p>
            <p>
              Through the Audacious Project, <span className="text-red font-bold">TED</span> has helped catalyze more
              than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and
              just. In 2020, <span className="text-red font-bold">TED</span> launched Countdown, an initiative to
              accelerate solutions to the climate crisis and mobilize a movement for a net-zero future.
            </p>
            <p>
            <span className="text-red font-bold">TED</span> is owned by a nonprofit, nonpartisan foundation. <br/> Our aim is to help create a future worth pursuing for all.
            </p>
            <div className="w-full flex justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-10">
                <a
                  href="https://www.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black border-4 border-white text-white px-5 py-2.5 sm:px-7 sm:py-3.5 md:px-10 md:py-5 lg:px-10 lg:py-5 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold hover:bg-white hover:text-black transition-colors duration-300"
                >
                  READ MORE
                </a>
            </div>
          </AboutTedContent>
        </AboutTedSection>

        {/* Footer Section */}
        <FooterSection>
          <SocialPanel>
            <FollowUs className="text-[2rem] md:text-[3.5rem] mb-8">
              FOLLOW US!
            </FollowUs>
            <SocialIcons>
              <a href="https://www.instagram.com/tedxcityuhk/" target="_blank" rel="noopener noreferrer">
                <Instagram size={40} />
              </a>
              <a href="https://www.linkedin.com/company/tedxcityuhongkong/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={40} />
              </a>
              <a href="https://www.facebook.com/TEDxCityUHK/" target="_blank" rel="noopener noreferrer">
                <Facebook size={40} />
              </a>
              <a href="https://youtube.com/@tedxcityuhongkong" target="_blank" rel="noopener noreferrer">
                <Youtube size={40} />
              </a>
            </SocialIcons>
            <p style={{ marginTop: '2rem', color: 'rgb(147,141,140)' }}>
              Copyright© 2026 TEDxCityUHK
            </p>
          </SocialPanel>
          <ImageCollage>
            <LeftCollage>
              <CollageImg src={p6} alt="Image Footer 1" />
            </LeftCollage>
            <RightCollage>
              <RightImage1>
                <CollageImg src={p7} alt="Image Footer 2" />
              </RightImage1>
              <RightImage2>
                <CollageImg src={p8} alt="Image Footer 3" />
              </RightImage2>
            </RightCollage>
          </ImageCollage>
        </FooterSection>
      </ContentWrapper>
    </Container>
  );
}
