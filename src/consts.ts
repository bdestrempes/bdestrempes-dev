export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Benjamin Destrempes',
  DESCRIPTION: 'Benjamin Destrempes is a software engineer and entrepreneur.',
  EMAIL: 'b.destrempes@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/bdestrempes', label: 'GitHub' },
  { href: 'https://twitter.com/bdestrempes', label: 'Twitter' },
  { href: 'b.destrempes@gmail.com', label: 'Email' },
  {
    href: 'https://www.linkedin.com/in/benjamin-destrempes/',
    label: 'LinkedIn',
  },
  { href: '/rss.xml', label: 'RSS' },
]
