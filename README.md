# SimSimMotion — portfolio

A fast, editorial portfolio for video editing and AI visuals. Built with
[Astro](https://astro.build), plain CSS and a small amount of vanilla
JavaScript. No framework runtime, no paid services, no external font CDN.

The site uses fullscreen media, a split wordmark, tiny uppercase metadata and
restrained motion. It deploys for free to GitHub Pages.

## Stack

- Astro 7 (static output, zero client framework)
- Self-hosted Fontsource fonts: Archivo Variable, Bodoni Moda, Caveat
- Hand-written CSS with custom properties
- Vanilla JS for the home slideshow, video player, cursor and reveals
- GitHub Actions + GitHub Pages for free hosting

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

On Windows PowerShell, use `npm.cmd` if your execution policy blocks `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  config.ts              Brand, email, social links, navigation
  data/projects.ts       Project copy, media paths and stills
  layouts/BaseLayout.astro
  components/            Header, navigation, footer, custom cursor
  pages/
    index.astro          Fullscreen auto-advancing home slideshow
    works/index.astro    Project index with hover video preview
    works/[slug].astro   Project detail template
    info.astro
    contact.astro
    404.astro
  styles/global.css      Design tokens and shared styles
public/
  media/videos/          Project MP4s
  media/posters/         Poster frames and project stills
  favicon.svg
  og.jpg                 1200 × 630 social-sharing image
```

## Edit content

### 1. Identity

Open `src/config.ts` to update the brand, role, email, social links and
navigation. The wordmark is deliberately split into two halves: `first` sits
top-left and in the footer's left edge; `second` sits top-right and in the
footer's right edge. Together they read as the full brand name.

The email is used as a `mailto:` link throughout the site. Instagram opens in
a new tab.

### 2. Projects

All projects live in `src/data/projects.ts`. The current order is:

1. FIBA Vol. 2 — Basketball Edit
2. The Pantheon — Real Estate
3. The One — Real Estate
4. Axim — Real Estate
5. FIBA Vol. 1 — Basketball Edit

Every entry appears on the home slideshow, the works index and its own page at
`/works/<slug>/`. Optional fields are only rendered when they contain content:

```ts
{
  slug: 'project-name',
  number: '01',
  title: 'Project Name',
  category: 'Basketball Edit',
  client: 'Optional',              // hidden when omitted
  year: '2026',                    // hidden when omitted
  tagline: 'Optional',             // hidden when omitted
  summary: 'Optional lead.',       // hidden when omitted
  description: ['Optional body copy.'],
  video: '/media/videos/project-name.mp4',
  poster: '/media/posters/project-name.jpg',
  heroPosition: 'center 35%',      // optional object-position
  stills: [
    {
      src: '/media/posters/project-name.jpg',
      alt: 'Describe the image for screen readers.',
      caption: 'Still — Project Name',
      portrait: false,              // optional, for 4:5 stills
    },
  ],
  credits: [],                      // the credits section hides when empty
}
```

### 3. Media specs

Videos are the heaviest part of the site. Keep them compressed and use
`faststart` so playback can begin before the file finishes downloading.

| Asset | Recommended |
| --- | --- |
| Video | MP4 / H.264, 1080 × 1920 or 1920 × 1080, 25–30 fps, no audio, `faststart` |
| Poster | JPG, same aspect ratio and framing as the video |
| Social image | `public/og.jpg`, 1200 × 630 |

Put files in `public/media/...` and reference them with a leading slash. The
build does not optimise video files for you.

Example FFmpeg compression for a vertical project:

```bash
ffmpeg -i source.mp4 -map 0:v:0 -an \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,fps=30,format=yuv420p" \
  -c:v libx264 -preset medium -crf 27 -maxrate 3M -bufsize 6M \
  -movflags +faststart public/media/videos/project-name.mp4
```

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main`.

1. Create a new **empty** repository on GitHub.
   - For a project site, any name works, for example `portfolio`. The site will
     live at `https://<username>.github.io/portfolio/`.
   - For a user site, name the repository `<username>.github.io`. The site will
     live at `https://<username>.github.io/`.
2. Push this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. The workflow runs automatically. The first deploy can take a minute or two.

The workflow detects the repository name and sets Astro's `BASE_PATH` for you,
so internal links and media keep working under `/portfolio/`. It also sets
`SITE_URL` for canonical links, Open Graph tags and the sitemap.

### Optional repository variables

If you use a custom domain or a different base path, add these under
**Settings → Secrets and variables → Actions → Variables**:

| Variable | Example | Purpose |
| --- | --- | --- |
| `SITE_URL` | `https://studio.example.com` | Canonical URL, OG tags, sitemap |
| `BASE_PATH` | `/` or `/portfolio` | Astro base path |

If a variable is missing, the workflow falls back to the GitHub Pages defaults.

For a custom domain, also add the domain under **Settings → Pages → Custom
domain** and create the DNS records GitHub asks for.

### Test a project-site build locally

PowerShell:

```powershell
$env:BASE_PATH = '/portfolio'
$env:SITE_URL = 'https://username.github.io'
npm.cmd run build
npm.cmd run preview
```

macOS / Linux:

```bash
BASE_PATH=/portfolio SITE_URL=https://username.github.io npm run build
npm run preview
```

Open the preview URL and check:

- the wordmark and every nav link
- each project page, its video and hover preview
- posters, stills, favicon and `og.jpg`
- the 404 page
- the sitemap at `/portfolio/sitemap-index.xml`

## Media credits

- Fonts: [Archivo](https://fonts.google.com/specimen/Archivo),
  [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) and
  [Caveat](https://fonts.google.com/specimen/Caveat), served locally through
  [Fontsource](https://fontsource.org). All are licensed under the SIL Open Font
  License.
- Project video and stills: © SimSimMotion.
- Layout and code are original; the site is not affiliated with any reference
  portfolio or studio.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro -- --help` | Show Astro CLI help |
