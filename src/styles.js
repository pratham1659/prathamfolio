import styled from "styled-components";

// Global styles (can be defined in GlobalStyles.js)
export const GlobalStyles = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f0f0f0;
  color: #333;
`;

// Navbar styles
export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin-left: 20px;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  transition: color 0.3s;

  &:hover {
    color: #ff6600;
  }
`;

// Hero section styles
export const HeroContainer = styled.div`
  background-image: url("path-to-hero-background-image.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

export const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
`;

export const HeroTitle = styled.h2`
  font-size: 36px;
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

// About section styles (similar structure as other sections)
export const AboutContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  margin: 20px;
  border-radius: 5px;
`;

export const AboutText = styled.p`
  font-size: 16px;
`;

// Define styles for Services, Contact, and Footer sections similarly
