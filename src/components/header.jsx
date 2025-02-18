import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function header() {
  return (
    <div>
      <div>
        <Link to="/support" className="home-login">
          Support
        </Link>
        <Link to="/" className="home-login">
          Log in
        </Link>
        <Link to="/signup" className="home-login">
          Sign up
        </Link>
        <Link to="/home" className="home-login">
          Home
        </Link>
      </div>
      <h1 className="welcome"> Welcome to our Bank!</h1>
      <div className="marquee-container">
        <Marquee speed={50} pauseOnHover gradient>
          🚀 New Interest Rates Announced | 🏦 Loan Offers for 2025 | 📢 Secure
          Online Banking Now Available! | 💰 Earn Rewards with our Credit Card |
          💰 Savings for Kids!
        </Marquee>
      </div>
      <Navbar />
    </div>
  );
}

export default header;
