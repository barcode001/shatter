import { Link } from "react-router-dom";
import androidService from "../assets/images/androidServicePage1.webp";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function AndroidRepair() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Android Phone Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="Fast and affordable Android phone repair in Houston. We fix cracked screens, batteries, charging ports, speakers, and more — often same-day."
        />
        <meta
          name="keywords"
          content="Android repair Houston, Samsung screen repair, battery replacement Android, charging port repair, phone repair Houston"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/android-repair"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Android Phone Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Shatter Repairs offers fast, affordable Android repair in Houston. Same-day screen, battery, and charging port fixes."
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/android-repair"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Android Phone Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Affordable same-day Android phone repair in Houston. Screen replacements, batteries, charging ports, and more."
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
            "serviceType": "Android Phone Repair",
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
            "description": "Shatter Repairs provides Android phone repair services in Houston, including screen replacement, battery replacement, charging-port repair, water damage, and more."
          }
          `}
        </script>
      </Helmet>

      <section className="android-page">
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
            <li className="fade-up">
              OEM-quality parts for all Android models
            </li>
            <li className="fade-up">
              Trusted technicians with over 10 years of experience
            </li>
          </ul>

          <Link
            to="/contact-form"
            className="btn primary fade-up"
            onClick={() =>
              logEvent("click", "CTA", "Get a Quote - Android Repair Page")
            }
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
