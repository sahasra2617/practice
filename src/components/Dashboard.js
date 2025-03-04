import React, { useState } from "react";
import "../styles/dashboard.css";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [topics, setTopics] = useState([
    { name: "Alphabets", icon: "📖", color: "#FFB6C1" },
    { name: "Numbers", icon: "🔢", color: "#FFD700" },
    { name: "Fruits", icon: "🍎", color: "#FF6347" },
    { name: "Colors", icon: "🎨", color: "#32CD32" },
    { name: "Vegetables", icon: "🥕", color: "#FFA500" },
  ]);

  return (
    <div className="dashboard">
      {/* Sidebar Navbar */}
      <div className="sidebar">
        <h2>📚 Fun Learning</h2>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <div className="top-navbar">
          <h2>Fun Learning App</h2>
          <div className="profile">
            <FaUserCircle size={30} />
            <div className="dropdown">
              <button onClick={() => alert("Logged out!")}>Logout</button>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="topic-card"
              style={{ backgroundColor: topic.color }}
            >
              <span className="icon">{topic.icon}</span>
              <h3>{topic.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
