const faqs = [
  {
    q: "What kind of projects do you build?",
    a: "Web applications and websites, end to end. My projects include a marketplace, a hospital management system, an exam-integrity platform, and business websites.",
  },
  {
    q: "Do you work on both the frontend and the backend?",
    a: "Yes. I build the React interface and the Node.js and Express.js backend, with PostgreSQL and Prisma for the data.",
  },
  {
    q: "What tools do you work with?",
    a: "HTML, CSS, JavaScript and React on the front end; Node.js and Express.js on the back end; PostgreSQL with Prisma for data; Git, GitHub and VS Code day to day; and Vercel for deployment.",
  },
  {
    q: "How can I get in touch?",
    a: "Use the contact form below, or message me on GitHub, LinkedIn or TikTok.",
  },
];

export default function FaqSection() {
  return (
    <section className="section section--tint" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <div className="section-head">
          <h2 id="faq-title" className="section-title">Questions</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}