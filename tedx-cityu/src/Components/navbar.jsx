import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logoWhite from "../Assets/logo-white.png";
import logoBlack from "../Assets/logo-black.png";

const breakpoints = {
  tablet: 1024,
  mobile: 768,
};

const Container = styled.div`
  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavbarWrapper = styled.div`
  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background-color: white;
    align-items: center;
  }
`;

const LogoWrapper = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavSelectionWrapper = styled.div``;

const Selection = styled(NavLink)`
  padding: 5px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    // color: #FCBA2E;
    cursor: pointer;
    animation: myAnim 3s ease 0s 1 normal forwards;
    color: red;
    font-weight:600;
    font-size: 98%;

    @keyframes myAnim {
      0% {
        animation-timing-function: ease-out;
        transform: scale(1);
        transform-origin: center center;
      }

      10% {
        animation-timing-function: ease-in;
        transform: scale(0.91);
      }

      17% {
        animation-timing-function: ease-out;
        transform: scale(0.98);
      }

      33% {
        animation-timing-function: ease-in;
        transform: scale(0.87);
      }

      45% {
        animation-timing-function: ease-out;
        transform: scale(1);
      }
    }
  }

  &.active {
    font-weight: bold;
    background-color: red;
    color: white;
    border-radius: 5rem;
    padding: 1rem;
  }
`;
const Logo = styled.img`
  @media (max-width: ${breakpoints.tablet}px) {
    width: 70%;
    height: auto;
  }
`;

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoints.tablet
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Selection_list = [
    { label: "About", url: "/about" },
    { label: "Crew", url: "/crew" },
    { label: "Past Events", url: "/pastevent" },
    { label: "Registration", url: "/registration" },
  ];
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= breakpoints.tablet);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <NavbarWrapper>
          <LogoWrapper onClick={() => handleNavigate(`/`)}>
            <Logo src={logoBlack} alt="TEDxCityU" />
          </LogoWrapper>
          <BurgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="text-black text-center md:text-5xl text-3xl">☰</div>
          </BurgerMenu>
        </NavbarWrapper>
      ) : (
        <NavbarWrapper className="flex justify-between items-center px-8 py-9 bg-white w-full">
          <LogoWrapper
            className="flex items-center justify-center w-96 h-14"
            onClick={() => handleNavigate(`/`)}
          >
            <Logo src={logoBlack} alt="TEDxCityU" />
          </LogoWrapper>
          <NavSelectionWrapper className="flex items-center justify-around h-14">
            {Selection_list.map((selection, index) => (
              <Selection
                className="text-black mx-11 text-base md:text-xl hover:text-yellow-400"
                key={index}
                to={selection.url}
                activeClassName="active"
              >
                {selection.label}
              </Selection>
            ))}
          </NavSelectionWrapper>
        </NavbarWrapper>
      )}
      {isMobile && isMobileMenuOpen && (
        <MobileMenu>
          {Selection_list.map((selection, index) => (
            <Selection
              key={index}
              to={selection.url}
              activeClassName="active"
              className="my-2 md:text-2xl text-xl text-black text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {selection.label}
            </Selection>
          ))}
        </MobileMenu>
      )}
    </Container>
  );
}
