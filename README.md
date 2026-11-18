# prehnconsulting.nl

New website for Thomas Prehn Consulting B.V. Dutch first, English under `/en/`, no dependencies.

## Start

```bash
npm run dev      # build and preview at http://localhost:4321
npm run build    # build only, output in dist/
```

Open the folder in Claude Code and ask for changes in plain language, for example:

- "Add a case for Bakkerij De Vries in Sassenheim: ..."
- "Change the business website price to €2,100 in both languages"
- "Add a page about AI for small businesses"

Claude Code reads `CLAUDE.md` for the rules (both languages, no dashes, no invented facts, privacy and accessibility).

## Before launch

1. Fill in the KvK number in `site.config.mjs`.
2. Replace the placeholder case and testimonial with real ones.
3. Add team photos, the real logo and a real Bollenstreek photo.
4. Have the privacy statement checked.
5. Create a Google Business Profile and a LinkedIn company page, then add the LinkedIn URL to `site.config.mjs`.

## Pages

| NL | EN |
|---|---|
| `/` | `/en/` |
| `/diensten/` | `/en/services/` |
| `/prijzen/` | `/en/pricing/` |
| `/cases/` | `/en/cases/` |
| `/over-ons/` | `/en/about/` |
| `/contact/` | `/en/contact/` |
| `/privacy/` | `/en/privacy/` |

Also generated: `404.html`, `sitemap.xml` with hreflang, `robots.txt`, `_redirects` (old `/Pricing.html` goes to `/prijzen/`).
