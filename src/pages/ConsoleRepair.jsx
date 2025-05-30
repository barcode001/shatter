import { useEffect } from "react";
import { Link } from "react-router-dom";
import consoleService from "../assets/images/consoleServicePage.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";

export default function ConsoleRepair() {
  useScrollReveal();

  return (
    <section className="console-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={consoleService}
            loading="lazy"
            alt="Game console with screen damage"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up console-text">Game Console Repair in Houston</h1>
        <p className="subtitle fade-up">
          PlayStation, Xbox, or Switch acting up? We’ll get you back in the game
          — <strong>fast.</strong>
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">Common Console Issues We Fix</h2>
        <ul>
          <li className="fade-up">HDMI port replacement</li>
          <li className="fade-up">Power issues</li>
          <li className="fade-up">Overheating problems</li>
          <li className="fade-up">Hard drive errors</li>
          <li className="fade-up">Disc drive malfunctions</li>
          <li className="fade-up">Controller connection issues</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Fast diagnostics</strong> and expert repairs
          </li>
          <li className="fade-up">
            <strong>OEM-quality replacement parts</strong>
          </li>
          <li className="fade-up">Over 10 years of hands-on experience</li>
          <li className="fade-up">Friendly local service you can trust</li>
        </ul>

        <Link
          to="/contact-form"
          className="btn primary fade-up"
          onClick={() =>
            logEvent("click", "CTA", "Get a Quote - Console Repair Page")
          }
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
