import { useEffect } from "react";
import type { Article } from "@/data/types";

const SITE_URL = "https://jgougerdie.github.io/inkforge-website";

interface ArticleJsonLdProps {
  article: Article;
  categoryName: string;
}

// Structured data for search result rich snippets. Only fields we actually
// have accurate data for are included — no fabricated publish dates, since
// the content model doesn't track real per-article dates.
export default function ArticleJsonLd({ article, categoryName }: ArticleJsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      articleSection: categoryName,
      author: { "@type": "Person", name: article.author },
      publisher: { "@type": "Organization", name: "Sharpline", url: `${SITE_URL}/` },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/article/${article.slug}` },
      url: `${SITE_URL}/article/${article.slug}`,
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [article, categoryName]);

  return null;
}
