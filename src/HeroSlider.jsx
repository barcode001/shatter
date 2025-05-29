import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import hero1 from "./assets/images/iphonehero.webp";
import hero2 from "./assets/images/ipadhero1.webp";
import hero3 from "./assets/images/laptopHero.webp";
import hero4 from "./assets/images/gameshero.webp";

const images = [
  {
    img: hero1,
    className: "iphone-slide",
    alt: "iPhone Repair",
    title: "Fast Phone Repair in Houston — iPhone, iPad, Laptop & More",
    subtitle: "Same-day repairs backed by a warranty",
    buttonText: "Get a Quote",
    buttonLink: "/contact",
    learnMoreLink: "#services-section",
  },
  {
    img: hero2,
    className: "ipad-slide",
    alt: "iPad Repair",
    title: "Expert iPad Screen Fixes",
    subtitle: "Cracked screen? We’ve got you covered.",
    buttonText: "Schedule Now",
    buttonLink: "/contact",
    learnMoreLink: "#services-section",
  },
  {
    img: hero3,
    className: "laptop-slide",
    alt: "Laptop Repair",
    title: "Laptop Repair Experts",
    subtitle: "Keyboard, screen, battery — we fix it all.",
    buttonText: "See Services",
    buttonLink: "/contact",
    learnMoreLink: "#services-section",
  },
  {
    img: hero4,
    className: "console-slide",
    alt: "Gaming Console Repair",
    title: "Console Issues? We Fix That.",
    subtitle: "PlayStation, Xbox, Switch — repairs done right.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    learnMoreLink: "#services-section",
  },
];

function HeroSlider() {
  const [loaded, setLoaded] = useState(false);

  const [animatedSlides, setAnimatedSlides] = useState([0]);

  const previousIndex = useRef(0);

  const [autoplay, setAutoplay] = useState(true);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setAutoplay(false); // stop forever after interaction
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setAutoplay(false);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToSlide = (i) => {
    setAutoplay(false);
    setIndex(i);
  };
  const scrollToServices = () => {
    const el = document.getElementById("services-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  // useEffect(() => {
  //   images.forEach((img) => {
  //     const preload = new Image();
  //     preload.src = new URL(
  //       `/src/assets/images/${img.className}.jpg`,
  //       import.meta.url
  //     ).href;
  //   });
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   const isLoopedBack =
  //     previousIndex.current === images.length - 1 && index === 0;

  //   if (isLoopedBack) {
  //     const resetTimeout = setTimeout(() => {
  //       setAnimatedSlides([0]);
  //     }, 600);
  //     return () => clearTimeout(resetTimeout);
  //   }

  //   setAnimatedSlides((prev) =>
  //     prev.includes(index) ? prev : [...prev, index]
  //   );

  //   previousIndex.current = index;
  // }, [index]);
  useEffect(() => {
    setAnimatedSlides([index]); // Only animate current slide
    previousIndex.current = index;
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  useEffect(() => {
    if (!autoplay) return;

    //it stops from autopay image slider
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="hero-slider" {...handlers}>
      <div
        className="slide-wrapper"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className={`slide ${img.className}`}>
            <img
              src={img.img}
              alt={img.alt}
              loading="lazy"
              className="slide-img"
            />

            <div className="slide-content">
              {i === 0 ? (
                <h1
                  className={`slide-title ${
                    loaded && animatedSlides.includes(i) ? "animate" : ""
                  }`}
                >
                  {img.title}
                </h1>
              ) : (
                <h2
                  className={`slide-title ${
                    loaded && animatedSlides.includes(i) ? "animate" : ""
                  }`}
                >
                  {img.title}
                </h2>
              )}

              <p
                className={`slide-subtitle ${
                  loaded && animatedSlides.includes(i) ? "animate" : ""
                }`}
              >
                {img.subtitle}
              </p>

              <Link to={img.buttonLink} className="slide-button">
                {img.buttonText}
              </Link>
              <a href="tel:8328692809" className="call-now-btn">
                📞 Call Now
              </a>
              <button onClick={scrollToServices} className="learn-more-link">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="next" onClick={nextSlide}>
        ›
      </button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
