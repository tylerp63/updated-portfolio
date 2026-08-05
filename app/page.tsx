import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WorkList } from "@/components/WorkList";
import { Experience } from "@/components/Experience";
import { StackSection } from "@/components/StackSection";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section id="work" className="px-5 md:px-8 py-20 md:py-28">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="microcaps text-ink/70">Selected work</h2>
            <p className="microcaps text-ink/70">{projects.length} projects</p>
          </div>
          <WorkList />
        </section>
        <Experience />
        <StackSection />
        <Contact />
      </main>
    </>
  );
}
