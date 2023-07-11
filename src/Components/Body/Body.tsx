import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Gentille from "../Body/Gentille.jpg";

const Body: React.FC = () => {
  const linkedinURL =
    'https://www.linkedin.com/in/gentille-ernestine-manirakiza-97115720';
  const githubURL = 'https://github.com/Gentille-dev';

  return (
    <div className="body-content">
      <div className="text-content">
        <div className="names">
          <h2>Hello, My name is</h2>
          <h1>Gentille Ernestine M</h1>
          <h3>
            And I am a <span className="frontend">Frontend Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nobis natus est dolor quisquam, dolorum explicabo <br />
            aliquid aliquam illum odio porro hic quidem, beatae <br />
            minus quaerat eaque.
          </p>
        </div>
        <div className="social-icons">
          <a className="icons" href={linkedinURL} >
            <FaLinkedin size={25} />
          </a>

          <a className="icons" href={githubURL} >
          <FaGithub size={25} />
          </a>
        </div>
        <button className="cv">Download CV</button>
      </div>
      <div className="image-container">
        <img src={Gentille} alt="Gentille" />
      </div>
    </div>
  );
};

export default Body;
