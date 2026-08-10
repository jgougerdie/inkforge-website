import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// BrowserRouter with clean URLs, made to work on GitHub Pages (a static host
// with no server-side rewrites) via the well-known 404.html redirect trick —
// see public/404.html and the decode script in index.html. Clean, real paths
// are what let Google actually crawl and index individual articles; a prior
// version used HashRouter (#/article/...), which search engines don't index
// as separate pages.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
