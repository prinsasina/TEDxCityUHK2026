import React, { useState, useEffect, useRef } from "react";
import '@splidejs/splide/dist/css/splide.min.css';
//import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Banner } from "../Components/banner";
import { MemberCard } from "../Components/membercard";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import technicalData from '../Data/technicalData.json';
import curatorData from '../Data/curatorData.json';
import creativeData from '../Data/creativeData.json';
import eventManagementProcurementData from '../Data/eventManagementProcurementData.json';
import financeSponsorshipData from '../Data/financeSponsorshipData.json';
import humanResourcesData from '../Data/humanResourcesData.json';
import speakerRelationsData from '../Data/speakerRelationsData.json';
import marketingCommunicationData from '../Data/marketingCommunicationData.json';

const breakpoints = {
    tablet: 1024,
    mobile: 768,
};

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  padding: 65px;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 20px;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 10px;
  }
`;

const DepartmentWrapper = styled.div`
  width: 200px;
  margin-right: 20px;

  @media (max-width: ${breakpoints.tablet}px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 35%;
    height: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 45%;
  }
`;

const DepartmentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }
`;

const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}px) {
    padding-top: 50px;
  }
`;

const DepartmentMemberWrapper = styled.div``;

const Department = styled.label`
    transition: all 200ms ease-out;
    &:hover {
        transition-timing-function: ease-in;
        border-bottom: 2px solid;
        color: black;
        cursor: pointer;
    }
    &:checked {
        color: black;
    }

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 1rem;
  }
`;

const DepartmentRadio = styled.input.attrs({
    type: "radio",
})``;

const CarouselWrapper = styled.div`
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

const StyledMemberCard = styled(MemberCard)`
  height: 500px;
`;

const HamburgerButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')};
    position: absolute;
    left: 20px;
    top: 17px;
  }
`;

const DepartmentButton = styled.button`
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 25;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    background: none;
    border: none;
    cursor: pointer;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  width: 25px;
  height: 2.5px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
`;

const CurrentDepartment = styled.div`
  font-size: 1.65rem;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-grow: 1;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 1.45rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.3rem;
  }
`;

const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 5px;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export default function TeamPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [Dept, setDept] = useState('Curators');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoints.tablet);
    const departmentWrapperRef = useRef(null);

    const list_of_department = {
        "Curators": curatorData,
        "Creative": creativeData,
        "Event Management and Procurement": eventManagementProcurementData,
        "Finance and Sponsorship": financeSponsorshipData,
        "Human Resources": humanResourcesData,
        "Speaker Relations": speakerRelationsData,
        "Marketing and Communication": marketingCommunicationData,
        "Technical": technicalData
    };

    const handleChange = (department) => {
        setDept(department);
        if (isMobile) {
            setMenuOpen(false);
        }
        console.log(department);
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoints.tablet);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const RenderDepartment = (Dept) => {
        let data = (list_of_department[Dept] || []).filter(item => !item._example);
        if (data.length === 0) return null;
        if (isMobile) {
            return (
                <>
                    {data.map((item, index) => (
                        <div key={index} className="p-4 mx-auto">
                            <MemberCard
                                img={require("../Assets/Members/" + item.img)}
                                fname={item.fname}
                                lname={item.lname}
                                major={item.major}
                                origin={item.origin}
                                position={item.position}
                                cardWidth="350px"
                                cardHeight="550px"
                            />
                        </div>
                    ))}
                </>
            );
        } else {
            const showArrows = data.length > 3;
            const perPage = data.length < 3 ? data.length : 3;
            const cardWidth = 320;
            const gapSize = 35;
            const splideWidth = (cardWidth * perPage) + (gapSize * (perPage - 1));

            return (
                <Splide
                    hasTrack={false}
                    options={{
                        perPage: perPage,
                        rewind: true,
                        width: splideWidth,
                        height: "500px",
                        gap: gapSize,
                        arrows: showArrows,
                        pagination: false,
                        drag: data.length > perPage ? true : false,
                    }}
                    className="splide justify-center items-center"
                >
                    <SplideTrack>
                        {data.map((item, index) => (
                            <SplideSlide key={index}>
                                <StyledMemberCard
                                    img={require("../Assets/Members/" + item.img)}
                                    fname={item.fname}
                                    lname={item.lname}
                                    major={item.major}
                                    origin={item.origin}
                                    position={item.position}
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            );
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (departmentWrapperRef.current && !departmentWrapperRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [departmentWrapperRef]);

    return (
        <Container>
            <Banner text1={"OUR"} text2={<span style={{color:"black"}}>CREW</span>}/>
            {isMobile ? (
                <>
                    <MenuHeader>
                        <HamburgerButton isMenuOpen={menuOpen} onClick={toggleMenu}>
                            <HamburgerIcon />
                            <HamburgerIcon />
                            <HamburgerIcon />
                        </HamburgerButton>
                        <CurrentDepartment>{Dept}</CurrentDepartment>
                        <div></div>
                    </MenuHeader>
                    <ContentWrapper>
                        <DepartmentWrapper isOpen={menuOpen} ref={departmentWrapperRef}>
                            <DepartmentButton onClick={toggleMenu}>
                                Department
                            </DepartmentButton>
                            <DepartmentList className="pt-10" style={{ paddingTop: '50px' }}>
                                {Object.keys(list_of_department).map((department, index) => (
                                    <DepartmentMemberWrapper key={index} className="my-2.5">
                                        <DepartmentRadio id={department} name='department' className='hidden peer' value={department} onChange={() => handleChange(department)} defaultChecked={department === "Curators"} />
                                        <Department htmlFor={department} className='w-full py-1 text-xl text-base text-gray border-b border-gray inline-flex peer-checked:text-black peer-checked:border-black peer-checked:border-b-2'>
                                            {department}
                                        </Department>
                                    </DepartmentMemberWrapper>
                                ))}
                            </DepartmentList>
                        </DepartmentWrapper>
                        <CarouselWrapper>
                            {RenderDepartment(Dept)}
                        </CarouselWrapper>
                    </ContentWrapper>
                </>
            ) : (
                <ContentWrapper className="flex items-center py-20 px-14">
                    <DepartmentWrapper className="flex flex-col">
                        <DepartmentTitle className="text-3xl font-bold font-textfont mb-8">
                            Department
                        </DepartmentTitle>
                        <DepartmentList className="flex flex-col">
                            {Object.keys(list_of_department).map((department, index) => (
                                <DepartmentMemberWrapper key={index} className="my-2.5">
                                    <DepartmentRadio id={department} name='department' className='hidden peer' value={department} onChange={() => handleChange(department)} defaultChecked={department === "Curators"} />
                                    <Department htmlFor={department} className='w-full py-1 text-xl text-base text-gray border-b border-gray inline-flex peer-checked:text-black peer-checked:border-black peer-checked:border-b-2'>
                                        {department}
                                    </Department>
                                </DepartmentMemberWrapper>
                            ))}
                        </DepartmentList>
                    </DepartmentWrapper>
                    <CarouselWrapper className="ml-10 mx-auto h-96 flex justify-center items-center">
                        {RenderDepartment(Dept)}
                    </CarouselWrapper>
                </ContentWrapper>
            )}
        </Container>
    );
}