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
  
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Your existing animated text */}
      <AnimatedText className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
        A <span className="font-bold text-red">TEDx</span><span className="font-bold">CITYUHK</span> Production
      </AnimatedText>
      
      <div className="bg-white h-[15px] w-full" />
      
      {/* NEW: Event Details Section */}
      <section className="text-white py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          APRIL 11TH 2026
        </h2>
        <p className="text-xl sm:text-2xl mb-2">SATURDAY 13:30 - 18:00</p>
        <p className="text-lg sm:text-xl mb-6">
          Wong Cheung Lo Hui Yuet Hall<br />
          Lau Ming Wai Academic Building (AC3)
        </p>
      </section>

      {/* NEW: Theme Section - "THE POWER OF" */}
      <section className="text-white py-16 px-4">
        <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-center space-y-4">
          <div>THE POWER OF</div>
        </div>
      </section>

      {/* NEW: About Section with placeholder text */}
      <section className="text-white py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          TEXT
        </p>
      </section>

      {/* Your existing Countdown section */}
      <div className="flex-1 items-center justify-center pt-[200px] pb-[200px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 uppercase">
          Countdown
        </h2>
        <Timer />
      </div>

      {/* NEW: Visual element description - you may want to add an image here */}
      <div className="text-white text-center py-8 text-xl italic">
        
      </div>

      {/* Your existing team image and button */}
      <div className="w-full">
        <img src={TEDxTeam} alt="TEDx CityU Team" className="w-full h-auto" />
      </div>
      <div className="w-full flex justify-end pr-4 sm:pr-6 pb-4">
        <button onClick={() => navigate('/about')} className="bg-black border-4 border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition">
          READ MORE
        </button>
      </div>
    </div>
  );
}
