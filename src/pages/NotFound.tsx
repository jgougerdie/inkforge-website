import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found — Sharpline" />
      <section className="container-page flex flex-col items-center py-24 text-center sm:py-32">
        <span className="font-display text-6xl font-extrabold text-brand-600">404</span>
        <h1 className="mt-4 text-2xl font-bold text-ink">We couldn't find that page.</h1>
        <p className="mt-3 max-w-sm text-ink-muted">
          The article or page you're looking for may have moved. Try browsing all articles instead.
        </p>
        <Link to="/blog" className="btn-primary mt-8">
          Browse all articles
        </Link>
      </section>
    </>
  );
}
