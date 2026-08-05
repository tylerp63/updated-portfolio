/*
 * Editorial placeholders for facts that aren't filled in yet.
 *
 * These are deliberately visible rather than invisible: the alternative is
 * inventing a plausible detail, and a fabricated claim in a portfolio is far
 * more expensive than an honest gap. "TK" is the newsroom convention for
 * "to come" — it survives a spell-check and greps cleanly.
 *
 * Two things the styling has to get right:
 *  - Punctuation belongs INSIDE the marker text, otherwise the span's
 *    horizontal padding strands the period or comma a few pixels off the word.
 *  - box-decoration-clone, so a marker that wraps across lines gets its
 *    padding and rounding on every fragment instead of one long smear. The
 *    label is bound to the first word with a non-breaking space so "TK" can
 *    never orphan at the end of a line.
 *
 * Text tints are the lowest steps that clear WCAG AA (4.5:1) once composited
 * over their own background tint — don't lighten them without rechecking.
 */

export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-todo
      title="Placeholder — content to come"
      className="box-decoration-clone rounded-[3px] bg-ink/[0.07] px-1.5 py-0.5 text-ink/70 decoration-ink/25 underline decoration-dashed underline-offset-4"
    >
      <span className="microcaps align-[0.1em] text-ink/65">TK</span>
      {"\u00a0"}
      {children}
    </span>
  );
}

export function TodoBlock({ label = "Demo recording" }: { label?: string }) {
  return (
    <span
      data-todo
      className="my-8 flex aspect-video w-full max-w-[65ch] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink/40 bg-ink/[0.04] text-center"
    >
      <span className="microcaps text-ink/70">{label}</span>
      <span className="microcaps text-ink/65">To come</span>
    </span>
  );
}
