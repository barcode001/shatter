import { Link } from "react-router-dom";
import otherElectronicsImg from "../assets/images/otherElectronicsService2.png"; // replace with your image
import useScrollReveal from "../hooks/useScrollReveal";

export default function OtherElectronics() {
  useScrollReveal(); // Targets `.fade-up` by default

  return (
    <section className="other-electronics-page">
      <header className="service-header">
        <div className="floating-wrapper">
          <img
            src={otherElectronicsImg}
            loading="lazy"
            alt="Various electronics for repair"
            className="loop-hover"
          />
        </div>

        <h1 className="fade-up other-electronics-text">
          Repair Services for Other Electronics
        </h1>
        <p className="subtitle fade-up">
          We fix more than just phones — from headphones to handheld consoles,
          <strong> we've got you covered</strong>.
        </p>
      </header>

      <div className="service-content">
        <h2 className="fade-up">We Commonly Repair</h2>
        <ul>
          <li className="fade-up">Smartwatches</li>
          <li className="fade-up">Headphones (wired & wireless)</li>
          <li className="fade-up">Bluetooth speakers</li>
          <li className="fade-up">Handheld consoles (like Nintendo Switch)</li>
          <li className="fade-up">Tablets (non-Apple)</li>
          <li className="fade-up">Other portable electronics</li>
        </ul>

        <h2 className="fade-up">Why choose Shatter Repairs?</h2>
        <ul>
          <li className="fade-up">
            <strong>Wide range of supported devices</strong>
          </li>
          <li className="fade-up">
            <strong>Transparent pricing & honest diagnostics</strong>
          </li>
          <li className="fade-up">
            Quick turnaround times on small electronics
          </li>
          <li className="fade-up">
            Trusted by Houston locals for over 10 years
          </li>
        </ul>

        <Link to="/contact-form" className="btn primary fade-up">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
