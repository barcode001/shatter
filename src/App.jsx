import { Routes, Route } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactPage from "./ContactPage"; // create this page
import "./styles/main.scss";
import { useState, useEffect } from "react";
import Services from "./Services";
import IphoneRepair from "./pages/IphoneRepair";
import ScrollToTop from "./components/ScrollToTop";
import AndroidRepair from "./pages/AndroidRepair";
import IpadRepair from "./pages/IpadRepair";
import LaptopRepair from "./pages/LaptopRepair";
import ConsoleRepair from "./pages/ConsoleRepair";
import OtherElectronics from "./pages/OtherElectronics";
import About from "./About";
import ContactForm from "./ContactForm";
import ThankYou from "./ThankYou";
function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 1500); // ⏱️ 1.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout">
      <Navbar visible={showNav} />
      <ScrollToTop />

      <main className="main-content">
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

          <Route path="/services/iphone-repair" element={<IphoneRepair />} />
          <Route path="/services/android-repair" element={<AndroidRepair />} />
          <Route path="/services/ipad-repair" element={<IpadRepair />} />
          <Route path="/services/laptop-repair" element={<LaptopRepair />} />
          <Route path="/services/console-repair" element={<ConsoleRepair />} />
          <Route
            path="/services/other-electronics"
            element={<OtherElectronics />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
