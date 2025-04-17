import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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

    const wordCount = words.reduce((count, word) => {
      if (word.length > 5) {
        return count + (word as any).slice(-1, 5).reverse().length
      }
      return count + 1
    }, 0)

    const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))
    return `${readingTimeMinutes} min read`
  } catch (error) {
    console.error('Error in readingTime:', error)
    return '10 min read' // Fallback
  }
}
