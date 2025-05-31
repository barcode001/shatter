import { useEffect } from "react";
import { Link } from "react-router-dom";
import laptopService from "../assets/images/laptopServicePage1.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";

export default function LaptopRepair() {
  useScrollReveal();

  return (
    <section className="laptop-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={laptopService}
            loading="lazy"
            alt="Laptop with damaged screen"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up laptop-text">
          Houston Laptop Repair You Can Count On
        </h1>
        <p className="subtitle fade-up">
          From cracked screens to battery issues — we repair all major laptop
          brands, <strong>same-day</strong> in many cases.
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">Common Laptop Repairs</h2>
        <ul>
          <li className="fade-up">Screen replacement</li>
          <li className="fade-up">Battery replacement</li>
          <li className="fade-up">Keyboard repair</li>
          <li className="fade-up">Charging issues</li>
          <li className="fade-up">Hard drive / SSD upgrades</li>
          <li className="fade-up">Overheating & fan issues</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Same-day service</strong> on most laptop repairs
          </li>
          <li className="fade-up">
            <strong>Warranty-backed workmanship</strong>
          </li>
          <li className="fade-up">
            Support for Windows, macOS, and Chromebooks
          </li>
          <li className="fade-up">
            10+ years of real repair experience — no guesswork
          </li>
        </ul>

        <Link
          to="/contact-form"
          className="btn primary fade-up"
          onClick={() =>
            logEvent("Click", "Clicked Get a Quote on Laptop Repair")
          }
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
