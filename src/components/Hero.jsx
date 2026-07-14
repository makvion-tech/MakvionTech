import { theme } from "../theme";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const statNumberStyle = {
    fontFamily: theme.font.display,
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.colors.white,
  };

  const statLabelStyle = {
    fontFamily: theme.font.body,
    fontSize: "0.9rem",
    color: theme.colors.textMuted,
    marginTop: "0.25rem",
  };

  const socialIconStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${theme.colors.divider}`,
    backdropFilter: "blur(6px)",
    color: theme.colors.white,
    textDecoration: "none",
  };

  const techBadgeStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "rgba(18,22,20,0.6)",
    border: `1px solid ${theme.colors.divider}`,
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
    boxShadow: `0 0 18px rgba(25,195,125,0.25)`,
  };

  return (
    <section
      id="home"
      className="hero-section hero-fade-in"
      style={{
        position: "relative",
        background: `
          radial-gradient(circle at 65% 30%, rgba(25,195,125,0.18), transparent 45%),
          radial-gradient(circle at 50% 70%, rgba(18,51,35,0.35), transparent 60%),
          linear-gradient(180deg, ${theme.colors.bgSecondary}, ${theme.colors.bgDark})
        `,
        padding: "3rem 4.5rem",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 0.45fr",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Left column: intro copy */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontFamily: theme.font.display,
            fontSize: "4.6rem",
            fontWeight: 800,
            color: theme.colors.white,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Hi! Makvion
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            margin: "1.6rem 0 1rem",
          }}
        >
          <span style={{ width: "28px", height: "2px", background: theme.colors.accent }} />
          <span
            style={{
              fontFamily: theme.font.body,
              color: theme.colors.accent,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Fullstack Web Developer
          </span>
        </div>

        <p
          style={{
            fontFamily: theme.font.body,
            color: theme.colors.textSecondary,
            fontSize: "1.05rem",
            lineHeight: 1.85,
            maxWidth: "420px",
            margin: "0 0 2.6rem",
          }}
        >
          Building fast, reliable web apps end to end — from React
          interfaces to the APIs and databases behind them.
        </p>

        <div style={{ display: "flex", gap: "1.1rem", marginBottom: "2.8rem" }}>
          <a href="#contact" className="btn-primary">
            Let's Talk ↗
          </a>
          <a href="/Favour-CV.pdf" download className="btn-secondary">
            Download CV ↓
          </a>
        </div>

        <div style={{ display: "flex", gap: "0.9rem" }}>
          <a href="https://github.com/makvion-tech" target="_blank" rel="noreferrer" className="social-icon" style={socialIconStyle}>
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chiamaka-george-b140623aa" target="_blank" rel="noreferrer" className="social-icon" style={socialIconStyle}>
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.tiktok.com/@makvion_tech" target="_blank" rel="noreferrer" className="social-icon" style={socialIconStyle}>
            <FaTiktok size={20} />
          </a>
        </div>
      </div>

      {/* Center column: portrait, centered horizontally, bottom-aligned */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {/* Soft glow behind the portrait */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "10%",
            transform: "translateX(-50%)",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.colors.bgGreenGlow} 0%, rgba(18,51,35,0) 70%)`,
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", width: "min(40vw, 420px)" }}>
          <img
            src="/photo.png"
            alt="Makvion, Fullstack Web Developer"
            className="hero-photo hero-float"
            style={{
              width: "100%",
              height: "80vh",
              maxHeight: "640px",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.5))",
              display: "block",
            }}
          />

          {/* Floating tech badges anchored to the portrait */}
          <span title="React" style={{ ...techBadgeStyle, position: "absolute", bottom: "60%", left: "-25px", color: "#61dafb" }} className="hero-tech-float">⚛</span>
          <span title="Node.js" style={{ ...techBadgeStyle, position: "absolute", bottom: "42%", left: "-45px", color: "#83cd29" }} className="hero-tech-float">◆</span>
          <span title="JavaScript" style={{ ...techBadgeStyle, position: "absolute", bottom: "22%", left: "-30px", color: "#f0db4f", fontSize: "0.8rem", fontWeight: 700 }} className="hero-tech-float">JS</span>
          <span title="Express" style={{ ...techBadgeStyle, position: "absolute", bottom: "55%", right: "-35px", color: theme.colors.white, fontSize: "0.75rem", fontWeight: 700 }} className="hero-tech-float">Ex</span>
          <span title="PostgreSQL" style={{ ...techBadgeStyle, position: "absolute", bottom: "32%", right: "-48px", color: "#6ab2e7" }} className="hero-tech-float">◘</span>
          <span title="Git" style={{ ...techBadgeStyle, position: "absolute", bottom: "12%", right: "-25px", color: "#f34f29" }} className="hero-tech-float">⑂</span>
        </div>
      </div>

      {/* Right column: statistics */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div>
          <div style={statNumberStyle}>1.5+</div>
          <div style={statLabelStyle}>Years of experience</div>
        </div>
        <div>
          <div style={statNumberStyle}>5+</div>
          <div style={statLabelStyle}>Projects delivered</div>
        </div>
        <div>
          <div style={statNumberStyle}>5+</div>
          <div style={statLabelStyle}>Projects shipped</div>
        </div>
      </div>
    </section>
  );
}