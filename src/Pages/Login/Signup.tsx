import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/Navbar.css";
import handleSignup from "./HandleSignup";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isEmailChecking, setIsEmailChecking] = useState(false);

  const { Fullname, email, password } = formData;

  const getRegisteredUsers = (): string[] => {
    const registeredUsers = localStorage.getItem("registeredUsers");
    return registeredUsers ? JSON.parse(registeredUsers) : [];
  };

  const checkExistingEmail = async (email: string) => {
    const registeredUsers = getRegisteredUsers();
    return registeredUsers.includes(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsEmailChecking(true);
    try {
      const isExisting = await checkExistingEmail(email);
      setIsEmailChecking(false);

      if (Fullname === "" || email === "" || password === "") {
        toast.error("Please fill in all fields");
        return;
      }
      if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        toast.error("Please enter a valid email");
        return;
      }

      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
      if (!password.match(/^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/)) {
        toast.error(
          "Password must include a special character, number, and uppercase letters"
        );
        return;
      }

      if (isExisting) {
        toast.error("Email already exists. Please use a different email.");
        return;
      }

      const signupSuccessful = handleSignup({ Fullname, email, password });

      if (signupSuccessful) {
        toast.success(
          "Registration successful. Please login with your credentials."
        );
        navigate("/login");
      }
    } catch (error) {
      setIsEmailChecking(false);
      toast.error("An error occurred while checking the email");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-text">
        <h2>Welcome to Our Platform!</h2>
        <p>
          Enter your details to create an account and get started.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet,
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* othe inf*/}
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Fullname</label>
          <input
            type="text"
            id="Fullame"
            name="Fullname"
            value={Fullname}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <span
              className={`password-toggle-icon ${
                showPassword ? "visible" : ""
              }`}
              onClick={handleTogglePassword}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" disabled={isEmailChecking}>
            {isEmailChecking ? "Checking..." : "Sign Up"}
          </button>
        </form>
        <p>
          Do you have an account?{" "}
          <a href="/login" style={{ color: "#ac3511" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;