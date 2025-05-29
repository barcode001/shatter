import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50); // slight delay helps ensure animations fire

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
