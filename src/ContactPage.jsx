// import ContactForm from "./ContactForm";

// function ContactPage() {
//   return (
//     <div className="contact-page">
//       {/* <h1>Contact Us</h1>
//       <p>We'll get back to you shortly.</p> */}
//       <ContactForm />
//     </div>
//   );
// }

// export default ContactPage;

import { useEffect } from "react";
import useScrollReveal from "./hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactPage() {
  useScrollReveal(); // Animates `.fade-up` elements

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section className="contact-page">
      <header className="service-header">
        <h1 className="fade-up">Contact Shatter Repairs</h1>
        <p className="subtitle fade-up">
          Questions? Quotes? We’re here to help — just reach out.
        </p>
      </header>

      <div className="contact-info fade-up">
        <p>
          <strong>Phone:</strong> <a href="tel:8328692809">(832) 869-2809</a>
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
        <form
          className="contact-form"
          action="https://formspree.io/f/your-form-id" // Replace with real action or backend handler
          method="POST"
        >
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
            <label htmlFor="email">email</label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={formData.phone ? "has-value" : ""}
            />
            <label htmlFor="name">Your Phone (Optional)</label>
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
          <Link to="/" className="link-text">
            Give us a call
          </Link>{" "}
          — we’re happy to help!
        </p>
      </div>
    </section>
  );
}
