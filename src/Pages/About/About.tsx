import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../../Styles/Navbar.css";
import Genny from "../About/Genny.png";

const AboutUs: React.FC = () => {
  const linkedinURL =
    "https://www.linkedin.com/in/gentille-ernestine-manirakiza-97115720";
  const githubURL = "https://github.com/Gentille-dev";

  return (
    <div className="about-container">
      <Navbar />
      <section className="about-us">
        <header>
          <h1>About Us</h1>
        </header>
        <div className="about-content">
          <div className="left-section-about">
            <article>
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit..
              </p>
            </article>
            <article>
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit
              </p>
            </article>
          </div>
        </div>
        <div className="right-section">
          <img src={Genny} alt="Gentille" />
        </div>
        <div className="social-icons">
          <a className="icons" href={linkedinURL}>
            <FaLinkedin size={25} />
          </a>

          <a className="icons" href={githubURL}>
            <FaGithub size={25} />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
