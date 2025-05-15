import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

const images = [
  {
    className: "hero1",
    alt: "iPhone Repair",
    title: "Fast Phone Repair in Houston — iPhone, iPad, Laptop & More",
    subtitle: "Same-day repairs backed by a warranty",
    buttonText: "Get a Quote",
    buttonLink: "/contact",
    learnMoreLink: "/iphone-repair",
  },
  {
    className: "hero2",
    alt: "iPad Repair",
    title: "Expert iPad Screen Fixes",
    subtitle: "Cracked screen? We’ve got you covered.",
    buttonText: "Schedule Now",
    buttonLink: "/contact",
    learnMoreLink: "/ipad-repair",
  },
  {
    className: "hero3",
    alt: "Laptop Repair",
    title: "Laptop Repair Experts",
    subtitle: "Keyboard, screen, battery — we fix it all.",
    buttonText: "See Services",
    buttonLink: "/contact",
    learnMoreLink: "/laptop-repair",
  },
  {
    className: "hero4",
    alt: "Gaming Console Repair",
    title: "Console Issues? We Fix That.",
    subtitle: "PlayStation, Xbox, Switch — repairs done right.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    learnMoreLink: "/gaming-console-repair",
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

  useEffect(() => {
    images.forEach((img) => {
      const preload = new Image();
      preload.src = new URL(
        `/src/assets/images/${img.className}.jpg`,
        import.meta.url
      ).href;
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const isLoopedBack =
      previousIndex.current === images.length - 1 && index === 0;

    if (isLoopedBack) {
      const resetTimeout = setTimeout(() => {
        setAnimatedSlides([0]);
      }, 600);
      return () => clearTimeout(resetTimeout);
    }

    setAnimatedSlides((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );

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
          <div key={i} loading="lazy" className={`slide ${img.className}`}>
            <div className="bg-blur" />
            <div className="overlay" />
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

              <Link
                to={img.buttonLink}
                className={`slide-button ${
                  loaded && animatedSlides.includes(i) ? "animate" : ""
                }`}
              >
                {img.buttonText}
              </Link>
              <a
                href="tel:8328692809"
                className={`call-now-btn ${
                  loaded && animatedSlides.includes(i) ? "animate" : ""
                }`}
              >
                📞 Call Now
              </a>
              <Link
                to={img.learnMoreLink}
                className={`learn-more-link ${
                  loaded && animatedSlides.includes(i) ? "animate" : ""
                }`}
              >
                Learn More
              </Link>
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
