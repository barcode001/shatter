import React, { useState } from "react";
import { categories, brands, models } from "./data/repairOptions";
import { issues } from "./data/issues";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { logEvent } from "./ga";

function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    brand: "",
    model: "",
    repairType: "",
    customModel: "",
    customService: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Require at least email OR phone
    if (!formData.email && !formData.phone) {
      alert("Please provide either an email or phone number.");
      return;
    }

    emailjs
      .sendForm(
        "service_miu6zvf",
        "template_e9ao9zk",
        e.target,
        "_BndisdRudnhR6wxt"
      )
      .then(() => {
        logEvent("submit", "Form", "Contact Form Submitted");

        // ✅ Show success then redirect
        setShowSuccess(true);
        setTimeout(() => navigate("/thank-you"), 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Message failed to send.");
      });

    // ✅ Reset form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      brand: "",
      model: "",
      repairType: "",
      customModel: "",
      customService: "",
      message: "",
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={sendEmail} className="contact-form">
        <h2>Get a Quote</h2>

        {/* Name */}
        <div className={`form-group ${formData.name ? "has-value" : ""}`}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name*</label>
        </div>

        {/* Email */}
        <div className={`form-group ${formData.email ? "has-value" : ""}`}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <label htmlFor="email">Email</label>
        </div>

        {/* Phone */}
        <div className={`form-group ${formData.phone ? "has-value" : ""}`}>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="7132317205"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
          />
          <label htmlFor="phone">Phone</label>
        </div>

        {/* Category */}
        <div className={`form-group ${formData.category ? "has-value" : ""}`}>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => {
              handleChange(e);
              setFormData((prev) => ({
                ...prev,
                brand: "",
                model: "",
                customModel: "",
              }));
            }}
            required
          >
            <option value="" disabled hidden>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <label htmlFor="category">Category*</label>
        </div>

        {/* Brand */}
        {formData.category && (
          <div className={`form-group ${formData.brand ? "has-value" : ""}`}>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={(e) => {
                handleChange(e);
                setFormData((prev) => ({
                  ...prev,
                  model: "",
                  customModel: "",
                }));
              }}
              required
            >
              <option value="">Select brand</option>
              {brands[formData.category]?.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <label htmlFor="brand">Brand*</label>
          </div>
        )}

        {/* Model */}
        {formData.brand && (
          <>
            <div className={`form-group ${formData.model ? "has-value" : ""}`}>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              >
                <option value="">Select model</option>
                {models[formData.category]?.[formData.brand]?.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
                {/* ✅ Ensure "Other" always available */}
                {!models[formData.category]?.[formData.brand]?.includes(
                  "Other"
                ) && <option value="Other">Other</option>}
              </select>
              <label htmlFor="model">Model*</label>
            </div>

            {formData.model === "Other" && (
              <div
                className={`form-group ${
                  formData.customModel ? "has-value" : ""
                }`}
              >
                <input
                  type="text"
                  id="customModel"
                  name="customModel"
                  value={formData.customModel}
                  onChange={handleChange}
                  placeholder="Type your model here"
                  required
                />
                <label htmlFor="customModel">Enter Model</label>
              </div>
            )}
          </>
        )}

        {/* Repair Type */}
        <div className={`form-group ${formData.repairType ? "has-value" : ""}`}>
          <select
            id="repairType"
            name="repairType"
            value={formData.repairType}
            onChange={handleChange}
            required
          >
            <option value="">Select repair type</option>
            {issues[formData.category]?.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
            {!issues[formData.category]?.includes("Other") && (
              <option value="Other">Other</option>
            )}
          </select>
          <label htmlFor="repairType">Repair Needed*</label>
        </div>

        {formData.repairType === "Other" && (
          <div
            className={`form-group ${
              formData.customService ? "has-value" : ""
            }`}
          >
            <input
              type="text"
              id="customService"
              name="customService"
              value={formData.customService}
              onChange={handleChange}
              placeholder="Describe the issue"
              required
            />
            <label htmlFor="customService">Enter Repair Type</label>
          </div>
        )}

        {/* Message */}
        <div className={`form-group ${formData.message ? "has-value" : ""}`}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about the issue..."
            rows="4"
          />
          <label htmlFor="message">Additional Comments (optional)</label>
        </div>

        <button type="submit">Submit</button>

        {/* ✅ Success message */}
        {showSuccess && (
          <p className="success-message" aria-live="polite">
            ✅ Message sent! Redirecting...
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
