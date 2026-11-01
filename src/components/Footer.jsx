import { FaGithub, FaLinkedinIn, FaTiktok, FaEnvelope } from "react-icons/fa";
import { socials, CV_PATH, CV_FILENAME } from "../data/projects";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  TikTok: FaTiktok,
  Email: FaEnvelope,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="wordmark">MakvionTech.</a>
          <p className="footer-note">
            Full-stack web development by Chiamaka Favour George.
          </p>
          <p className="footer-note">
            Available for freelance projects and full-time roles.
          </p>
          <a href={CV_PATH} download={CV_FILENAME} className="pill pill--outline">
            Download CV
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="footer-heading">Quick links</h3>
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="footer-heading">Elsewhere</h3>
          <ul aria-label="Elsewhere" className="footer-socials">
            {socials.map((s) => {
              const Icon = icons[s.label];
              const external = !s.href.startsWith("mailto:");
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    aria-label={s.label}
                  >
                    {Icon && <Icon size={16} aria-hidden="true" />}
                    <span>{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} MakvionTech. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}