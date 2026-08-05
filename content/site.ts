export const site = {
  name: "Tyler Pham",
  role: "Software Engineer",
  pillars: "Full-stack · AI systems · iOS",
  builtWith: ["TypeScript", "Next.js", "Supabase", "Python", "SwiftUI"],
  email: "tylerphm1@gmail.com",
  github: "https://github.com/tylerp63",
  linkedin: "https://www.linkedin.com/in/tyler-pham-816891249/",
  resume: "/resume.pdf",
};

// Card colors are chosen so the 11px label clears WCAG AA (4.5:1) against its
// own background at full opacity — don't lighten these without rechecking.
// One line of display type per card — no subtext. Keep each phrase short
// enough to wrap to at most three lines at the card's width.
export const heroCards = [
  {
    text: "Texas A&M Comp Sci",
    bg: "#500000", // Aggie maroon
    fg: "#f7f0f0",
  },
  {
    text: "Class of 2028",
    bg: "#2547f4",
    fg: "#f2f4ff",
  },
  {
    text: "SWE Aggie Coding Club",
    bg: "#0c6b34",
    fg: "#f0f7f2",
  },
];

// Mirrors the résumé's Experience section. NOTE: Loli Volleyball (Software
// Engineer, May 2025 — Present) was on the earlier résumé and is absent from
// the current one, so it is off the site too. Restore it here if that was a
// trim for length rather than a deliberate removal.
export const experience = [
  {
    org: "Aggie Coding Club",
    role: "Software Engineer",
    dates: "Aug 2024 — May 2025",
    blurb:
      "Shipped a Chrome extension that puts AI into everyday browsing, built with a team of student developers over the school year. Code review, debugging, and the release workflow were as much of the job as the features were.",
  },
  {
    org: "Handshake AI",
    role: "Fellow",
    // TODO: dates + verify wording — not on the résumé. See CONTENT-TODO.md
    dates: "",
    blurb:
      "Selected for Handshake's AI fellowship, working on training and evaluation data for frontier language models.",
  },
];

// Mirrors the résumé's skills section — keep the two in sync.
export const stack = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "Swift", "C++", "SQL"],
  Frameworks: ["Next.js", "React", "Node.js", "SwiftUI", "Streamlit", "LangChain", "Tailwind CSS"],
  Tools: ["PostgreSQL", "Supabase", "Prisma", "Puppeteer", "Vercel", "Xcode"],
};
