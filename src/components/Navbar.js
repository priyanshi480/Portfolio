import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="toggle-theme" onClick={toggleDarkMode}>
        {document.body.classList.contains("dark-mode") ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default Navbar;