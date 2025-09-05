import React, { useEffect, useState } from 'react'
import "./signup.css"

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
        setSuccess("✅ Passwords matched! Signup successful.")

        setError(""); // clear error if passwords match
        console.log("Name:", name);
        console.log("Email:", mail);
        console.log("Password:", pass);
        console.log("OTP:", otp);
    };

    return (
        <div className='container signup-box'>
            <div className='head p-4'>
                <h1>Sign Up</h1>
                <p>
                    Welcome to Jharkhand{" "}
                    {name && <span className="font-semibold">{name}</span>}
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='p-4'>
                    <input
                        type='text'
                        value={name}
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className='p-4'>
                    <input
                        type="email"
                        value={mail}
                        placeholder='Enter your email'
                        onChange={(e) => setMail(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className='p-4 space-y-2'>
                    <input
                        type='password'
                        value={pass}
                        placeholder='Enter your password'
                        onChange={(e) => setPass(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type='password'
                        value={confirmPass}
                        placeholder='Confirm your password'
                        onChange={(e) => setConfirmPass(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}
                </div>

                <div className="p-4 flex justify-center ">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 bottom-30"
                    >
                        Sign Up
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Signup
