import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { logEvent } from "./ga"; // make sure this path is correct

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <section className="thank-you-page">
      <Helmet>
        <title>Thank You | Shatter Repairs</title>
        <meta
          name="description"
          content="Thanks for contacting Shatter Repairs. We’ll reach out shortly regarding your repair request."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://shatterrepairs.com/thank-you" />
      </Helmet>

      <h1>Thanks for your request!</h1>
      <p>We’ll get back to you as soon as possible.</p>
      <p>
        If it's urgent, call us now: <a href="tel:7132317205">(713) 231-7205</a>
      </p>
      <button
        onClick={() => {
          logEvent("ThankYou", "Click Back to Home");
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </section>
  );
}
