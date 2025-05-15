import { Routes, Route } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import Navbar from "./Navbar";
import ContactPage from "./ContactPage"; // create this page
import "./styles/main.scss";
import { useState, useEffect } from "react";
import Services from "./Services";
function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 1500); // ⏱️ 1.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Navbar visible={showNav} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Services />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
