import React, { useEffect } from "react";
import { styled } from "styled-components";
import AboutTedx from "../Components/aboutTedx";

const Container = styled.div``;

export default function AboutPage() {
  useEffect(() => {
    // This scrolls the page to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <AboutTedx show={true} />
    </Container>
  );
}