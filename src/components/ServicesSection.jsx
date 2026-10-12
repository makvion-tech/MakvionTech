const services = [
  {
    title: "Frontend development",
    text: "Responsive, accessible interfaces built with HTML, CSS, JavaScript and React.",
  },
  {
    title: "Backend & APIs",
    text: "Server-side logic and REST APIs built with Node.js and Express.js.",
  },
  {
    title: "Database design",
    text: "Relational data modelled in PostgreSQL and managed with Prisma.",
  },
  {
    title: "Deployment",
    text: "Version-controlled projects shipped to the web with Git, GitHub and Vercel.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section--tint" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <h2 id="services-title" className="section-title">What I can help with</h2>
          <p className="section-sub">
            From the first screen to the database behind it, one person who understands both sides.
          </p>
        </div>

        <ul className="services-grid">
          {services.map((s, i) => (
            <li key={s.title} className="service">
              <span className="service-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}