import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";

const isProd = import.meta.env.MODE === "production";
const basename = isProd ? "/shatter" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/shatter">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
