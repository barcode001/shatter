import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
// import ContactPage from "./ContactPage";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/shatter">
    <App />
  </BrowserRouter>
);
