import { theme } from "../theme";

const skills = [
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Socket.io",
  "Linux / DevOps (learning)",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: "3rem 3rem 4rem",
        fontFamily: theme.font.body,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2.5rem",
        alignItems: "start",
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
          <span style={{ width: "24px", height: "1px", background: theme.colors.accent }} />
          <span style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "0.95rem" }}>
            About Me
          </span>
        </div>

        <h2
          style={{
            fontFamily: theme.font.display,
            fontSize: "2.2rem",
            fontWeight: 700,
            color: theme.colors.white,
            margin: "0 0 1.2rem",
          }}
        >
          FULLSTACK DEVELOPER, BUILT FOR THE WHOLE STACK
        </h2>

        <p
          style={{
            color: theme.colors.textMuted,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            margin: "0 0 1rem",
          }}
        >
          I'm Favour, a fullstack web developer with 1.5+ years of experience
          building complete products — from React interfaces down to the
          databases and APIs that power them. I mostly work in the PERN
          stack, deploying frontends to Vercel and backends to Render.
        </p>

        <p
          style={{
            color: theme.colors.textMuted,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          My recent focus has been ScholarShield, an academic integrity
          platform for Nigerian universities with real-time exam proctoring,
          and WorkDone, a live marketplace app with escrow payments and
          real-time chat. I'm currently deepening my Linux and DevOps skills
          to round out how I build and ship software.
        </p>
      </div>

      <div
        style={{
          background: theme.colors.cardDark,
          borderRadius: theme.radius.md,
          padding: "1.8rem",
        }}
      >
        <h3
          style={{
            fontFamily: theme.font.display,
            color: theme.colors.white,
            fontSize: "1.1rem",
            margin: "0 0 1.2rem",
          }}
        >
          Tools & Technologies
        </h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: theme.colors.white,
                fontSize: "0.85rem",
                padding: "0.5rem 1rem",
                borderRadius: theme.radius.pill,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}