import React from "react";
import myAbout from "../assets/about-pic.png";
import myExpert from "../assets/experience.png";
import myEdu from "../assets/education.png";
import myArrow from "../assets/arrow.png";

const About = () => {
  return (
    <div>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img src={myAbout} alt="about" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img src={myExpert} alt="Experience icon" class="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div class="details-container">
                <img src={myEdu} alt="Education icon" class="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus.
              </p>
            </div>
          </div>
        </div>
        <img
          src={myArrow}
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
    </div>
  );
};

export default About;
