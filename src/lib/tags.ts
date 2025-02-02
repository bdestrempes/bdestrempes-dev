export const tagColors = {
  architecture: 'bg-sky-100 dark:bg-sky-900/30 text-sky-900 dark:text-sky-100',
  'best-practices':
    'bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-100',
  devops:
    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100',
  'feature-flags':
    'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100',
  typescript:
    'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100',
  react: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-100',
  testing: 'bg-rose-100 dark:bg-rose-900/30 text-rose-900 dark:text-rose-100',
  performance:
    'bg-lime-100 dark:bg-lime-900/30 text-lime-900 dark:text-lime-100',

  // Development Categories
  frontend: 'bg-pink-100 dark:bg-pink-900/30 text-pink-900 dark:text-pink-100',
  backend:
    'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100',
  fullstack:
    'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100',
  mobile:
    'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100',

  // Tools & Technologies
  git: 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100',
  ai: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-900 dark:text-fuchsia-100',
  cursor: 'bg-teal-100 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100',
  terminal: 'bg-zinc-100 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-100',
  obsidian:
    'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100',
  vscode: 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100',
  docker: 'bg-sky-100 dark:bg-sky-900/30 text-sky-900 dark:text-sky-100',
  kubernetes:
    'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100',

  // Development Practices
  monitoring:
    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100',
  workflow:
    'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100',
  documentation:
    'bg-slate-100 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100',
  accessibility:
    'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100',
  security: 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100',

  // Frameworks & Libraries
  nextjs: 'bg-zinc-100 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-100',
  astro:
    'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100',
  tailwind: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-100',
  nodejs:
    'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100',
  python:
    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100',

  // Data & State Management
  graphql: 'bg-pink-100 dark:bg-pink-900/30 text-pink-900 dark:text-pink-100',
  redux:
    'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100',
  database: 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100',
  api: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100',

  // Development Concepts
  patterns:
    'bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-100',
  algorithms:
    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100',
  optimization:
    'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100',
  debugging: 'bg-rose-100 dark:bg-rose-900/30 text-rose-900 dark:text-rose-100',

  // Web Standards & Technologies
  html: 'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100',
  css: 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100',
  javascript:
    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100',
  webassembly:
    'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100',
} as const

export type TagName = keyof typeof tagColors

export function getTagColor(tag: string) {
  const defaultColor =
    'bg-gray-100 dark:bg-gray-900/30 text-gray-900 dark:text-gray-100'
  return tagColors[tag as TagName] ?? defaultColor
}
