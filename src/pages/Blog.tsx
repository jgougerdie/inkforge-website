import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/data/types";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilterBar from "@/components/CategoryFilterBar";
import PageMeta from "@/components/PageMeta";

function isCategorySlug(value: string | null): value is CategorySlug {
  return categories.some((c) => c.slug === value);
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("category");
  const [active, setActive] = useState<CategorySlug | "all">(isCategorySlug(initial) ? initial : "all");

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: articles.length };
    for (const c of categories) result[c.slug] = articles.filter((a) => a.category === c.slug).length;
    return result;
  }, []);

  const filtered = active === "all" ? articles : articles.filter((a) => a.category === active);

  function handleChange(value: CategorySlug | "all") {
    setActive(value);
    if (value === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <>
      <PageMeta
        title="All Articles — Sharpline"
        description="Sharp, no-fluff business articles on global marketing, tax strategy, personal growth, and financial management."
        path="/blog"
      />

      <section className="container-page pb-8 pt-14 text-center sm:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-soft px-4 py-1.5 text-sm font-medium text-ink-muted">
          <span aria-hidden="true">✂️</span>
          Cut through the noise
        </span>
        <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-5xl">Sharpline</h1>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted sm:text-lg">
          Sharp, no-fluff articles on global marketing, tax strategy, personal growth, and financial management
          — written for business owners who value substance over noise.
        </p>
        <p className="mt-4 text-sm text-ink-muted">20 articles &middot; 4 categories &middot; By AL</p>
      </section>

      <section className="container-page pb-20">
        <CategoryFilterBar active={active} onChange={handleChange} counts={counts} />

        <div
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="tabpanel"
          aria-live="polite"
        >
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-muted">No articles in this category yet.</p>
        )}
      </section>
    </>
  );
}
