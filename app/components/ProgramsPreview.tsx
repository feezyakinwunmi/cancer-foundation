// src/app/components/ProgramsPreview.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Syringe, Apple, Home, HeartHandshake, Megaphone, ArrowRight, Sparkles, Activity, Heart } from 'lucide-react'

const programs = [
  {
    icon: Syringe,
    title: 'Medical Assistance',
    description: 'Covering chemotherapy, essential medications, and hospital bills.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    image: '/ma.jpg',
    stat: '₦500K+',
    statLabel: 'Provided in aid'
  },
  {
    icon: Apple,
    title: 'Nutrition & Recovery',
    description: 'Healthy meals and supplements that support treatment and healing.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    image: '/nr.jpg',
    stat: '5,000+',
    statLabel: 'Meals served'
  },
  {
    icon: Home,
    title: 'Family Support',
    description: 'Accommodation, transportation, and daily living costs.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    image: '/fs.jpeg',
    stat: '200+',
    statLabel: 'Families housed'
  },
  {
    icon: HeartHandshake,
    title: 'Counselling & Mental Health',
    description: 'Professional emotional support for children and parents.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    image: '/cm.jpg',
    stat: '1,000+',
    statLabel: 'Sessions held'
  },
  {
    icon: Megaphone,
    title: 'Awareness & Early Detection',
    description: 'Educating communities to recognize symptoms early.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    image: '/ed.png',
    stat: '50+',
    statLabel: 'Communities reached'
  }
]

export default function ProgramsPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-dark-200 to-dark-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 px-5 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Activity className="w-4 h-4 text-primary-400 animate-pulse" />
            <span className="text-primary-400 text-sm font-semibold">How We Help</span>
            <Sparkles className="w-3 h-3 text-primary-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Five ways we{' '}
            <span className="relative inline-block">
              <span className="text-primary-400">show up</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 100 4" fill="none">
                <path d="M0 2L100 2" stroke="url(#programGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="programGradient" x1="0" y1="0" x2="100" y2="0">
                    <stop stopColor="#005ce6" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="#005ce6"/>
                    <stop offset="1" stopColor="#005ce6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}for children and families
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Every program is designed with one question in mind: what does this child need right now?
          </p>
        </div>

        {/* Programs Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {!imageErrors[index] ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark-200" />
                )}
                
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/70 to-dark-300/30" />
                
                {/* Color Gradient Overlay matching the program */}
                <div className={`absolute inset-0 ${program.bgColor} mix-blend-overlay opacity-40`} />
              </div>
              
              {/* Content */}
              <div className="relative p-6 z-10 min-h-[280px] flex flex-col">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 rounded-full ${program.bgColor} scale-150 blur-md transition-all duration-300 group-hover:scale-175`} />
                  <div className="relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <program.icon className={`w-6 h-6 ${program.color}`} />
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-2">{program.title}</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{program.description}</p>

                {/* Stats Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`${program.bgColor} backdrop-blur-sm rounded-full px-3 py-1`}>
                    <p className={`${program.color} text-xs font-bold`}>{program.stat}</p>
                  </div>
                  <p className="text-white/40 text-xs">{program.statLabel}</p>
                </div>

                {/* Learn More Link */}
                <button className="flex items-center gap-1 text-white/70 hover:text-primary-400 text-sm font-semibold transition-all duration-300 group-hover:gap-2 mt-auto">
                  Learn more
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Hover Gradient Overlay - brightens on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-primary-500/30 via-primary-500/10 to-transparent transition-opacity duration-500 pointer-events-none ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Impact Highlight Bar */}
        <div 
          className={`mt-16 bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-primary-500/10 rounded-2xl p-6 border border-primary-500/20 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center animate-pulse">
                <Heart className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-white/50 text-sm">Since our founding</p>
                <p className="text-white font-bold text-xl">We've impacted over <span className="text-primary-400">100+ children</span> and their families</p>
              </div>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group shadow-lg hover:shadow-primary-500/25"
            >
              See all programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-primary-500/10 rounded-full animate-pulse pointer-events-none" />
        <div className="absolute top-20 right-20 w-10 h-10 border border-primary-400/10 rounded-full animate-pulse delay-500 pointer-events-none" />
      </div>
    </section>
  )
}