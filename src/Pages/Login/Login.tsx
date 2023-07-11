import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Navbar.css";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    const registeredUsers: { email: string; password: string }[] = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const matchingUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      if (matchingUser.email === "admin@gmail.com") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } else {
      toast("Invalid email or password.");
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="about-container">
      <div className="login-page">
        <div className="left-section-login">
          <h2>Welcome to My App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="right-section">
          <h2 className="login">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
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
            <button type="submit">Login</button>
            <p>
              Create a new Account here
              <a href="/signup" style={{ color: "#ac3511" }}>
                SignUp
              </a>
            </p>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
