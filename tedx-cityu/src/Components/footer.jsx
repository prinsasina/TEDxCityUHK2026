import React from "react";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { styled } from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1.5rem 1rem 4rem 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem 1rem;
  }
`;

const Title = styled.h3`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #e62b1e;
  }
`;

const Copyright = styled.p`
  font-size: 1.125rem;
  color: rgb(147, 141, 140);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Title>FOLLOW US!</Title>

      <SocialLinks>
        <SocialLink
          href="https://www.instagram.com/tedxcityuhongkong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={40} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/company/tedxcityuhongkong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on LinkedIn"
        >
          <Linkedin size={40} />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/TEDxCityUHK/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={40} />
        </SocialLink>
        <SocialLink
          href="https://youtube.com/@tedxcityuhongkong?si=zqA9FgialVaH8CGB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on YouTube"
        >
          <Youtube size={40} />
        </SocialLink>
      </SocialLinks>

      <Copyright>
        Copyright© 2026 TEDxCityUHongKong
      </Copyright>
    </FooterContainer>
  );
}
