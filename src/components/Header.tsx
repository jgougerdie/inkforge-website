import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { label: "Categories", href: "/#categories" },
  { label: "Featured", href: "/#featured" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Link to="/blog" className="btn-primary ml-2 !px-5 !py-2.5 text-[15px]">
            All Articles
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white sm:hidden" aria-label="Primary mobile">
          <div className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Link to="/blog" className="btn-primary mt-1 w-full">
              All Articles
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
