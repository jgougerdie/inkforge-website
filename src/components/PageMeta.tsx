import { useEffect } from "react";

const SITE_URL = "https://jgougerdie.github.io/inkforge-website";

interface PageMetaProps {
  title: string;
  description?: string;
  /** e.g. "/blog" or "/article/some-slug" — omit for the homepage. */
  path?: string;
  /** Keep this page out of search results (e.g. the login page). */
  noindex?: boolean;
}

function setMeta(selector: string, attr: string, value: string): () => void {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return () => {};
  const prev = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return () => {
    if (prev !== null) el.setAttribute(attr, prev);
  };
}

function addRobotsNoindex(): () => void {
  const el = document.createElement("meta");
  el.setAttribute("name", "robots");
  el.setAttribute("content", "noindex");
  document.head.appendChild(el);
  return () => el.remove();
}

export default function PageMeta({ title, description, path = "", noindex = false }: PageMetaProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const url = `${SITE_URL}${path}`;
    const cleanups: Array<() => void> = [
      setMeta('meta[property="og:title"]', "content", title),
      setMeta('meta[name="twitter:title"]', "content", title),
      setMeta('meta[property="og:url"]', "content", url),
      setMeta('link[rel="canonical"]', "href", url),
    ];

    if (description) {
      cleanups.push(
        setMeta('meta[name="description"]', "content", description),
        setMeta('meta[property="og:description"]', "content", description),
        setMeta('meta[name="twitter:description"]', "content", description),
      );
    }

    if (noindex) cleanups.push(addRobotsNoindex());

    return () => {
      document.title = prevTitle;
      cleanups.forEach((fn) => fn());
    };
  }, [title, description, path, noindex]);

  return null;
}
