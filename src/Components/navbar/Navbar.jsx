import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div className="navbar_container">
        <Link to="/" className="logo">
          <span className="gradVibe_logo">GradVibes</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
