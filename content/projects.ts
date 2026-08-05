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
      "Scrapes and compares 1,000s of products to find the best margin; migrating auth off NextAuth halved auth latency.",
    tag: "Full-stack · Web",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Puppeteer"],
    cover: "/work/dropit.svg",
    links: [{ label: "Live", href: "https://drop-it-lake.vercel.app/" }],
  },
  {
    slug: "studymonkey",
    title: "StudyMonkey",
    oneLiner:
      "An AI study tool serving 1,100+ students: turn a PDF into a chat session and a flashcard deck.",
    tag: "AI systems",
    // Per the résumé: a Streamlit app, not a TypeScript one. No Supabase here.
    stack: ["Python", "Streamlit", "LangChain", "FAISS"],
    cover: "/work/studymonkey.svg",
    // TODO: live URL — see CONTENT-TODO.md
    links: [],
  },
  {
    slug: "vitaledge",
    title: "VitalEdge",
    oneLiner:
      "A SwiftUI iOS app streaming heart rate, HRV, and breathing from a camera — scored into a daily readiness number.",
    tag: "iOS · Health",
    stack: ["Swift", "SwiftUI", "SmartSpectra SDK"],
    cover: "/work/vitaledge.svg",
    links: [],
  },
  {
    slug: "guess-the-celebrity",
    title: "Guess the Celebrity",
    oneLiner:
      "A live multiplayer Roblox game shipped solo to 9,000+ players, with a server-authoritative economy.",
    tag: "Games · Full-stack",
    stack: ["Luau", "Roblox Studio", "Blender"],
    cover: "/work/guess-the-celebrity.svg",
    links: [],
  },
];
