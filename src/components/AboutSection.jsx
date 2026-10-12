export default function AboutSection() {
  return (
    <section id="about" className="split about" aria-labelledby="about-title">
      <p className="split-lead" aria-hidden="true">
        Useful things, carefully made.
      </p>
      <div className="split-body">
        <h2 id="about-title" className="panel-title">
          About
        </h2>
        <p>
          I'm Chiamaka George Favour, a full-stack web developer working under
          the name MakvionTech. I like building applications that are useful
          first: clear interfaces, sensible data models, and backends that
          support them properly.
        </p>
        <p>
          I work across the stack, with HTML, CSS, JavaScript and React on the
          front end and Node.js, Express.js, PostgreSQL and Prisma behind it.
          Understanding both sides means the interface and the system under it
          can be designed together instead of patched together.
        </p>
      </div>
    </section>
  );
}