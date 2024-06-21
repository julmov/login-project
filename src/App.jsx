// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="leftBox">
        <div className="content">
          <p className="logo-text">
            <span className="logo-box">
              <span className="logo"></span>
              <span className="logo"></span>
            </span>
            Nextgen
          </p>
          <h1>Efficient Prospect to Customer Conversion Strategies.</h1>
          <p>
            Provide a complimentary trial or demonstration of your product or
            service, enabling the customer to experience it firsthand.
          </p>
          <div className="glass"></div>
          <div className="circle">
            <div className="little-circle"></div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
