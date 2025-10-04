import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useScrollReveal from "./hooks/useScrollReveal";
import emailjs from "emailjs-com";
import { logEvent, logPageView } from "./ga";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  useScrollReveal();
  const navigate = useNavigate();

  useEffect(() => {
    logPageView();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_miu6zvf",
        "template_5r2u5zo",
        e.target,
        "_BndisdRudnhR6wxt"
      )
      .then(() => {
        logEvent("submit", "Form", "Contact Form Submitted");
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Message failed to send.");
      });

    e.target.reset();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>Contact Shatter Repairs | Houston Cell Phone Repair</title>
        <meta
          name="description"
          content="Get in touch with Shatter Repairs in Houston. Call us at (713) 231-7205 or send a message for fast, reliable phone, tablet, and laptop repairs."
        />
        <meta
          name="keywords"
          content="contact Shatter Repairs, phone repair Houston contact, iPhone repair Houston contact, laptop repair Houston contact"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shatterrepairs.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Shatter Repairs | Houston Cell Phone Repair"
        />
        <meta
          property="og:description"
          content="Questions? Quotes? Shatter Repairs is here to help. Call (713) 231-7205 or send us a message today."
        />
        <meta property="og:url" content="https://shatterrepairs.com/contact" />
        <meta
          property="og:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Shatter Repairs | Houston Cell Phone Repair"
        />
        <meta
          name="twitter:description"
          content="Contact Shatter Repairs for fast, affordable device repairs. Call (713) 231-7205 or send us a message."
        />
        <meta
          name="twitter:image"
          content="https://shatterrepairs.com/preview.png"
        />

        {/* LocalBusiness structured data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shatter Repairs",
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
            "openingHours": [
              "Mo-Sa 10:00-19:00",
              "Su 12:00-17:00"
            ]
          }
          `}
        </script>
      </Helmet>

      <section className="contact-page">
        <header className="service-header">
          <h1 className="fade-up">Contact Shatter Repairs</h1>
          <p className="subtitle fade-up">
            Questions? Quotes? We’re here to help — just reach out.
          </p>
        </header>

        <div className="contact-info fade-up">
          <p>
            <strong>Phone:</strong> <a href="tel:7132317205">(713) 231-7205</a>
          </p>
          <p>
            <strong>Address:</strong> 12315 Westheimer Rd D1, Houston, TX 77077
          </p>
          <p>
            <strong>Hours:</strong>
          </p>
          <ul>
            <li>Mon–Sat: 10:00 AM – 7:00 PM</li>
            <li>Sunday: 12:00 PM – 5:00 PM</li>
          </ul>
        </div>

        <header className="service-header">
          <h1 className="fade-up">Get in Touch</h1>
          <p className="subtitle fade-up">
            Need a quote or have a question? We’re just one message away.
          </p>
        </header>

        <div className="contact-form-wrapper fade-up">
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={formData.name ? "has-value" : ""}
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={formData.email ? "has-value" : ""}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={formData.phone ? "has-value" : ""}
              />
              <label htmlFor="phone">Your Phone (Optional)</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className={formData.message ? "has-value" : ""}
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>

          <p className="fade-up contact-note">
            Prefer to talk?{" "}
            <a href="tel:7132317205" className="link-text">
              Give us a call
            </a>{" "}
            — we’re happy to help!
          </p>
        </div>
      </section>
    </>
  );
}
