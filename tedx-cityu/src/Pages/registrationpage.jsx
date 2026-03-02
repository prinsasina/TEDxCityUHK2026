import React, { useEffect } from "react";
import { styled } from "styled-components";
import Timer from "../Components/timer";

const Container = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const PlaceholderSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 4rem;
  text-align: center;
`;

const PlaceholderTitle = styled.h2`
  font-family: Bungee, sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
`;

const PlaceholderText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #A1A1A1;
  max-width: 32rem;
  line-height: 1.6;
`;

export default function RegistrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PlaceholderSection>
        <PlaceholderTitle>Registration opens soon</PlaceholderTitle>
        <PlaceholderText>
          Save the date — March 23rd. We’ll open registration here. Check back or follow us for updates.
        </PlaceholderText>
        <Timer targetDate="2026-03-23" />
      </PlaceholderSection>
    </Container>
  );
}
