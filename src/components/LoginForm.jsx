// src/components/LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../assets/google-icon.svg";
import LeftBox from "../components/LeftBox";


//State Variables 
const LoginForm = () => {
  //holds the values of the email and password fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //a boolean state to toggle the visibility of the password
  const [passwordShown, setPasswordShown] = useState(false);
  //hook to navigate to different routes
  const navigate = useNavigate();

  //show or hide passsword
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  //updating the formData state when the user types in the email or password fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://login-system-julmov-3ea0ad07bce0.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);

      // Check if response correct
      if (response.ok && data.token) {
        // Save the token to localStorage
        localStorage.setItem("token", JSON.stringify({ token: data.token }));
        navigate("/main"); // Navigate to the main page  if login is successful
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <LeftBox />
      <div className="rightBox">
        <div>
          <h2>Login Your Account &#128578;</h2>
          <p>Kindly log in to gain access to your account.</p>
          <button className="google-btn">
            <img src={google} alt="google icon" className="google-icon" />
            Sign in with Google
          </button>
          <div className="or">
            <span>_______________________</span> <p>OR</p>{" "}
            <span>_______________________</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
          <div className="create-account">
            Don't have an account? <a href="/register">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
