import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 480px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: white;
  margin: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const TextContent = styled.div`
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const TopSection = styled.div``;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1.1rem;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Position = styled.p`
  font-weight: bold;
`;

const MemberCard = ({ img, fname, lname, major, position }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img} alt={`${fname} ${lname}`} />
      </ImageContainer>
      <TextContent>
        <TopSection>
          <Name>
            {fname}
            <br />
            {lname}
          </Name>
        </TopSection>
        <BottomSection>
          <p>{major}</p>
          <Position>{position}</Position>
        </BottomSection>
      </TextContent>
    </CardContainer>
  );
};

export { MemberCard };