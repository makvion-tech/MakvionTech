// Single source of truth for portfolio content.
// Change an image path, link or tag here and every section updates.
// NOTE: `category`, `details`, `features`, `role` and `status` are draft wording.
// Please correct them so they match what each project really does.

export const projects = [
  {
    name: "WorkDone",
    category: "Marketplace & Social Platform",
    description:
      "A marketplace and social platform where users can buy, sell, post, and connect.",
    details:
      "WorkDone brings commerce and community together in one place. Users create profiles, list items for sale, share posts, and connect with other members, so buying and selling feels social rather than transactional.",
    features: [
      "User accounts and public profiles",
      "Listings for buying and selling",
      "Social feed for posts and interactions",
      "Search and browsing for buyers",
    ],
    role: "Full-stack developer",
    status: "Live",
    image: "/projects/workdone.png",
    link: "https://workdone.com.ng",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "ApexCare HMS",
    category: "Hospital Management System",
    description:
      "A hospital management system for patient and staff record-keeping, built as a portfolio project.",
    details:
      "ApexCare HMS digitises the day-to-day running of a hospital. It centralises patient records and staff information so registration, record lookup and administration are faster and less error-prone than paper files.",
    features: [
      "Patient registration and record management",
      "Staff records and role-based access",
      "Dashboard with a quick overview of activity",
      "Responsive interface for desktop and mobile",
    ],
    role: "Full-stack developer",
    status: "Portfolio project",
    image: "/projects/ApexCare.png",
    link: "https://apex-frontend-sage.vercel.app/",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    name: "ScholarShield",
    category: "Academic Integrity & CBT Platform",
    description:
      "An academic-integrity and computer-based testing platform with anti-cheat proctoring.",
    details:
      "ScholarShield lets institutions run computer-based tests while protecting the integrity of the results. Real-time anti-cheat proctoring monitors test sessions so examiners can trust the outcome of every exam.",
    features: [
      "Computer-based test creation and delivery",
      "Real-time anti-cheat proctoring during exams",
      "Automatic scoring and results",
      "Separate experiences for examiners and students",
    ],
    role: "Full-stack developer",
    status: "Live demo",
    image: "/projects/Scholarshield.png",
    link: "https://scholarshield-674e14.netlify.app",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
  },
  {
    name: "Granduer",
    category: "Fashion Brand Website",
    description:
      "An online presence for a fashion brand, built across both frontend and backend.",
    details:
      "Granduer gives a fashion brand a polished home online. The site showcases the brand and its pieces, backed by a server and database that handle the content and customer interactions behind the scenes.",
    features: [
      "Brand-focused, visual-first design",
      "Product and collection showcase",
      "Backend and database for managing content",
      "Responsive layout across all screen sizes",
    ],
    role: "Full-stack developer",
    status: "Live",
    image: "/projects/Granduer.png",
    link: "https://granduer.vercel.app/",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    name: "Crystalices",
    category: "Company Website",
    description:
      "A company website for an engineering firm offering truck rental and consulting services.",
    details:
      "Crystalices needed a clear, professional website to present its truck rental and engineering consulting services. The site explains what the firm offers and makes it easy for clients to get in touch.",
    features: [
      "Clear presentation of rental and consulting services",
      "Professional, easy-to-scan layout",
      "Contact details for enquiries",
      "Responsive design for phones and desktops",
    ],
    role: "Frontend developer",
    status: "Live",
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
  {
    label: "GitHub",
    handle: "github.com/makvion-tech",
    href: "https://github.com/makvion-tech",
  },
  {
    label: "LinkedIn",
    handle: "Chiamaka Favour George",
    href: "https://www.linkedin.com/in/chiamaka-george-b140623aa",
  },
  {
    label: "TikTok",
    handle: "@makvion_tech",
    href: "https://www.tiktok.com/@makvion_tech",
  },
  {
    label: "Email",
    handle: "makviontech@gmail.com",
    href: "mailto:makviontech@gmail.com",
  },
];

// Put your CV PDF in the `public` folder with this exact name.
export const CV_PATH = "/Chiamaka-George-CV.pdf";
export const CV_FILENAME = "Chiamaka-George-CV.pdf";