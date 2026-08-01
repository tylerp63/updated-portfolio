"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/content/projects";

export function WorkList() {
  // `active` drives the dimming of sibling rows and is set by pointer OR focus.
  // `hovered` gates the cursor-following preview, which only makes sense for a pointer.
  const [active, setActive] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<Project | null>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.6 });

  return (
    <div
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onMouseLeave={() => {
        setActive(null);
        setHovered(null);
      }}
    >
      <ul>
        {projects.map((p, i) => {
          const dimmed = active !== null && active.slug !== p.slug;
          return (
            <li key={p.slug} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/work/${p.slug}`}
                className="group block py-6 md:py-9"
                onMouseEnter={(e) => {
                  // first entry: snap the preview to the cursor instead of springing from (0,0)
                  if (hovered === null) {
                    mx.jump(e.clientX);
                    my.jump(e.clientY);
                  }
                  setActive(p);
                  setHovered(p);
                }}
                onFocus={() => setActive(p)}
                onBlur={() => setActive(null)}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="microcaps text-ink/70 w-8 shrink-0">0{i + 1}</span>
                  <h3
                    className={`display flex-1 text-[clamp(2.75rem,8.5vw,7.5rem)] transition-colors duration-300 ${
                      dimmed ? "text-muted" : "text-ink"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <div className="hidden md:block shrink-0 text-right">
                    <p className={`microcaps transition-colors duration-300 ${dimmed ? "text-muted" : "text-ink/70"}`}>
                      {p.tag}
                    </p>
                  </div>
                </div>

                {/* Touch fallback: no hover on mobile, thumbnail goes inline */}
                <div className="mt-5 md:hidden">
                  <Image
                    src={p.cover}
                    alt={`${p.title} preview`}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] rounded-lg object-cover"
                  />
                  <p className="microcaps mt-3 text-ink/70">{p.tag}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Cursor-following image reveal. Pointer-only: without a cursor there is no
          meaningful position for it, so it is skipped for keyboard and reduced motion. */}
      {!reduced && (
        <motion.div
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
          aria-hidden="true"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.slug}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[26rem] overflow-hidden rounded-xl shadow-[0_24px_64px_rgba(28,28,26,0.28)]"
              >
                <Image
                  src={hovered.cover}
                  alt=""
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                  priority={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
