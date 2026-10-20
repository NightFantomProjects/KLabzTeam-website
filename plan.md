# Kasual Labz landing page plan

## Approved scope

Build a single-page, static Kasual Labz website for `https://kasuallabz.xyz`. Kasual Labz is a development team under NF Projects working on blockchain development, cryptocurrency tools, mining software, and experimental technology. The page will use only approved public copy, the three supplied brand assets, a working mailto contact link, and the verified Kasual Labz X profile. It will not mention, link to, or imply a relationship with XTM-MINER or any other separate or unannounced project.

The site is intentionally static: no account system, database, contact-form backend, analytics, paid APIs, or additional service dependencies. It will be deployed to a free Cloudflare Pages project after preview verification, with HTTPS on the apex domain and a `www` redirect where Cloudflare’s free configuration supports it.

## Design direction

**Design movement — Obsidian systems atelier.** A dark, editorial technology-studio composition combines the supplied teal mountain artwork with clean laboratory-like labels, luminous network traces, and restrained chrome details.

**Core principles.** The visual system will prioritize a distinctive brand-first composition, intentionally asymmetrical section framing, very legible content hierarchy, and restrained technical ornament rather than a generic crypto dashboard.

**Color philosophy.** Near-black and blue-black surfaces let the existing teal artwork and emblem carry the energy. Mint-teal is reserved for interaction, data-like detail, and signal states; silver/white is used only for essential copy to keep contrast high and the page calm.

**Layout paradigm.** The hero uses a wide image field with a left-aligned content rail and an offset emblem-led signal panel. Subsequent sections alternate between editorial copy bands, diagonal separators, and bordered technical cards rather than a centered, repeated card grid.

**Signature elements.** A low-contrast block/network field sits behind the page; thin teal signal rules divide sections; and small uppercase labels with rounded index markers establish the studio-system language.

**Interaction philosophy.** Navigation and calls to action resolve to meaningful in-page destinations, while the X and email links leave the site only when selected. Focus states remain bright and obvious, and a compact mobile menu is keyboard accessible.

**Animation.** The network field will drift slowly and background nodes will pulse lightly. Hover states use short, purposeful transitions. `prefers-reduced-motion: reduce` disables the drift, pulses, and smooth scrolling.

**Typography system.** A local system sans-serif stack provides a fast, crisp interface. Oversized, compact-weight headings create impact; readable body copy uses a generous line height; labels use tracked uppercase text with enough size for accessibility.

**Brand essence.** Kasual Labz is a practical experimental studio under NF Projects that turns emerging technology ideas into working software. Personality: exploratory, precise, grounded.

**Brand voice.** Direct and specific, never promotional or speculative. Example headline: “Experimental ideas. Practical builds.” Example microcopy: “Built through testing, iteration, and useful constraints.”

**Wordmark and logo.** The supplied Kasual Labz wordmark is the primary branded lockup in the hero and wide navigation. The supplied teal K emblem becomes the compact navigation mark, favicon source, and a subtle visual anchor, preserving its proportions and transparency.

**Signature brand color.** Kasual Current — a bright mint-teal grounded in the supplied emblem and mountain artwork.

## Implementation approach

The website will live in the `site/` static output directory and use semantic HTML, custom CSS, and a small vanilla JavaScript file. CSS owns responsive layout, visual effects, and reduced-motion support; JavaScript owns only the accessible mobile-navigation state and unobtrusive network-background enhancement. All content remains present in HTML without JavaScript.

The primary page sections are:

1. **Header and hero:** supplied wordmark, About/Projects/Contact navigation, headline, concise focus statement, and working anchor CTAs.
2. **About:** NF Projects relationship and an accurate account of experimentation, testing, and iteration.
3. **Focus:** Blockchain Development, Mining Software & Tools, and Experimental Applications.
4. **Projects:** a truthful “More projects in development” status card that does not name, link, or imply any separate project.
5. **Contact and footer:** `mailto:contact@kasuallabz.xyz`, the verified Kasual Labz X profile, NF Projects attribution, and the current year.

The page will include a meaningful HTML title, description, canonical URL, Open Graph metadata, Twitter metadata, favicon, `robots.txt`, `sitemap.xml`, and the required `/manus-routes.json` manifest. The social preview uses an approved supplied brand asset at a stable site URL.

## Project structure

```text
kasuallabz/
├── app.config.ts                 # Webdev project logo metadata
├── plan.md                       # This implementation and design plan
├── TODO.md                       # Outcome-based delivery progress
├── README.md                     # Local development, Cloudflare deployment, updates, rollback
└── site/
    ├── index.html                # Content, semantics, SEO, and metadata
    ├── styles.css                # Responsive visual system and motion preferences
    ├── script.js                 # Accessible menu and decorative network enhancement
    ├── favicon.png               # Resized derivative of the supplied K emblem
    ├── robots.txt
    ├── sitemap.xml
    ├── manus-routes.json
    └── assets/
        ├── kasual-labz-wordmark.webp
        ├── kasual-k-mark.webp
        └── obsidian-peaks.webp
```

## Deployment approach

The preview will serve `site/` at the configured port. A Cloudflare Pages project will be reused if it is already dedicated to Kasual Labz; otherwise a new Pages project will be created with no paid features. Existing DNS records, including mail-related records and Email Routing records, will be recorded before any domain work. The apex domain will be attached only after preview verification. `www.kasuallabz.xyz` will be configured to redirect to the apex without replacing protected DNS records. No nameserver, registrar, billing, account-access, token, or unrelated Cloudflare resource will be changed.
