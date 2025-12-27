## 2024-02-23 - Content Security Policy (CSP) Implementation
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing potential XSS and data exfiltration.
**Learning:** Static sites (SSG) hosted via simple servers like `npx serve` often lack HTTP header configuration. Meta tags are a viable fallback for CSP.
**Prevention:** Always include a strict CSP meta tag in the base layout (`BaseLayout.astro`) for SSG projects where HTTP headers cannot be easily controlled.
