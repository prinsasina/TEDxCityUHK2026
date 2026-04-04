import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Speakerdata from "../Data/SpeakerData.json";

const Container = styled.div`
  background-color: rgb(0, 0, 0);
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div``;
const Image = styled.img``;

// Helper to fix cropping for specific images (adjust vertical position if needed)
const getImageStyle = (filename) => {
  if (filename === "Emi Wong.jpg" || filename === "Peta Laverick.png") {
    return { objectPosition: "top 20%" }; // shift up to show more head
  }
  return {};
};

export default function SpeakerCard() {
  return (
    <Container>
      <CardWrapper>
        {Speakerdata.filter(item => !item._example).map((item, index) => (
          <Link className="w-full" key={index} to={`/speaker/${item.path}`}>
            <Card className="flex flex-col items-center overflow-hidden rounded-md w-full">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={require("../Assets/Members/Speaker/" + item.img)}
                  alt={item.fname}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                  style={getImageStyle(item.img)}
                />
              </div>
              <div className="text-center font-textfont font-bold text-md md:text-3xl mt-2 md:mt-5 md:mb-7 text-white">
                {item.fname}
              </div>
            </Card>
          </Link>
        ))}
      </CardWrapper>
    </Container>
  );
}