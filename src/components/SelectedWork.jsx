import { useState } from "react";
import { projects } from "../data/projects";

function Preview({ project }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Clearly identifiable placeholder until the real screenshot is added.
    return (
      <div className="work-preview work-placeholder">
        <span>Preview image needed</span>
        <code>{project.image}</code>
      </div>
    );
  }

  return (
    <img
      className="work-preview"
      src={project.image}
      alt={`${project.name} project preview`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <h2 id="work-title" className="panel-title">
        Selected work
      </h2>

      {/* Horizontally scrollable on wider screens so the next project peeks in,
          as in the reference. Stacks vertically on phones. */}
      <ul className="work-rail" tabIndex={0} aria-label="Selected projects">
        {projects.map((project) => (
          <li key={project.name} className="work-item">
            <Preview project={project} />
            <h3 className="work-name">{project.name}</h3>
            <p className="work-desc">{project.description}</p>
            <a
              className="text-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project
              <span className="sr-only"> — {project.name} (opens in a new tab)</span>
              <svg viewBox="0 0 16 10" width="15" height="10" aria-hidden="true">
                <path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}