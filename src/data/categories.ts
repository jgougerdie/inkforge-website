import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "global-marketing",
    name: "Global Marketing",
    shortName: "Marketing",
    emoji: "🌍",
    fg: "#4338CA",
    bg: "#EEF0FF",
    description: "Navigate cultural nuance, master transcreation, and expand your brand without losing its soul.",
  },
  {
    slug: "tax-compliance",
    name: "Tax & Compliance",
    shortName: "Tax",
    emoji: "📊",
    fg: "#0F766E",
    bg: "#ECFDF9",
    description: "Understand R&D relief, avoid HMRC pitfalls, and make compliance a strategic advantage.",
  },
  {
    slug: "mindset-growth",
    name: "Mindset & Growth",
    shortName: "Mindset",
    emoji: "🧠",
    fg: "#BE123C",
    bg: "#FFF0F3",
    description: "Build the mental resilience and clarity that separates thriving founders from burnt-out ones.",
  },
  {
    slug: "cashflow-finance",
    name: "Cashflow & Finance",
    shortName: "Cashflow",
    emoji: "💰",
    fg: "#B45309",
    bg: "#FFF7E8",
    description: "Forecast better, collect faster, and plug the leaks that silently drain your business.",
  },
];

export function getCategory(slug: string): Category {
  const category = categories.find((c) => c.slug === slug);
  if (!category) throw new Error(`Unknown category: ${slug}`);
  return category;
}
