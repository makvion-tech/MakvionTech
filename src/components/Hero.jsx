// Left side of the editorial stage. The hero is one composition:
// greeting, portrait, name, role and description are separate elements
// positioned against each other in index.css (see "Hero" section there).
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <header className="site-header">
        <a href="#home" className="wordmark">
          MakvionTech
        </a>
        <span className="wordmark-rule" aria-hidden="true" />
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="hero-art">
        <p className="hero-greeting">
          <span>Hey,</span>
          <span>there.</span>
        </p>

        {/* Independent, replaceable portrait asset: /public/photo.png */}
        <img
          className="hero-portrait"
          src="/favour-portrait.png"
          alt="Portrait of Chiamaka George Favour"
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