import React, { useState, useEffect } from "react";
import Poster from "./poster";
import Header from "./header";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GrFormViewHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
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

  function generateRandomString(length = 6) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
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
    const newErrors = {};

    if (captchaInput !== captcha) {
      newErrors.captcha = "Captcha does not match";
      valid = false;
    }

    if (password.length < 10) {
      newErrors.password = "Password must be at least 10 characters long";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      cid: e.target.cid?.value.trim(),
      email: e.target.email?.value.trim(),
      password,
      confirmPassword,
    };

    if (
      !formData.cid ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    if (validation()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          formData
        );
        toast.success("Signup Successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cid">
              Customer ID<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="cid" name="cid" required />

            <label htmlFor="email">
              Email ID<span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" id="email" name="email" required />

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
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}

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
            {errors.confirmPassword && (
              <div style={{ color: "red" }}>{errors.confirmPassword}</div>
            )}

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
            {errors.captcha && (
              <div style={{ color: "red" }}>{errors.captcha}</div>
            )}

            <button type="submit">Sign Up</button>

            <br />
            <Link to="/">Already have an account? Login</Link>
          </form>
        </div>
        <Poster />
      </div>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Signup;


