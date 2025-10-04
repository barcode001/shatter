import { Link } from "react-router-dom";
import ipadService from "../assets/images/ipadServicePage.webp";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function IpadRepair() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>iPad Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="Professional iPad repair in Houston. We fix cracked screens, batteries, charging ports, buttons, and more — fast and reliable service you can trust."
        />
        <meta
          name="keywords"
          content="iPad repair Houston, iPad screen replacement Houston, iPad battery replacement Houston, tablet repair Houston, charging port repair iPad"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/ipad-repair"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="iPad Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Fast and affordable iPad repair in Houston. Screen replacements, batteries, charging ports, and more."
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/ipad-repair"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="iPad Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Reliable iPad repair in Houston. Cracked screens, batteries, charging ports, water damage, and more."
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
            "serviceType": "iPad Repair",
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
            "description": "Shatter Repairs provides professional iPad repair in Houston, including screen replacement, battery replacement, charging port repair, button repair, and water damage diagnostics."
          }
          `}
        </script>
      </Helmet>

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

          <Link
            to="/contact-form"
            className="btn primary fade-up"
            onClick={() =>
              logEvent("click", "CTA", "Get a Quote - iPad Repair Page")
            }
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
