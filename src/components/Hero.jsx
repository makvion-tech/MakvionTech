import useTrimmedImage from "../hooks/useTrimmedImage";

// Hero composition: greeting, portrait, name, role and description are
// separate elements positioned against each other in index.css.
export default function Hero() {
  const portrait = useTrimmedImage("/photo.png");

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-art">
        <p className="hero-greeting">
          <span>Hey,</span>
          <span>there.</span>
        </p>

        {/* Independent, replaceable portrait asset: /public/photo.png */}
        <img
          className="hero-portrait"
          src={portrait.src}
          data-ready={portrait.ready}
          alt="Portrait of Chiamaka Favour George"
        />

        <h1 className="hero-name">
          <span>I am</span>
          <span>Chiamaka</span>
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