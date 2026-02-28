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

const mobileBreakpoint = 768; 
const tabletBreakpoint = 1024;

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
      <AnimatedText className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
        A <span className="font-bold text-red">TEDx</span><span className="font-bold">CITYUHK</span> Production
      </AnimatedText>
      
      <div className="bg-white h-[15px] w-full" />
      
      {/*Theme + Event Details Section */}
      <section className="relative bg-black text-white text-center py-24 overflow-hidden">

      {/* Red Circle */}
      <div className="absolute w-[400px] h-[400px] bg-red-600 rounded-full left-1/2 -translate-x-1/2 top-20 z-0" />

      {/* Content */}
      <div className="relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
        THE POWER OF
      </h2>

      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-100">
        WHY NOT?
      </h1>

      <div className="mt-8 text-sm md:text-base text-gray-300">
        APRIL 11TH 2026 <br />
        SATURDAY 13:30 - 18:00 <br />
        Wong Cheung Lo Hui Yuet Hall
        </div>
      </div>
      </section>

      {/* About Section with placeholder text */}
      <section className="flex flex-col md:flex-row w-full">

        <div className="bg-red-600 text-white flex-1 p-16 text-center">

      </div>

      <div className="bg-black text-white flex-1 p-16">
        <p className="leading-loose text-sm md:text-base">
        LEGACY TEXT
        </p>
      </div>

      </section>

      {/* Countdown section */}
      <div className="flex-1 items-center justify-center pt-[200px] pb-[200px]">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] text-center text-white mb-8 md:mb-12 uppercase"
          style={{ fontFamily: "Bungee, sans-serif" }}
            >
              Countdown
              </h2>
                <Timer />
            </div>

      {/* Existing team image and button */}
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
