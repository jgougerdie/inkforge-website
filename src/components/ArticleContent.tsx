import type { ContentBlock } from "@/data/types";

interface ArticleContentProps {
  blocks: ContentBlock[];
}

export default function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-4 text-2xl font-bold text-ink sm:text-[1.75rem]">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-3 rounded-xl bg-paper-soft p-5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-brand-100 bg-brand-50 p-5 text-[16px] font-medium leading-relaxed text-brand-900"
              >
                <span className="shrink-0 text-xl leading-none" aria-hidden="true">
                  {block.icon}
                </span>
                <span>{block.text}</span>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-brand-500 pl-5 text-lg italic leading-relaxed text-ink">
                &ldquo;{block.text}&rdquo;
                {block.cite && <footer className="mt-2 text-sm not-italic text-ink-muted">— {block.cite}</footer>}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
