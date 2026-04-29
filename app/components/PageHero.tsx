// src/app/components/PageHero.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb?: string
  imageUrl?: string
}

export default function PageHero({ 
  title, 
  subtitle, 
  breadcrumb,
  imageUrl 
}: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {imageUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          // Fallback gradient if no image provided
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark-300 to-dark-300" />
        )}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-dark-300/80 to-dark-300/90 z-10" />
        
        {/* Bottom fade gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {breadcrumb && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-white/60 text-sm">{breadcrumb}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}