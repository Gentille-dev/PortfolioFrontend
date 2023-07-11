import React from "react";
import "../../Styles/Navbar.css";
import CreateBlog from "./Blogs/CreateBlog"; 
import Blog from "../Blogs/blog";

const MiddleSection: React.FC = () => {
  const updateBlogs = (newBlogs: Blog[]) => {
    
  };

  return (
    <>
      <CreateBlog updateBlogs={updateBlogs} /> 
    </>
  );
};

export default MiddleSection;