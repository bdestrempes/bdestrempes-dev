import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { transformerMetaHighlight, transformerNotationDiff } from '@shikijs/transformers'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import rehypeCallouts from 'rehype-callouts'
import sectionize from '@hbsnow/rehype-sectionize'

import icon from 'astro-icon'

import sentry from '@sentry/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://bdestrempes.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    react(),
    icon(),
    sentry({
      dsn: 'https://b0aa3f8740a0943b12c19d5a9b900420@o406760.ingest.us.sentry.io/4508781164560384',
      sourceMapsUploadOptions: {
        project: 'bdestrempes-dev',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
      replaysSessionSampleRate: 1,
      replaysOnErrorSampleRate: 1.0,
      tracesSampleRate: 1.0,
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeCallouts,
      rehypeHeadingIds,
      rehypeKatex,
      sectionize,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light-high-contrast',
            dark: 'catppuccin-mocha',
          },
          defaultLang: {
            block: 'typescript',
            inline: 'typescript',
          },
          transformers: [
            transformerNotationDiff(),
            transformerMetaHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 1000,
            }),
          ],
        },
      ],
    ],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji, remarkGfm],
  },
  server: {
    port: 1234,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
})
