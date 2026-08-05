"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCards } from "@/content/site";

// Enough positions to cover more cards than we currently ship; indexed with a
// modulo below so changing the number of cards can't read past the end.
const scatter = [
  { top: "10%", right: "22%", rotate: -6 },
  { top: "36%", right: "4%", rotate: 5 },
  { top: "62%", right: "25%", rotate: -3 },
  { top: "74%", right: "6%", rotate: 7 },
];

function Card({
  card,
  className,
  style,
}: {
  card: (typeof heroCards)[number];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-xl p-4 md:p-5 shadow-[0_12px_32px_rgba(28,28,26,0.18)] select-none ${className ?? ""}`}
      style={{ background: card.bg, color: card.fg, ...style }}
    >
      <div className="display text-[clamp(1.5rem,5vw,2.25rem)]">{card.text}</div>
    </div>
  );
}

export function MetricCards() {
  const bounds = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  return (
    <>
      {/* Desktop: draggable scatter over the hero. Gated at lg, not md — at 768px the
          scatter collides with the headline glyphs, and tablets are touch anyway.
          Only one of these two layers is ever displayed, so the metrics reach
          assistive tech exactly once at every width. */}
      <div ref={bounds} className="pointer-events-none absolute inset-0 hidden lg:block" role="list">
        {heroCards.map((card, i) => (
          <motion.div
            key={card.text}
            role="listitem"
            drag={!reduced}
            dragConstraints={bounds}
            dragElastic={0.12}
            dragTransition={{ power: 0.25, timeConstant: 180 }}
            whileDrag={{ scale: 1.06, zIndex: 30 }}
            whileHover={{ scale: 1.02 }}
            className="pointer-events-auto absolute w-56 cursor-grab active:cursor-grabbing"
            style={{
              top: scatter[i % scatter.length].top,
              right: scatter[i % scatter.length].right,
              rotate: scatter[i % scatter.length].rotate,
            }}
          >
            <Card card={card} />
          </motion.div>
        ))}
      </div>

      {/* Mobile and tablet: static scatter, inline in flow. With an odd card
          count the last one spans the full width so the grid doesn't end on a
          ragged half-row. */}
      <ul className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
        {heroCards.map((card, i) => (
          <li
            key={card.text}
            className={
              i === heroCards.length - 1 && heroCards.length % 2 === 1 ? "col-span-2" : undefined
            }
          >
            <Card card={card} style={{ rotate: `${scatter[i % scatter.length].rotate / 2}deg` }} />
          </li>
        ))}
      </ul>
    </>
  );
}
