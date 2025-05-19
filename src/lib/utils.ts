import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as Sentry from '@sentry/astro'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function readingTime(html: string) {
  try {
    // Remove HTML tags and normalize whitespace
    const textOnly = (html || '').replace(/<[^>]+>/g, '').trim()

    // Split into words and filter out empty strings
    const words = textOnly.split(/\s+/).filter(Boolean)

    const wordCount = words.length

    const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))
    return `${readingTimeMinutes} min read`
  } catch (error) {
    Sentry.captureException(error)
    return '10 min read' // Fallback
  }
}
