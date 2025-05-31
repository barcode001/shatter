import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import services from "./data/services";
import { logEvent } from "./ga"; // make sure this path is correct

function Services() {
  const serviceRefs = useRef([]);
  const [visible, setVisible] = useState(
    new Array(services.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = serviceRefs.current.indexOf(entry.target);

          if (entry.isIntersecting && !visible[index]) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });

            observer.unobserve(entry.target); // ✅ Stop observing after first visible
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref && ref instanceof Element) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services-section">
      <h2>Our Repair Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (serviceRefs.current[i] = el)}
            className={`service-card fade-up ${visible[i] ? "visible" : ""}`}
          >
            <img
              loading="lazy"
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link
              to={service.link}
              className="btn"
              onClick={() =>
                logEvent("Services", "Click Service", service.title)
              }
            >
              {service.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
