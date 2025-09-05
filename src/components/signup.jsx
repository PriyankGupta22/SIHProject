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
        <div className="signup-container">
            <div className="signup-header">
                <h1>Sign Up</h1>
                <p>
                    Welcome to Jharkhand{" "}
                    {name && <span className="highlight">{name}</span>}
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        value={mail}
                        placeholder="Enter your email"
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        value={pass}
                        placeholder="Enter your password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <input
                        type="password"
                        value={confirmPass}
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                </div>

                <div className="form-group button-wrapper">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
