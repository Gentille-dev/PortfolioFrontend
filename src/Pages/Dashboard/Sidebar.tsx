import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

const LeftSection: React.FC = () => {
  return (
    <div className="left-section">
      <Link to="/add-blog">ADD BLOG</Link>
      <br />
      <Link to="/message">MESSAGES</Link>
      <br />
      <Link to="/">HOMEPAGE</Link>
      
    </div>
  );
};

export default LeftSection;
