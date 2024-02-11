import React from "react";
import waveHand from "../assets/waving-hand.png";
import myResume from "../assets/myResume.pdf";

const skillsImg1 = "https://skillicons.dev/icons?i=html,css";
const skillsImg2 = "https://skillicons.dev/icons?i=js,react";
const skillsImg3 = "https://skillicons.dev/icons?i=spring,nodejs";
const linkedin = "https://www.linkedin.com/in/pratham1659";
const github = "https://github.com/pratham1659";

const Profile = () => {
  const openPdfInNewTab = () => {
    window.open(myResume, "_blank");
  };
  return (
    <div>
      <section id="profile" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full-Stack React Developer</h1>
                <img src={waveHand} alt="waving_hand" className="shaking-hand" />
                <p>Hi, I'm Pratham Kumar. A passionate Full-Stack React Developer based in Bangalore, India 🇮🇳. 📍</p>
                <span>
                  <a aria-label="linkedin" rel="noreferrer" target="_blank" href={linkedin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-linkedin">
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a aria-label="github" rel="noreferrer" target="_blank" href={github}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github">
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  {/* button part executive */}
                  <button className="btn btn-color-2" onClick={openPdfInNewTab}>
                    Download CV
                  </button>
                  <button className="btn btn-color-1" onClick={() => (window.location.href = "#contact")}>
                    Contact Info
                  </button>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={skillsImg1} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={skillsImg2} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={skillsImg3} alt="skill-icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
