import { site } from "@/content/site";
import { MetricCards } from "@/components/MetricCards";

export function Hero() {
  return (
    <section className="relative flex min-h-[94svh] flex-col px-5 md:px-8 pt-24 md:pt-28 pb-6">
      <h1 className="display text-[clamp(4.75rem,20vw,19rem)]">
        Tyler
        <br />
        Pham
      </h1>
      <p className="microcaps mt-6 text-ink/70">
        {site.role} — {site.pillars}
      </p>

      <MetricCards />

      <div className="mt-auto pt-16 flex flex-wrap items-end justify-between gap-4">
        <p className="microcaps text-ink/70">
          Built with —{" "}
          {site.builtWith.map((t, i) => (
            <span key={t}>
              {t}
              {i < site.builtWith.length - 1 && " · "}
            </span>
          ))}
        </p>
        <p className="microcaps hidden md:block text-ink/70">Scroll ↓</p>
      </div>
    </section>
  );
}
