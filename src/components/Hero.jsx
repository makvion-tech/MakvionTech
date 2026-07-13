import { theme } from "../theme";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const statLabelStyle = {
    fontFamily: theme.font.body,
    fontSize: "0.85rem",
    color: theme.colors.textMuted,
    marginTop: "0.2rem",
  };

  const statNumberStyle = {
    fontFamily: theme.font.display,
    fontSize: "1.8rem",
    fontWeight: 700,
    color: theme.colors.white,
  };

  const socialIconStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    color: theme.colors.white,
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bgGreenDeep} 0%, ${theme.colors.bgDark} 70%)`,
        padding: "3rem 4.5rem 4rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* Left column: intro copy */}
      <div>
        <h1
          style={{
            fontFamily: theme.font.display,
            fontSize: "3.2rem",
            fontWeight: 700,
            color: theme.colors.white,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Hi! I'm Favour
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            margin: "1rem 0 0.5rem",
          }}
        >
          <span style={{ width: "24px", height: "1px", background: theme.colors.accent }} />
          <span
            style={{
              fontFamily: theme.font.body,
              color: theme.colors.accent,
              fontSize: "0.95rem",
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
            fontSize: "1rem",
            lineHeight: 1.6,
            maxWidth: "380px",
            margin: "0 0 1.8rem",
          }}
        >
          Building fast, reliable web apps end to end — from React
          interfaces to the APIs and databases behind them.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <a
            href="#contact"
            style={{
              background: theme.colors.white,
              color: theme.colors.bgDark,
              padding: "0.8rem 1.8rem",
              borderRadius: theme.radius.pill,
              fontFamily: theme.font.body,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Let's Talk ↗
          </a>
          <a
            href="/Favour-CV.pdf"
            download
            style={{
              border: `1px solid ${theme.colors.divider}`,
              color: theme.colors.white,
              padding: "0.8rem 1.8rem",
              borderRadius: theme.radius.pill,
              fontFamily: theme.font.body,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Download CV ↓
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span
            style={{
              fontFamily: theme.font.body,
              color: theme.colors.textMuted,
              fontSize: "0.85rem",
            }}
          >
            Find me on
          </span>
          <div style={{ display: "flex", gap: "0.6rem" }}>
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

      {/* Right column: photo + stats */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <img
          src="/photo.png"
          alt="Favour, Fullstack Web Developer"
          className="hero-photo"
          style={{
            width: "340px",
            height: "420px",
            objectFit: "contain",
            filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
          }}
        />

        {/* Tech stack badges — floating near bottom-right of photo */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "0px",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <span
            title="React"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#0f2e22",
              border: `1px solid ${theme.colors.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              color: "#61dafb",
            }}
          >
            ⚛
          </span>
          <span
            title="Node.js"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#0f2e22",
              border: `1px solid ${theme.colors.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              color: "#83cd29",
            }}
          >
            ◆
          </span>
          <span
            title="Deployed on Vercel"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#0f2e22",
              border: `1px solid ${theme.colors.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              color: theme.colors.white,
            }}
          >
            ▲
          </span>
        </div>

        <div
          className="hero-stats"
          style={{
            position: "absolute",
            right: "-10px",
            top: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
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