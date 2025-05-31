import React from "react";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logEvent } from "./ga"; // Make sure this path is correct

function Footer() {
  return (
    <div className="container">
      <footer id="footer">
        <div className="col col1">
          <p className="artist">Designed by EdenCode</p>
          <div className="social">
            <a
              href="https://www.instagram.com/shatterrepairs/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={() => logEvent("click", "Social", "Instagram Footer")}
            >
              <img src={instagram} loading="lazy" alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/MobileShatterRepairs/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={() => logEvent("click", "Social", "Facebook Footer")}
            >
              <img src={facebook} loading="lazy" alt="Facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@shatter.repairs?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={() => logEvent("click", "Social", "TikTok Footer")}
            >
              <img src={tiktok} loading="lazy" alt="TikTok" />
            </a>
          </div>
          <p className="artist">2025 © All Rights Reserved</p>
        </div>

        <div className="col col2">
          <Link
            to="/"
            onClick={() => logEvent("click", "Navigation", "Home Footer")}
          >
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
            onClick={() => logEvent("click", "Navigation", "Services Footer")}
          >
            Services
          </HashLink>
          <Link
            to="/about"
            onClick={() => logEvent("click", "Navigation", "About Footer")}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => logEvent("click", "Navigation", "Contact Footer")}
          >
            Contact
          </Link>
        </div>

        <div className="backdrop"></div>
      </footer>

      {/* Glowing lights */}
      <div>
        <article id="wrap">
          <article id="lightings">
            <section id="one">
              <section id="two">
                <section id="three">
                  <section id="four">
                    <section id="five"></section>
                  </section>
                </section>
              </section>
            </section>
          </article>
        </article>
      </div>
    </div>
  );
}

export default Footer;
