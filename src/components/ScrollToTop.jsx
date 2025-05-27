// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly, then fallback with a tiny delay for Safari
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
    }, 50);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
