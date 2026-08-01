import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/${slug}.mdx`);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="px-5 md:px-8">
        <header className="pt-28 md:pt-32">
          <Link href="/#work" className="microcaps text-ink/70 hover:text-ink transition-colors">
            ← All work
          </Link>
          <h1 className="display mt-6 text-[clamp(3.25rem,12vw,11rem)]">{project.title}</h1>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.75]">{project.oneLiner}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="microcaps text-ink/70">{project.tag}</p>
            <p className="microcaps text-ink/70">{project.stack.join(" · ")}</p>
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="microcaps underline underline-offset-4 hover:text-ink/70 transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </header>

        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          width={1600}
          height={1200}
          priority
          className="mt-12 w-full aspect-[16/9] rounded-xl object-cover"
        />

        <article className="mx-auto max-w-3xl pb-24 pt-4">
          <Content />
        </article>

        <footer className="border-t border-ink/15 py-16">
          <h2 className="microcaps text-ink/70 mb-6">Next project</h2>
          <Link
            href={`/work/${next.slug}`}
            className="display block text-[clamp(2.75rem,9vw,8rem)] hover:text-ink/70 transition-colors duration-300"
          >
            {next.title}
          </Link>
        </footer>
      </main>
    </>
  );
}
