import { useEffect } from "react";
import { Link } from "react-router-dom";
import iphoneService from "../assets/images/iphonService.png";
import useScrollReveal from "../hooks/useScrollReveal";

export default function IphoneRepair() {
  useScrollReveal(); // Targets `.reveal` by default

  return (
    <section className="service-page iphone-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={iphoneService}
            loading="lazy"
            alt="Cracked iPhone screen"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up">Fast iPhone Repair in Houston</h1>
        <p className="subtitle fade-up">
          Broken screen? Dead battery? We’ve got you covered – usually{" "}
          <strong>same-day</strong>.
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">Most common iPhone repairs</h2>
        <ul>
          <li className="fade-up">Screen / glass replacement</li>
          <li className="fade-up">Battery replacement</li>
          <li className="fade-up">Charging-port repair</li>
          <li className="fade-up">Back-glass replacement</li>
          <li className="fade-up">Camera / speaker issues</li>
          <li className="fade-up">Water damage diagnostics</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Same-day service</strong> on most jobs
          </li>
          <li className="fade-up">
            <strong>Lifetime workmanship warranty</strong>
          </li>
          <li className="fade-up">Premium OEM-grade parts</li>
          <li className="fade-up">
            Trusted techs with over 10 years of hands-on experience.
          </li>
        </ul>

        <Link to="/contact-form" className="btn primary fade-up">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
