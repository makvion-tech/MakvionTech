import { useState } from "react";
import { theme } from "../theme";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = {
    color: theme.colors.white,
    textDecoration: "none",
    fontFamily: theme.font.body,
    fontSize: "0.95rem",
    opacity: 0.85,
  };

  const mobileLinkStyle = {
    ...navLinkStyle,
    fontSize: "1.1rem",
    padding: "0.9rem 0",
    borderBottom: `1px solid ${theme.colors.divider}`,
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <nav
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 4.5rem",
        fontFamily: theme.font.body,
        background: `linear-gradient(135deg, ${theme.colors.bgGreenGlow} 0%, ${theme.colors.bgGreenDeep} 100%)`,
      }}
    >
      <div
        style={{
          fontFamily: theme.font.display,
          fontWeight: 700,
          fontSize: "1.3rem",
          color: theme.colors.white,
          letterSpacing: "0.5px",
        }}
      >
        makvion<span style={{ color: theme.colors.accent }}>.</span>
      </div>

      {/* Desktop links */}
      <div className="navbar-links" style={{ display: "flex", gap: "2.2rem" }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} style={navLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="navbar-contact-btn"
        style={{
          background: theme.colors.white,
          color: theme.colors.bgDark,
          padding: "0.65rem 1.6rem",
          borderRadius: theme.radius.pill,
          fontFamily: theme.font.body,
          fontWeight: 600,
          fontSize: "0.9rem",
          textDecoration: "none",
        }}
      >
        Contact
      </a>

      {/* Mobile hamburger toggle */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          color: theme.colors.white,
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: theme.colors.bgGreenDeep,
            padding: "0.5rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            zIndex: 50,
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={mobileLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: theme.colors.white,
              color: theme.colors.bgDark,
              padding: "0.75rem 1.6rem",
              borderRadius: theme.radius.pill,
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}