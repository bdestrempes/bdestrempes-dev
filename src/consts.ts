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
  DESCRIPTION: "Benjamin Destrempes' technical blog.",
  EMAIL: 'b.destrempes@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 8,
  SITEURL: 'https://bdestrempes.dev',
}

export const NAV_LINKS: Link[] = [
  { href: '/articles', label: 'articles' },
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
