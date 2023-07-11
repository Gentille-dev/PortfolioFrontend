import React from "react";
import "../../Styles/Navbar.css";

interface TopSectionProps {}

const TopSection: React.FC<TopSectionProps> = (props) => {
  return (
    <div className="top-section">
      <h1 style={{ color: "#9c300f" }}>Admin Dashboard</h1>
    </div>
  );
};

export default TopSection;
