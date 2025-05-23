import React from "react";
import shatterlogo from "./assets/images/shatterLogoBlack.png";
import { Link } from "react-router-dom";

function Navbar({ visible }) {
  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <Link to="/" className="logo">
          <img src={shatterlogo} alt="Shatter Repairs" className="nav-title" />
        </Link>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
