import React, { useState } from "react";
import "./resetpassword.css";
import { GrFormViewHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { MdOutlineLockReset } from "react-icons/md";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="reset">

      <form className="reset-form">
        <h1 style={{ fontWeight: "200", color: "#1a365d" }}>Reset Password!</h1>

        <label htmlFor="password">
          New Password <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "password" : "text"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              border: "none",
              background: "transparent",
            }}>
            {showPassword ? <GrFormViewHide /> : <BiShow />}
          </button>
        </div>
        <br />

        <label htmlFor="confirmpassword">
          Confirm Password <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "password" : "text"}
            id="confirmpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="10"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="password">
         <MdOutlineLockReset className="icon" />
         <p>
            <ul>
                <li> Minimum of 10 charaters</li>
                <li> Atleast 1 Uppercase</li>
                <li> Atleast 1 Lowercase</li>
                <li> Atleast 1 Special Character [!,@,#,$,%,^,&,*]</li>
            </ul>
         </p>
      </div>
    </div>
  );
}

export default ResetPassword;
