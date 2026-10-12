import { skillGroups } from "../data/projects";

export default function ExperienceSkills() {
  return (
    <section id="skills" className="section section--tint" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <h2 id="skills-title" className="section-title">Experience &amp; skills</h2>
        </div>

        <div className="skill-rows">
          {skillGroups.map((g) => (
            <div key={g.title} className="skill-row">
              <div>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}