// Builds the static site into dist/. No dependencies, Node 18+.
// Run: npm run build
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import site from "../site.config.mjs";
import nl from "../content/nl.mjs";
import en from "../content/en.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const year = new Date().getFullYear();
const langs = [nl, en];
const warnings = [];
const DASH = new RegExp("[" + String.fromCharCode(0x2013, 0x2014) + "]"); // en dash, em dash

// ---------- helpers ----------
const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (s) => String(s ?? "").replace(/<[^>]+>/g, "");
const fill = (s, vars) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
const isTodo = (v) => typeof v === "string" && v.startsWith("TODO");
// Company facts: TODO values get a visible highlight until they are filled in.
const fact = (v) => (isTodo(v) ? `<mark class="todo" title="Fill in site.config.mjs before launch">${esc(v)}</mark>` : esc(v));
const otherLang = (c) => (c.lang === "nl" ? en : nl);
const href = (c, key) => {
  const base = c.lang === "nl" ? "/" : "/en/";
  const slug = c.slugs[key];
  return slug ? `${base}${slug}/` : base;
};
const areas = (c) => {
  const a = site.areaServed;
  const and = c.lang === "nl" ? " en " : " and ";
  return a.length > 1 ? `${a.slice(0, -1).join(", ")}${and}${a[a.length - 1]}` : a.join("");
};
const address = `${site.street}, ${site.postcode} ${site.city}`;
const badge = (c, item) => (item.placeholder ? `<span class="badge-example">${esc(c.ui.example)}</span>` : "");
const calendlyLink = (label, cls = "button") =>
  `<a class="${cls}" href="${esc(site.calendly)}" target="_blank" rel="noopener" data-calendly>${label}</a>`;
const checkList = (items) => `<ul class="checks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const eyebrow = (t) => `<p class="eyebrow">${t}</p>`;

// ---------- shared layout ----------
function jsonLd(c) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.brand,
    legalName: site.legalName,
    url: site.siteUrl + href(c, "home"),
    logo: site.siteUrl + "/assets/img/logo.png",
    image: site.siteUrl + "/assets/img/icon.png",
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postcode,
      addressLocality: site.city,
      addressCountry: site.country,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    founder: [
      { "@type": "Person", name: "Ioana Vitu", sameAs: site.linkedin.ioana },
      { "@type": "Person", name: "Thomas Prehn", sameAs: site.linkedin.thomas },
    ],
    sameAs: [site.linkedin.company].filter(Boolean),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function header(c, key) {
  const o = otherLang(c);
  const langHref = key === "notFound" ? href(o, "home") : href(o, key);
  const links = c.nav
    .map((k) => {
      const current = k === key ? ' aria-current="page"' : "";
      return `<li><a href="${href(c, k)}"${current}>${esc(c.navLabels[k])}</a></li>`;
    })
    .join("");
  return `<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="${href(c, "home")}"><img src="/assets/img/logo.png" width="981" height="412" alt="${esc(c.ui.homeAlt)}"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="bars" aria-hidden="true"></span>${esc(c.ui.menu)}</button>
    <nav id="site-nav" class="site-nav" aria-label="${esc(c.ui.mainNav)}">
      <ul>${links}</ul>
      <a class="lang" href="${langHref}" hreflang="${o.lang}" lang="${o.htmlLang}" aria-label="${esc(c.ui.langAria)}">${esc(c.ui.langShort)}</a>
      ${calendlyLink(esc(c.ui.book), "button button-small")}
    </nav>
  </div>
</header>`;
}

function footer(c) {
  const f = c.ui.footer;
  const pages = ["home", ...c.nav, "privacy"]
    .map((k) => `<li><a href="${href(c, k)}">${esc(c.navLabels[k])}</a></li>`)
    .join("");
  const li = site.linkedin.company ? `<li><a href="${esc(site.linkedin.company)}" rel="noopener">${esc(f.linkedin)}</a></li>` : "";
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <p class="footer-brand">${esc(site.brand)}</p>
      <p>${esc(f.tagline)}</p>
      <p>${esc(fill(f.area, { areas: areas(c) }))}</p>
    </div>
    <nav aria-label="${esc(f.pages)}">
      <h2 class="footer-h">${esc(f.pages)}</h2>
      <ul>${pages}</ul>
    </nav>
    <div>
      <h2 class="footer-h">${esc(f.contact)}</h2>
      <ul>
        <li>${esc(f.phone)}: <a href="tel:${esc(site.phoneHref)}">${esc(site.phoneDisplay)}</a></li>
        <li><a href="${esc(site.whatsapp)}" rel="noopener">${esc(f.whatsapp)}</a></li>
        <li>${esc(f.email)}: <a href="mailto:${esc(site.email)}">${fact(site.email)}</a></li>
        ${li}
      </ul>
    </div>
    <div>
      <h2 class="footer-h">${esc(f.company)}</h2>
      <p class="legal">${esc(site.legalName)}<br>${esc(site.street)}<br>${esc(site.postcode)} ${esc(site.city)}<br>
      ${esc(f.kvk)}: ${fact(site.kvk)}</p>
    </div>
  </div>
  <div class="wrap footer-bottom"><p>© ${year} ${esc(site.legalName)}. ${esc(f.rights)}</p></div>
</footer>`;
}

function whatsappFloat(c) {
  const url = `${site.whatsapp}?text=${encodeURIComponent(c.ui.whatsappText)}`;
  return `<a class="wa-float" href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(c.ui.whatsappAria)}">
  <span class="wa-label" aria-hidden="true">${esc(c.ui.whatsappLabel)}</span>
  <span class="wa-icon"><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16.04 3C8.87 3 3.05 8.82 3.05 15.99c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a12.94 12.94 0 0 0 6.36 1.62h.01c7.17 0 12.99-5.82 12.99-12.99S23.21 3 16.04 3Zm0 23.68h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.96 1.04 1.06-3.86-.26-.4a10.76 10.76 0 0 1-1.65-5.73c0-5.96 4.85-10.81 10.82-10.81 5.96 0 10.81 4.85 10.81 10.81 0 5.97-4.85 10.82-10.81 10.82Zm5.93-8.1c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.17-.22.32-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.26-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.36c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.76.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z"/></svg></span>
</a>`;
}

function layout(c, key, body) {
  const meta = c.meta[key];
  const o = otherLang(c);
  const isPage = key !== "notFound";
  const canonical = isPage ? site.siteUrl + href(c, key) : "";
  const seo = isPage
    ? `<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="nl" href="${site.siteUrl + href(nl, key)}">
<link rel="alternate" hreflang="en" href="${site.siteUrl + href(en, key)}">
<link rel="alternate" hreflang="x-default" href="${site.siteUrl + href(nl, key)}">
<meta property="og:url" content="${canonical}">`
    : `<meta name="robots" content="noindex">`;
  return `<!doctype html>
<html lang="${c.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
${seo}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:locale" content="${c.locale}">
<meta property="og:locale:alternate" content="${o.locale}">
<meta property="og:image" content="${site.siteUrl}/assets/img/icon.png">
<meta name="theme-color" content="#070b14">
<link rel="icon" type="image/png" href="/assets/img/icon.png">
<link rel="apple-touch-icon" href="/assets/img/icon.png">
<link rel="stylesheet" href="/assets/css/styles.css">
<link rel="stylesheet" href="/assets/css/theme.css">
<script>document.documentElement.classList.add("js")</script>
<script src="/assets/js/main.js" defer></script>
${key === "home" ? jsonLd(c) : ""}
</head>
<body>
<a class="skip-link" href="#main">${esc(c.ui.skip)}</a>
${header(c, key)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(c)}
${whatsappFloat(c)}
</body>
</html>
`;
}

function ctaBand(c, cta = c.cta) {
  return `<section class="cta" aria-labelledby="cta-h">
  <div class="wrap cta-box">
    <div><h2 id="cta-h">${cta.h}</h2><p>${cta.p}</p></div>
    ${calendlyLink(`${esc(cta.button)} <span aria-hidden="true">→</span>`, "button button-yellow")}
  </div>
</section>`;
}

function serviceCard(c, g, { withPrice = false, level = 3 } = {}) {
  const price = withPrice && g.from
    ? `<p class="from">${esc(c.ui.from)} <strong>${esc(g.from)}</strong> <span>${esc(c.ui.exclVat)}</span></p>`
    : "";
  return `<article class="service-card" id="${g.id}">
  <span class="icon" aria-hidden="true">${g.icon}</span>
  <h${level}>${g.h}</h${level}>
  <p>${g.p}</p>
  ${checkList(g.items)}
  ${price}
</article>`;
}

function testimonialCards(c) {
  return c.testimonials
    .map(
      (t) => `<figure class="quote-card">
  ${badge(c, t)}
  <blockquote><p>${t.quote}</p></blockquote>
  <figcaption>${t.name ? `<strong>${esc(t.name)}</strong><br>` : ""}${[t.role, t.business].filter(Boolean).map(esc).join(", ")}</figcaption>
</figure>`
    )
    .join("");
}

function personCard(c, p, { full = false, level = 3 } = {}) {
  const img = p.photo
    ? `<img class="avatar" src="${esc(p.photo)}" width="320" height="320" alt="${esc(p.name)}" loading="lazy">`
    : `<span class="avatar avatar-initials" aria-hidden="true">${esc(p.initials)}</span>`;
  const li = site.linkedin[p.linkedin];
  const link = full && li
    ? `<p><a class="text-link" href="${esc(li)}" rel="noopener">${esc(fill(c.about.linkedinLabel, { name: p.name }))}</a></p>`
    : "";
  return `<article class="person">
  ${img}
  <div>
    <p class="role">${esc(p.role)}</p>
    <h${level}>${esc(p.name)}</h${level}>
    ${full ? `<p>${p.bio}</p>` : ""}
    <ul class="chips">${p.chips.map((ch) => `<li>${esc(ch)}</li>`).join("")}</ul>
    ${link}
  </div>
</article>`;
}

function localSection(c) {
  const l = c.home.local;
  return `<section class="section" aria-labelledby="local-h">
  <div class="wrap split">
    <div class="local-art"><img src="/assets/img/bollenstreek.svg" width="600" height="450" alt="${esc(l.alt)}" loading="lazy"></div>
    <div>
      ${eyebrow(l.eyebrow)}
      <h2 id="local-h">${l.h}</h2>
      <p class="lead-sm">${l.p}</p>
      <p><strong>${esc(fill(l.serving, { areas: areas(c) }))}</strong></p>
      <a class="button button-ghost" href="${href(c, "contact")}">${esc(l.cta)}</a>
    </div>
  </div>
</section>`;
}

function pageHero(eyebrowText, h1, lead, extra = "") {
  return `<section class="page-hero">
  <div class="wrap">
    ${eyebrow(eyebrowText)}
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
    ${extra}
  </div>
</section>`;
}

// ---------- pages ----------
function renderHome(c) {
  const h = c.home;
  const trust = `<ul class="trust">${h.trust.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  return `<section class="hero">
  <div class="wrap hero-grid">
    <div>
      ${eyebrow(h.eyebrow)}
      <h1>${h.h1}</h1>
      <p class="lead">${h.lead}</p>
      <div class="actions">
        ${calendlyLink(`${esc(h.ctaPrimary)} <span aria-hidden="true">→</span>`)}
        <a class="button button-ghost" href="${href(c, "services")}">${esc(h.ctaSecondary)}</a>
      </div>
      ${trust}
    </div>
    <aside class="assess" aria-labelledby="assess-h">
      <p class="assess-label">${esc(h.assess.label)}</p>
      <h2 id="assess-h">${h.assess.h}</h2>
      <ol>${h.assess.items.map((i) => `<li><strong>${i.h}</strong><span>${i.p}</span></li>`).join("")}</ol>
    </aside>
  </div>
</section>

<section class="section section-dark" aria-labelledby="services-h">
  <div class="wrap">
    <div class="section-head">
      ${eyebrow(h.services.eyebrow)}
      <h2 id="services-h">${h.services.h}</h2>
      <p>${h.services.p}</p>
    </div>
    <div class="grid-3">${c.serviceGroups.map((g) => serviceCard(c, g)).join("")}</div>
    <p class="section-more"><a class="button button-yellow" href="${href(c, "services")}">${esc(h.services.link)} <span aria-hidden="true">→</span></a></p>
  </div>
</section>

<section class="section" aria-labelledby="steps-h">
  <div class="wrap">
    <div class="section-head">
      ${eyebrow(h.steps.eyebrow)}
      <h2 id="steps-h">${h.steps.h}</h2>
      <p>${h.steps.p}</p>
    </div>
    <ol class="steps">${h.steps.items.map((s) => `<li><h3>${s.h}</h3><p>${s.p}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section section-soft" aria-labelledby="team-h">
  <div class="wrap">
    <div class="section-head">
      ${eyebrow(h.team.eyebrow)}
      <h2 id="team-h">${h.team.h}</h2>
      <p>${h.team.p}</p>
    </div>
    <div class="grid-2">${c.team.map((p) => personCard(c, p)).join("")}</div>
    <p class="section-more"><a class="button button-ghost" href="${href(c, "about")}">${esc(h.team.link)} <span aria-hidden="true">→</span></a></p>
  </div>
</section>

${c.testimonials.length ? `<section class="section" aria-labelledby="quotes-h">
  <div class="wrap">
    <div class="section-head">${eyebrow(h.testimonials.eyebrow)}<h2 id="quotes-h">${h.testimonials.h}</h2></div>
    <div class="grid-2">${testimonialCards(c)}</div>
  </div>
</section>` : ""}

${localSection(c)}
${ctaBand(c)}`;
}

function renderServices(c) {
  const s = c.servicesPage;
  return `${pageHero(s.eyebrow, s.h1, s.lead, `<div class="actions">${calendlyLink(`${esc(c.ui.book)} <span aria-hidden="true">→</span>`)}<a class="button button-ghost" href="${href(c, "pricing")}">${esc(s.pricesLink)}</a></div>`)}
<section class="section section-tight">
  <div class="wrap grid-2">${c.serviceGroups.map((g) => serviceCard(c, g, { withPrice: true, level: 2 })).join("")}</div>
  <div class="wrap note-box">
    <h2>${s.notSure.h}</h2>
    <p>${s.notSure.p}</p>
  </div>
</section>
${ctaBand(c)}`;
}

function packageCard(c, p) {
  const io = c.pricingPage.introOffer;
  const total = site.introSpotsTotal;
  const left = Math.max(0, Math.min(site.introSpotsLeft, total));
  const introOn = p.intro && left > 0 && p.introPrice;
  const vat = `<span class="vat">${esc(c.ui.exclVat)}</span>`;
  let priceBlock;
  let extra = "";
  if (introOn) {
    const booked = total - left;
    const dots = Array.from({ length: total }, (_, i) => `<span class="dot${i < booked ? " booked" : ""}"></span>`).join("");
    priceBlock = `<p class="price">${esc(p.introPrice)} ${vat}</p>
    <p class="regular">${esc(io.regular)} <s>${esc(p.price)}</s></p>
    <p class="card-intro">${esc(fill(io.text, { total, price: p.introPrice }))}</p>`;
    extra = `<div class="spots">
      <p class="spots-left">${esc(fill(io.left, { left, total }))}</p>
      <div class="dots" aria-hidden="true">${dots}</div>
      <p class="spots-caption" aria-hidden="true">${esc(fill(io.booked, { n: booked }))} · ${esc(fill(io.available, { n: left }))}</p>
    </div>`;
  } else {
    priceBlock = `<p class="price">${p.fromPrice ? `<span class="from-label">${esc(c.ui.from)}</span> ` : ""}${esc(p.price)} ${vat}</p>`;
  }
  const tag = introOn ? io.label : p.tag;
  return `<article class="package${p.featured ? " featured" : ""}${introOn ? " intro" : ""}">
  <p class="tag">${esc(tag)}</p>
  <h3>${p.h}</h3>
  ${priceBlock}
  <p class="card-intro">${p.p}</p>
  ${checkList(p.items)}
  ${extra}
  ${calendlyLink(`${esc(p.button)} <span aria-hidden="true">→</span>`, p.featured ? "button button-yellow" : "button")}
</article>`;
}

function renderPricing(c) {
  const s = c.pricingPage;
  const trust = `<ul class="trust">${s.trust.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  return `${pageHero(s.eyebrow, s.h1, s.lead, trust)}
<section class="section section-tight" aria-labelledby="packages-h">
  <div class="wrap">
    <h2 id="packages-h" class="visually-hidden">${esc(s.packagesLabel)}</h2>
    <div class="grid-3 packages">${c.packages.map((p) => packageCard(c, p)).join("")}</div>
  </div>
</section>

<section class="section section-dark" aria-labelledby="other-h">
  <div class="wrap split split-top">
    <div>
      ${eyebrow(s.other.eyebrow)}
      <h2 id="other-h">${s.other.h}</h2>
      <p>${s.other.p}</p>
      <p class="small">${s.other.note}</p>
    </div>
    <div>
      <dl class="price-rows">${s.other.rows.map((r) => `<div><dt>${r.label}</dt><dd>${r.price}</dd></div>`).join("")}</dl>
      <p class="small">${s.other.disclaimer}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid-2">
    <article class="panel panel-soft"><h2>${s.included.h}</h2><p>${s.included.p}</p>${checkList(s.included.items)}</article>
    <article class="panel"><h2>${s.separate.h}</h2><p>${s.separate.p}</p><ul class="plain">${s.separate.items.map((i) => `<li>${i}</li>`).join("")}</ul></article>
  </div>
</section>
${ctaBand(c, s.cta)}`;
}

function renderCases(c) {
  const s = c.casesPage;
  const cases = c.cases.length
    ? c.cases
        .map(
          (k) => `<article class="case">
  <div class="case-head">${badge(c, k)}<p class="tag">${esc(k.tag)}</p><p class="case-client">${k.url ? `<a href="${esc(k.url)}" rel="noopener">${esc(k.client)}</a>` : esc(k.client)}</p></div>
  <h2>${k.h}</h2>
  <dl class="case-body">
    <div><dt>${esc(s.labels.situation)}</dt><dd>${k.situation}</dd></div>
    <div><dt>${esc(s.labels.did)}</dt><dd>${k.did}</dd></div>
    <div><dt>${esc(s.labels.result)}</dt><dd>${k.result}</dd></div>
  </dl>
  ${k.quote ? `<figure class="case-quote"><blockquote><p>${k.quote}</p></blockquote><figcaption>${esc(k.by)}</figcaption></figure>` : ""}
</article>`
        )
        .join("")
    : `<p class="lead-sm">${esc(s.empty)}</p>`;
  return `${pageHero(s.eyebrow, s.h1, s.lead)}
<section class="section section-tight">
  <div class="wrap cases">${cases}</div>
</section>
${c.testimonials.length ? `<section class="section section-soft" aria-labelledby="quotes-h">
  <div class="wrap"><h2 id="quotes-h" class="h-section">${esc(s.testimonialsH)}</h2><div class="grid-2">${testimonialCards(c)}</div></div>
</section>` : ""}
${ctaBand(c)}`;
}

function renderAbout(c) {
  const a = c.about;
  return `${pageHero(a.eyebrow, a.h1, a.lead)}
<section class="section section-tight" aria-labelledby="team-h">
  <div class="wrap">
    <h2 id="team-h" class="h-section">${esc(a.teamH)}</h2>
    <div class="grid-2">${c.team.map((p) => personCard(c, p, { full: true })).join("")}</div>
  </div>
</section>
<section class="section section-soft" aria-labelledby="how-h">
  <div class="wrap">
    <h2 id="how-h" class="h-section">${esc(a.how.h)}</h2>
    <ul class="values">${a.how.items.map((i) => `<li><h3>${i.h}</h3><p>${i.p}</p></li>`).join("")}</ul>
  </div>
</section>
${localSection(c)}
${ctaBand(c)}`;
}

function renderContact(c) {
  const k = c.contact;
  const f = k.form;
  const d = k.direct;
  const req = `<span class="req">(${esc(f.required)})</span>`;
  const action = site.formAction || `mailto:${site.email}`;
  const enc = site.formAction ? "" : ' enctype="text/plain"';
  const privacy = fill(esc(f.privacy), { link: `<a href="${href(c, "privacy")}">${esc(f.privacyLink)}</a>` });
  return `${pageHero(k.eyebrow, k.h1, k.lead)}
<section class="section section-tight">
  <div class="wrap contact-grid">
    <form class="contact-form panel" action="${esc(action)}" method="post"${enc}
      data-endpoint="${esc(site.formAction)}" data-mailto="${esc(site.email)}" data-subject="${esc(f.mailSubject)}"
      data-msg-mail="${esc(f.mailNote)}" data-msg-sending="${esc(f.sending)}" data-msg-success="${esc(f.success)}" data-msg-error="${esc(f.error)}"
      data-l-name="${esc(f.name)}" data-l-email="${esc(f.email)}" data-l-phone="${esc(f.phone)}" data-l-business="${esc(f.business)}">
      <h2>${esc(f.h)}</h2>
      <div class="field"><label for="f-name">${esc(f.name)} ${req}</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>
      <div class="field"><label for="f-email">${esc(f.email)} ${req}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="field-row">
        <div class="field"><label for="f-phone">${esc(f.phone)}</label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
        <div class="field"><label for="f-business">${esc(f.business)}</label><input id="f-business" name="business" type="text" autocomplete="organization"></div>
      </div>
      <div class="field"><label for="f-message">${esc(f.message)} ${req}</label><textarea id="f-message" name="message" rows="6" required></textarea></div>
      <div class="hp" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="_gotcha" type="text" tabindex="-1" autocomplete="off"></div>
      <p class="small">${privacy}</p>
      <button class="button" type="submit">${esc(f.send)}</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
    <aside class="contact-direct" aria-labelledby="direct-h">
      <h2 id="direct-h">${esc(d.h)}</h2>
      <div class="panel panel-soft">
        <p><strong>${esc(d.book)}</strong></p>
        <p>${esc(d.bookP)}</p>
        ${calendlyLink(`${esc(d.book)} <span aria-hidden="true">→</span>`)}
      </div>
      <dl class="contact-list">
        <div><dt>${esc(d.phone)}</dt><dd><a href="tel:${esc(site.phoneHref)}">${esc(site.phoneDisplay)}</a></dd></div>
        <div><dt>${esc(d.whatsapp)}</dt><dd><a href="${esc(`${site.whatsapp}?text=${encodeURIComponent(c.ui.whatsappText)}`)}" rel="noopener">${esc(site.phoneDisplay)}</a></dd></div>
        <div><dt>${esc(d.email)}</dt><dd><a href="mailto:${esc(site.email)}">${fact(site.email)}</a></dd></div>
        <div><dt>${esc(d.address)}</dt><dd>${esc(site.legalName)}<br>${esc(site.street)}<br>${esc(site.postcode)} ${esc(site.city)}</dd></div>
        <div><dt>${esc(d.area)}</dt><dd>${esc(areas(c))}</dd></div>
      </dl>
    </aside>
  </div>
</section>`;
}

function renderPrivacy(c) {
  const p = c.privacy;
  const vars = {
    legalName: esc(site.legalName),
    address: esc(address),
    kvk: fact(site.kvk),
    email: `<a href="mailto:${esc(site.email)}">${fact(site.email)}</a>`,
    phone: `<a href="tel:${esc(site.phoneHref)}">${esc(site.phoneDisplay)}</a>`,
  };
  return `<section class="page-hero">
  <div class="wrap narrow">
    <h1>${p.h1}</h1>
    <p class="small">${esc(p.updated)}</p>
  </div>
</section>
<section class="section section-tight">
  <div class="wrap narrow prose">
    ${p.sections.map((s) => `<h2>${s.h}</h2>${s.p.map((t) => `<p>${fill(t, vars)}</p>`).join("")}`).join("\n    ")}
  </div>
</section>`;
}

function renderNotFound(c) {
  const n = c.notFound;
  return `<section class="page-hero not-found">
  <div class="wrap narrow">
    <p class="eyebrow">404</p>
    <h1>${n.h1}</h1>
    <p class="lead">${n.p}</p>
    <div class="actions"><a class="button" href="${href(c, "home")}">${esc(n.home)}</a><a class="button button-ghost" href="${href(c, "contact")}">${esc(n.contact)}</a></div>
  </div>
</section>`;
}

const pages = {
  home: renderHome,
  services: renderServices,
  pricing: renderPricing,
  cases: renderCases,
  about: renderAbout,
  contact: renderContact,
  privacy: renderPrivacy,
};

// ---------- checks ----------
function compareKeys(a, b, at = "") {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return warnings.push(`content: ${at} is a list in one language only`);
    if (a.length !== b.length) warnings.push(`content: ${at} has ${a.length} items in nl.mjs but ${b.length} in en.mjs`);
    a.forEach((v, i) => b[i] !== undefined && compareKeys(v, b[i], `${at}[${i}]`));
    return;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return warnings.push(`content: ${at} is missing or different in en.mjs`);
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(k in a)) warnings.push(`content: ${at}.${k} exists in en.mjs but not in nl.mjs`);
      else if (!(k in b)) warnings.push(`content: ${at}.${k} exists in nl.mjs but not in en.mjs`);
      else compareKeys(a[k], b[k], at ? `${at}.${k}` : k);
    }
  }
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

// ---------- build ----------
function write(rel, content) {
  const file = path.join(dist, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

compareKeys(nl, en);

let count = 0;
for (const c of langs) {
  for (const [key, render] of Object.entries(pages)) {
    write(path.join(href(c, key), "index.html"), layout(c, key, render(c)));
    count++;
  }
}
write("404.html", layout(nl, "notFound", renderNotFound(nl)));
write("en/404.html", layout(en, "notFound", renderNotFound(en)));

// sitemap with hreflang alternates
const urls = Object.keys(pages)
  .flatMap((key) =>
    langs.map(
      (c) => `  <url>
    <loc>${site.siteUrl + href(c, key)}</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="${site.siteUrl + href(nl, key)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${site.siteUrl + href(en, key)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.siteUrl + href(nl, key)}"/>
  </url>`
    )
  )
  .join("\n");
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap.xml\n`);
write(
  "_redirects",
  `# Old URLs from the previous site
/Pricing.html  /prijzen/  301
/pricing.html  /prijzen/  301
/index.html    /          301
`
);

// Dashes anywhere in the output or in the source text
const textFiles = [...walk(dist), ...walk(path.join(root, "content")), path.join(root, "src", "build.mjs"), path.join(root, "site.config.mjs")]
  .filter((f) => /\.(html|css|js|mjs|xml|txt|svg|md)$|_redirects$/.test(f));
for (const f of textFiles) {
  const lines = fs.readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (DASH.test(line)) warnings.push(`dash: en or em dash in ${path.relative(root, f)}:${i + 1} - use a plain hyphen`);
  });
}

// Before launch
const todo = [];
for (const [k, v] of Object.entries(site)) if (isTodo(v)) todo.push(`site.config.mjs: ${k} is still "${v}"`);
if (!site.linkedin.company) todo.push("site.config.mjs: linkedin.company is empty (add once the LinkedIn company page exists)");
for (const c of langs) {
  c.cases.forEach((k, i) => k.placeholder && todo.push(`content/${c.lang}.mjs: cases[${i}] is a placeholder`));
  c.testimonials.forEach((t, i) => t.placeholder && todo.push(`content/${c.lang}.mjs: testimonials[${i}] is a placeholder`));
  c.team.forEach((p) => !p.photo && todo.push(`content/${c.lang}.mjs: no photo for ${p.name}`));
}
if (!site.formAction) todo.push("site.config.mjs: formAction is empty, so the contact form opens a pre-filled email");

console.log(`\nBuilt ${count} pages + 404, sitemap.xml, robots.txt and _redirects into dist/`);
if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((w) => console.log("  ! " + w));
}
if (todo.length) {
  console.log(`\nBefore launch (${todo.length}):`);
  todo.forEach((t) => console.log("  - " + t));
}
console.log("");
