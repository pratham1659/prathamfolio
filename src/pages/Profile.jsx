import React from "react";
import myProfile from "../assets/profile-pic.png";
import myLinkedin from "../assets/linkedin.png";
import myGithub from "../assets/github.png";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={myProfile} alt="pratham profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Pratham Kumar</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/resume-example.pdf")}>
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={myLinkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => (window.location.href = "https://linkedin.com/")}
          />
          <img
            src={myGithub}
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = "https://github.com/")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
