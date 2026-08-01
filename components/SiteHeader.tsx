import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-5">
      <Link href="/" className="microcaps">
        {site.name}
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/#work" className="microcaps text-ink/70 hover:text-ink transition-colors">
          Work
        </Link>
        <a href={`mailto:${site.email}`} className="microcaps text-ink/70 hover:text-ink transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
