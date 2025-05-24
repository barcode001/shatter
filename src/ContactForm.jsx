// ContactForm.jsx
import React, { useState } from "react";
import { categories, brands, models } from "./data/repairOptions";
import { issues } from "./data/issues";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [redirectPending, setRedirectPending] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (!formData.email && !formData.phone) {
      alert("Please provide either an email or phone number.");
      return;
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const finalModel =
      formData.model === "Other" ? formData.customModel : formData.model;
    const finalService =
      formData.repairType === "Other"
        ? formData.customService
        : formData.repairType;

    const submission = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone.replace(/\D/g, ""),
      category: formData.category,
      brand: formData.brand,
      model: finalModel,
      repairType: finalService,
      message: formData.message,
    };

    console.log("📩 Submitted:", submission);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    //  Reset the form after submit
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

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     document
    //       .querySelectorAll(".form-group input, .form-group textarea")
    //       .forEach((el) => {
    //         if (el.value.trim()) {
    //           el.parentElement.classList.add("has-value");
    //         } else {
    //           el.parentElement.classList.remove("has-value");
    //         }
    //       });
    //   }, 500); // slight delay for Safari autofill to kick in

    //   return () => clearTimeout(timeout);
    // }, []);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.href = "/";
    }, 3000);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Get a Quote</h2>

        <div className={`form-group ${formData.name ? "has-value" : ""}`}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name*</label>
        </div>

        <div className={`form-group ${formData.email ? "has-value" : ""}`}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className={`form-group ${formData.phone ? "has-value" : ""}`}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="1234567890"
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className={`form-group ${formData.category ? "has-value" : ""}`}>
          <select
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

        {formData.category && (
          <div className={`form-group ${formData.brand ? "has-value" : ""}`}>
            <select
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

        {formData.brand && (
          <>
            <div className={`form-group ${formData.model ? "has-value" : ""}`}>
              <select
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
                {!models[formData.brand]?.includes("Other") && (
                  <option value="Other">Other</option>
                )}
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

        <div className={`form-group ${formData.repairType ? "has-value" : ""}`}>
          <select
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
              name="customService"
              value={formData.customService}
              onChange={handleChange}
              placeholder="Describe the issue"
              required
            />
            <label htmlFor="customService">Enter Repair Type</label>
          </div>
        )}

        <div className={`form-group ${formData.message ? "has-value" : ""}`}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about the issue..."
            rows="4"
          />
          <label htmlFor="message">Additional Comments (optional)</label>
        </div>

        <button type="submit">Submit</button>
      </form>
      {showSuccess && (
        <div className="form-toast" role="status" aria-live="polite">
          ✅ Thanks! Your request was submitted.
          <br />
          <button onClick={() => (window.location.href = "/")}>OK</button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
