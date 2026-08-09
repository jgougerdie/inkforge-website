import { categories } from "@/data/categories";
import type { CategorySlug } from "@/data/types";

interface CategoryFilterBarProps {
  active: CategorySlug | "all";
  onChange: (value: CategorySlug | "all") => void;
  counts: Record<string, number>;
}

export default function CategoryFilterBar({ active, onChange, counts }: CategoryFilterBarProps) {
  const items: { slug: CategorySlug | "all"; label: string; emoji: string }[] = [
    { slug: "all", label: "All Articles", emoji: "📚" },
    ...categories.map((c) => ({ slug: c.slug, label: c.shortName, emoji: c.emoji })),
  ];

  return (
    <div
      className="sticky top-16 z-30 -mx-5 border-b border-border bg-white/95 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:py-3.5 sm:shadow-card"
      role="tablist"
      aria-label="Filter articles by category"
    >
      <div className="flex gap-2 overflow-x-auto px-5 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-4">
        {items.map((item) => {
          const isActive = item.slug === active;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.slug)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors ${
                isActive ? "bg-ink text-white" : "bg-paper-soft text-ink-soft hover:bg-paper-deep"
              }`}
            >
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
              <span className={isActive ? "text-white/70" : "text-ink-muted"}>({counts[item.slug] ?? 0})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
