import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const base = "https://tylerpham.dev"; // TODO: real domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
