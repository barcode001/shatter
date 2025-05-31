// src/ga/index.js
import ReactGA from "react-ga4";

// Replace with your actual Measurement ID
const MEASUREMENT_ID = "G-YF8MBEM045";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });
};