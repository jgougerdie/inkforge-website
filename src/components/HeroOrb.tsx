/**
 * Decorative wireframe sphere behind the hero headline — a callback to the
 * original site's globe motif. Purely ambient: low opacity, blurred, and
 * positioned so it never sits under text at full strength. The whole group
 * spins slowly via CSS; @media (prefers-reduced-motion) in index.css freezes it.
 */
export default function HeroOrb() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[620px] sm:w-[620px]"
    >
      <div className="absolute inset-0 rounded-full bg-brand-400/20 blur-[90px]" />
      <svg
        viewBox="0 0 400 400"
        className="hero-orb-spin absolute inset-0 h-full w-full opacity-[0.14]"
        fill="none"
        stroke="#4F42DB"
        strokeWidth="1"
      >
        <circle cx="200" cy="200" r="160" />
        <ellipse cx="200" cy="200" rx="160" ry="55" />
        <ellipse cx="200" cy="200" rx="160" ry="105" />
        <ellipse cx="200" cy="200" rx="55" ry="160" />
        <ellipse cx="200" cy="200" rx="105" ry="160" />
        <ellipse cx="200" cy="200" rx="160" ry="55" transform="rotate(60 200 200)" />
        <ellipse cx="200" cy="200" rx="160" ry="55" transform="rotate(120 200 200)" />
      </svg>
      <svg
        viewBox="0 0 400 400"
        className="hero-orb-spin-reverse absolute inset-0 h-full w-full opacity-[0.10]"
        fill="none"
        stroke="#6259E8"
        strokeWidth="1"
      >
        <circle cx="200" cy="200" r="120" />
        <ellipse cx="200" cy="200" rx="120" ry="40" transform="rotate(30 200 200)" />
        <ellipse cx="200" cy="200" rx="120" ry="40" transform="rotate(90 200 200)" />
        <ellipse cx="200" cy="200" rx="120" ry="40" transform="rotate(150 200 200)" />
      </svg>
    </div>
  );
}
