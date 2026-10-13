// Single source of truth for portfolio content.
// Change an image path, link or tag here and every section updates.

export const projects = [
  {
    name: "WorkDone",
    description:
      "A marketplace and social platform where users can buy, sell, post, and connect.",
    image: "/projects/workdone.png",
    link: "https://workdone.com.ng",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "ApexCare HMS",
    description:
      "A hospital management system for patient and staff record-keeping, built as a portfolio project.",
    image: "/projects/ApexCare.png",
    link: "https://apex-frontend-sage.vercel.app/",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    name: "ScholarShield",
    description:
      "An academic-integrity and computer-based testing platform with anti-cheat proctoring.",
    image: "/projects/Scholarshield.png",
    link: "https://scholarshield-674e14.netlify.app",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
  },
  {
    name: "Granduer",
    description:
      "An online presence for a fashion brand, built across both frontend and backend.",
    image: "/projects/Granduer.png",
    link: "https://granduer.vercel.app/",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    name: "Crystalices",
    description:
      "A company website for an engineering firm offering truck rental and consulting services.",
    image: "/projects/Crystalices.png",
    link: "https://crystalices.site",
    tags: ["React"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    text: "Interfaces that read well and work on every screen size.",
    items: ["HTML & CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    text: "Server logic and APIs that the interface can rely on.",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    text: "Relational data models, queried and migrated with an ORM.",
    items: ["PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & deployment",
    text: "Version control, a daily editor, and hosting for finished work.",
    items: ["Git & GitHub", "VS Code", "Vercel"],
  },
];

export const socials = [
  { label: "GitHub", handle: "github.com/makvion-tech", href: "https://github.com/makvion-tech" },
  {
    label: "LinkedIn",
    handle: "Chiamaka Favour George",
    href: "https://www.linkedin.com/in/chiamaka-george-b140623aa",
  },
  { label: "TikTok", handle: "@makvion_tech", href: "https://www.tiktok.com/@makvion_tech" },
];