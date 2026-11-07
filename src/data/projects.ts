export type Still = {
  src: string;
  alt: string;
  caption: string;
  portrait?: boolean;
};

export type Credit = {
  role: string;
  name: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  client?: string;
  year?: string;
  tagline?: string;
  summary?: string;
  description?: string[];
  video: string;
  poster: string;
  heroPosition?: string;
  stills: Still[];
  credits: Credit[];
};

/**
 * Project content.
 *
 * Every entry appears on the home slideshow, the works index and its own
 * detail page. Optional fields are only rendered when they contain content.
 */
export const projects: Project[] = [
  {
    slug: 'fiba-vol02',
    number: '01',
    title: 'FIBA Vol. 2',
    category: 'Basketball Edit',
    description: [
      'A basketball edit for a FIBA event at Basketball World in Tunisia. Shot by my videographer friend, edited by me.',
    ],
    video: '/media/videos/fiba-vol-02.mp4',
    poster: '/media/posters/fiba-vol-02.jpg',
    stills: [
      {
        src: '/media/posters/fiba-vol-02.jpg',
        alt: 'Basketball players on court beneath a hoop with a glowing purple AI figure.',
        caption: 'Still — FIBA Vol. 2',
      },
    ],
    credits: [],
  },
  {
    slug: 'the-pantheon',
    number: '02',
    title: 'The Pantheon',
    category: 'Real Estate',
    video: '/media/videos/the-pantheon.mp4',
    poster: '/media/posters/the-pantheon.jpg',
    stills: [
      {
        src: '/media/posters/the-pantheon.jpg',
        alt: 'Glass facade of The Pantheon building with a lone figure at the entrance.',
        caption: 'Still — The Pantheon',
        portrait: true,
      },
    ],
    credits: [],
  },
  {
    slug: 'the-one',
    number: '03',
    title: 'The One',
    category: 'Real Estate',
    video: '/media/videos/the-one.mp4',
    poster: '/media/posters/the-one.jpg',
    stills: [
      {
        src: '/media/posters/the-one.jpg',
        alt: 'Presenter standing in front of a new apartment building at dusk.',
        caption: 'Still — The One',
        portrait: true,
      },
    ],
    credits: [],
  },
  {
    slug: 'axim',
    number: '04',
    title: 'Axim',
    category: 'Real Estate',
    video: '/media/videos/axim.mp4',
    poster: '/media/posters/axim.jpg',
    stills: [
      {
        src: '/media/posters/axim.jpg',
        alt: 'Aerial view of the Axim development lit at dusk.',
        caption: 'Still — Axim',
        portrait: true,
      },
    ],
    credits: [],
  },
  {
    slug: 'fiba-vol-01',
    number: '05',
    title: 'FIBA Vol. 1',
    category: 'Basketball Edit',
    video: '/media/videos/fiba-vol-01.mp4',
    poster: '/media/posters/fiba-vol-01.jpg',
    stills: [
      {
        src: '/media/posters/fiba-vol-01.jpg',
        alt: 'Close-up of basketball players’ feet on a court in black and white.',
        caption: 'Still — FIBA Vol. 1',
      },
    ],
    credits: [],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
