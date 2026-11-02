import useTrimmedImage from "../hooks/useTrimmedImage";

// Hero composition: greeting, portrait, name, role and description are
// Hero composition: greeting, name, role and description are
// separate elements positioned against each other in index.css.
export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-art">
        <p className="hero-greeting">
          <span>Hey,</span>
          <span>there.</span>
        </p>

        <h1 className="hero-name">
          <span>I am</span>
          <span>Makvion Tech</span>
        </h1>
      </div>

      <div className="hero-copy">
        <p className="hero-role">
          <span>Full-stack</span>
          <span>Developer</span>
        </p>
        <p className="hero-desc">
          I build thoughtful web experiences and practical applications, from
          responsive interfaces to backend systems.
        </p>
      </div>
    </section>
  );
}