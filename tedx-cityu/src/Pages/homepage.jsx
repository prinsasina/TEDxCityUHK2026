import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Banner } from "../Components/banner";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";
import SpeakerCard from "../Components/SpeakerCard";
import PerformerCard from "../Components/PerformerCard";
import SponsorCard from "../Components/SponsorCard";
import Timer from "../Components/timer";
import TEDxTeam from "../Assets/TEDxTeam2025.png";

// const mobileBreakpoint = 768; // Adjust as needed for your design
// const tabletBreakpoint = 1024; // Adjust as needed for your design

const riseFromBottom = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedText = styled.div`
  padding-top: 350px;
  padding-bottom: 350px;
  animation: ${riseFromBottom} 1s ease-out forwards;
`;

export default function HomePage() {
    const navigate = useNavigate();
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // const isTablet = windowWidth >= mobileBreakpoint && windowWidth < tabletBreakpoint;
    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* <Banner show={false}/>
            <Counter />
            <AboutTedx show={false}/>
            <SpeakerCard />
            <PerformerCard />
            <SponsorCard /> */}
            <AnimatedText className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                A <span className="font-bold text-red">TEDx</span><span className="font-bold">CITYUHK</span> Production
            </AnimatedText>
            <div className="bg-white h-[15px] w-full" />
            <div className="flex-1 items-center justify-center pt-[200px] pb-[200px]">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] text-center text-white mb-8 md:mb-12 uppercase"
                style={{ fontFamily: "Bungee, sans-serif" }}
              >
                Countdown
              </h2>
                <Timer />
            </div>
            <SponsorCard />
            <div className="w-full">
                <img src={TEDxTeam} alt="TEDx CityUHK Team" className="w-full h-auto" />
            </div>
            <div className="w-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10">
                <button onClick={() => navigate('/about')} className="bg-black border-4 border-white text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:px-12 lg:py-6 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold hover:bg-white hover:text-black transition-colors duration-300">
                    READ MORE
                </button>
            </div>
        </div>
    );
}
