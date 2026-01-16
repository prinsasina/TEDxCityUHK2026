import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Background1 from '../Assets/background1.png';
import Background2 from '../Assets/background2.png';
import Background3 from '../Assets/background3.JPG';
import Background4 from '../Assets/MetamorphosisLogo.png';
import Timer from './timer.jsx';


const Container = styled.div``;
const BannerWrapper1 = styled.div`
    box-shadow: 0px 6px 4.4px rgba(0, 0, 0, 0.25);
    position: relative;
`;

const BannerWrapper2 = styled.div`
    margin: 0 3%;
`;

const InnerContainer = styled.div`
    background-color: red;
    padding: 1% 2%;
    width: auto;
    height: auto;
    position: absolute;
    left: 5%;
    bottom: 20%;
`;

const Text = styled.h1`
    font-family: sans-serif;
    font-weight: bold;
    // font-size: 2rem;
    @media (min-width:1024px){
        // font-size: 3rem;
    }
    @media (max-width: 768px){
        font-size: 1.8rem;
        padding-bottom: 0;
    }
`;

const Layout1 = styled.div`
    background-image : url(${Background1});
    background-size: cover;
    background-position : center;
`;
const Layout2 = styled.div`
    background-image : url(${Background2});
    background-size: cover;
    background-position : center;
`;
const Layout3 = styled.div`
    background-image : url(${Background3});
    background-size: cover;
    background-position : center;    
`;


const ImageContainer = styled.div`
    width: 40%;
    display:flex;
    justify-content: center;
    float: left;

    @media(max-width: 767px){
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    float: left;
    width: 60%;
    // background: red;
    height: auto;
    padding-top:3%;

    @media(max-width: 767px){ //mobile view
        width: 100%;
        text-align: center;
    }

    @media(min-width: 768px) and (max-width: 1023px){
        padding-top: 5%;
    }
`;

const TimerBox = styled.div`
    display: flex; /* Flexbox to manage alignment */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    background-color: red;
    width: fit-content;
    height: auto;
    margin-left: auto;

    @media (max-width: 1023px) {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;

const SlideInContainer = styled.div`
    opacity: 0;
    transform: translateY(-100%); 
    transition: opacity 4s ease-in-out, transform 2s ease-in-out;
    height:50vh;

    &.slide-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Vector = styled.img.attrs(({ className }) => ({ className }))``;

export const Banner = ({text1,text2, show=true}) =>{
    const bannerRef = useRef(null); // Ref for BannerWrapper2
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
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current); // Start observing
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current); // Cleanup observer
            }
        };
    }, []);

    return(
        <Container>
            {show && <BannerWrapper1 className="relative flex justify-center items-center min-h-36 md:min-h-[30rem] w-full bg-black">
                <Layout1 className='absolute top-0 left-0 bg-red w-[40%] h-[50%]'/>
                <Layout2 className='absolute bottom-0 left-0 bg-red w-[40%] h-[50%]'/>
                <Layout3 className='absolute top-0 right-0 bg-red w-[60%] h-full'/>
                <InnerContainer>
                    <Text className="text-white text-4xl md:text-6xl z-10 pb-3">{text1}</Text>
                    <Text className="text-white text-4xl md:text-6xl z-10">{text2}</Text>
                </InnerContainer>
            </BannerWrapper1>}
            
            {!show && <BannerWrapper2 ref={bannerRef}>
                <SlideInContainer className={isVisible ? 'slide-in' : ''}>
                    <ImageContainer>
                        <img src={Background4} className="w-[80%] mb-10"/>
                    </ImageContainer>
                    <Container>
                        <TitleContainer>
                            <Text className="text-black text-4xl lg:text-6xl z-10 pb-3 lg:text-right md:text-right"><span style={{color:'red'}}>TED</span> X <span style={{color:'red'}}>CITYUHONGKONG</span> 2025</Text>
                            
                            <hr className="lg:h-[10px] h-[5px]" style={{color:'red','background-color':'red'}}/>
                            
                            <Text className="text-black text-5xl lg:text-6xl z-10 lg:pt-12 pt-5 lg:text-right md:text-right">26TH APRIL 2025</Text>
                            <Text className="text-red text-4xl lg:text-4xl z-10 lg:text-right pb-10 md:text-right">SATURDAY</Text>
                        </TitleContainer>
                        <TimerBox className='p-5 flex'>
                            <Timer/>
                        </TimerBox>
                    </Container>
                </SlideInContainer>
            </BannerWrapper2>}
            
            
        </Container>
    )
}

// export const Banner = ({ text }) => {
//     return (
//         <Container>
//             <BannerWrapper className="relative flex justify-center items-center min-h-72 md:min-h-[18rem] w-full bg-black">
//                 <Text className="text-white text-center text-4xl md:text-6xl font-textfont z-10">{text}</Text>
//                 <Vector src={DarkWave} alt="Dark Wave Vector" className="absolute bottom-0 left-0 w-full"/>
//                 <Vector src={LightWave} alt="Light Wave Vector" className="absolute bottom-0 left-0 w-full"/>
//             </BannerWrapper>
//         </Container>
//     );
// };