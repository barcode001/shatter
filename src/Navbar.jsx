import React from "react";
import shatterlogo from "./assets/images/shatterLogoBlack.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logEvent } from "./ga"; // make sure this path is correct

function Navbar({ visible }) {
  const closeMobileMenu = () => {
    const checkbox = document.getElementById("nav-check");
    if (checkbox) checkbox.checked = false;
  };

  const track = (label) => {
    logEvent("nav_click", { label });
    closeMobileMenu();
  };

  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <Link to="/" className="logo" onClick={() => track("Logo")}>
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
        <Link to="/" onClick={() => track("Home")}>
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
          onClick={() => track("Services")}
        >
          Services
        </HashLink>

        <Link to="/about" onClick={() => track("About")}>
          About
        </Link>

        <Link to="/contact" onClick={() => track("Contact")}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
