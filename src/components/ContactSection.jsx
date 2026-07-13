import { useState } from "react";
import { theme } from "../theme";
import api from "../services/api"; // adjust filename below if it's not called api.js

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

  const inputStyle = {
    width: "100%",
    background: theme.colors.cardDark,
    border: `1px solid ${theme.colors.divider}`,
    borderRadius: theme.radius.sm,
    padding: "0.85rem 1rem",
    color: theme.colors.white,
    fontFamily: theme.font.body,
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "3rem 3rem 5rem",
        fontFamily: theme.font.body,
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${theme.colors.bgGreenDeep} 0%, ${theme.colors.bgDark} 70%)`,
          borderRadius: theme.radius.lg,
          padding: "3rem",
          maxWidth: "560px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: theme.font.display,
            color: theme.colors.white,
            fontSize: "2rem",
            margin: "0 0 0.4rem",
          }}
        >
          Let's talk
        </h2>
        <p
          style={{
            color: theme.colors.textMuted,
            fontSize: "0.95rem",
            margin: "0 0 2rem",
          }}
        >
          Have a project in mind? I'd love to hear about it.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div style={{ textAlign: "left" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                color: theme.colors.white,
                fontSize: "0.85rem",
                marginBottom: "0.4rem",
              }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              style={inputStyle}
            />
          </div>

          <div style={{ textAlign: "left" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: theme.colors.white,
                fontSize: "0.85rem",
                marginBottom: "0.4rem",
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              style={inputStyle}
            />
          </div>

          <div style={{ textAlign: "left" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                color: theme.colors.white,
                fontSize: "0.85rem",
                marginBottom: "0.4rem",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: theme.colors.white,
              color: theme.colors.bgDark,
              border: "none",
              borderRadius: theme.radius.pill,
              padding: "0.85rem 1.5rem",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={{ color: theme.colors.accent, fontSize: "0.9rem", margin: 0 }}>
              Message sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#e05c5c", fontSize: "0.9rem", margin: 0 }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}