import { useEffect } from "react";

// Cloudflare Web Analytics — free, cookie-less (so no consent banner needed),
// works regardless of where the site is hosted.
//
// Setup (one-time, by the site owner):
//   1. Sign up free at https://dash.cloudflare.com (Web Analytics section)
//   2. Add this site, copy the token it gives you
//   3. Paste it below in place of "YOUR_CLOUDFLARE_TOKEN"
//
// Until a real token is set, this component renders nothing and loads no
// external script at all — no partial/broken tracking, no wasted request.
const CLOUDFLARE_ANALYTICS_TOKEN = "YOUR_CLOUDFLARE_TOKEN";

export default function Analytics() {
  useEffect(() => {
    if (CLOUDFLARE_ANALYTICS_TOKEN === "YOUR_CLOUDFLARE_TOKEN") return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN }));
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
