import { Link } from "react-router-dom";
import type { Article } from "@/data/types";
import { getCategory } from "@/data/categories";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategory(article.category);

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-card-hover sm:p-6"
    >
      <CategoryBadge category={category} size="sm" />
      <h3 className="mt-3.5 text-xl font-bold leading-snug text-ink group-hover:text-brand-700">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {article.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-ink-muted">
        <span className="flex items-center gap-3">
          <span>{article.author}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.readMins} min read</span>
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand-600">
          Read
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
