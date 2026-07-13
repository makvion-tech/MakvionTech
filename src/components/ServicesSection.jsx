import { theme } from "../theme";

const services = [
  {
    icon: "⚛",
    title: "Frontend Development",
    description:
      "Building responsive, accessible React interfaces with clean component architecture and thoughtful UX.",
  },
  {
    icon: "🔗",
    title: "API & Backend Integration",
    description:
      "Connecting frontends to REST APIs, handling auth flows, and coordinating with backend systems end to end.",
  },
  {
    icon: "🛠",
    title: "Fullstack Architecture",
    description:
      "Designing and shipping complete PERN stack applications — from database schema to deployed product.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "3rem 3rem 4rem",
        fontFamily: theme.font.body,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
        <span style={{ width: "24px", height: "1px", background: theme.colors.accent }} />
        <span style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "0.95rem" }}>
          My Service
        </span>
      </div>

      <h2
        style={{
          fontFamily: theme.font.display,
          fontSize: "2.4rem",
          fontWeight: 700,
          color: theme.colors.white,
          margin: "0 0 2.5rem",
        }}
      >
        WHAT I'M OFFERING
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: theme.colors.cardDark,
              borderRadius: theme.radius.md,
              padding: "1.8rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: theme.radius.sm,
                background: theme.colors.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                marginBottom: "1.2rem",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                fontFamily: theme.font.display,
                color: theme.colors.white,
                fontSize: "1.15rem",
                margin: "0 0 0.5rem",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: theme.colors.textMuted,
                fontSize: "0.9rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}