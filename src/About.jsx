import React from "react";
import useScrollReveal from "./hooks/useScrollReveal";
import { Helmet } from "react-helmet-async";

export default function About() {
  useScrollReveal(); // for .fade-up animation

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>About Shatter Repairs | Houston Cell Phone Repair Experts</title>
        <meta
          name="description"
          content="Fast iPhone, iPad, laptop & electronics repair in Houston. Shatter Repairs brings 20+ years of trusted experience with honest, reliable service."
        />
        <meta
          name="keywords"
          content="about Shatter Repairs, phone repair Houston, laptop repair Houston, iPad repair Houston, electronics repair"
        />
        <meta name="author" content="Shatter Repairs" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://shatterrepairs.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Shatter Repairs | Houston Repair Experts"
        />
        <meta
          property="og:description"
          content="Shatter Repairs was founded to bring quality, transparency, and care back to phone and electronics repair in Houston."
        />
        <meta property="og:url" content="https://shatterrepairs.com/about" />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Shatter Repairs | Houston Repair Experts"
        />
        <meta
          name="twitter:description"
          content="We’re not your average repair shop — we’re passionate about technology and committed to helping Houston stay connected."
        />
        <meta
          name="twitter:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Structured Data (About Page) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Shatter Repairs",
              "url": "https://shatterrepairs.com",
              "logo": "https://shatterrepairs.com/favicon-96x96.png",
              "description": "Fast and affordable cell phone, laptop, and iPad repair in Houston. Same-day service available.",
              "founder": "Sam Flores",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12315 Westheimer Rd D1",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77077",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-713-231-7205",
                "contactType": "customer service"
              }
            }
          }
          `}
        </script>
      </Helmet>

      <section className="about-page">
        <header className="about-header">
          <h1 className="fade-up">About Shatter Repairs</h1>
          <p className="subtitle fade-up">
            We’re not your average repair shop. We’re problem solvers —
            passionate about technology, obsessed with quality, and committed to
            helping our community stay connected.
          </p>
        </header>

        <div className="about-content">
          <h2 className="fade-up">Our Story</h2>
          <p className="fade-up">
            Shatter Repairs was founded by two repair techs with over 20 years
            of combined experience. Tired of rushed repairs and low-quality
            parts, we started Shatter to do things differently — focusing on
            care, transparency, and long-term results.
          </p>

          <h2 className="fade-up">What Makes Us Different</h2>
          <ul>
            <li className="fade-up">Top-tier OEM-grade parts</li>
            <li className="fade-up">Lifetime warranty on workmanship</li>
            <li className="fade-up">
              Fast turnaround — many repairs done same-day
            </li>
            <li className="fade-up">No gimmicks. Just honest, skilled work.</li>
          </ul>

          <h2 className="fade-up">Serving Houston With Pride</h2>
          <p className="fade-up">
            From phones to tablets to laptops, we’ve helped thousands of
            Houstonians get back to what matters. We treat every device like
            it’s our own — because we care about the people behind the screen.
          </p>
        </div>
      </section>
    </>
  );
}
