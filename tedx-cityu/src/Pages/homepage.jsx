import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import SpeakerCard from "../Components/SpeakerCard";
import PerformerCard from "../Components/PerformerCard";
import SponsorCard from "../Components/SponsorCard";
import TEDxTeam from "../Assets/TEDxTeam2025.png";
import Event_details from "../Assets/Event_details.png";
import pamphlet from "../Assets/pamphlet.pdf";
import pamphletPreview from "../Assets/pamphlet.png";

// ─── Animations ───
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

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(235, 0, 0, 0.5); }
  50%       { box-shadow: 0 0 0 10px rgba(235, 0, 0, 0); }
`;

// ─── Styled Components ───
const AnimatedText = styled.div`
  padding-top: 350px;
  padding-bottom: 350px;
  animation: ${riseFromBottom} 1s ease-out forwards;
`;

const PamphletSection = styled.section`
  background: #000;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PamphletTitle = styled.h2`
  font-family: "Bungee", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
`;

const PamphletCard = styled.div`
  width: 100%;
  max-width: 860px;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  background: #111;
`;

const PamphletToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: #1a1a1a;
  border-bottom: 1px solid #333;
  font-size: 0.8rem;
  color: #888;
  font-family: monospace;
`;

const ToolbarDots = styled.div`
  display: flex;
  gap: 6px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
  }
  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }
`;

const ScrollablePreview = styled.div`
  width: 100%;
  height: 620px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  scroll-behavior: smooth;

  @media (max-width: 640px) {
    height: 420px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  background: #e62b1e;
  color: #fff;
  font-family: "Bungee", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  animation: ${pulse} 2.5s ease 1.5s 2;
  margin-top: 1.5rem;

  &:hover {
    background: #c0241a;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

// ─── Download Icon ───
const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ─── PamphletViewer (inline) ───
function PamphletViewer({ 
  pamphletUrl, 
  previewUrl = pamphletPreview,
  downloadName = "TEDxCityUHK2026-pamphlet.pdf" 
}) {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = pamphletUrl;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PamphletSection>
      <PamphletTitle>Event Pamphlet</PamphletTitle>

      <PamphletCard>
        <PamphletToolbar>
          <ToolbarDots><span /><span /><span /></ToolbarDots>
          <span>{downloadName}</span>
          <span />
        </PamphletToolbar>

        {/* Scrollable frame with PNG image */}
        <ScrollablePreview>
          <img 
            src={previewUrl} 
            alt="TEDxCityUHK2026 Event Pamphlet Preview"
          />
        </ScrollablePreview>
      </PamphletCard>

      <DownloadButton href={pamphletUrl} onClick={handleDownload}>
        <DownloadIcon /> Download Pamphlet
      </DownloadButton>
    </PamphletSection>
  );
}

// ─── HomePage content ────
export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <AnimatedText className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                A <span className="font-bold text-red">TEDx</span>
                <span className="font-bold">CITYUHK</span> Production
            </AnimatedText>
            <div className="bg-white h-[15px] w-full" />
            
            <div className="w-full bg-black flex justify-center">
                <img
                    src={Event_details}
                    alt="TEDx CityUHK Hero"
                    className="w-full h-auto max-w-none object-contain"
                />
            </div>

            {/* Countdown Section */}
            {/* <div className="flex-1 items-center justify-center pt-[200px] pb-[200px]">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] text-center text-white mb-8 md:mb-12 uppercase"
                    style={{ fontFamily: "Bungee, sans-serif" }}
                >
                    Countdown
                </h2>
                <Timer />
            </div> */}

            {/* Pamphlet Section — placed before sponsors */}
             <PamphletViewer
                pamphletUrl={pamphlet}
                downloadName="TEDxCityUHK2026-pamphlet.pdf"
            />

            {/* === SPEAKERS SECTION (first) === */}
            <div className="py-16 bg-black">
                <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12 uppercase" 
                    style={{ fontFamily: "Bungee, sans-serif" }}>
                    Speakers
                </h2>
                <SpeakerCard />
            </div>

            {/* === PERFORMERS SECTION (second) === */}
            <div className="py-16 bg-black">
                <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12 uppercase" 
                    style={{ fontFamily: "Bungee, sans-serif" }}>
                    Performers
                </h2>
                <PerformerCard />
            </div>

            {/* Original SponsorCard and team image – keep as they were */}
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