
import { useEffect } from "react";

export default function useScrollReveal(selector = ".fade-up", options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        ...options,
      }
    );

    // Delay observer to ensure scroll and layout are done
    const delay = setTimeout(() => {
      elements.forEach((el) => observer.observe(el));
    }, 100); // wait for scroll reset

    return () => {
      clearTimeout(delay);
      observer.disconnect();
    };
  }, [selector, options]);
}