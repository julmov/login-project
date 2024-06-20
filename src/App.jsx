import { useState } from "react";
import "./App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "./assets/google-icon.svg"

function App() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="leftBox">
        <div className="content">
          <p className="logo-text"><span className="logo"></span>Nextgen</p>
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
      <div className="rightBox">
        <div>
          <h2>Login Your Account &#128578;</h2>
          <p>Kindly log in to gain access to your account.</p>
          <button className="google-btn">
            <img src={google} alt="google icon" className="google-icon" />
            Sign in with Google
          </button>
          <p>-------------- OR ---------------</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
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
            Don't have an account? <a href="#">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
