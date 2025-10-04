import { Link } from "react-router-dom";
import laptopService from "../assets/images/laptopServicePage1.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function LaptopRepair() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Laptop Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="Expert laptop repair in Houston. We fix screens, batteries, keyboards, charging issues, hard drives, SSDs, overheating, and more — often same-day."
        />
        <meta
          name="keywords"
          content="laptop repair Houston, laptop screen repair Houston, laptop battery replacement Houston, MacBook repair Houston, Chromebook repair, laptop keyboard repair"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/laptop-repair"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Laptop Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Fast, reliable laptop repair in Houston. Screen replacement, batteries, keyboards, charging, hard drives, and more."
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/laptop-repair"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Laptop Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Same-day laptop repair in Houston. We fix screens, batteries, charging ports, overheating, and more for all major brands."
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
            "serviceType": "Laptop Repair",
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
            "description": "Shatter Repairs provides expert laptop repair in Houston, including screen replacement, battery replacement, keyboard repair, charging issues, SSD upgrades, and overheating diagnostics."
          }
          `}
        </script>
      </Helmet>

      <section className="laptop-page">
        <header className="service-header">
          <div className="floating-wrapper">
            <img
              src={laptopService}
              loading="lazy"
              alt="Laptop with damaged screen"
              className="loop-hover"
            />
          </div>

          <h1 className="fade-up laptop-text">
            Houston Laptop Repair You Can Count On
          </h1>
          <p className="subtitle fade-up">
            From cracked screens to battery issues — we repair all major laptop
            brands, <strong>same-day</strong> in many cases.
          </p>
        </header>

        <div className="service-content">
          <h2 className="fade-up">Common Laptop Repairs</h2>
          <ul>
            <li className="fade-up">Screen replacement</li>
            <li className="fade-up">Battery replacement</li>
            <li className="fade-up">Keyboard repair</li>
            <li className="fade-up">Charging issues</li>
            <li className="fade-up">Hard drive / SSD upgrades</li>
            <li className="fade-up">Overheating & fan issues</li>
          </ul>

          <h2 className="fade-up">Why choose Shatter Repairs?</h2>
          <ul>
            <li className="fade-up">
              <strong>Same-day service</strong> on most laptop repairs
            </li>
            <li className="fade-up">
              <strong>Warranty-backed workmanship</strong>
            </li>
            <li className="fade-up">
              Support for Windows, macOS, and Chromebooks
            </li>
            <li className="fade-up">
              10+ years of real repair experience — no guesswork
            </li>
          </ul>

          <Link
            to="/contact-form"
            className="btn primary fade-up"
            onClick={() =>
              logEvent("click", "CTA", "Get a Quote - Laptop Repair Page")
            }
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
