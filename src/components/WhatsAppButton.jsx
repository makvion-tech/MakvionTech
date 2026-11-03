// Put your number in international format: country code + number,
// digits only, no "+", no spaces, no leading 0.
// Example (Nigeria): 0707 843 1645  ->  "2347078431645"
export const WHATSAPP_NUMBER = "2347078431645";

const DEFAULT_MESSAGE = "Hi Makvion, I found you through your portfolio.";

// Builds a wa.me link with an optional prefilled message.
export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Use this in the contact form to send what the visitor typed straight to WhatsApp:
//   window.open(whatsappFromForm({ name, email, message }), "_blank", "noopener");
export function whatsappFromForm({ name = "", email = "", message = "" }) {
  const lines = [
    "Hi Makvion, I'm messaging from your portfolio.",
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    message && `\n${message}`,
  ].filter(Boolean);
  return whatsappLink(lines.join("\n"));
}

const styles = {
  button: {
    position: "fixed",
    right: "max(1rem, env(safe-area-inset-right))",
    bottom: "max(1rem, env(safe-area-inset-bottom))",
    zIndex: 60,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.55rem",
    padding: "0.85rem 1.2rem",
    borderRadius: "999px",
    background: "#25D366",
    color: "#06210f",
    fontFamily: "var(--font-text)",
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: "none",
    boxShadow: "0 10px 30px rgba(8,8,8,0.28)",
  },
};

export default function WhatsAppButton({ message }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Makvion on WhatsApp"
      style={styles.button}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
      WhatsApp
    </a>
  );
}