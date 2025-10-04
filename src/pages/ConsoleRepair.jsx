import { Link } from "react-router-dom";
import consoleService from "../assets/images/consoleServicePage.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function ConsoleRepair() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Game Console Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="Expert game console repair in Houston. We fix PlayStation, Xbox, and Nintendo Switch issues including HDMI ports, power problems, overheating, and more."
        />
        <meta
          name="keywords"
          content="console repair Houston, PlayStation repair Houston, Xbox repair Houston, Nintendo Switch repair Houston, HDMI port replacement, game console overheating"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/console-repair"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Game Console Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Fast and affordable repairs for PlayStation, Xbox, and Nintendo Switch in Houston. Get back to gaming today!"
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/console-repair"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Game Console Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Shatter Repairs fixes PlayStation, Xbox, and Switch consoles in Houston. HDMI ports, power issues, overheating, and more."
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
            "serviceType": "Game Console Repair",
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
            "description": "Shatter Repairs provides professional game console repair in Houston, including PlayStation, Xbox, and Nintendo Switch fixes like HDMI port replacement, power issues, and overheating."
          }
          `}
        </script>
      </Helmet>

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

          <h1 className="fade-up console-text">
            Game Console Repair in Houston
          </h1>
          <p className="subtitle fade-up">
            PlayStation, Xbox, or Switch acting up? We’ll get you back in the
            game — <strong>fast.</strong>
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
    </>
  );
}
