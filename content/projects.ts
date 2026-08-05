export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tag: string;
  stack: string[];
  cover: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "dropit",
    // Named without the TLD so the product name survives a domain change.
    title: "Dropit",
    oneLiner:
      "A production Next.js and Supabase web app; migrating auth off NextAuth halved auth-related latency.",
    tag: "Full-stack · Web",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    cover: "/work/dropit.svg",
    links: [{ label: "Live", href: "https://drop-it-lake.vercel.app/" }],
  },
  {
    slug: "studymonkey",
    title: "StudyMonkey",
    oneLiner:
      "An AI study tool in production: talk with your own course documents, walk away with flashcards.",
    tag: "AI systems",
    // Only what Tyler confirmed for this project — no Next.js (he specified
    // TypeScript), and Supabase is unconfirmed here. See CONTENT-TODO.md.
    stack: ["TypeScript", "Python", "LangChain"],
    cover: "/work/studymonkey.svg",
    // TODO: live URL — see CONTENT-TODO.md
    links: [],
  },
  {
    slug: "vitaledge",
    title: "VitalEdge",
    oneLiner:
      "A SwiftUI iOS app that reads your vitals from a camera recording and scores how ready you are for the day.",
    tag: "iOS · Health",
    stack: ["Swift", "SwiftUI", "Presage SDK"],
    cover: "/work/vitaledge.svg",
    links: [],
  },
];
