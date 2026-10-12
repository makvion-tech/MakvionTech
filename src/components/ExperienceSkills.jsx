import { projects } from "../data/projects";

const stack = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "Git & GitHub",
  "VS Code",
  "Vercel",
];

export default function ExperienceSkills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="panel-title">
        Experience &amp; skills
      </h2>

      <div className="skills-rows">
        <div className="skills-row">
          <h3 className="skills-label">Tech stack</h3>
          <ul className="skills-list">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skills-row">
          <h3 className="skills-label">Projects</h3>
          <ul className="skills-list">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}