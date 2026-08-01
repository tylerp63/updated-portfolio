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
    // TODO: live URL — dropit.io does not resolve. See CONTENT-TODO.md.
    links: [],
  },
  {
    slug: "studymonkey",
    title: "StudyMonkey",
    oneLiner:
      "An AI study tool in production with real students, built on a Python model service behind a TypeScript app.",
    tag: "AI systems",
    stack: ["Next.js", "TypeScript", "Python", "Supabase"],
    cover: "/work/studymonkey.svg",
    // TODO: live URL — see CONTENT-TODO.md
    links: [],
  },
  {
    slug: "vitaledge",
    title: "VitalEdge",
    oneLiner:
      "A SwiftUI iOS app that streams live readings from physical hardware and rides through flaky real-world connections.",
    tag: "iOS · Hardware",
    stack: ["Swift", "SwiftUI"],
    cover: "/work/vitaledge.svg",
    links: [],
  },
];
