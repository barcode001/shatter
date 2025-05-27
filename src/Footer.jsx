import React from "react";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
function Footer() {
  return (
    <div className="container">
      <footer id="footer">
        <div className="col col1">
          <p className="artist">Made by Next-WebSite</p>
          <div className="social">
            <a href="#" target="_blank" className="link">
              <img src={instagram} loading="lazy" alt="Instagram" />
            </a>
            <a href="#" target="_blank" className="link">
              <img src={facebook} loading="lazy" alt="facebook" />
            </a>
            <a href="#" target="_blank" className="link">
              <img src={tiktok} loading="lazy" alt="tiktok" />
            </a>
          </div>
          <p className="artist">2025 © All Rights Reserved</p>
        </div>
        <div className="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
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
