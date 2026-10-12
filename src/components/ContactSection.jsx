import { useState } from "react";
import api from "../services/api";
import { socials } from "../data/projects";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="split contact" aria-labelledby="contact-title">
      <p className="split-lead" aria-hidden="true">
        Let's build something.
      </p>

      <div className="split-body">
        <h2 id="contact-title" className="panel-title">
          Contact
        </h2>
        <p>
          Have a project or a role in mind? Send a message below, or find me
          on GitHub, LinkedIn or TikTok.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-solid" disabled={status === "sending"}>
            {status === "sending" ? "Sending" : "Send message"}
          </button>

          <p className="form-status" role="status" data-state={status}>
            {status === "sent" && "Message sent. I'll get back to you soon."}
            {status === "error" &&
              "The message didn't send. Check your connection and try again."}
          </p>
        </form>

        <ul className="social-links" aria-label="Elsewhere">
          {socials.map((s) => (
            <li key={s.label}>
              <a className="text-link" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}