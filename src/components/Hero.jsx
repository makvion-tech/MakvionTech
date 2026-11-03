// Photo lives in public/images/photo.png, served from /images/photo.png.
const PHOTO_SRC = "/images/photo.png";

const STACK = ["PostgreSQL", "Express", "React", "Node.js"];

// Desktop photo height: fits fully inside the screen under the navbar, so
// nothing needs scrolling. Change 72svh / 4rem to make it bigger or smaller.
const PHOTO_H = "min(72svh, calc(100svh - var(--nav-h) - 4rem))";

const styles = {
  section: {
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    minHeight: "calc(100svh - var(--nav-h))",
    display: "flex",
    alignItems: "center",
    background: "#0b0907",
    color: "var(--ivory)",
  },
  // dark base with a soft warm glow behind the portrait so it pops
  glow: {
    position: "absolute",
    inset: 0,
    zIndex: -1,
    background:
      "radial-gradient(ellipse 42% 62% at 76% 50%, rgba(255,224,184,0.24) 0%, rgba(255,224,184,0) 70%)," +
      "radial-gradient(ellipse 45% 55% at 6% 0%, rgba(255,224,184,0.08) 0%, rgba(255,224,184,0) 70%)",
  },
  inner: {
    width: "100%",
    maxWidth: "76rem",
    marginInline: "auto",
    padding: "2rem var(--gutter)",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem clamp(2rem, 5vw, 5rem)",
  },
  text: {
    flex: "1 1 22rem",
    maxWidth: "36rem",
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
    marginTop: "1.25rem",
    fontFamily: "var(--font-display, var(--font-script))",
    fontStyle: "italic",
    fontWeight: 800,
    fontSize: "clamp(2.3rem, 4.6vw, 4rem)",
    lineHeight: 1.04,
    letterSpacing: "-0.02em",
    color: "var(--white)",
    textWrap: "balance",
  },
  desc: {
    marginTop: "1.25rem",
    maxWidth: "40ch",
    fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
    lineHeight: 1.6,
    color: "rgba(255,252,246,0.82)",
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.45rem",
    marginTop: "1.5rem",
  },
  chip: {
    fontSize: "0.75rem",
    padding: "0.3rem 0.75rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,224,184,0.3)",
    color: "var(--peach)",
  },
  actions: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
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

// Photo sizing needs a media query, which inline styles can't do.
//  - Phones / narrow: photo fills the full width, height follows the image,
//    so there are no empty bars above or below it.
//  - 900px and up: photo is sized by height so the whole hero fits the screen.
const photoCss = `
  .mk-figure { margin: 0; width: 100%; }
  .mk-photo {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-card);
    border: 1px solid rgba(255,224,184,0.28);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 120px rgba(255,224,184,0.12);
  }
  @media (min-width: 900px) {
    .mk-figure { width: auto; flex: 0 1 auto; max-width: 100%; }
    .mk-photo { width: auto; height: ${PHOTO_H}; max-width: 100%; }
  }
`;

export default function Hero() {
  return (
    <section id="home" style={styles.section} aria-label="Introduction">
      <div style={styles.glow} aria-hidden="true" />

      <div style={styles.inner}>
        <div style={styles.text}>
          <p style={styles.eyebrow}>Full-stack Developer</p>

          <h1 style={styles.title}>Your ideas deserve better software.</h1>

          <p style={styles.desc}>
            I build thoughtful web experiences and practical applications, from
            responsive interfaces to backend systems.
          </p>

          <ul style={styles.stack} aria-label="Main stack">
            {STACK.map((t) => (
              <li key={t} style={styles.chip}>
                {t}
              </li>
            ))}
          </ul>

          <div style={styles.actions}>
            <a href="#work" className="pill" style={styles.primary}>
              View My Work
            </a>
            <a href="#contact" className="pill" style={styles.secondary}>
              Get in Touch
            </a>
          </div>
        </div>

        <figure className="mk-figure">
          <img
            className="mk-photo"
            src={PHOTO_SRC}
            alt="Portrait of Makvion"
          />
        </figure>
      </div>

      <style>{photoCss}</style>
    </section>
  );
}