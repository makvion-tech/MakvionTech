// Single source of truth for the featured projects and social links.
// Swap an `image` path or `link` here and every section updates.
// NOTE: `stack`, `features`, `role` and `status` are draft details. Please correct them to match what you actually built.
export const projects = [
  {
    name: "WorkDone",
    category: "Marketplace & Social Platform",
    description:
      "A marketplace and social platform where users can buy, sell, post, and connect.",
    details:
      "WorkDone brings commerce and community together in one place. Users create profiles, list items for sale, share posts, and message other members, so buying and selling feels social rather than transactional.",
    features: [
      "User accounts and public profiles",
      "Product listings with images and pricing",
      "Social feed for posts and interactions",
      "Search and browsing for buyers",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-stack developer",
    status: "Live",
    image: "/projects/workdone.png",
    link: "https://workdone.com.ng",
  },
  {
    name: "ApexCare HMS",
    category: "Hospital Management System",
    description:
      "A hospital management system for patient and staff record-keeping, built as a portfolio project.",
    details:
      "ApexCare HMS digitises the day-to-day running of a hospital. It centralises patient records and staff information so that registration, record lookup and administration are faster and less error-prone than paper files.",
    features: [
      "Patient registration and record management",
      "Staff records and role-based access",
      "Dashboard with a quick overview of activity",
      "Clean, responsive interface for desktop and mobile",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-stack developer",
    status: "Portfolio project",
    image: "/projects/ApexCare.png",
    link: "https://apex-frontend-sage.vercel.app/",
  },
  {
    name: "ScholarShield",
    category: "Academic Integrity & CBT Platform",
    description:
      "An academic-integrity and computer-based testing platform with anti-cheat proctoring.",
    details:
      "ScholarShield lets institutions run computer-based tests while protecting the integrity of the results. Anti-cheat proctoring monitors test sessions so examiners can trust the outcome of every exam.",
    features: [
      "Computer-based test creation and delivery",
      "Anti-cheat proctoring during exams",
      "Automatic scoring and results",
      "Separate experiences for examiners and students",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-stack developer",
    status: "Live demo",
    image: "/projects/Scholarshield.png",
    link: "https://scholar-shield-49r5-pi.vercel.app/",
  },
];

export const socials = [
  {
    label: "GitHub",
    handle: "@makvion-tech",
    href: "https://github.com/makvion-tech",
  },
  {
    label: "LinkedIn",
    handle: "Chiamaka George",
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