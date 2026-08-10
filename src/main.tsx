import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// HashRouter (not BrowserRouter) because this is deployed to GitHub Pages,
// a static host with no server-side rewrites for client-side routes. If this
// ever moves to a host that supports rewrites (Vercel, Netlify, Cloudflare
// Pages), switch back to BrowserRouter for clean URLs.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
