import React from "react";
import myAbout from "../assets/about-pic.png";
import myExpert from "../assets/experience.png";
import myEdu from "../assets/education.png";
import myArrow from "../assets/arrow.png";

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={myAbout} alt="about" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={myExpert} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img src={myEdu} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className="text-container">
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
          className="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
    </div>
  );
};

export default About;
