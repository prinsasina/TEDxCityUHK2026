import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Banner } from "../Components/banner";
import { MemberCard } from "../Components/membercard";

import technicalData from '../Data/technicalData.json';
import curatorData from '../Data/curatorData.json';
import creativeData from '../Data/creativeData.json';
import eventManagementProcurementData from '../Data/eventManagementProcurementData.json';
import financeSponsorshipData from '../Data/financeSponsorshipData.json';
import humanResourcesData from '../Data/humanResourcesData.json';
import speakerRelationsData from '../Data/speakerRelationsData.json';
import marketingCommunicationData from '../Data/marketingCommunicationData.json';
import pp1 from "../Assets/TeamCrew/pp1.JPG"
import pp2 from "../Assets/TeamCrew/pp2.JPG"
import pp3 from "../Assets/TeamCrew/pp3.JPG"

const breakpoints = { tablet: 1024, mobile: 768, phone: 480 };

const deptStyleConfig = {
    "Curators": { primaryColor: "#A31D1D", cardRadius: "15px" }, 
    "Creative": { primaryColor: "#2E9F45", cardRadius: "50px 0px 50px 0px" }, 
    "Technical": { primaryColor: "#1D45A3", cardRadius: "60px 60px 15px 15px" }, 
    "Marketing and Communication": { primaryColor: "#E69F2E", cardRadius: "0px" }, 
    "Human Resources": { primaryColor: "#D61DE6", cardRadius: "20px 20px 0 0" }, 
    "Finance and Sponsorship": { primaryColor: "#1DE6D6", cardRadius: "0 40px 0 40px" }, 
    "Event Management and Procurement": { primaryColor: "#581A9B", cardRadius: "40px" }, 
    "Speaker Relations": { primaryColor: "#E6D61D", cardRadius: "15px 50px 15px 50px" }, 
};

const defaultStyle = { primaryColor: "#333", cardRadius: "15px" };

/* =========================================================
   STYLED COMPONENTS
   ========================================================= */
const Container = styled.div`
  background-color: #f4f4f4;
  background-image: radial-gradient(${props => props.dotColor} 1.5px, transparent 1.5px);
  background-size: 15px 15px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderBanner = styled.div`
  background-color: ${props => props.bgColor}; 
  border-top: 8px solid black;
  border-bottom: 8px solid black;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  gap: 16px;
  transform: skewY(-2deg);
  margin-top: -10px;
  margin-bottom: 40px;
  box-shadow: 0px 15px 0px rgba(0,0,0,0.1);
  transition: background-color 0.4s ease;
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 20px 24px;
    gap: 12px;
    margin-bottom: 24px;
  }
  @media (max-width: ${breakpoints.phone}px) {
    padding: 14px 16px;
    gap: 10px;
    margin-bottom: 16px;
    border-top-width: 4px;
    border-bottom-width: 4px;
  }
`;

const DepartmentTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  border: 4px solid white;
  padding: 10px 30px;
  display: inline-block;
  transform: skewY(2deg);
  box-shadow: 6px 6px 0px black;
  background-color: ${props => props.bgColor}; 
  transition: background-color 0.4s ease;
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.5rem;
    padding: 8px 20px;
  }
  @media (max-width: ${breakpoints.phone}px) {
    font-size: 1rem;
    padding: 6px 12px;
    border-width: 3px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 0 65px;
  flex-grow: 1;
  @media (max-width: ${breakpoints.tablet}px) {
    padding: 20px;
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.phone}px) {
    padding: 12px;
  }
`;

const DepartmentWrapper = styled.div`
  width: 250px;
  margin-right: 40px;
  background-color: black;
  padding: 30px 20px;
  border: 4px solid black;
  flex-shrink: 0;
  
  @media (max-width: ${breakpoints.tablet}px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 60%;
    height: 100%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out;
  }
  @media (max-width: ${breakpoints.phone}px) {
    width: 80%;
    padding: 20px 16px;
    border-width: 3px;
  }
`;

const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Department = styled.label`
    display: block;
    width: 100%;
    padding: 10px 15px;
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    background-color: #222;
    border: 3px solid transparent;
    transition: all 0.2s ease-out;
    &:hover { background-color: #444; cursor: pointer; transform: translateX(5px); }
    input:checked + & {
        background-color: white;
        color: black;
        border: 3px solid black;
        box-shadow: 5px 5px 0px ${props => props.accentColor};
    }
    @media (max-width: ${breakpoints.phone}px) {
        padding: 8px 12px;
        font-size: 0.9rem;
    }
`;

const DepartmentRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const SmartGalleryContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => props.dotColor}; 
  transform: skewY(-2deg);
  border: 6px solid black;
  box-shadow: 10px 10px 0px rgba(0,0,0,0.3);
  padding: 60px 40px; 
  
  display: flex;
  align-items: flex-start; 
  gap: 20px; 
  
  /* Use flex-start so EVERY department aligns uniformly to the left edge */
  justify-content: safe center; 
  overflow-x: auto;
  min-height: 600px;
  scroll-behavior: smooth; 

  & > * {
    /* 1. Untilt the cards */
    transform: skewY(2deg);
    /* 2. STOP Flexbox from eating the space of large departments! */
    flex-shrink: 0 !important; 
  }

  &::-webkit-scrollbar { height: 12px; }
  &::-webkit-scrollbar-track { background: transparent; border-top: 4px solid black; }
  &::-webkit-scrollbar-thumb { background: black; border-radius: 0; }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 30px 20px;
    min-height: 400px;
  }
  @media (max-width: ${breakpoints.phone}px) {
    padding: 20px 44px;
    min-height: 350px;
    border-width: 4px;
    gap: 12px;
  }
`;

const GalleryShell = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SingleCardContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 16px;
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: ${({ direction }) =>
      direction === 1 ? slideInFromRight : slideInFromLeft}
    250ms ease-out;
`;

const GalleryArrowButton = styled.button`
  display: none;
  @media (max-width: ${breakpoints.phone}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;

    width: 36px;
    height: 36px;
    border: 3px solid black;
    box-shadow: 4px 4px 0px black;
    background: white;
    color: black;
    cursor: pointer;
    padding: 0;

    left: ${({ side }) => (side === 'left' ? '8px' : 'auto')};
    right: ${({ side }) => (side === 'right' ? '8px' : 'auto')};

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }

    &:active {
      transform: translateY(-50%) translateY(1px);
      box-shadow: 2px 2px 0px black;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  cursor: pointer;
  background: #A31D1D;
  border: 3px solid black;
  padding: 5px;
  flex-shrink: 0;
  @media (max-width: ${breakpoints.tablet}px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${breakpoints.phone}px) {
    padding: 4px;
    border-width: 2px;
  }
`;

const HamburgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  @media (max-width: ${breakpoints.phone}px) {
    width: 20px;
    height: 2px;
    margin: 3px 0;
  }
`;

const BackdropOverlay = styled.div`
  display: none;
  @media (max-width: ${breakpoints.tablet}px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
`;

const FooterBanner = styled.div`
    background-color: black;
    border-top: 8px solid ${props => props.accentColor || '#A31D1D'};
    padding: 60px 50px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-image: radial-gradient(${props => props.dotColor} 1px, transparent 1px);
    background-size: 15px 15px;
`;

const FooterText = styled.div`
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    transform: skewY(-4deg);
    text-shadow: 2px 2px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black;
    position: relative;
    z-index: 2;
    &:before {
        content: '';
        position: absolute;
        top: -10px;
        left: -20px;
        width: calc(100% + 40px);
        height: calc(100% + 20px);
        background-color: ${props => props.accentColor || '#A31D1D'};
        transform: skewX(-15deg);
        z-index: -1;
        border: 4px solid black;
        box-shadow: 8px 8px 0px black;
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

/* =========================================================
   MAIN COMPONENT LOGIC
   ========================================================= */
export default function TeamPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoints.tablet);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= breakpoints.phone);
    const [slideDirection, setSlideDirection] = useState(1); // 1 = next/right, -1 = prev/left
    
    const [Dept, setDept] = useState('Curators');
    const [activeCardIndex, setActiveCardIndex] = useState(0); 
    const activeCardRef = useRef(null);
    const departmentWrapperRef = useRef(null);
    
    const list_of_department = {
        "Curators": curatorData,
        "Creative": creativeData,
        "Event Management and Procurement": eventManagementProcurementData,
        "Finance and Sponsorship": financeSponsorshipData,
        "Human Resources": humanResourcesData,
        "Speaker Relations": speakerRelationsData,
        "Marketing and Communication": marketingCommunicationData,
        "Technical": technicalData
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoints.tablet);
            setIsPhone(window.innerWidth <= breakpoints.phone);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (department) => {
        setDept(department);
        setActiveCardIndex(0); 
        if (isMobile) setMenuOpen(false); 
    }

    useEffect(() => {
        if (isPhone) return;

        const cardEl = activeCardRef.current;
        if (!cardEl) return;

        const containerEl = cardEl.parentElement;
        if (!containerEl) return;

        const containerRect = containerEl.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();

        const currentScrollLeft = containerEl.scrollLeft;
        const offsetWithinContainer = cardRect.left - containerRect.left;
        const centerOffset = (containerRect.width - cardRect.width) / 2;
        const targetScrollLeft = currentScrollLeft + offsetWithinContainer - centerOffset;

        containerEl.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth',
        });
    }, [activeCardIndex, Dept, isPhone]); 

    const currentStyle = deptStyleConfig[Dept] || defaultStyle;

    const RenderDepartment = (Dept, activeStyle) => {
        let data = (list_of_department[Dept] || []).filter(item => !item._example);
        if (data.length === 0) return null;

        const clampedIndex = Math.min(Math.max(activeCardIndex, 0), data.length - 1);
        const isPrevDisabled = clampedIndex <= 0;
        const isNextDisabled = clampedIndex >= data.length - 1;

        if (isPhone) {
            const active = data[clampedIndex];
            if (!active) return null;

            return (
                <GalleryShell>
                    {data.length > 1 && (
                        <>
                            <GalleryArrowButton
                                type="button"
                                side="left"
                                aria-label="Previous person"
                                disabled={isPrevDisabled}
                                onClick={() => {
                                    setSlideDirection(-1);
                                    setActiveCardIndex((i) => Math.max(0, i - 1));
                                }}
                            >
                                ‹
                            </GalleryArrowButton>
                            <GalleryArrowButton
                                type="button"
                                side="right"
                                aria-label="Next person"
                                disabled={isNextDisabled}
                                onClick={() => {
                                    setSlideDirection(1);
                                    setActiveCardIndex((i) => Math.min(data.length - 1, i + 1));
                                }}
                            >
                                ›
                            </GalleryArrowButton>
                        </>
                    )}
                    <SingleCardContainer>
                        <AnimatedCard
                            key={`${Dept}-${clampedIndex}`}
                            direction={slideDirection}
                        >
                            <MemberCard
                                img={require("../Assets/Members/" + active.img)}
                                fname={active.fname}
                                lname={active.lname}
                                major={active.major}
                                position={active.position}
                                deptColor={activeStyle.primaryColor}
                                cardRadius={activeStyle.cardRadius}
                                isExpanded={true}
                            />
                        </AnimatedCard>
                    </SingleCardContainer>
                </GalleryShell>
            );
        }

        return (
            <GalleryShell>
                {data.length > 1 && (
                    <>
                        <GalleryArrowButton
                            type="button"
                            side="left"
                            aria-label="Previous person"
                            disabled={isPrevDisabled}
                            onClick={() => setActiveCardIndex((i) => Math.max(0, i - 1))}
                        >
                            ‹
                        </GalleryArrowButton>
                        <GalleryArrowButton
                            type="button"
                            side="right"
                            aria-label="Next person"
                            disabled={isNextDisabled}
                            onClick={() => setActiveCardIndex((i) => Math.min(data.length - 1, i + 1))}
                        >
                            ›
                        </GalleryArrowButton>
                    </>
                )}
                <SmartGalleryContainer dotColor={activeStyle.primaryColor}>
                    {data.map((item, index) => {
                        // Removed the "small team" logic entirely! Every department behaves the exact same way now.
                        const isActive = activeCardIndex === index;

                        return (
                            <MemberCard
                                key={index}
                                ref={isActive ? activeCardRef : null} 
                                img={require("../Assets/Members/" + item.img)}
                                fname={item.fname}
                                lname={item.lname}
                                major={item.major}
                                position={item.position}
                                deptColor={activeStyle.primaryColor}
                                cardRadius={activeStyle.cardRadius}
                                isExpanded={isActive}
                                onClick={() => setActiveCardIndex(index)}
                            />
                        );
                    })}
                </SmartGalleryContainer>
            </GalleryShell>
        );
    };

    return (
        <Container dotColor={currentStyle.primaryColor}>
            
            {/* <Banner 
                text1={"WHY NOT LEARN"} 
                text2={<span style={{
                    color: currentStyle.primaryColor, 
                    textShadow: "2px 2px 0px black",
                    transition: "color 0.4s ease" 
                }}>ABOUT OUR CREW</span>}
            /> */}

            <TopSection>
                <LeftPanel>
                    <StackedImage>
                    <ImageWithOverlay src={pp1} alt="Image Title 1" />
                    <ImageTextOverlay2>
                        <span className="about-part">WHY NOT LEARN </span>
                    </ImageTextOverlay2>
                    </StackedImage>
                    <StackedImage2>
                    <ImageWithOverlay src={pp2} alt="Image Title 2" />
                    <ImageTextOverlay>
                        <span className="about-part">ABOUT</span>
                        <span className="tedx-part">Our Crew</span>
                    </ImageTextOverlay>
                    </StackedImage2>
                </LeftPanel>
                <RightPanel>
                    <EventPhoto src={pp3} alt="Image Title 3" />
                </RightPanel>
            </TopSection>
            
            <HeaderBanner bgColor={currentStyle.primaryColor}>
                {isMobile && (
                    <HamburgerButton isMenuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <HamburgerIcon />
                        <HamburgerIcon />
                        <HamburgerIcon />
                    </HamburgerButton>
                )}
                <DepartmentTitle bgColor={currentStyle.primaryColor}>
                    {Dept}
                </DepartmentTitle>
            </HeaderBanner>

            {isMobile && <BackdropOverlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} aria-hidden="true" />}

            <ContentWrapper>
                <DepartmentWrapper isOpen={menuOpen} ref={departmentWrapperRef}>
                    <DepartmentList>
                        {Object.keys(list_of_department).map((department, index) => (
                            <div key={index}>
                                <DepartmentRadio id={department} name='department' value={department} onChange={() => handleChange(department)} checked={Dept === department} />
                                <Department htmlFor={department} accentColor={deptStyleConfig[department]?.primaryColor}>
                                    {department}
                                </Department>
                            </div>
                        ))}
                    </DepartmentList>
                </DepartmentWrapper>
                
                {RenderDepartment(Dept, currentStyle)}
                
            </ContentWrapper>

            <FooterBanner accentColor={currentStyle.primaryColor} dotColor={currentStyle.primaryColor}>
                {/* <FooterText accentColor={currentStyle.primaryColor}>
                    Become the next curator? Join us!
                </FooterText> */}
            </FooterBanner>

        </Container>
    );
}