import { experience } from "@/content/site";

export function Experience() {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28">
      <h2 className="microcaps text-ink/70 mb-10">Experience</h2>
      <ul className="space-y-10 md:space-y-12">
        {experience.map((e) => (
          <li key={e.org} className="md:grid md:grid-cols-12 md:gap-8">
            <h3 className="display text-[clamp(2rem,5vw,3.5rem)] md:col-span-6">{e.org}</h3>
            <div className="mt-3 md:mt-1 md:col-span-6">
              <p className="microcaps text-ink/70">{e.role}</p>
              <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink/80">{e.blurb}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
