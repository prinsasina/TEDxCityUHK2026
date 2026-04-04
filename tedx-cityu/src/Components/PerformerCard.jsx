import React from "react";
import { styled } from "styled-components";
import Performerdata from "../Data/PerformerData.json";

const Container = styled.div`
  background-color: rgb(0, 0, 0);
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  max-width: 900px;       /* wider container for larger cards */
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1100px;    /* even wider on desktop */
  }
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 9;   /* landscape rectangle, adjust as needed */
`;

export default function PerformerCard() {
  return (
    <Container>
      <CardWrapper>
        {Performerdata.filter(item => !item._example).map((item, index) => (
          <Card key={index}>
            <Image
              src={require("../Assets/Members/Performer/" + item.img)}
              alt={item.fname}
            />
            <div className="text-center font-textfont font-bold text-xl md:text-2xl py-4 text-white bg-black">
              {item.fname}
            </div>
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
}