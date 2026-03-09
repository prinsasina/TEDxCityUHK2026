import React, { forwardRef } from 'react';
import styled from 'styled-components';

/* 1. THE MAIN WRAPPER: Handles the clicking and size changes */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0; 
  
  /* ADD THIS: Forces the browser to strictly obey these sizes! */
  width: ${props => props.isExpanded ? '300px' : '120px'};
  min-width: ${props => props.isExpanded ? '300px' : '120px'}; 
  
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  margin: 0 10px;
  
  filter: ${props => props.isExpanded ? 'grayscale(0%)' : 'grayscale(60%)'};
  opacity: ${props => props.isExpanded ? '1' : '0.6'};

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

/* 2. THE DYNAMIC SHAPE (Photo goes directly inside!) */
const ImageShape = styled.div`
  width: 100%;
  /* Height changes based on whether it's expanded */
  height: ${props => props.isExpanded ? '350px' : '200px'};
  background-color: ${props => props.deptColor};
  
  /* Here is where your 8 unique shapes get applied! */
  border-radius: ${props => props.cardRadius || '15px'};
  
  border: 5px solid black;
  box-shadow: 8px 8px 0px black;
  overflow: hidden; /* This crops the photo to fit the shape */
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
`;

/* The actual photo */
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the photo covers the shape without stretching */
`;

/* 3. THE INFO BOXES (Underneath the shape) */
const InfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  /* Magic Trick: Hide this text if the card is NOT expanded */
  opacity: ${props => props.isExpanded ? '1' : '0'};
  pointer-events: ${props => props.isExpanded ? 'auto' : 'none'};
  transition: opacity 0.4s ease;
`;

const NameBox = styled.div`
  background-color: white;
  border: 4px solid black;
  box-shadow: 4px 4px 0px black;
  padding: 10px;
  text-align: center;
  font-weight: 900;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: black;
`;

const RoleBox = styled.div`
  background-color: ${props => props.deptColor};
  color: white;
  border: 4px solid black;
  box-shadow: 4px 4px 0px black;
  padding: 8px;
  text-align: center;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px black;
`;

const MemberCardInner = (
  { img, fname, lname, major, position, deptColor, cardRadius, isExpanded, onClick },
  ref
) => {
  return (
    <CardWrapper ref={ref} isExpanded={isExpanded} onClick={onClick}>
      <ImageShape isExpanded={isExpanded} deptColor={deptColor} cardRadius={cardRadius}>
        <ProfileImg src={img} alt={`${fname} ${lname}`} />
      </ImageShape>

      <InfoContainer isExpanded={isExpanded}>
        <NameBox>{fname} {lname}</NameBox>
        <RoleBox deptColor={deptColor}>{position}</RoleBox>
        <RoleBox style={{ backgroundColor: 'white', color: 'black' }}>{major}</RoleBox>
      </InfoContainer>
    </CardWrapper>
  );
};

export const MemberCard = forwardRef(MemberCardInner);
MemberCard.displayName = 'MemberCard';