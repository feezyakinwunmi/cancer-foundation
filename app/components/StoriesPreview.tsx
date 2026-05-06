// src/app/components/StoriesPreview.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ArrowRight, Sparkles, Quote, Star } from 'lucide-react'

const stories = [
  {
    name: 'David',
    age: 6,
    location: 'Abuja',
    condition: 'Leukaemia',
    outcome: 'In remission, back in school',
    dream: 'Wants to become a doctor',
    quote: 'David loved football and filled his home with laughter. Now he\'s back on the pitch.',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-400',
    image: '/dav.jpg'
  },
  {
    name: 'Amina',
    age: 8,
    location: 'Kano',
    condition: 'Bone Cancer',
    outcome: 'Treatment completed, singing again',
    dream: 'Wants to become a singer',
    quote: 'Her songs fill her home again, stronger, sweeter, and more hopeful than before.',
    color: 'from-pink-500/20 to-pink-600/10',
    iconColor: 'text-pink-400',
    image: '/amir.jpg'
  },
  {
    name: 'Chinedu',
    age: 10,
    location: 'Enugu',
    condition: 'Brain Tumour',
    outcome: 'Back in school, excelling in science',
    dream: 'Wants to become an engineer',
    quote: 'Endlessly curious, already dreaming bigger than ever.',
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
    image: '/chi.jpg'
  }
]

export default function StoriesPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }))
  }

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-5 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-pink-400 text-sm font-semibold">Real Stories</span>
            <Sparkles className="w-3 h-3 text-pink-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real children.{' '}
            <span className="relative inline-block">
              <span className="text-pink-400">Real families.</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 100 4" fill="none">
                <path d="M0 2L100 2" stroke="url(#storiesGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="storiesGradient" x1="0" y1="0" x2="100" y2="0">
                    <stop stopColor="#ec4899" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="#ec4899"/>
                    <stop offset="1" stopColor="#ec4899" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}Real change.
          </h2>
          <p className="text-black/50 max-w-2xl mx-auto">
            Every child we help has a name, a story, and a future. These are their journeys.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStory(index)}
              onMouseLeave={() => setActiveStory(null)}
            >
              {/* Image Area - Full image with fade overlay */}
              <div className="relative h-80 overflow-hidden">
                {/* Background Image - NOW UNCOMMENTED */}
                <div className="absolute inset-0">
                  {!imageErrors[story.name] ? (
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(story.name)}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${story.color} flex items-center justify-center`}>
                      <div className="w-32 h-32 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center border-2 border-black/20">
                        <span className="text-5xl font-bold text-black/60">{story.name[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Faded Overlay - Dark at bottom, transparent at top */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/70 to-transparent" />
                
                {/* Additional gradient for smooth fade effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-300/50" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-20 z-10">
                <div className="bg-dark-200/90 backdrop-blur-sm rounded-xl p-5 border border-black/10 shadow-xl">
                  {/* Quote Icon */}
                  <Quote className={`w-8 h-8 ${story.iconColor} opacity-50 mb-3`} />
                  
                  <p className="text-black/70 text-sm italic mb-4">
                    "{story.quote}"
                  </p>
                  
                  <h3 className="text-black font-bold text-xl mb-1">
                    {story.name}, {story.age}
                  </h3>
                  <p className="text-black/40 text-sm mb-2">{story.location} • {story.condition}</p>
                  
                  {/* Outcome Badge */}
                  <div className="inline-flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full mb-3">
                    <Star className="w-3 h-3 text-green-400" />
                    <p className="text-green-400 text-xs font-semibold">{story.outcome}</p>
                  </div>
                  
                  <p className="text-black/50 text-xs">{story.dream}</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-primary-400 transition-all duration-300 pointer-events-none ${
                activeStory === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} />
            </div>
          ))}
        </div>

        {/* Impact Banner */}
        <div 
          className={`mt-12 bg-gradient-to-r from-pink-500/5 via-primary-500/5 to-blue-500/5 rounded-2xl p-6 border border-black/10 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-primary-500/20 border-2 border-dark-300 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-400" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-black/40 text-sm">Their lives changed forever</p>
                <p className="text-black font-semibold text-lg">And we're <span className="text-primary-400">just getting started</span></p>
              </div>
            </div>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-black/5 hover:bg-black/10 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group border border-black/10"
            >
              Read all stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute bottom-20 right-10 opacity-30 animate-bounce pointer-events-none">
          <Heart className="w-6 h-6 text-pink-400" />
        </div>
        <div className="absolute top-40 left-10 opacity-20 animate-pulse delay-1000 pointer-events-none">
          <Heart className="w-4 h-4 text-pink-400" />
        </div>
      </div>
    </section>
  )
}