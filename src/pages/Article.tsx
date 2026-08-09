import { Link, Navigate, useParams } from "react-router-dom";
import { getArticle, articlesByCategory } from "@/data/articles";
import { getCategory } from "@/data/categories";
import CategoryBadge from "@/components/CategoryBadge";
import ArticleContent from "@/components/ArticleContent";
import PageMeta from "@/components/PageMeta";

export default function Article() {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/blog" replace />;

  const category = getCategory(article.category);
  const related = articlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <PageMeta title={`${article.title} — Sharpline`} description={article.excerpt} />

      <article>
        <div className="container-page max-w-prose pb-4 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg py-2 text-[15px] font-medium text-ink-muted hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to all articles
          </Link>
        </div>

        <header className="container-page max-w-prose pb-8 pt-4">
          <CategoryBadge category={category} />
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-[2.5rem]">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{article.dek}</p>

          <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" strokeLinecap="round" />
              </svg>
              {article.readMins} min read
            </span>
          </div>
        </header>

        <div className="container-page max-w-prose pb-16">
          <ArticleContent blocks={article.content} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-paper-soft py-14">
          <div className="container-page max-w-prose">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              More in {category.name}
            </h2>
            <ul className="mt-4 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/article/${a.slug}`}
                    className="flex items-center justify-between gap-4 px-5 py-4 text-[15px] font-medium text-ink transition-colors hover:bg-paper-soft hover:text-brand-700 sm:px-6 sm:py-5"
                  >
                    {a.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/blog" className="btn-secondary mt-8 w-full sm:w-auto">
              ← Back to all articles
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
