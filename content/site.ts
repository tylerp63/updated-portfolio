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
export const heroCards = [
  {
    value: "-50%",
    label: "Auth latency, NextAuth → Supabase",
    bg: "#cc3900",
    fg: "#fff7f2",
  },
  {
    value: "3",
    label: "Products in production",
    bg: "#2547f4",
    fg: "#f2f4ff",
  },
  {
    value: "100%",
    label: "Shipped to prod, not localhost",
    bg: "#f5b301",
    fg: "#1c1c1a",
  },
  {
    value: "1",
    label: "iOS app on real hardware",
    bg: "#0c6b34",
    fg: "#f0f7f2",
  },
];

export const experience = [
  {
    org: "Handshake AI",
    role: "Fellow",
    // TODO: verify wording + add dates — see CONTENT-TODO.md
    blurb:
      "Selected for Handshake's AI fellowship, working on training and evaluation data for frontier language models.",
  },
  {
    org: "Aggie Coding Club",
    role: "Member",
    // TODO: verify role + what was built — see CONTENT-TODO.md
    blurb: "Building and shipping projects with other engineers at Texas A&M.",
  },
];

export const stack = {
  Languages: ["TypeScript", "Python", "Swift", "SQL"],
  Frameworks: ["Next.js", "React", "SwiftUI", "Tailwind CSS"],
  Tools: ["Supabase", "Postgres", "Vercel", "Git", "Xcode"],
};
