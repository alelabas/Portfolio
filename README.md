# Alejandro Labastie — Portfolio

Personal portfolio rebuilt with **Next.js (App Router)** for SEO, styled with **Tailwind CSS v4**, animated with **Framer Motion**, and scrolled with **Lenis** for that buttery-smooth feel.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router, file-based metadata (sitemap, robots, Open Graph), `next/image`, `next/font`
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first config via `@theme` in `app/globals.css`
- [Framer Motion](https://motion.dev/) — reveal animations, parallax, mobile menu
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling + anchor navigation

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/            # layout (SEO metadata, fonts, JSON-LD), page, globals.css, sitemap, robots
components/     # Hero, About, Experience, Projects, Skills, Footer, Navbar, Marquee, Reveal, SmoothScroll
data/content.ts # all site content: profile, experience, projects, skills
public/         # images (projects/, carousel/), resume PDF
```

## Updating content

Everything lives in [data/content.ts](data/content.ts) — projects, experience, skills and contact links.

**Missing project images:** drop a screenshot into `public/projects/` (e.g. `renauticos.png`) and set the `image` field on the project entry. Projects without an image render a styled placeholder.

**Resume:** replace `public/Alejandro-Labastie-Resume.pdf`.

**Site URL:** set `NEXT_PUBLIC_SITE_URL` (used for Open Graph, sitemap and robots) or edit the default in `data/content.ts`.

## Deploying

Built for [Vercel](https://vercel.com/) — push to `main` and import the repo. Vercel Analytics is already wired up.

> Note: the old `gh-pages` deployment (Vite SPA) was retired with the rewrite — Next.js needs Vercel (or any Node host) to get the SSR/SEO benefits.
