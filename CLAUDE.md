# Prehn Consulting website - instructions for Claude Code

Website of **Thomas Prehn Consulting B.V.** (trading as Prehn Consulting), Lisse. Two founders, Ioana Vitu and Thomas Prehn, help small businesses in the Bollenstreek with websites, CRM, sales and invoicing, AI and automation.

## How the site works

- Static site, **no dependencies**. Node 18+ only.
- `npm run build` writes the finished site to `dist/`. `npm run dev` builds and serves it at http://localhost:4321.
- Deploy `dist/` to any static host. Cloudflare Pages is the current host: build command `npm run build`, output directory `dist`. `_redirects` and `404.html` are picked up automatically.
- Never edit files in `dist/` by hand; they are overwritten on every build.

## Where things live

| What | File |
|---|---|
| Company facts (address, KvK, email, phone, Calendly, form endpoint, intro-offer counter) | `site.config.mjs` |
| All Dutch text | `content/nl.mjs` |
| All English text | `content/en.mjs` (mirrors nl.mjs key for key) |
| Page templates, header, footer, SEO tags, sitemap, robots, redirects | `src/build.mjs` |
| Styling and design tokens (colours, fonts, spacing) | `assets/css/styles.css` (base, tokens in `:root`) and `assets/css/theme.css` (the "Corporate" theme, loaded after it and overriding it) |
| Menu, Calendly loader, contact form | `assets/js/main.js` |
| Logo, images | `assets/img/` |

## Rules

1. **Dutch is the default language** at `/`, English mirrors it under `/en/`. Every text change goes into **both** `content/nl.mjs` and `content/en.mjs`. Keep the keys identical.
2. **Never use en dashes or em dashes** anywhere (copy, comments, alt text). Use a plain hyphen `-`. The build warns if one slips in.
3. Tone: plain, warm, no technical jargon, written for small business owners. Short sentences. Dutch uses "je/jij", not "u".
4. **Do not invent facts**: no made-up clients, quotes, numbers, certifications or reviews. Real client stories and quotes need the client's permission. Items marked `placeholder: true` render with a yellow "Voorbeeld/Example" badge until replaced.
5. Prices are always shown **excl. btw / excl. VAT**. Prices live in content (`packages`, `serviceGroups[].from`, `pricingPage.other`); update both languages.
6. The legal footer (legal name, address, KvK) must stay on every page. Values starting with `TODO` in `site.config.mjs` are highlighted on the page and listed by the build - fill them before launch.
7. **Privacy:** the site sets no tracking cookies, so it needs no cookie banner. Keep it that way: Calendly only loads after a click, and analytics must be cookieless (e.g. Plausible, Cloudflare Web Analytics). Adding any tracking pixel means adding a compliant banner with an equal "reject" button. Update the privacy page if processors change.
8. Accessibility target is **WCAG 2.2 AA**: keep real headings in order, alt text on images, visible focus, touch targets at least 44px, colour contrast at least 4.5:1, and everything usable by keyboard.
9. Performance: no frameworks, no web fonts from Google (privacy), images as WebP with width and height set, `loading="lazy"` below the fold.

## Common tasks

- **Add a client case**: add an object to `cases` in both content files (client, url, tag, h, situation, did, result, quote, by). No locations. `quote` and `by` may be empty.
- **Add a testimonial**: add to `testimonials` in both content files with the real business, and name and role if the client agrees.
- **Add team photos**: put square photos (at least 320x320, WebP) in `assets/img/`, set `photo: "/assets/img/ioana.webp"` in both content files.
- **Replace the tulip illustration** with a real photo: add `assets/img/bollenstreek.webp`, change the two `bollenstreek.svg` references in `src/build.mjs`.
- **Add a page**: add a slug to `slugs` in both content files, a content block, a render function in `src/build.mjs`, register it in `pages`, and (if it belongs in the menu) add it to `nav`.
- **Change the brand colours or fonts**: the palette is blue (`--green`, `--green-2`) and yellow (`--yellow`); yellow fills always carry dark text for contrast. Edit the tokens at the top of `assets/css/theme.css` (they override `styles.css`).
- **Turn off the intro offer**: set `introSpotsLeft: 0` in `site.config.mjs`.
- **Connect the contact form**: set `formAction` in `site.config.mjs` to a form endpoint. Empty means the form opens a pre-filled email.

## Check before finishing any change

Run `npm run build` and read the "Before launch" warnings. Then open the changed pages in both languages at http://localhost:4321 and check them at mobile width.
