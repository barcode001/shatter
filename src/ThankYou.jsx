import { useNavigate } from "react-router-dom";
import { logEvent } from "./ga"; // make sure this path is correct

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <section className="thank-you-page">
      <h1>Thanks for your request!</h1>
      <p>We’ll get back to you as soon as possible.</p>
      <p>
        If it's urgent, call us now: <a href="tel:8328692809">(832) 869-2809</a>
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
