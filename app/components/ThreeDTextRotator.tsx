// src/app/components/ThreeDTextRotator.tsx
'use client'

import { useState, useEffect } from 'react'

interface ThreeDTextRotatorProps {
  words: string[]
  className?: string
}

export default function ThreeDTextRotator({ 
  words, 
  className = '' 
}: ThreeDTextRotatorProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [words.length])

  return (
    <span className={className}>
      {words[index]}
    </span>
  )
}