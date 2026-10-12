import { projects, skillGroups } from "../data/projects";

const steps = [
  {
    title: "Understand the problem",
    text: "Start with who will use it and what they need to get done.",
  },
  {
    title: "Plan the interface and the data",
    text: "Sketch the screens and model the database together, so the two fit.",
  },
  {
    title: "Build both sides",
    text: "React on the front end, Node.js and Express.js behind it, PostgreSQL with Prisma underneath.",
  },
  {
    title: "Ship and keep improving",
    text: "Deploy to Vercel, check it in real use, and refine from there.",
  },
];

const toolCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

export default function ProcessSection() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container process">
        <div className="process-intro">
          <h2 id="process-title" className="section-title section-title--left">How I work</h2>
          <p>
            I like understanding the whole product, not only one layer of it.
            Interface and backend decisions affect each other, so I make them
            together.
          </p>
          <dl className="stats">
            <div>
              <dt>Projects built</dt>
              <dd>{projects.length}</dd>
            </div>
            <div>
              <dt>Tools in my stack</dt>
              <dd>{toolCount}</dd>
            </div>
          </dl>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}