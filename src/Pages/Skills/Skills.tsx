import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { DiCss3, DiJavascript1, DiNodejs, DiReact } from "react-icons/di";
import "../../Styles/Navbar.css";

const SkillsPage: React.FC = () => {
  const [skills, setSkills] = useState([
    {
      fullName: "JavaScript",
      name: <DiJavascript1 />,
      percentage: 70,
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      fullName: "ReactJs",
      name: <DiReact />,
      percentage: 75,
      details: "Lorem ipsum dolor sit amet, conasectetur adipiscing elit Lorem.",
    },
    {
      fullName: "CSS",
      name:<DiCss3 />,
      percentage: 80,
      details: "Lorem ipsum dolor sit amet, consectetur adipiscinelit.",
    },
    {
      fullName: "NodeJS",
      name: <DiNodejs />,
      percentage: 60,
      details: "Lorem ipsum dolor sit amet, consectetur adipisci ang gelddinn.",
    },
   
  ]);

  return (
    <div className="about-container">
      <Navbar />
      <h1 className="skills">My Skills</h1>
      <div className="skills-container">
        <div className="skills-details">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h5 style={{fontSize: "25px"}}>{skill.name} {skill.fullName}</h5>
              <p style={{fontSize: "15px"}}>{skill.details}</p>
            </div>
          ))}
        </div>
        <div className="skills-progress">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h5>{skill.fullName}</h5>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p style={{fontSize: "15px"}}>{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
