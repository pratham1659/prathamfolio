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
                As a Junior FullStack Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
