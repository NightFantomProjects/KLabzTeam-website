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

## GitHub Pages deployment

`.github/workflows/deploy-pages.yml` publishes the committed `site/` directory whenever `main` changes. It uses GitHub’s official Pages actions and uploads only the static website, with no build-time secrets or credentials. GitHub Pages must be enabled once for the repository with the **GitHub Actions** publishing source; each later push to `main` deploys automatically.

The workflow makes the default GitHub Pages URL available first. Verify that URL after the workflow completes before adding a custom domain. Do not change the repository’s visibility or add credentials to enable the deployment.

## Cloudflare DNS custom domain

Cloudflare is used only as the authoritative DNS provider. After the default GitHub Pages deployment is healthy, configure `kasuallabz.xyz` as the custom domain in the repository’s GitHub Pages settings, then add only GitHub-recommended DNS records in Cloudflare. Preserve Cloudflare Email Routing and every MX, SPF, DKIM, DMARC, email-verification, and unrelated DNS record.

Add the `www` DNS hostname only after the apex domain is active, then verify that GitHub Pages redirects it to `https://kasuallabz.xyz`. If GitHub Pages does not canonicalize `www` as required, leave that hostname pending rather than adding a Cloudflare redirect feature. Do not create a Cloudflare Pages project, Worker, redirect rule, or any other Cloudflare hosting resource.

## Rollback

Use GitHub Actions and GitHub Pages deployment history to identify the prior successful release. Source changes are kept in Git; revert the relevant commit with a normal new commit and push it to `main` to redeploy. Do not force-push or delete deployment history or DNS records as a rollback mechanism.
