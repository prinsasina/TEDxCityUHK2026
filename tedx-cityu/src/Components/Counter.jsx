import React, {useRef, useState, useEffect} from "react";
import {styled} from "styled-components";
import Butterfly from "../Assets/MetamorphosisLogo2.png";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (min-width: 768px) { // Assuming 768px is the tablet breakpoint
    padding: 4rem;
    margin:0;
  }

  @media (min-width: 1024px) { // Adjust for desktop view if necessary
    flex-direction: row;
    align-items: center;
  }
`;

const CounterContainer = styled.div`
  height: 18rem;
  padding: 0.75rem;

  @media (min-width: 768px){ // Adjust for tablet view
    text-align:center;
  }

  @media (min-width: 1024px) { // Adjust for desktop view
    text-align: left;
    padding: 2.25rem 3.5rem;
  }
  
`;

const TitleText = styled.div`
  text-align :left;
  font-weight : bold;
`;

const DescriptionWrapper = styled.div`
  // font-size: 1.5rem;
  line-height: 150%;
  // font-weight: bold;
  padding-top: 2rem;
  padding-bottom: 0;
  padding-left: 2rem;
  padding-right: 3.5rem;

  @media (max-width:1023px){
    padding-top:1rem;
  }
`;

const Left = styled.div`
  width: 90%;
  align-items: center;
  border: 10px solid red;
  margin-bottom: 1.5rem;


  @media (min-width: 1024px) { // Desktop view
    width: 40%;
    justify-content: flex-start;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media (min-width: 1024px) { // Desktop view
    width: 50%;
    justify-content: right; 
  }
`;

const ArtWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }

  //OMIT THE BUTTERFLY PICTURE WHEN TABLET AND MOBILE VIEW
  @media(max-width: 1023px){
    display:none;
  }
`;

const ArtPic = styled.img`
  width: 100%;
  height: auto;
`;

const Register = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 3rem;
`;

const SlideInContainer = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  margin-bottom: 10%;

  @media (max-width: 1023px){
    margin-top: 40%;
  }

  &.slide-in {
    opacity: 1;
    transform: translateX(0);
  }
`;


export default function Counter() {
  const counterRef = useRef(null); // Ref for the Counter component
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
          observer.unobserve(entry.target); // Stop observing after animation
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current); // Start observing
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <Container className="flex justify-center w-full" ref={counterRef}>
      <SlideInContainer className={isVisible ? "slide-in" : ""}>
        <Wrapper className="md:mx-8">
          <Left className="w-full md:w-1/2">
          <TitleText className="text-black text-4xl md:text-6xl z-10 pb-0 text-right text-red lg:p-9 p-8">2025 THEME</TitleText>
          <DescriptionWrapper className="w-full font-textfont md:text-2xl">
            Our theme for the TEDxCityUHongKong 2024 event is “Metamorphosis”. We expect our speakers to share their "secrets" to the audience. 
            The secrets that we are referring may include industry insider insights, or the key to their personal successes. 
            We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience.
          </DescriptionWrapper>
          <Register className="md:text-3xl text-2xl">
            <a href="https://forms.gle/C8ZV2JNfhEAnJ1GG9" target="_blank" rel="noopener noreferrer">
              <span style={{border:'5px solid','font-weight':'bold','padding':'0 5px'}}>
                REGISTER NOW!
              </span>
            </a>
          </Register>
          </Left>

          <Right className="w-full md:w-1/2">
            <ArtWrapper>
              <ArtPic src={Butterfly} alt="TEDxCityUHongKong 2025 Metamorphosis" className="mx-auto w-[60%] h-[60%]"/>
            </ArtWrapper>
          </Right>
        </Wrapper>
      </SlideInContainer>
    </Container>
  );
}