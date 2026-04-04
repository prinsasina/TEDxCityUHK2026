import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Speakerdata from "../Data/SpeakerData.json"
import Speaker from "../Components/Speaker";
import p1 from '../Assets/About/p1.png';
import p2 from '../Assets/About/p2.png';
import p3 from '../Assets/About/p3.png';

const Container = styled.div`
    width: 100%;
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

const LeftPanel = styled.div`
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

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
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
    overflow: hidden;
    background: #000;

    @media (max-width: 768px) {
        border-width: 2px;
    }

    @media (max-width: 480px) {
        border-width: 1px;
    }
`;

const HeaderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(80%) contrast(1.2);
`;

const TopText = styled.div`
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
    text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;
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

const BottomText = styled.div`
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
    text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000;
    letter-spacing: 3px;
    text-align: center;
    white-space: nowrap;

    .white-part {
        display: block;
        font-size: 4rem;
    }

    .red-part {
        display: block;
        color: #EB0028;
        font-size: 4rem;
        margin-top: -0.5rem;
    }

    @media (max-width: 1024px) {
        font-size: 2.5rem;

        .white-part,
        .red-part {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

        .white-part,
        .red-part {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        font-size: 1rem;

        .white-part,
        .red-part {
            font-size: 1rem;
        }
    }
`;

const RightPanel = styled.div`
    flex: 0 0 60%;
    position: relative;
    overflow: hidden;
    border: 4px solid black;
    height: 95%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%);

    @media (max-width: 768px) {
        border-width: 2px;
    }

    @media (max-width: 480px) {
        border-width: 1px;
    }
`;

export default function Speakerpage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  let Query = useParams().path;
  const FilteredData = Speakerdata.filter((data) => data.path === Query);
  
    return(
        <Container>
                        <ContentWrapper>
                            <TopSection>
                                <LeftPanel>
                                    <StackedImage>
                                        <HeaderImage src={p1} alt="Speaker header scene" />
                                        <TopText>WHY NOT SEE</TopText>
                                    </StackedImage>
                                    <StackedImage2>
                                        <HeaderImage src={p2} alt="Speaker spotlight" />
                                        <BottomText>
                                            <span className="white-part">OUR</span>
                                            <span className="red-part">SPEAKERS</span>
                                        </BottomText>
                                    </StackedImage2>
                                </LeftPanel>
                                <RightPanel>
                                    <HeaderImage src={p3} alt="TEDx audience" />
                                </RightPanel>
                            </TopSection>
                        </ContentWrapper>
            <Speaker data={FilteredData}/>
        </Container>            
    );
}