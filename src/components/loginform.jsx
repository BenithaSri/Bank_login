import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginform.css";
import Footer from "./footer";
import { GrFormViewHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcRefresh } from "react-icons/fc";

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

  //Alert
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const navigate = useNavigate();

  const [cid, setCID] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cid, password }),
      });

      if (response.ok) {
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        navigate("/dashboard");
      } else {
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        }
      );
    }
  };

  const [showPassword, setShowPassword] = useState("false");

  return (
    <>
      <h1
        className="login-head"
        style={{ color: "white", backgroundColor: "#1a365d", margin: "0px" }}>
        Welcome to our Bank!{" "}
        <div className="head-links">
          <Link to="/support"> Support </Link>
          <Link to="/"> Log in </Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/home">
            {" "}
            <img
              src="/bank.png"
              alt="bankLogo"
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                margin: "5px",
              }}
            />
          </Link>
        </div>
      </h1>

      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cid">
              Customer ID <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              id="cid"
              name="customerID"
              required
              onChange={(e) => {
                setCID(e.target.value);
              }}
            />
            <br />
            <label htmlFor="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "password" : "text"}
                id="password"
                name="password"
                required
                minLength="10"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                {showPassword ? <GrFormViewHide /> : <BiShow />}{" "}
                {/* Change icon based on state */}
              </button>
            </div>
            <br />
            <label htmlFor="captcha">
              Captcha <span style={{ color: "red" }}>*</span>
            </label>  <div className="captcha-container">{captcha}</div>
            
            <input type="text" id="captcha" name="captcha" required />
            <button type="button" onClick={handleRefreshCaptcha}>
              <FcRefresh />
            </button>
            <br />
            <label htmlFor="rememberMe"> Remember Me </label> 
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <button className="btn btn-primary" type="submit">Login</button>
            <br />
            <Link to="/forgotpassword">Forgot Password?</Link> |
            <Link to="/signup">Sign Up</Link>
          </form>
          <br />
          
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
export default LoginForm;
