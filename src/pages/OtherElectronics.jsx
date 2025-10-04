import { Link } from "react-router-dom";
import otherElectronicsImg from "../assets/images/otherElectronicsService2.png";
import useScrollReveal from "../hooks/useScrollReveal";
import { logEvent } from "../ga";
import { Helmet } from "react-helmet-async";

export default function OtherElectronics() {
  useScrollReveal(); // Targets `.fade-up` by default

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Other Electronics Repair in Houston | Shatter Repairs</title>
        <meta
          name="description"
          content="We repair more than phones! Shatter Repairs in Houston fixes smartwatches, headphones, Bluetooth speakers, handheld consoles, tablets, and more."
        />
        <meta
          name="keywords"
          content="electronics repair Houston, smartwatch repair Houston, headphone repair Houston, speaker repair Houston, handheld console repair Houston, tablet repair Houston"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://shatterrepairs.com/services/other-electronics"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Other Electronics Repair in Houston | Shatter Repairs"
        />
        <meta
          property="og:description"
          content="Shatter Repairs offers repair services for smartwatches, headphones, speakers, handheld consoles, tablets, and more in Houston."
        />
        <meta
          property="og:url"
          content="https://shatterrepairs.com/services/other-electronics"
        />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Other Electronics Repair in Houston | Shatter Repairs"
        />
        <meta
          name="twitter:description"
          content="Get fast, affordable repairs for smartwatches, headphones, speakers, handheld consoles, tablets, and more in Houston."
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
            "serviceType": "Other Electronics Repair",
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
            "description": "Shatter Repairs provides repair services for other electronics in Houston, including smartwatches, headphones, Bluetooth speakers, handheld consoles, and tablets."
          }
          `}
        </script>
      </Helmet>

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
            <li className="fade-up">
              Handheld consoles (like Nintendo Switch)
            </li>
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

          <Link
            to="/contact-form"
            className="btn primary fade-up"
            onClick={() =>
              logEvent("click", "CTA", "Get a Quote - Other Electronics Page")
            }
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
