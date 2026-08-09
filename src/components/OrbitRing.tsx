import { categories } from "@/data/categories";

const DURATION = 28; // seconds per full revolution
const RADIUS = 440; // px — large enough that the ellipse clears the hero text column entirely

/**
 * Category pills continuously orbiting the hero in a 3D ellipse (a flattened
 * circular path via scaleY, with each pill counter-rotated to stay upright
 * and un-squished). Always animating — no hover required. Purely decorative:
 * the same category links already exist, properly, in the Categories section
 * below, so these are non-interactive and hidden from assistive tech.
 */
export default function OrbitRing() {
  return (
    <div
      aria-hidden="true"
      className="orbit-plane pointer-events-none absolute left-1/2 top-1/2 hidden h-0 w-0 lg:block"
    >
      {categories.map((category, i) => {
        const angle = (i / categories.length) * 360;
        const delay = -(i / categories.length) * DURATION;
        const vars = {
          "--orbit-duration": `${DURATION}s`,
          "--orbit-delay": `${delay}s`,
          "--orbit-angle": `${angle}deg`,
        } as React.CSSProperties;

        return (
          <div key={category.slug} className="orbit-arm absolute left-0 top-0" style={vars}>
            <div className="orbit-radius" style={{ transform: `translateX(${RADIUS}px)` }}>
              <div className="orbit-card" style={vars}>
                <span
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold shadow-card-hover"
                  style={{ color: category.fg }}
                >
                  <span aria-hidden="true">{category.emoji}</span>
                  {category.shortName}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
