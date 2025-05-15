import React from "react";

function Navbar({ visible }) {
  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <div className="nav-title"></div>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
