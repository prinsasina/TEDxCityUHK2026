import React from "react";
import styled, { keyframes } from "styled-components";
import { Banner } from "../Components/banner";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";
import SpeakerCard from "../Components/SpeakerCard";
import PerformerCard from "../Components/PerformerCard";
import SponsorCard from "../Components/SponsorCard";
import Timer from "../Components/timer";

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
            <div className="flex-1 flex items-center justify-center pt-[200px] pb-[200px]">
                <Timer />
            </div>
            <div className="bg-white h-[15px] w-full" />
        </div>
    );
}
