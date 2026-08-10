import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { label: "Categories", to: "/?scrollTo=categories" },
  { label: "Featured", to: "/?scrollTo=featured" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, name, logout } = useAuth();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/blog" className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink">
            All Articles
          </Link>

          {isLoggedIn ? (
            <span className="ml-2 flex items-center gap-3">
              <span className="text-[14px] text-ink-muted">Hi, {name}</span>
              <button
                type="button"
                onClick={logout}
                className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
              >
                Log out
              </button>
            </span>
          ) : (
            <Link to="/login" className="btn-primary ml-2 !px-5 !py-2.5 text-[15px]">
              Log in
            </Link>
          )}
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
              <Link
                key={link.label}
                to={link.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-soft hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-soft hover:text-ink"
            >
              All Articles
            </Link>

            {isLoggedIn ? (
              <>
                <span className="px-3 py-2 text-sm text-ink-muted">Signed in as {name}</span>
                <button type="button" onClick={logout} className="btn-secondary mt-1 w-full">
                  Log out
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-primary mt-1 w-full">
                Log in
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
