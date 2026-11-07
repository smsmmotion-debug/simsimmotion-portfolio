/**
 * Site-wide content and identity.
 *
 * The wordmark is split into two halves so it can sit at opposite edges of
 * the screen, as on the reference layout. `first` sits top-left, `second`
 * top-right, and together they read as the full brand name.
 */
export const siteConfig = {
  brand: {
    first: 'SimSim',
    second: 'Motion',
    full: 'SimSimMotion',
  },

  role: 'Video Editor & AI Creator',
  title: 'SimSimMotion | Video Editor & AI Creator',
  description: 'SimSimMotion | Video Editor & AI Creator',
  tagline: 'Edit. Create. Repeat.',

  email: 'SmSmMotion@gmail.com',
  location: '',
  availability: '',
  topLine: 'Video editor & AI creator. I turn raw footage into content that moves.',

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/simsim_motion/' },
  ],

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Works', href: '/works/' },
    { label: 'Info', href: '/info/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
