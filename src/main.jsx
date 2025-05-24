import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "./styles/main.scss"; // or .css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/shatter/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
