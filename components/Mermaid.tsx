"use client";

import { useEffect, useId, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            background: "#f4f1ea",
            primaryColor: "#f4f1ea",
            primaryTextColor: "#1c1c1a",
            primaryBorderColor: "#1c1c1a",
            lineColor: "#1c1c1a",
            secondaryColor: "#e8e4da",
            tertiaryColor: "#e8e4da",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
          },
        });
        const { svg } = await mermaid.render(`m${id}`, chart);
        if (!cancelled) setSvg(svg);
      } catch {
        // fall through to the plain-text fallback below
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (!svg) {
    return (
      <pre className="my-8 max-w-full overflow-x-auto rounded-lg border border-ink/15 p-5 text-sm leading-relaxed text-ink/70">
        {chart}
      </pre>
    );
  }

  return (
    <div
      className="my-8 max-w-full overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
