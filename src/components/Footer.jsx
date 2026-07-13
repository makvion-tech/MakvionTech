import { theme } from "../theme";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const linkStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    color: theme.colors.white,
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${theme.colors.divider}`,
        padding: "2rem 3rem",
        fontFamily: theme.font.body,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: theme.font.display,
          fontWeight: 700,
          color: theme.colors.white,
          fontSize: "1.1rem",
        }}
      >
        makvion<span style={{ color: theme.colors.accent }}>.</span>
      </div>

      <div style={{ display: "flex", gap: "0.8rem" }}>
        <a href="https://github.com/makvion-tech" target="_blank" rel="noreferrer" className="social-icon" style={linkStyle}>
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/chiamaka-george-b140623aa" target="_blank" rel="noreferrer" className="social-icon" style={linkStyle}>
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.tiktok.com/@makvion_tech" target="_blank" rel="noreferrer" className="social-icon" style={linkStyle}>
          <FaTiktok size={20} />
        </a>
      </div>

      <div style={{ color: theme.colors.textMuted, fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Makvion. All rights reserved.
      </div>
    </footer>
  );
}