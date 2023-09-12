import React from "react";
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle } from "./styles"; // Create styled components for HeroContainer, HeroContent, etc.

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Your Name</HeroTitle>
        <HeroSubtitle>Web Developer</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
