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
            alt="Chiamaka George Favour"
          />
          </div>
          <div className="about-body">
            <h2 id="about-title" className="section-title section-title--left">About me</h2>
            <p>
              I'm Chiamaka George Favour, a full-stack web developer working
              under the name MakvionTech. I like building applications that
              are useful first: clear interfaces, sensible data models, and
              backends that support them properly.
            </p>
            <p>
              I work across the stack, with HTML, CSS, JavaScript and React on
              the front end and Node.js, Express.js, PostgreSQL and Prisma
              behind it. Understanding both sides means the interface and the
              system under it are designed together, not patched together.
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