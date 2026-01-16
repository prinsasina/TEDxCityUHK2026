import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Sponsordata from "../Data/SponsorData.json";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: auto;
  padding: 2rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 50%;
  }

`;

export default function SponsorCard() {
    return (
      <section id="sponsor-section"> {}
        <Container>
          {/* <div className="mt-5 font-bold text-red text-center font-textfont text-4xl py-4 md:text-7xl md:py-7">
            Sponsors
          </div> */}
          <CardWrapper>
            {Sponsordata.filter(item => !item._example).map((item, index) => (
              <Link key={index} to={item.path} target="_blank" rel="noopener noreferrer">
                <Card>
                  <Image 
                    src={require("../Assets/Members/Sponsor/" + item.img)}
                    alt={item.name}
                    className="rounded-md"
                  />
                </Card>
              </Link>
            ))}
          </CardWrapper>
        </Container>
      </section>
    );
  }