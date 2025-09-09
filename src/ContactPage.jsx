import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useScrollReveal from "./hooks/useScrollReveal";
import emailjs from "emailjs-com";
import { logEvent } from "./ga";
import { logPageView } from "./ga";

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
    <section className="contact-page">
      <header className="service-header">
        <h1 className="fade-up">Contact Shatter Repairs</h1>
        <p className="subtitle fade-up">
          Questions? Quotes? We’re here to help — just reach out.
        </p>
      </header>

      <div className="contact-info fade-up">
        <p>
          <strong>Phone:</strong> <a href="tel:3465260160">(346) 526-0160</a>
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
              required
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
          <Link to="/" className="link-text">
            Give us a call
          </Link>{" "}
          — we’re happy to help!
        </p>
      </div>
    </section>
  );
}
