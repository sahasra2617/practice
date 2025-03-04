import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaUserCircle, FaPhone, FaLock } from "react-icons/fa";
import "../styles/signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>🎉 Create Your Account!</h2>
        
        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        </div>

        <div className="input-container">
          <FaUserCircle className="icon" />
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        </div>

        <div className="input-container">
          <FaPhone className="icon" />
          <input type="text" name="phone" placeholder="Parent's Phone Number" required onChange={handleChange} />
        </div>

        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" name="password" placeholder="Create a Password" required onChange={handleChange} />
        </div>

        <button type="submit"><b>🚀 Sign Up</b></button>
        
        <p className="switch-link">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signin;