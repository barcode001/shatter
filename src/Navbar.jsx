import React from "react";
import shatterlogo from "./assets/images/shatterLogoBlack.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar({ visible }) {
  const closeMobileMenu = () => {
    const checkbox = document.getElementById("nav-check");
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <Link to="/" className="logo">
          <img
            src={shatterlogo}
            alt="Shatterlogo"
            loading="lazy"
            className="nav-title"
          />
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
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>

        <HashLink
          to="/#services-section"
          smooth
          scroll={(el) => {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          onClick={closeMobileMenu}
        >
          Services
        </HashLink>

        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
