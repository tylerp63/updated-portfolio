import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/Mermaid";
import { Todo, TodoBlock } from "@/components/Todo";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Todo,
    TodoBlock,
    h2: ({ children }) => (
      <h2 className="display mt-16 mb-5 text-[clamp(1.75rem,3.5vw,2.5rem)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="microcaps mt-10 mb-3 text-ink/70">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="max-w-[65ch] text-[1.0625rem] leading-[1.75] mb-5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="max-w-[65ch] list-disc pl-5 mb-5 text-[1.0625rem] leading-[1.75] space-y-1.5">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="max-w-[65ch] list-decimal pl-5 mb-5 text-[1.0625rem] leading-[1.75] space-y-1.5">
        {children}
      </ol>
    ),
    a: ({ children, href }) => (
      <a href={href} className="underline underline-offset-4 decoration-muted hover:decoration-ink transition-colors">
        {children}
      </a>
    ),
    code: ({ children, className }) => {
      if (className?.includes("language-mermaid")) {
        return <Mermaid chart={extractText(children)} />;
      }
      return (
        <code className="font-mono text-[0.9em] bg-ink/5 px-1.5 py-0.5 rounded">
          {children}
        </code>
      );
    },
    pre: ({ children }) => {
      // Mermaid fences render as diagrams, not code blocks
      const child = children as React.ReactElement<{ className?: string }>;
      if (child?.props?.className?.includes("language-mermaid")) {
        return <>{children}</>;
      }
      return (
        <pre className="max-w-full overflow-x-auto bg-ink text-canvas text-sm leading-relaxed p-5 rounded-lg mb-5 [&_code]:bg-transparent [&_code]:p-0">
          {children}
        </pre>
      );
    },
    ...components,
  };
}
