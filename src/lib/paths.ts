/**
 * Prefix a public asset or route with the configured Astro base path.
 * Works both at the root (`/`) and on GitHub Pages project sites (`/repo/`).
 */
export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function absoluteUrl(pathname: string, site: URL | undefined) {
  return new URL(pathname, site ?? 'https://simsimmotion.github.io').toString();
}
