import { Link } from "react-router-dom";
import type { Category } from "@/data/types";

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md";
  href?: string;
}

export default function CategoryBadge({ category, size = "md", href }: CategoryBadgeProps) {
  const classes =
    size === "sm"
      ? "gap-1 px-2.5 py-1 text-xs"
      : "gap-1.5 px-3 py-1.5 text-sm";

  const content = (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${classes}`}
      style={{ backgroundColor: category.bg, color: category.fg }}
    >
      <span aria-hidden="true">{category.emoji}</span>
      {category.name}
    </span>
  );

  if (href) {
    return (
      <Link to={href} className="inline-block rounded-full transition-transform hover:scale-[1.03]">
        {content}
      </Link>
    );
  }

  return content;
}
