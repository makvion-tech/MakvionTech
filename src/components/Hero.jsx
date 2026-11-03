import photo from "../assets/photo.png"; // adjust the path to wherever photo.png lives

// Waveform bar heights (px), mirrored-ish so it reads like an audio clip
const BARS = [
  10, 22, 32, 20, 44, 56, 36, 62, 48, 70, 38, 52, 60, 30, 44, 24,
  14, 10, 16, 12, 28, 40, 58, 46, 68, 52, 36, 60, 56, 62,
];

const styles = {
  section: {
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    minHeight: "calc(100svh - var(--nav-h))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--ink)",
    color: "var(--ivory)",
  },
  photo: {
    position: "absolute",
    inset: 0,
    zIndex: -3,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 18%",
  },
  // warm colour wash, replaces the indigo tint from the reference
  tint: {
    position: "absolute",
    inset: 0,
    zIndex: -2,
    background:
      "radial-gradient(ellipse 60% 70% at 8% 40%, rgba(255,224,184,0.38) 0%, rgba(255,224,184,0) 70%)," +
      "linear-gradient(180deg, rgba(60,36,14,0.55) 0%, rgba(40,24,10,0.5) 45%, rgba(8,8,8,0.92) 100%)",
    mixBlendMode: "normal",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    zIndex: -1,
    background:
      "radial-gradient(ellipse 80% 80% at 50% 45%, rgba(8,8,8,0) 40%, rgba(8,8,8,0.55) 100%)",
  },
  content: {
    width: "100%",
    maxWidth: "62rem",
    marginInline: "auto",
    padding: "var(--section-y) var(--gutter)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  eyebrow: {
    fontFamily: "var(--font-text)",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--peach)",
  },
  title: {
    marginTop: "1.5rem",
    fontFamily: "var(--font-display, var(--font-script))",
    fontStyle: "italic",
    fontWeight: 800,
    fontSize: "clamp(2.6rem, 7.4vw, 5.6rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.02em",
    color: "var(--white)",
    textShadow: "0 4px 40px rgba(8,8,8,0.55)",
    textWrap: "balance",
  },
  desc: {
    marginTop: "1.5rem",
    maxWidth: "40ch",
    fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
    lineHeight: 1.6,
    color: "rgba(255,252,246,0.88)",
  },
  wave: {
    marginTop: "2.25rem",
    height: "72px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  bar: {
    width: "4px",
    borderRadius: "2px",
    background: "var(--peach)",
    transformOrigin: "center",
    animation: "mk-wave 1.4s ease-in-out infinite",
  },
  actions: {
    marginTop: "2.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.75rem",
  },
  primary: {
    padding: "1rem 1.9rem",
    fontSize: "0.9375rem",
    background: "var(--peach)",
    color: "var(--ink)",
    border: "1px solid var(--peach)",
  },
  secondary: {
    padding: "1rem 1.9rem",
    fontSize: "0.9375rem",
    background: "transparent",
    color: "var(--ivory)",
    border: "1px solid rgba(255,252,246,0.45)",
  },
};

export default function Hero() {
  return (
    <section id="home" style={styles.section} aria-label="Introduction">
      <img src={photo} alt="" style={styles.photo} />
      <div style={styles.tint} aria-hidden="true" />
      <div style={styles.vignette} aria-hidden="true" />

      <div style={styles.content}>
        <p style={styles.eyebrow}>Full-stack Developer</p>

        <h1 style={styles.title}>Your ideas deserve better software.</h1>

        <p style={styles.desc}>
          I build thoughtful web experiences and practical applications, from
          responsive interfaces to backend systems.
        </p>

        <div style={styles.wave} aria-hidden="true">
          {BARS.map((h, i) => (
            <span
              key={i}
              style={{
                ...styles.bar,
                height: `${h}px`,
                animationDelay: `${(i % 9) * 0.11}s`,
              }}
            />
          ))}
        </div>

        <div style={styles.actions}>
          <a href="#work" className="pill" style={styles.primary}>
            View My Work
          </a>
          <a href="#contact" className="pill" style={styles.secondary}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* keyframes can't live in inline styles */}
      <style>{`
        @keyframes mk-wave {
          0%, 100% { transform: scaleY(0.45); }
          50%      { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}