// src/pages/IphoneRepair.jsx
import { Link } from "react-router-dom";
import iphoneService from "../assets/images/iphonService.webp";
// import "./servicePage.scss"; // optional per-page styles

export default function IphoneRepair() {
  return (
    <section className="service-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={iphoneService}
            loading="lazy"
            alt="Cracked iPhone screen"
            className="loop-hover"
          />
        </div>

        <h1>Fast iPhone Repair in Houston</h1>
        <p className="subtitle">
          Broken screen? Dead battery? We’ve got you covered – usually{" "}
          <strong>same-day</strong>.
        </p>
      </header>

      <div className="service-content">
        <h2>Most common iPhone repairs</h2>
        <ul>
          <li>Screen / glass replacement</li>
          <li>Battery replacement</li>
          <li>Charging-port repair</li>
          <li>Back-glass replacement</li>
          <li>Camera / speaker issues</li>
          <li>Water damage diagnostics</li>
        </ul>

        <h2>Why choose Shatter Repairs?</h2>
        <ul>
          <li>
            <strong>Same-day service</strong> on most jobs
          </li>
          <li>
            <strong>Lifetime workmanship warranty</strong>
          </li>
          <li>Premium OEM-grade parts</li>
          <li>Trusted techs with over 10 years of hands-on experience.</li>
        </ul>

        <Link to="/contact" className="btn primary">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
