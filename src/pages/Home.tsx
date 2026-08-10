import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { articlesByCategory } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import TrustRow from "@/components/TrustRow";
import TiltCard from "@/components/TiltCard";
import HeroOrb from "@/components/HeroOrb";
import OrbitRing from "@/components/OrbitRing";

const keywordColor: Record<string, string> = {
  "global marketing": "#4338CA",
  "tax strategy": "#0F766E",
  "personal growth": "#B45309",
  "financial management": "#BE123C",
};

export default function Home() {
  const featured = categories.map((c) => articlesByCategory(c.slug)[0]).filter(Boolean);
  const [searchParams, setSearchParams] = useSearchParams();

  // Header's "Categories"/"Featured" links land here as ?scrollTo=<id> (not a
  // native #hash anchor, since HashRouter already owns the URL hash on GitHub
  // Pages) — scroll to the matching section once, then drop the param.
  useEffect(() => {
    const target = searchParams.get("scrollTo");
    if (!target) return;
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    searchParams.delete("scrollTo");
    setSearchParams(searchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <>
      {/* Hero — single clear headline + one primary action, sized and spaced
          per the audit's Fix #1 (56px/28px H1, action within first 600px). */}
      <section className="container-page relative flex flex-col items-center overflow-hidden pb-16 pt-[72px] text-center sm:pb-24">
        <HeroOrb />
        <OrbitRing />
        {/* Positioned so this whole block paints above the absolutely-positioned
            (but unpositioned-z-index) orbit ring, regardless of DOM order. */}
        <div className="relative flex flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-soft px-4 py-1.5 text-sm font-medium text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Business articles that respect your time
        </span>

        <h1 className="mt-6 text-[28px] font-extrabold leading-[1.1] text-ink sm:text-[56px]">
          Cut through the noise.
        </h1>

        <p className="mt-8 max-w-[320px] text-[16px] leading-relaxed text-ink-soft sm:max-w-[560px] sm:text-lg">
          Actionable articles on{" "}
          {Object.entries(keywordColor).map(([word, color], i, arr) => (
            <span key={word}>
              <span className="font-semibold" style={{ color }}>
                {word}
              </span>
              {i < arr.length - 2 ? ", " : i === arr.length - 2 ? ", and " : "."}
            </span>
          ))}
        </p>

        <p className="mt-3 max-w-[320px] text-sm text-ink-muted sm:max-w-[560px]">
          20 concise reads written by AL for business owners who want substance, not fluff.
        </p>

        <Link to="/blog" className="btn-primary mt-6 !px-8 !py-4 !text-base">
          Read the articles
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        </div>

        <div className="relative mt-10 w-full border-t border-border pt-8">
          <TrustRow />
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border bg-paper-soft py-16 sm:py-20">
        <div className="container-page grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">About Sharpline</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Business insight, distilled.</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft sm:text-lg">
              Sharpline exists for one reason: to give business owners the insight they need without the noise
              they don't. Every article is concise, actionable, and grounded in reality.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft sm:text-lg">
              Four categories. Twenty articles. Zero fluff. Whether you're navigating global markets, optimising
              your tax position, building mental resilience, or plugging cash leaks — we've got you covered.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {[
              { label: "Articles", value: "20" },
              { label: "Categories", value: "4" },
              { label: "Min read", value: "~5" },
              { label: "Fluff", value: "0" },
            ].map((stat) => (
              <TiltCard key={stat.label} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <dt className="text-sm font-medium text-ink-muted">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-extrabold text-ink">{stat.value}</dd>
              </TiltCard>
            ))}
          </dl>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Categories</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Four pillars of business insight</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {categories.map((category) => {
              const items = articlesByCategory(category.slug);
              return (
                <TiltCard key={category.slug} className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{ backgroundColor: category.bg }}
                      aria-hidden="true"
                    >
                      {category.emoji}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{category.name}</h3>
                      <p className="text-sm text-ink-muted">{items.length} articles</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{category.description}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {items.slice(0, 3).map((article) => (
                      <li key={article.slug}>
                        <Link
                          to={`/article/${article.slug}`}
                          className="block rounded-lg py-1.5 text-[15px] text-ink-soft hover:text-brand-700"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/blog?category=${category.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: category.fg }}
                  >
                    +{items.length - 3} more
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="scroll-mt-20 border-t border-border bg-paper-soft py-16 sm:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Featured</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Start reading</h2>
            <p className="mt-3 text-[16px] text-ink-muted">One featured article from each category to give you a taste.</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col items-center rounded-3xl bg-ink px-6 py-14 text-center sm:px-16 sm:py-20">
            <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Ready to cut through the noise?
            </h2>
            <p className="mt-4 max-w-md text-[16px] text-white/70">
              20 sharp articles. 4 categories. Zero fluff. Dive in and find the insight that moves your business
              forward.
            </p>
            <Link to="/blog" className="mt-8 btn-primary !bg-white !text-ink hover:!bg-white/90">
              Start reading
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
