import React from "react";
import { styled } from "styled-components";
import { AiOutlineInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineFacebook} from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const FooterContainer = styled.div`
    background: black;
`;
const CopyrightWrapper = styled.div``;
const Copyright = styled.p``;
const SocialMediaWrapper = styled.div`
    // padding-bottom: 1%;
`;
const SocialMediaLogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
    }
`;

const FollowUs = styled.div`
    color: ${props => props.$isHomepage ? 'white' : 'black'};
    background: ${props => props.$isHomepage ? 'black' : 'white'};
`;

export default function Footer() {
    const location = useLocation();
    const isHomepage = location.pathname === '/';
    const sizing = "w-11 h-11";
    const Social_media_logo = [<AiOutlineInstagram className={sizing}/>,  <AiFillLinkedin className={sizing}/>,  <AiOutlineFacebook className={sizing}/>, <AiFillYoutube className={sizing}/>];
    const Link = ["https://www.instagram.com/tedxcityuhongkong/", "https://www.linkedin.com/company/tedxcityuhongkong/", "https://www.facebook.com/TEDxCityUHK/","https://youtube.com/@tedxcityuhongkong?si=zqA9FgialVaH8CGB"];
    return (
        <Container>
            <FollowUs $isHomepage={isHomepage} className="text-center md:text-7xl text-5xl top-1 md:top-2">FOLLOW US!</FollowUs>
            <FooterContainer className="items-center h-24 w-full bg-black px-5 md:px-12 py-5">
                { <SocialMediaWrapper className="flex justify-center items-center font-textfont text-white">
                    {Social_media_logo.map((logo, index) => (
                        <SocialMediaLogoWrapper key={index} target="_blank" href={Link[index]} className="px-3">
                            {logo}
                        </SocialMediaLogoWrapper>
                    ))}
                </SocialMediaWrapper> }
                <CopyrightWrapper className="text-center pt-1">
                    <Copyright className="text-gray font-textfont text-md md:text-xl">
                        Copyright© 2026 <span className="text-grey">TEDxCityUHongKong</span>
                    </Copyright>
                </CopyrightWrapper>
            </FooterContainer>
        </Container>
    );
}