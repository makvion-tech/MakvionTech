import { theme } from "../theme";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const statLabelStyle = {
    fontFamily: theme.font.body,
    fontSize: "0.9rem",
    color: theme.colors.textMuted,
    marginTop: "0.25rem",
  };

  const statNumberStyle = {
    fontFamily: theme.font.display,
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.colors.white,
  };

  const socialIconStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    color: theme.colors.white,
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  const techBadgeStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "rgba(16,26,20,0.85)",
    border: `1px solid ${theme.colors.divider}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
    boxShadow: `0 0 16px rgba(29,185,84,0.25)`,
  };

  return (
    <section
      id="home"
      className="hero-section hero-fade-in"
      style={{
        position: "relative",
        background: `linear-gradient(135deg, ${theme.colors.bgGreenDeep} 0%, ${theme.colors.bgDark} 75%)`,
        padding: "5rem 6.5rem 6rem",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        alignItems: "center",
        gap: "3rem",
        minHeight: "88vh",
        overflow: "hidden",
      }}
    >
      {/* Radial glow layer behind the image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.bgGreenGlow} 0%, rgba(16,51,30,0) 70%)`,
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* Left column: intro copy */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          className="hero-heading"
          style={{
            fontFamily: theme.font.display,
            fontSize: "4.2rem",
            fontWeight: 700,
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
            margin: "1.4rem 0 0.8rem",
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
            color: theme.colors.textMuted,
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "420px",
            margin: "0 0 2.4rem",
          }}
        >
          Building fast, reliable web apps end to end — from React
          interfaces to the APIs and databases behind them.
        </p>

        <div style={{ display: "flex", gap: "1.1rem", marginBottom: "2.6rem" }}>
          <a href="#contact" className="btn-primary">
            Let's Talk ↗
          </a>
          <a href="/Favour-CV.pdf" download className="btn-secondary">
            Download CV ↓
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontFamily: theme.font.body,
              color: theme.colors.textMuted,
              fontSize: "0.85rem",
            }}
          >
            Find me on
          </span>
          <div style={{ display: "flex", gap: "0.7rem" }}>
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
      </div>

      {/* Right column: photo centered, stats to the side */}
      <div
        className="hero-right-col"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="hero-photo-wrap" style={{ position: "relative", width: "380px", flexShrink: 0 }}>
          <img
            src="/photo.png"
            alt="Makvion, Fullstack Web Developer"
            className="hero-photo hero-float"
            style={{
              width: "380px",
              height: "460px",
              objectFit: "contain",
              filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.45))",
              display: "block",
              margin: "0 auto",
            }}
          />

          {/* Tech stack badges — tight cluster on each side, clear of the photo */}
          <span title="React" className="hero-badge hero-badge-left" style={{ ...techBadgeStyle, position: "absolute", top: "22%", left: "-58px", color: "#61dafb" }}>⚛</span>
          <span title="Node.js" className="hero-badge hero-badge-left" style={{ ...techBadgeStyle, position: "absolute", top: "40%", left: "-58px", color: "#83cd29" }}>◆</span>
          <span title="JavaScript" className="hero-badge hero-badge-left" style={{ ...techBadgeStyle, position: "absolute", top: "58%", left: "-58px", color: "#f0db4f", fontSize: "0.8rem", fontWeight: 700 }}>JS</span>
          <span title="PostgreSQL" className="hero-badge hero-badge-right" style={{ ...techBadgeStyle, position: "absolute", top: "22%", right: "-58px", color: "#6ab2e7" }}>◘</span>
          <span title="Express" className="hero-badge hero-badge-right" style={{ ...techBadgeStyle, position: "absolute", top: "40%", right: "-58px", color: theme.colors.white, fontSize: "0.75rem", fontWeight: 700 }}>Ex</span>
          <span title="Git" className="hero-badge hero-badge-right" style={{ ...techBadgeStyle, position: "absolute", top: "58%", right: "-58px", color: "#f34f29" }}>⑂</span>
        </div>

        <div
          className="hero-stats"
          style={{
            position: "absolute",
            right: "-40px",
            top: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
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
      </div>
    </section>
  );
}