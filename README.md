# Kasual Labz website

A lightweight, static landing page for **Kasual Labz**, the development team under NF Projects. The site contains only approved public content and does not reference separate or unannounced projects.

## Project layout

The deployable static website is in `site/`:

- `index.html` contains all content, semantic structure, and SEO/social metadata.
- `styles.css` contains the responsive visual system and reduced-motion behavior.
- `script.js` contains only the mobile-navigation behavior and footer year update.
- `assets/` contains the supplied Kasual Labz artwork, with correctly named WebP/PNG files.
- `favicon.png`, `robots.txt`, `sitemap.xml`, and `manus-routes.json` support browser identity and discoverability.

`plan.md` records the design and implementation approach. `TODO.md` tracks delivery outcomes. `app.config.ts` stores the durable project-logo URL required by the managed workspace.

## Local preview

No package installation is required. From the repository root, run:

```bash
python3 -m http.server 3000 --directory site
```

Then open `http://localhost:3000`. Stop the server with `Ctrl+C`.

## Editing the site

Update text in `site/index.html`; keep public-facing copy in HTML rather than in images. Update layout and colors in `site/styles.css`. Keep `prefers-reduced-motion` support when adding motion. Assets supplied for Kasual Labz are stored in `site/assets/`; preserve their proportions, transparency, and visual treatment.

After an update, check the page at desktop and mobile widths, verify `mailto:contact@kasuallabz.xyz`, verify the X link, and ensure no reference to a separate project has been added. If the production origin changes, update the canonical, Open Graph, Twitter, sitemap, and robots URLs together.

## Cloudflare Pages deployment

The intended production setup uses Cloudflare Pages on the existing free Cloudflare account. The Pages project should publish the `site` directory without a build step. The minimum direct-upload command is:

```bash
npx wrangler pages deploy site --project-name kasuallabz
```

For a Git-connected Pages project, use `NightFantomProjects/KLabzTeam-website` as the source repository, production branch `main`, build command `exit 0`, and build output directory `site`.

Before attaching the custom domain, record the zone’s current DNS records. Do not alter Cloudflare Email Routing or any MX, SPF, DKIM, DMARC, email-verification, or unrelated records. Attach `kasuallabz.xyz` to the Pages project after a successful preview deployment. Configure `www.kasuallabz.xyz` to redirect to `https://kasuallabz.xyz` with a Pages domain redirect or a narrowly scoped redirect rule; do not replace an existing website DNS record without reviewing the exact change.

## Rollback

Use Cloudflare Pages’ deployment history to roll back to a prior successful deployment. Source changes are kept in Git; revert the relevant commit with a normal new commit and redeploy. Do not force-push or delete deployment history, DNS records, or the Pages project as a rollback mechanism.
