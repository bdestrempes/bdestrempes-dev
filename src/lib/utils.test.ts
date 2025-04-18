import { describe, it, expect } from 'vitest'
import { readingTime } from './utils'

describe('readingTime', () => {
  it('should calculate reading time correctly for simple HTML', () => {
    const html = '<p>This is a sample text with several words.</p>'
    expect(readingTime(html)).toBe('1 min read')
  })

  it('should handle longer words correctly', () => {
    // This test case includes words longer than 5 characters to specifically test the problematic logic
    const html = '<p>This text includes extraordinarily long words to test calculation.</p>'
    // The original faulty logic would throw an error here.
    // We expect it to calculate based on word count now.
    expect(readingTime(html)).toBe('1 min read')
  })

  it('should return "1 min read" for very short text', () => {
    const html = '<p>Short.</p>'
    expect(readingTime(html)).toBe('1 min read')
  })

  it('should handle empty input', () => {
    const html = ''
    expect(readingTime(html)).toBe('1 min read')
  })

  it('should handle HTML with multiple tags', () => {
    const html =
      '<h1>Title</h1><p>Paragraph with <strong>bold</strong> text.</p><ul><li>Item 1</li><li>Item 2</li></ul>'
    // "Title", "Paragraph", "with", "bold", "text", "Item", "1", "Item", "2" -> 9 words
    expect(readingTime(html)).toBe('1 min read')
  })

  it('should calculate longer reading times', () => {
    const longWord = 'word '
    const html = `<p>${longWord.repeat(400)}</p>` // 400 words
    expect(readingTime(html)).toBe('2 min read')
  })

  it('should handle null input gracefully', () => {
    expect(readingTime(null as any)).toBe('1 min read')
  })

  it('should handle undefined input gracefully', () => {
    expect(readingTime(undefined as any)).toBe('1 min read')
  })
})
