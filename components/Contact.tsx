import { site } from "@/content/site";

export function Contact() {
  return (
    <footer id="contact" className="px-5 md:px-8 pt-20 md:pt-28 pb-8 border-t border-ink/15">
      <h2 className="microcaps text-ink/70 mb-8">Contact</h2>
      <a
        href={`mailto:${site.email}`}
        className="display block text-[clamp(3.25rem,13vw,12rem)] hover:text-ink/70 transition-colors"
      >
        Let&rsquo;s talk
      </a>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-ink/15 pt-6">
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          <a href={`mailto:${site.email}`} className="microcaps text-ink/70 hover:text-ink transition-colors">
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="microcaps text-ink/70 hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="microcaps text-ink/70 hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a href={site.resume} className="microcaps text-ink/70 hover:text-ink transition-colors">
            Resume (PDF)
          </a>
        </nav>
        <p className="microcaps text-ink/70">
          © {new Date().getFullYear()} {site.name} · This site is a work sample
        </p>
      </div>
    </footer>
  );
}
