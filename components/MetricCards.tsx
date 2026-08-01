"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCards } from "@/content/site";

const scatter = [
  { top: "8%", right: "24%", rotate: -6 },
  { top: "30%", right: "3%", rotate: 5 },
  { top: "54%", right: "27%", rotate: -3 },
  { top: "70%", right: "7%", rotate: 7 },
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
      <div className="display text-4xl md:text-5xl">{card.value}</div>
      <div className="microcaps mt-2">{card.label}</div>
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
            key={card.label}
            role="listitem"
            drag={!reduced}
            dragConstraints={bounds}
            dragElastic={0.12}
            dragTransition={{ power: 0.25, timeConstant: 180 }}
            whileDrag={{ scale: 1.06, zIndex: 30 }}
            whileHover={{ scale: 1.02 }}
            className="pointer-events-auto absolute w-52 cursor-grab active:cursor-grabbing"
            style={{
              top: scatter[i].top,
              right: scatter[i].right,
              rotate: scatter[i].rotate,
            }}
          >
            <Card card={card} />
          </motion.div>
        ))}
      </div>

      {/* Mobile and tablet: static scatter, inline in flow */}
      <ul className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
        {heroCards.map((card, i) => (
          <li key={card.label}>
            <Card card={card} style={{ rotate: `${scatter[i].rotate / 2}deg` }} />
          </li>
        ))}
      </ul>
    </>
  );
}
