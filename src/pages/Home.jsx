import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
