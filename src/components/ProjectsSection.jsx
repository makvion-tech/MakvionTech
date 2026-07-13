import { useState } from "react";
import { theme } from "../theme";

const projects = [
  {
    name: "WorkDone",
    description:
      "Live marketplace app with OAuth, escrow payments, roommate finder, and real-time chat.",
    image: "/projects/workdone.png",
    link: "https://workdone.name.ng",
    role: "Sole fullstack developer",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Vercel", "Render"],
    highlights: [
      "Google OAuth login with secure session handling",
      "Escrow-based payment flow for buyer/seller protection",
      "Roommate finder with applications and accept/reject flow",
      "Real-time chat and order/sales management dashboards",
    ],
  },
  {
    name: "ScholarShield",
    description:
      "Academic integrity and exam management platform for Nigerian universities, with anti-cheat proctoring.",
    image: "/projects/Scholarshield.png",
    link: "https://scholar-shield-49r5-pi.vercel.app/",
    role: "Frontend architecture & API integration",
    stack: ["React", "PostgreSQL", "Express", "Socket.io", "face-api.js", "Vercel"],
    highlights: [
      "Full anti-cheat suite: fullscreen enforcement, copy/paste blocking, DevTools detection",
      "Biometric enrollment using client-side face descriptors",
      "Live exam status polling and countdown timers",
      "Role-based portals for Lecturer, HOD, Admin, and SuperAdmin",
    ],
  },
  {
    name: "Crystalices",
    description:
      "Company website for an engineering firm offering truck rental and consulting services.",
    image: "/projects/Crystalices.png",
    link: "https://crystalices.site",
    role: "Frontend developer",
    stack: ["React"],
    highlights: [
      "Built a responsive company site presenting truck rental and consulting services",
      "Structured service and inquiry pages for a non-technical client audience",
    ],
  },
  {
    name: "Granduer",
    description:
      "Online presence for a fashion brand, covering both frontend and backend.",
    image: "/projects/Granduer.png",
    link: "https://granduer.vercel.app/",
    role: "Sole fullstack developer",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    highlights: [
      "Built both the frontend and backend for a fashion brand's website",
      "Designed the site to showcase the brand's collections and identity online",
    ],
  },
  {
    name: "ApexCare",
    description:
      "Hospital management system built to support patient and staff record-keeping.",
    image: "/projects/ApexCare.png",
    link: "https://apex-frontend-sage.vercel.app/",
    role: "Sole fullstack developer",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    highlights: [
      "Built a hospital management system covering patient records and staff workflows", // edit with specific features if you'd like more detail here
      "Designed both frontend interface and backend data handling as sole developer",
    ],
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      style={{
        padding: "4rem 3rem",
        fontFamily: theme.font.body,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
        <span style={{ width: "24px", height: "1px", background: theme.colors.accent }} />
        <span style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "0.95rem" }}>
          My Work
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
        PROJECTS I'VE SHIPPED
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {visibleProjects.map((project) => (
          <button
            key={project.name}
            onClick={() => setSelected(project)}
            style={{
              textAlign: "left",
              cursor: "pointer",
              border: "none",
              padding: 0,
              background: theme.colors.cardDark,
              borderRadius: theme.radius.md,
              overflow: "hidden",
              display: "block",
              fontFamily: "inherit",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ padding: "1.2rem" }}>
              <h3
                style={{
                  fontFamily: theme.font.display,
                  color: theme.colors.white,
                  fontSize: "1.1rem",
                  margin: "0 0 0.4rem",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {projects.length > 4 && (
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: theme.colors.white,
              color: theme.colors.bgDark,
              border: "none",
              padding: "0.8rem 2rem",
              borderRadius: theme.radius.pill,
              fontFamily: theme.font.body,
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: theme.colors.bgDark,
              borderRadius: theme.radius.lg,
              maxWidth: "640px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "2rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                color: theme.colors.white,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: theme.radius.md,
                marginBottom: "1.5rem",
              }}
            />

            <h2
              style={{
                fontFamily: theme.font.display,
                color: theme.colors.white,
                fontSize: "1.6rem",
                margin: "0 0 0.3rem",
              }}
            >
              {selected.name}
            </h2>

            <p
              style={{
                color: theme.colors.accent,
                fontSize: "0.9rem",
                fontWeight: 600,
                margin: "0 0 1rem",
              }}
            >
              {selected.role}
            </p>

            <p
              style={{
                color: theme.colors.textMuted,
                fontSize: "0.95rem",
                lineHeight: 1.6,
                margin: "0 0 1.2rem",
              }}
            >
              {selected.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.2rem" }}>
              {selected.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: theme.colors.white,
                    fontSize: "0.75rem",
                    padding: "0.3rem 0.8rem",
                    borderRadius: theme.radius.pill,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul
              style={{
                color: theme.colors.textMuted,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                paddingLeft: "1.2rem",
                margin: "0 0 1.5rem",
              }}
            >
              {selected.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: theme.colors.white,
                color: theme.colors.bgDark,
                padding: "0.75rem 1.6rem",
                borderRadius: theme.radius.pill,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Visit Live Site ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}