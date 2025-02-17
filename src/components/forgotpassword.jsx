import React from "react";
import "./forgetpassword.css";

function forgotpassword() {
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3000/forgotpassword", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (response.ok) {
  //       setMessage("Reset link sent! Check your email.");
  //     } else {
  //       setMessage("Error: Email not found.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setMessage("Something went wrong. Try again.");
  //   }
  // };
  return (
    <div className="forget">
      <div>
        <img src="./forgot.jpg" alt="forgot password" />
      </div>
      <div className="forgot-form">
        <h1 style={{ fontWeight: "200", color: "#1a365d" }}> Forgot Password!</h1>
        <form>
          <label htmlFor="email">
            Email ID <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input type="email" id="email" required />
          <br />
          <button type="submit">Send Link</button>
          <br />
          <a href="#">Did not receive a link?</a>
          {/* {message && <p>{message}</p>} */}
        </form>
      </div>
    </div>
  );
}

export default forgotpassword;
