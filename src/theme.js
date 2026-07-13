// Shared design tokens — import wherever needed to keep colors/spacing consistent
export const theme = {
  colors: {
    bgDark: "#0a1410",       // near-black background (matches reference darkest tone)
    bgGreenDeep: "#0e2318",  // deep forest green gradient base
    bgGreenGlow: "#173a28",  // slightly lighter green for gradient highlight/glow
    cardDark: "#12201a",     // service card background
    white: "#ffffff",
    textMuted: "#a9b8ae",    // secondary/paragraph text
    accent: "#3ecf7e",       // brighter mint-green accent, matches reference's "Product Designer" tone
    divider: "#243830",
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },
  font: {
    display: "'Sora', 'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
};