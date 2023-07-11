import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../Styles/Navbar.css";

const ContactMeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const { fullname, email, message } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:4000/api/v1/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
      toast("Message sent successfully!");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        console.error("Error sending message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleReset = () => {
    setFormData({ fullname: "", email: "", message: "" });
  };
  const linkedinURL =
    "https://www.linkedin.com/in/gentille-ernestine-manirakiza-97115720";
  const githubURL = "https://github.com/Gentille-dev";

  return (
    <>
      <Navbar />
      <div className="container-contact">
        <div className="form-contact">
          <div className="contact-info">
            <h3 className="title">CONNECT WITH US</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              illum sit harum libero eligendi fugit repellendus magni eveniet,
              ear.
            </p>

            <div className="info">
              <div className="information">
                <p>Address: Rwanda, KN 134 ST</p>
              </div>

              <div className="information">
                <p>Email: ernegentille@gmail.com</p>
              </div>

              <div className="information">
                <p>Phone: +250780495106</p>
              </div>
            </div>
            <br />

            <p>Find us on:</p>
            <div className="social-media">
              <a className="icons" href={linkedinURL}>
                <FaLinkedin size={25} />
              </a>

              <a className="icons" href={githubURL}>
                <FaGithub size={25} />
              </a>
            </div>
          </div>

          <div className="contact-formm">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <div id="error_message"></div>

            <form onSubmit={handleSubmit}>
              <h3 className="title">CONTACT US</h3>

              <div className="input-container focus">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="input"
                  value={fullname}
                  onChange={handleChange}
                />
                <label htmlFor="">fullname</label>
                <span>fullname</span>
              </div>

              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>

              <div className="input-container textarea">
                <textarea
                  name="message"
                  id="message"
                  className="input"
                  value={message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <div>
                <input type="submit" value="Send" className="btnn"/>
                <input
                  type="button"
                  value="Reset"
                  className="reset-btn"
                  onClick={handleReset}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMeForm;
