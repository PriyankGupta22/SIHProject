import React, { useState } from 'react';
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("✅ Passwords matched! Signup successful.");

    console.log("Name:", name);
    console.log("Email:", mail);
    console.log("Password:", pass);
    console.log("OTP:", otp);
  };

  return (
    <div className="page-wrapper">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <p className="welcome-text">
          Welcome to Jharkhand{" "}
          {name && <span className="highlight">{name}</span>}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              value={mail}
              placeholder="Enter your email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              value={pass}
              placeholder="Enter your password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              value={confirmPass}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              value={otp}
              placeholder="Enter OTP (optional)"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <div className="button-area">
            <button
              type="submit"
              style={{
                all: "unset",
                width: "100%",
                height: "100%",
                textAlign: "center",
                cursor: "pointer"
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;