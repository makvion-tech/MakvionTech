import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import api from "../services/api";
import { socials } from "../data/projects";

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedinIn, TikTok: FaTiktok };

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact-intro">
          <h2 id="contact-title" className="section-title section-title--left">
            Let's work together
          </h2>
          <p>
            Have a project or a role in mind? Send a message and I'll reply by
            email, or reach me on any of these.
          </p>

          <ul className="channels">
            {socials.map((s) => {
              const Icon = icons[s.label];
              return (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <span className="channel-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <span className="channel-text">
                      <strong>{s.label}</strong>
                      <span>{s.handle}</span>
                    </span>
                    <svg viewBox="0 0 16 10" width="16" height="10" aria-hidden="true">
                      <path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name"
                placeholder="Your name" required value={form.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email"
                placeholder="you@example.com" required value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6}
              placeholder="Tell me about your project or role"
              required value={form.message} onChange={handleChange} />
          </div>

          <button type="submit" className="pill pill--solid pill--lg" disabled={status === "sending"}>
            {status === "sending" ? "Sending" : "Send message"}
          </button>

          <p className="form-status" role="status" data-state={status}>
            {status === "sent" && "Message sent. Thank you, I'll get back to you soon."}
            {status === "error" && "The message didn't send. Check your connection and try again."}
          </p>
        </form>
      </div>
    </section>
  );
}