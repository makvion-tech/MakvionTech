import { socials } from "../data/projects";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="wordmark">MakvionTech.</a>
          <p className="footer-note">Full-stack web development by Chiamaka George Favour.</p>
        </div>

        <nav aria-label="Footer">
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <ul aria-label="Elsewhere">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer-base">
        © {new Date().getFullYear()} MakvionTech. All rights reserved.
      </div>
    </footer>
  );
}