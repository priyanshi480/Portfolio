import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../components/Navbar.js";

const Home = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Priyanshi Moyal</h1>
      <h2 className="homepage-title">Welcome to My Portfolio</h2>
      <p className="homepage-subtitle">Showcasing my work & projects</p>
      <Link to="/projects" className="view-work-button">View My Work</Link>
    </div>
  );
};

export default Home;
