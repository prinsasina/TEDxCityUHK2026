import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Tambah useLocation
import TeamPage from "./Pages/teampage";
import HomePage from "./Pages/homepage";
import PastEventPage from "./Pages/pasteventpage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import SpeakerPage from "./Pages/Speakerpage";
import PerformerPage from "./Pages/Performerpage";
import AboutTedx from "./Components/aboutTedx";
import RegistrationPage from "./Pages/registrationpage";

const Container = styled.div`
  overflow-x: hidden;
`;

function AppContent() {
  const location = useLocation();
  const mobileBreakpoint = 768;
  const tabletBreakpoint = 1024;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < mobileBreakpoint;
  const isTablet = windowWidth >= mobileBreakpoint && windowWidth < tabletBreakpoint;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAboutPage = location.pathname === '/about';

  return (
    <Container>
      {isMobile ? <Navbar /> : isTablet ? <Navbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutTedx show={true} />} />
        <Route path="/crew" element={<TeamPage isMobile={isMobile} isTablet={isTablet} />} />
        <Route path="/pastevent" element={<PastEventPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/speaker/:path" element={<SpeakerPage />} />
      </Routes>
      {!isAboutPage && <Footer />}
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;