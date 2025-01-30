import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Poster from "./poster";
import Navbar from "./navbar";

function LoginForm() {
  //Captcha
  const [captcha, setCaptcha] = useState("");

  // Function to generate a random string
  function generateRandomString(length = 6) {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  useEffect(() => {
    const newCaptcha = generateRandomString();
    setCaptcha(newCaptcha);
  }, []);

  const handleRefreshCaptcha = () => {
    const newCaptcha = generateRandomString();
    setCaptcha(newCaptcha);
  };

  //NavBar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="welcome">Welcome to Internet Banking</h1>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <label htmlFor="cid">
              Customer ID <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input type="text" id="cid" name="username" required />
            <br />
            <label htmlFor="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input type="password" id="password" name="password" required minLength="10" />
            <br />
            {/* <label htmlFor="remember-me">Remember Me</label>
            <input type="checkbox" id="remember-me" name="remember-me" /><br /> */}
            <label htmlFor="captcha">
              Captcha <span style={{ color: "red" }}>*</span>
            </label>
            <div className="captcha-container">{captcha}</div>
            <button type="button" onClick={handleRefreshCaptcha}>
              Refresh Captcha
            </button>
            <input type="text" id="captcha" name="captcha" required />
            <br />
            <button type="submit">Login</button>
            <br />
            <Link to="/forgotpassword">Forgot Password?</Link>
            <Link to="/signup">Sign Up</Link>
          </form>
        </div>

        <Poster />
      </div>
    </>
  );
}

export default LoginForm;
