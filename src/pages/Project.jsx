import React from "react";
import carRental from "./img/car-rental.webp";
import coinDom from "./img/coindom.png";

const Project = () => {
  return (
    <div>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <div className="pro pro__1 undefined">
                <div className="pro__img">
                  <a
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer">
                    <img
                      src={carRental}
                      alt="website"
                      style={{
                        transform: "translateY(0%)",
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    Car Rental
                    <span className="date-className">(February 2023)</span> 🚗
                  </h3>
                  <p>
                    A car rental website is an online platform that allows users
                    to rent cars for personal or business use. The website
                    provides an interface for searching, comparing, and
                    reserving cars.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>SCSS</p>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      href="https://github.com/stefvndev/car-rental"
                      rel="noreferrer">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    <a
                      target="_blank"
                      href="https://car-rental-ten.vercel.app/"
                      rel="noreferrer">
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-external-link">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pro pro__1 reversed-proj">
                <div className="pro__img">
                  <a
                    target="_blank"
                    href="https://coindom-crypto-search.vercel.app/"
                    rel="noreferrer">
                    <img
                      src={coinDom}
                      alt="website"
                      style={{
                        transform: "translateY(0%)",
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    Coindom
                    <span className="date-className">(February 2023)</span> 🪙
                  </h3>
                  <p>
                    Coindom is a crypto app that allows users to search for
                    information about various cryptocurrencies in real-time.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>SCSS</p>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      href="https://github.com/stefvndev/coindom-crypto"
                      rel="noreferrer">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    <a
                      target="_blank"
                      href="https://coindom-crypto-search.vercel.app/"
                      rel="noreferrer">
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-external-link">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
