import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import "../styles/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
      alert(`Welcome, ${storedUser.fullName}!`);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 class="login_h2"> Welcome Back!</h2>
        <h3 class="login_h2"> LOGIN to your account</h3>

        <div className="input-container">
          <FaUserCircle className="icon" />
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        </div>

        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} />
        </div>

        <button type="submit" class="loginBtn"><b> 🚀 Login</b></button>

        <p className="switch-link">
          Don't have an account? <span onClick={() => navigate("/signin")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;