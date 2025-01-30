import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Signup() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [password, setPasswords] = useState("");
  const [confirmPassword, setConfirmPasswords] = useState("");
  const [errors, setErrors] = useState({
    captcha: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

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
    setCaptcha(generateRandomString());
  }, []);

  const handleRefreshCaptcha = () => {
    setCaptcha(generateRandomString());
    setCaptchaInput("");
    setErrors({ ...errors, captcha: "" });
  };

  const validation = () => {
    let valid = true;
    let errors = {};

    // Captcha validation
    if (captchaInput !== captcha) {
      errors.captcha = "Captcha does not match";
      valid = false;
    }

    // Password validation
    if (password.length < 10) {
      errors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword
        && confirmPassword.length > 0) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      // Display success message
      setSuccessMessage("Signup successful!");
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };


  return (
    <div>
      <h1 className="welcome">Welcome to Internet Banking</h1>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cid">Customer ID<span style={{ color: "red" }}>*</span> </label>
            <input type="text" id="cid" name="username"  required/>
            
            <label htmlFor="accnumber">Account Number <span style={{ color: "red" }}>*</span></label>
            <input type="text" id="accnumber" name="accountnumber" required length={16}/>

            <label htmlFor="password">Password<span style={{ color: "red" }}>*</span></label>
            <input type="password" id="password" name="password" required minLength={10} onChange={(e) => setPasswords(e.target.value)} />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}

            <label htmlFor="confirm-password">Confirm Password<span style={{ color: "red" }}>*</span></label>
            <input type="password" id="confirm-password" name="confirm-password" required minLength={10}  onChange={(e) => setConfirmPasswords(e.target.value)} />
            {errors.confirmPassword && (
              <div style={{ color: "red" }}>{errors.confirmPassword}</div>
            )}

            <label htmlFor="captcha">Captcha<span style={{ color: "red" }}>*</span></label>
            <div className="captcha-container">{captcha}</div>
            <button type="button" onClick={handleRefreshCaptcha}>
              Refresh Captcha
            </button>
            <input type="text" id="captcha" name="captcha" required onChange={(e) => setCaptchaInput(e.target.value)} />
            <br />  
            {
              errors.captcha && (
                <div style={{ color: "red" }}>{errors.captcha}</div>
              )
            }
            <button type="submit">Sign Up</button>
            <br />
            <Link to="/">Already have an account? Login</Link>
            <br />
          </form>
          {successMessage && (
            <div style={{ color: "green", marginTop: "10px" }}>
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
