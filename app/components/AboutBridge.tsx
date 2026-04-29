// src/app/components/AboutBridge.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Shield, Users, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function AboutBridge() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-10 sm:py-18 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            We bridge the gap between{' '}
            <span className="text-primary-400 relative inline-block">
              diagnosis
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2L100 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0">
                    <stop stopColor="#005ce6" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="#005ce6"/>
                    <stop offset="1" stopColor="#005ce6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}and a{' '}
            <span className="text-primary-400">fighting chance</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Quote decoration */}
              <div className="absolute -top-6 -left-4 text-6xl text-primary-400/20 font-serif">"</div>
              <p className="text-white/70 text-lg leading-relaxed mb-6 relative z-10 pl-4">
                In Nigeria, a cancer diagnosis does not just threaten a child's life. 
                It threatens the entire family. Parents leave jobs to become full-time caregivers. 
                Savings disappear within weeks.
              </p>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Families who once stood strong are brought to their knees by hospital bills, 
              transport costs, and the weight of grief no one prepared them for.
            </p>
            
            <div className="bg-gradient-to-r from-primary-500/10 to-transparent p-6 rounded-2xl border-l-4 border-primary-500 mb-6">
              <p className="text-white/80 text-lg leading-relaxed font-semibold">
                The Children Cancer Care and Support Foundation exists because that should not be the end of the story.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group"
              >
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary-500/20 border-2 border-dark-300 flex items-center justify-center">
                    <span className="text-primary-400 text-xs font-bold">❤️</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image and Value Cards */}
          <div 
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Main Image */}
            <div className="relative mb-6 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent z-10" />
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center">
                  <Image
                    src="/CCCSF 6.jpeg"
                    alt="Bridge Image"
                    fill
                    className="object-cover object-center opacity-80"
                  />
                  <Heart className="w-16 h-16 text-primary-400 animate-pulse" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-white text-xs">Hope in action 🇳🇬</p>
              </div>
            </div>

            {/* Value Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Heart, title: 'Compassion', desc: 'At the center of everything', color: 'text-pink-400', bg: 'bg-pink-400/10' },
                { icon: Shield, title: 'Integrity', desc: 'Every naira accounted for', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { icon: Users, title: 'Community', desc: 'Nigerians standing together', color: 'text-green-400', bg: 'bg-green-400/10' },
                { icon: Star, title: 'Hope', desc: 'Action, not just words', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
              ].map((value, idx) => (
                <div
                  key={value.title}
                  className={`${value.bg} rounded-xl p-3 border border-white/5 hover:border-${value.color.replace('text-', '')}/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <value.icon className={`w-4 h-4 ${value.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-white font-semibold text-sm">{value.title}</h3>
                  </div>
                  <p className="text-white/40 text-xs">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div 
          className={`mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center group cursor-pointer">
              <p className="text-2xl font-bold text-primary-400 group-hover:scale-110 transition-transform inline-block">100+</p>
              <p className="text-white/40 text-xs">Children Supported</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center group cursor-pointer">
              <p className="text-2xl font-bold text-primary-400 group-hover:scale-110 transition-transform inline-block">₦0</p>
              <p className="text-white/40 text-xs">To Families in Need</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center group cursor-pointer">
              <p className="text-2xl font-bold text-primary-400 group-hover:scale-110 transition-transform inline-block">5</p>
              <p className="text-white/40 text-xs">Support Programs</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center group cursor-pointer">
              <p className="text-2xl font-bold text-primary-400 group-hover:scale-110 transition-transform inline-block">10+</p>
              <p className="text-white/40 text-xs">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}