// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — single source of truth for personal details.
// Edit the values marked "PLACEHOLDER" and they will update everywhere
// on the site (Hero, About, Contact, Footer, Navbar).
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Cleopatra Samwel Andrea",
  initials: "CSA",
  role: "Software Developer & Computer Networks Enthusiast",
  location: "Dar es Salaam, Tanzania",

  // PLACEHOLDER — replace with your real email
  email: "your.email@example.com",
  // PLACEHOLDER — replace with your real phone number
  phone: "+255 6xx xxx xxx",

  // PLACEHOLDER — replace with your real GitHub profile URL
  github: "https://github.com/your-username",
  // PLACEHOLDER — replace with your real LinkedIn profile URL
  linkedin: "https://linkedin.com/in/your-username",

  // Put your CV file at: public/cv/Cleopatra_Samwel_Andrea_CV.pdf
  // (a placeholder file already exists there — just replace it)
  cvPath: "/cv/Cleopatra_Samwel_Andrea_CV.pdf",

  // Put your photo at: src/assets/images/profile.jpg
  // then set hasProfilePhoto to true and import it in About.jsx
  hasProfilePhoto: false,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
