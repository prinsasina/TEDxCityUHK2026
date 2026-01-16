import React from "react";
import styled from "styled-components";
import { Banner } from "../Components/banner";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";
import SpeakerCard from "../Components/SpeakerCard";
import PerformerCard from "../Components/PerformerCard";
import SponsorCard from "../Components/SponsorCard";

const Container = styled.div``;

// const mobileBreakpoint = 768; // Adjust as needed for your design
// const tabletBreakpoint = 1024; // Adjust as needed for your design

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
        <Container className="min-h-screen w-full">
            <Banner show={false}/>
            <Counter />
            <AboutTedx show={false}/>
            <SpeakerCard />
            <PerformerCard />
            <SponsorCard />
        </Container>
    );
}
