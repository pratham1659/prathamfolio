import React from "react";
import { Nav, Logo, NavItem } from "./styles"; // Create styled components for Nav, Logo, NavItem

const Navbar = () => {
  return (
    <Nav>
      <Logo>Portfolio</Logo>
      <NavItem>About</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Contact</NavItem>
    </Nav>
  );
};

export default Navbar;
