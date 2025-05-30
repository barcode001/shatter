import React from "react";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
              className="link"
            >
              <img src={instagram} loading="lazy" alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/MobileShatterRepairs/"
              target="_blank"
              className="link"
            >
              <img src={facebook} loading="lazy" alt="facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@shatter.repairs?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="link"
            >
              <img src={tiktok} loading="lazy" alt="tiktok" />
            </a>
          </div>
          <p className="artist">2025 © All Rights Reserved</p>
        </div>
        <div className="col col2">
          <Link to="/">Home</Link>

          <HashLink
            to="/#services-section"
            smooth
            scroll={(el) => {
              setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth" });
              }, 100); // Delay 100ms to ensure the DOM is ready
            }}
          >
            Services
          </HashLink>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
