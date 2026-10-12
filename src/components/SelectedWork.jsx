import { useState } from "react";
import { projects } from "../data/projects";

function Media({ project }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="work-media work-placeholder">
        <span>Preview image needed</span>
        <code>{project.image}</code>
      </div>
    );
  }
  return (
    <div className="work-media">
      <img
        src={project.image}
        alt={`${project.name} project preview`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title" className="section-title">Selected work</h2>
          <p className="section-sub">
            Applications I've built end to end, from interface to database.
          </p>
        </div>

        <ul className="work-grid">
          {projects.map((p) => (
            <li key={p.name} className="work-item">
              <Media project={p} />
              <div className="work-meta">
                <div>
                  <h3 className="work-name">{p.name}</h3>
                  <p className="work-desc">{p.description}</p>
                  <ul className="chips" aria-label={`${p.name} built with`}>
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <a className="pill pill--line" href={p.link} target="_blank" rel="noreferrer">
                  View project
                  <span className="sr-only"> — {p.name} (opens in a new tab)</span>
                  <svg viewBox="0 0 16 10" width="14" height="10" aria-hidden="true">
                    <path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}