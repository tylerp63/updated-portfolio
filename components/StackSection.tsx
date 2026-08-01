import { stack } from "@/content/site";

export function StackSection() {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28 border-t border-ink/15">
      <h2 className="microcaps text-ink/70 mb-10">Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {Object.entries(stack).map(([group, items]) => (
          <div key={group}>
            <h3 className="microcaps text-ink/70 mb-4">{group}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="microcaps">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
