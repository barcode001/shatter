import React from "react";
import HeroSlider from "../HeroSlider";
import Services from "../Services";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Shatter Repairs | Cell Phone Repair in Houston</title>
        <meta
          name="description"
          content="Fast and affordable iPhone, iPad, laptop, and cell phone repair in Houston. Same-day service for screen replacements, batteries, and more. Visit us today!"
        />
        <meta
          name="keywords"
          content="cell phone repair Houston, iPhone repair Houston, iPad repair Houston, laptop repair Houston, screen replacement Houston, battery replacement, console repair, same-day repair"
        />
        <meta name="author" content="Shatter Repairs" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://shatterrepairs.com/" />

        {/* Open Graph (Facebook, Messenger, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shatter Repairs | Cell Phone Repair in Houston"
        />
        <meta
          property="og:description"
          content="Same-day repair for iPhones, iPads, laptops & more in Houston. Affordable, reliable, and fast service."
        />
        <meta property="og:url" content="https://shatterrepairs.com/" />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shatter Repairs | Cell Phone Repair in Houston"
        />
        <meta
          name="twitter:description"
          content="Fast and affordable iPhone, iPad, and laptop repair in Houston. Same-day service available."
        />
        <meta
          name="twitter:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Structured Data (LocalBusiness Schema) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shatter Repairs",
            "description": "Fast and affordable iPhone, iPad, laptop, and cell phone repair in Houston. Same-day service available.",
            "url": "https://shatterrepairs.com",
            "logo": "https://shatterrepairs.com/favicon-96x96.png",
            "image": "https://shatterrepairs.com/preview.png",
            "telephone": "+1-713-231-7205",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12315 Westheimer Rd D1",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77077",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": "Houston"
            },
            "openingHours": [
              "Mo-Sa 10:00-19:00",
              "Su 12:00-17:00"
            ],
            "sameAs": [
              "https://www.facebook.com/shatterrepairs",
              "https://www.instagram.com/shatterrepairs"
            ]
          }
          `}
        </script>
      </Helmet>

      <HeroSlider />
      <Services />
    </>
  );
}
