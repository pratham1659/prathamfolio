import React from "react";

import about from "../assets/about-pic.png";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={about} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full-Stack Developer <br />
                based in Bangalore, India 📍
              </h4>
              <p>
                I am a driven engineering student with a passion for software
                development. My academic background and hands-on experience in
                Java, ReactJs, and various technologies equip me to contribute
                effectively to innovative projects. I am eager to collaborate on
                challenging assignments and continue my growth as a software
                engineer. Open to new opportunities and connections in the tech
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
