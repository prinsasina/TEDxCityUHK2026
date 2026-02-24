import React, { useEffect } from "react";
import { styled } from "styled-components";
import NewAboutTedx from "../Components/newaboutTedx";

const Container = styled.div``;

export default function AboutPage() {
  useEffect(() => {
    // This scrolls the page to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <NewAboutTedx show={true} />
    </Container>
  );
}