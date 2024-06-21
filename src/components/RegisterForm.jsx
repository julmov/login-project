import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../assets/google-icon.svg";
import "../App.css";

const RegisterForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

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
        "https://login-system-julmov-3ea0ad07bce0.herokuapp.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data); // Handle the response data as needed

      if (response.ok) {
        navigate("/"); // Use navigate function after successful registration
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="rightBox">
      <div>
        <h2>Create Your Account &#128578;</h2>
        <p>Kindly fill in the details to create your account.</p>
        <button className="google-btn">
          <img src={google} alt="google icon" className="google-icon" />
          Sign up with Google
        </button>
        <p>-------------- OR ---------------</p>
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
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
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
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
        <div className="create-account">
          Already have an account?{" "}
          <a href="#" onClick={toggleForm}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
