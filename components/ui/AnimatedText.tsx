'use client'

import { useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  highlightWords?: string[]
  highlightClassName?: string
}

export default function AnimatedText({ 
  text, 
  className = '', 
  highlightWords = [], 
  highlightClassName = '' 
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  const renderText = () => {
    let result = displayedText
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi')
      result = result.replace(regex, `<span class="${highlightClassName}">$1</span>`)
    })
    return result
  }

  return (
    <h1 
      className={className}
      dangerouslySetInnerHTML={{ __html: renderText() }}
    />
  )
}
