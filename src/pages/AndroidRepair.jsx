// src/pages/AndroidRepair.jsx
import { Link } from "react-router-dom";
import androidService from "../assets/images/androidServicePage1.webp";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AndroidRepair() {
  useScrollReveal(); // Targets `.fade-up` by default

  return (
    <section className=" android-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={androidService}
            loading="lazy"
            alt="Broken Android screen"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up android-text">
          Reliable Android Repair in Houston
        </h1>
        <p className="subtitle fade-up">
          Cracked screen? Charging issues? We fix all major Android models,{" "}
          <strong>same-day</strong> in most cases.
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">Common Android Repairs</h2>
        <ul>
          <li className="fade-up">Screen / glass replacement</li>
          <li className="fade-up">Battery replacement</li>
          <li className="fade-up">Charging-port repair</li>
          <li className="fade-up">Back-glass replacement</li>
          <li className="fade-up">Water damage diagnostics</li>
          <li className="fade-up">Speaker / mic repair</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Same-day service</strong> on most jobs
          </li>
          <li className="fade-up">
            <strong>Lifetime workmanship warranty</strong>
          </li>
          <li className="fade-up">OEM-quality parts for all Android models</li>
          <li className="fade-up">
            Trusted technicians with over 10 years of experience
          </li>
        </ul>

        <Link to="/contact-form" className="btn primary fade-up">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
