# QuickTransfer Route Inventory & Indexing Policy

**Date:** 19 November 2026  
**Reference:** Stage 2.1 of Full SEO & Growth Implementation Plan

---

## 1. Public Indexable Routes (HTTP 200)

| Route Path | Content Description | Canonical URL | Indexing Directive | Sitemap Inclusion |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage — Transfer & Receive Tool | `https://quicktransfer.site/` | `index, follow` | Yes (Priority 1.0) |
| `/help` | Help Center & FAQs | `https://quicktransfer.site/help` | `index, follow` | Yes (Priority 0.8) |
| `/security` | Security & Privacy Architecture | `https://quicktransfer.site/security` | `index, follow` | Yes (Priority 0.8) |
| `/privacy` | Privacy Policy | `https://quicktransfer.site/privacy` | `index, follow` | Yes (Priority 0.6) |
| `/terms` | Terms of Service | `https://quicktransfer.site/terms` | `index, follow` | Yes (Priority 0.5) |
| `/contact` | Contact & Support Channels | `https://quicktransfer.site/contact` | `index, follow` | Yes (Priority 0.6) |
| `/download` | Desktop & Mobile Information | `https://quicktransfer.site/download` | `index, follow` | Yes (Priority 0.7) |
| `/send-files-without-account` | Landing: Send Files Without an Account | `https://quicktransfer.site/send-files-without-account` | `index, follow` | Yes (Priority 0.8) |
| `/send-files-from-phone-to-pc` | Landing: Phone to PC Wireless Transfer | `https://quicktransfer.site/send-files-from-phone-to-pc` | `index, follow` | Yes (Priority 0.8) |
| `/temporary-file-sharing` | Landing: Temporary & Ephemeral Sharing | `https://quicktransfer.site/temporary-file-sharing` | `index, follow` | Yes (Priority 0.8) |
| `/file-transfer-not-working` | Troubleshooting: Common Transfer Issues | `https://quicktransfer.site/file-transfer-not-working` | `index, follow` | Yes (Priority 0.7) |
| `/blog` | Blog Index & Article Directory | `https://quicktransfer.site/blog` | `index, follow` | Yes (Priority 0.8) |
| `/blog/fastest-way-to-share-files` | Guide: Fast File Sharing No Sign-Up | `https://quicktransfer.site/blog/fastest-way-to-share-files` | `index, follow` | Yes (Priority 0.7) |
| `/blog/expiring-file-sharing` | Guide: Expiring File Transfers | `https://quicktransfer.site/blog/expiring-file-sharing` | `index, follow` | Yes (Priority 0.7) |
| `/blog/are-my-files-actually-deleted` | Guide: File Deletion & Retention | `https://quicktransfer.site/blog/are-my-files-actually-deleted` | `index, follow` | Yes (Priority 0.7) |
| `/blog/cloud-storage-vs-file-sharing` | Comparison: Storage vs Temporary Transfer | `https://quicktransfer.site/blog/cloud-storage-vs-file-sharing` | `index, follow` | Yes (Priority 0.7) |
| `/blog/file-sharing-mistakes` | Guide: Common Sharing Mistakes | `https://quicktransfer.site/blog/file-sharing-mistakes` | `index, follow` | Yes (Priority 0.7) |
| `/blog/easiest-way-to-share-files` | Guide: Easiest File Sharing Methods | `https://quicktransfer.site/blog/easiest-way-to-share-files` | `index, follow` | Yes (Priority 0.7) |
| `/blog/self-destructing-file-transfer` | Guide: Self-Destructing Files | `https://quicktransfer.site/blog/self-destructing-file-transfer` | `index, follow` | Yes (Priority 0.7) |
| `/blog/anonymous-file-sharing` | Guide: Anonymous Sharing Without Accounts | `https://quicktransfer.site/blog/anonymous-file-sharing` | `index, follow` | Yes (Priority 0.7) |
| `/blog/wetransfer-alternatives` | Comparison: Alternatives to WeTransfer | `https://quicktransfer.site/blog/wetransfer-alternatives` | `index, follow` | Yes (Priority 0.7) |
| `/blog/send-large-files` | Guide: Sending Files Up to 100MB | `https://quicktransfer.site/blog/send-large-files` | `index, follow` | Yes (Priority 0.7) |

---

## 2. Non-Indexable & System Paths

| Path / Parameter | Classification | Handling & Directives |
| :--- | :--- | :--- |
| `/?code=XXXXXX` | Transfer Retrieval Query | Parameter cleaned via browser history `replaceState`; canonical remains `https://quicktransfer.site/`. |
| `/api/*` | API Endpoints (if added) | Blocked in `robots.txt` via `Disallow: /api/`. |
| `/_not-found` | 404 Error Handler | Returns HTTP 404; automatically non-indexed by Next.js. |

---

## 3. Host and Redirect Canonicalization

- Canonical Domain: `https://quicktransfer.site`
- Non-www to canonical: `https://www.quicktransfer.site` → `https://quicktransfer.site` (single 301 hop at CDN/Vercel layer)
- HTTP to HTTPS: `http://quicktransfer.site` → `https://quicktransfer.site` (forced TLS)
