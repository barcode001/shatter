import { Link } from "react-router-dom";
import iphoneService from "../assets/images/iphonService.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function IphoneRepair() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>iPhone Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="Fast and affordable iPhone repair in Houston. Same-day service for cracked screens, batteries, charging ports, back glass, and more."
        />
        <meta
          name="keywords"
          content="iPhone repair Houston, iPhone screen repair Houston, iPhone battery replacement Houston, iPhone back glass replacement Houston, iPhone charging port repair"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/iphone-repair"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="iPhone Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Shatter Repairs offers fast, reliable iPhone repair in Houston. Cracked screens, batteries, back glass, charging ports, and more."
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/iphone-repair"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="iPhone Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Same-day iPhone repair in Houston. Screen replacement, battery replacement, charging port, back glass, and water damage diagnostics."
        />
        <meta
          name="twitter:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "iPhone Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shatter Repairs",
              "url": "https://shatterrepairs.com",
              "telephone": "+1-713-231-7205",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12315 Westheimer Rd D1",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77077",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Houston"
            },
            "description": "Shatter Repairs provides professional iPhone repair in Houston, including screen replacement, battery replacement, charging port repair, back-glass replacement, and water damage diagnostics."
          }
          `}
        </script>
      </Helmet>

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

          <Link
            to="/contact-form"
            className="btn primary fade-up"
            onClick={() =>
              logEvent("click", "CTA", "Get a Quote - iPhone Repair Page")
            }
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
