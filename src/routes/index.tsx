import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import AboutUs from "../Pages/About/About";
import SkillsPage from "../Pages/Skills/Skills";
import LoginPage from "../Pages/Login/Login";
import SignupPage from "../Pages/Login/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactMeForm from "../Pages/Contact-me";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MiddleSection from "../Pages/Dashboard/MiddleSection";
import Blogs from "../Pages/Blogs/Blogs";
import CreateBlog from "../Pages/Dashboard/Blogs/CreateBlog"; 
import Blog from "../Pages/Blogs/blog";
import MessagePage from "../Pages/Dashboard/Messages/MessagePage";
import { Message } from "../Pages/Dashboard/Messages/AdminContext";

  const messages: Message[] = []; 

let allRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blogs-page" element={<Blogs blogs={[]} />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactMeForm />} />
        <Route path="/middle-section" element={<MiddleSection />} />
        <Route path="/add-blog" element={<Dashboard />} />
        <Route path="/message" element={<MessagePage messages={messages} />} />
        <Route
          path="/create-blog"
          element={<CreateBlog updateBlogs={(blogs: Blog[]) => {}} />} 
        />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default allRoutes;