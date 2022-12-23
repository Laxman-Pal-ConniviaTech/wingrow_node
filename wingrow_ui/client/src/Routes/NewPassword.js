import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const navigate = useNavigate();

  const changePassword = () => {
    navigate("/ResetPasswordSuccessful");
  };

  return (
    <div className="forgot-main-container">
      <div className="forgot-form-outer">
        <div className="forgot-form-inner">
          <img className="form-logo" src="./logo.png" alt="form-logo" />
          <h3>Please verify your mobile number</h3>
          <form onSubmit={changePassword}>
            <input
              type="phone"
              name="phone"
              placeholder="Mobile Number"
              className="forgot-input"
            />
            <input
              type="password"
              name="newpassword"
              placeholder="New Password"
              className="forgot-input"
            />
            <button className="forgot-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
