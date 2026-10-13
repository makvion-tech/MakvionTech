import useTrimmedImage from "../hooks/useTrimmedImage";

export default function AboutSection() {
  const portrait = useTrimmedImage("/photo.png");

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-card">
          <div className="about-photo-wrap">
          <img
            className="about-photo"
            src={portrait.src}
            data-ready={portrait.ready}
            alt="Chiamaka Favour George"
          />
          </div>
          <div className="about-body">
            <h2 id="about-title" className="section-title section-title--left">About me</h2>
            <p>
              I'm Chiamaka Favour George, a full-stack developer behind
              MakvionTech. I build web applications with a focus on what
              matters most: solving real problems, creating clear user
              experiences, and building systems that work reliably behind the
              scenes.
            </p>
            <p>
              I work across the stack, using React to build interfaces and
              Node.js, Express, PostgreSQL, and Prisma to power the systems
              behind them. I care about how the pieces fit together, from the
              first interaction a user has with an interface to the data and
              logic that make it work.
            </p>
            <div className="about-actions">
              <a className="pill pill--solid" href="#contact">Get in touch</a>
              <a
                className="pill pill--line"
                href="https://github.com/makvion-tech"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}