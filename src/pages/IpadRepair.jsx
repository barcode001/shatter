// src/pages/IpadRepair.jsx
import { Link } from "react-router-dom";
import ipadService from "../assets/images/ipadServicePage.webp";
import useScrollReveal from "../hooks/useScrollReveal";

export default function IpadRepair() {
  useScrollReveal(); // Targets `.fade-up` by default

  return (
    <section className="ipad-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={ipadService}
            loading="lazy"
            alt="Cracked iPad screen"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up ipad-text">
          Professional iPad Repair in Houston
        </h1>
        <p className="subtitle fade-up">
          Whether it's cracked glass or charging issues, we provide{" "}
          <strong>fast and reliable service</strong>.
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">Popular iPad Repairs</h2>
        <ul>
          <li className="fade-up">Screen / digitizer replacement</li>
          <li className="fade-up">Battery replacement</li>
          <li className="fade-up">Charging port repair</li>
          <li className="fade-up">Power / volume button repair</li>
          <li className="fade-up">Water damage diagnostics</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Same-day service</strong> for most iPads
          </li>
          <li className="fade-up">
            <strong>Premium parts</strong> with quality control
          </li>
          <li className="fade-up">10+ years of repair experience</li>
          <li className="fade-up">Trusted by schools and businesses</li>
        </ul>

        <Link to="/contact-form" className="btn primary fade-up">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
