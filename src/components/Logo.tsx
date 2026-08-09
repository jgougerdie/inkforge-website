import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-lg py-1 font-display text-lg font-bold text-ink transition-opacity hover:opacity-80"
      aria-label="Sharpline home"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-base font-extrabold text-white">
        S
      </span>
      Sharpline
    </Link>
  );
}
