import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";
import PageMeta from "@/components/PageMeta";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/blog";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    login(name.trim() || email.trim() || "Reader");
    navigate(redirect);
  }

  return (
    <>
      <PageMeta title="Log in — Sharpline" />
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-16">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-7 shadow-card sm:p-8">
          <h1 className="text-2xl font-bold text-ink">Log in to keep reading</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Free, no strings attached — just tell us who's reading.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Founder"
                className="min-h-[48px] w-full rounded-xl border border-border px-4 text-base text-ink outline-none transition-colors focus:border-brand-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="min-h-[48px] w-full rounded-xl border border-border px-4 text-base text-ink outline-none transition-colors focus:border-brand-500"
              />
            </div>

            <button type="submit" className="btn-primary mt-2 w-full">
              Log in and read
            </button>
          </form>

          <p className="mt-5 text-center text-xs leading-relaxed text-ink-muted">
            This is a demo gate, not a real account system — nothing is verified or stored beyond your browser.
          </p>
        </div>

        <Link to="/blog" className="mt-6 text-sm font-medium text-ink-muted hover:text-ink">
          &larr; Back to all articles
        </Link>
      </section>
    </>
  );
}
