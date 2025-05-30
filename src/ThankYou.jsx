import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <section className="thank-you-page">
      <h1>Thanks for your request!</h1>
      <p>We’ll get back to you as soon as possible.</p>
      <p>
        If it's urgent, call us now: <a href="tel:8328692809">(832) 869-2809</a>
      </p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </section>
  );
}
