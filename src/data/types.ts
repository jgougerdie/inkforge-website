export type CategorySlug = "global-marketing" | "tax-compliance" | "mindset-growth" | "cashflow-finance";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  emoji: string;
  fg: string;
  bg: string;
  description: string;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; icon: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export interface Article {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: CategorySlug;
  author: string;
  readMins: number;
  content: ContentBlock[];
}
