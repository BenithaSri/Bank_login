import React, { useState, useEffect } from "react";
import Poster from "./poster";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrFormViewHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";

function Signup() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    captcha: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Generate a random captcha string
  function generateRandomString(length = 6) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  }

  // Generate captcha on component mount
  useEffect(() => {
    setCaptcha(generateRandomString());
  }, []);

  // Refresh captcha
  const handleRefreshCaptcha = () => {
    setCaptcha(generateRandomString());
    setCaptchaInput("");
    setErrors({ ...errors, captcha: "" });
  };

  // Form validation
  const validation = () => {
    let valid = true;
    const newErrors = {};

    // Captcha validation
    if (captchaInput !== captcha) {
      newErrors.captcha = "Captcha does not match";
      valid = false;
    }

    // Password validation
    if (password.length < 10) {
      newErrors.password = "Password must be at least 10 characters long";
      valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      cid: e.target.cid?.value.trim(),
      email: e.target.email?.value.trim(),
      password,
      confirmPassword,
    };

    if (!formData.cid || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (validation()) {
      try {
        const response = await axios.post("http://localhost:3000/signup", formData);
        console.log("Signup successful:", response.data);
        alert("Signup successful!");
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Signup failed. Please try again.");
      }
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* Customer ID Field */}
            <label htmlFor="cid">
              Customer ID<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="cid" name="cid" required />

            {/* Email Field */}
            <label htmlFor="email">
              Email ID<span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" id="email" name="email" required />

            {/* Password Field */}
            <label>Password:</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength="10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}>
                {showPassword ? <BiShow /> : <GrFormViewHide />}
              </button>
            </div>
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

            {/* Confirm Password Field */}
            <label htmlFor="confirm-password">
              Confirm Password<span style={{ color: "red" }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                required
                minLength={10}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}>
                {showPassword ? <BiShow /> : <GrFormViewHide />}
              </button>
            </div>
            {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}

            {/* Captcha Field */}
            <label htmlFor="captcha">
              Captcha<span style={{ color: "red" }}>*</span>
            </label>
            <div className="captcha-container">{captcha}</div>
            <button type="button" onClick={handleRefreshCaptcha}>
              Refresh Captcha
            </button>
            <input
              type="text"
              id="captcha"
              name="captcha"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
            {errors.captcha && <div style={{ color: "red" }}>{errors.captcha}</div>}

            {/* Submit Button */}
            <button type="submit">Sign Up</button>

            {/* Login Link */}
            <br />
            <Link to="/">Already have an account? Login</Link>
          </form>
        </div>
        <Poster />
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
