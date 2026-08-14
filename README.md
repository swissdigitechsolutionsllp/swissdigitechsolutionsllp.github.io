# Swiss DigiTech Solutions LLP — Website

A 4-page static site (Home, About, Services, Contact) built in plain HTML/CSS with one shared stylesheet. No build step, no framework — ready to push straight to GitHub Pages.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/swissdigitechsolutionsllp/swissdigitechsolutionsllp.github.io.git
git push -u origin main
```

Because the repo is named `swissdigitechsolutionsllp.github.io`, GitHub Pages will serve it automatically at `https://swissdigitechsolutionsllp.github.io/` — no extra setup needed in Settings → Pages.

## Custom domain (swissdigitech.com)

A `CNAME` file containing `swissdigitech.com` is already included. To finish connecting the domain:
1. At your domain registrar, point `swissdigitech.com` to GitHub Pages (an `A` record to GitHub's IPs, or a `CNAME` record to `swissdigitechsolutionsllp.github.io` if using a `www` subdomain).
2. In the repo's **Settings → Pages**, confirm the custom domain shows `swissdigitech.com` and enable **Enforce HTTPS** once the certificate is issued.

GitHub's current IPs and full instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Three things to finish before launch

1. **Contact form endpoint** — `contact.html` posts to a placeholder Formspree URL (`https://formspree.io/f/your-form-id`). GitHub Pages can't run server code, so create a free form at [formspree.io](https://formspree.io) (or any form backend you prefer) and swap in your real endpoint, or replace the form with a `mailto:` link.
2. **Search Console / Bing verification tag** — none was supplied for `swissdigitech.com`, so no verification meta tag is included. Add yours inside `<head>` on each page (or a single `<meta name="google-site-verification" ...>` line) once you generate it from Search Console.
3. **Google Analytics / other tracking** — not included; add your snippet before `</head>` on each page if you use one.

## File structure

```
index.html          Home
about.html           About Us
services.html        Services
contact.html         Contact Us (form + FAQ)
css/style.css        Shared stylesheet
js/site.js           Mobile nav + footer year (no dependencies)
assets/              Logo + generated favicon/app-icon sizes
favicon.ico          Root favicon
site.webmanifest      PWA manifest
robots.txt, sitemap.xml, CNAME   SEO + custom domain files
```

## Design notes

Palette and type are pulled from your existing logo mark (the violet `#5A00B5` cross) rather than a generic template — see the coordinate/cross motif in the homepage hero, which references your actual Mohali office coordinates. Update copy, coordinates, or the palette in `css/style.css` (`:root` variables) any time.
