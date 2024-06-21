import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <>
      <div className="leftBox">
        <div className="content">
          <p className="logo-text">
            <span className="logo"></span>Nextgen
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
      {isLoginForm ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </>
  );
}

export default App;
