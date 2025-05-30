import useScrollReveal from "./hooks/useScrollReveal";

export default function About() {
  useScrollReveal(); // for .fade-up animation

  return (
    <section className="about-page">
      <header className="about-header">
        <h1 className="fade-up">About Shatter Repairs</h1>
        <p className="subtitle fade-up">
          We’re not your average repair shop. We’re problem solvers — passionate
          about technology, obsessed with quality, and committed to helping our
          community stay connected.
        </p>
      </header>

      <div className="about-content">
        <h2 className="fade-up">Our Story</h2>
        <p className="fade-up">
          Shatter Repairs was founded by two repair techs with over 20 years of
          combined experience. Tired of rushed repairs and low-quality parts, we
          started Shatter to do things differently — focusing on care,
          transparency, and long-term results.
        </p>

        <h2 className="fade-up">What Makes Us Different</h2>
        <ul>
          <li className="fade-up">Top-tier OEM-grade parts</li>
          <li className="fade-up">Lifetime warranty on workmanship</li>
          <li className="fade-up">
            Fast turnaround — many repairs done same-day
          </li>
          <li className="fade-up">No gimmicks. Just honest, skilled work.</li>
        </ul>

        <h2 className="fade-up">Serving Houston With Pride</h2>
        <p className="fade-up">
          From phones to tablets to laptops, we’ve helped thousands of
          Houstonians get back to what matters. We treat every device like it’s
          our own — because we care about the people behind the screen.
        </p>
      </div>
    </section>
  );
}
