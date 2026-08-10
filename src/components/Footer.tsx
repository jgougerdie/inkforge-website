import { Link } from "react-router-dom";
import Logo from "./Logo";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper-soft">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-[1.3fr_1fr] sm:py-16">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            Sharp, no-fluff articles on global marketing, tax strategy, personal growth, and financial
            management — written for business owners who value substance over noise.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Categories</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/blog?category=${c.slug}`}
                  className="inline-flex items-center gap-2 text-[15px] text-ink-soft hover:text-brand-700"
                >
                  <span aria-hidden="true">{c.emoji}</span>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sharpline. All rights reserved.</p>
          <p>Written by AL</p>
        </div>
      </div>
    </footer>
  );
}
