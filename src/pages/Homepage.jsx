import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Project from "./Project";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
