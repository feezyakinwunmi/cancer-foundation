// src/app/components/DonateCTA.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Gift, TrendingUp, Shield, ArrowRight, Sparkles, Clock, Users } from 'lucide-react'

export default function DonateCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/30 via-dark-300 to-dark-300" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-pink-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Gift className="w-4 h-4 text-primary-400 animate-bounce" />
              <span className="text-primary-400 text-sm font-semibold">Give Hope Today</span>
              <Sparkles className="w-3 h-3 text-primary-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your support is a child's{' '}
              <span className="relative inline-block">
                <span className="text-primary-400">second chance</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 100 4" fill="none">
                  <path d="M0 2L100 2" stroke="url(#donateGradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="donateGradient" x1="0" y1="0" x2="100" y2="0">
                      <stop stopColor="#005ce6" stopOpacity="0"/>
                      <stop offset="0.5" stopColor="#005ce6"/>
                      <stop offset="1" stopColor="#005ce6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-white/60 text-lg mb-6">
              Your donation directly covers what families cannot: medication, hospital sessions, 
              food, transport, and the small dignities that make a difficult journey bearable.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-primary-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-white font-bold text-xl">100+</p>
                <p className="text-white/40 text-xs">Children Saved</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-primary-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-white font-bold text-xl">500+</p>
                <p className="text-white/40 text-xs">Families Helped</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-primary-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-white font-bold text-xl">24/7</p>
                <p className="text-white/40 text-xs">Support Available</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white/60 text-xs">100% Transparent</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white/60 text-xs">Tax Deductible</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <Heart className="w-4 h-4 text-green-400" />
                <span className="text-white/60 text-xs">Direct Impact</span>
              </div>
            </div>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/30 transform hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Side - Image instead of Form */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Main Image */}
              <div className="relative h-[500px] w-full">
                <Image
                  src="/don.jpg"
                  alt="Child receiving care and support"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Overlay for text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent" />
              </div>
              
              {/* Text Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-white text-sm mb-2">"Every child deserves a fighting chance"</p>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">₦5,000</p>
                    <p className="text-white/50 text-xs">Essential medication</p>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">₦20,000</p>
                    <p className="text-white/50 text-xs">Treatment session</p>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">₦50,000+</p>
                    <p className="text-white/50 text-xs">Hospital care</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-primary-500/90 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">100% of donations go to children</span>
                </div>
              </div>
            </div>

            {/* Impact Message */}
            <div className="mt-6 text-center">
              <p className="text-white/40 text-sm">
                ⚡ Your donation today could be the reason a child goes home tomorrow
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div 
          className={`mt-12 bg-gradient-to-r from-primary-500/10 via-pink-500/10 to-primary-500/10 rounded-2xl p-4 text-center border border-white/10 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-white/60 text-sm">
            <span className="font-bold text-primary-400">Every naira counts</span> • 
            <span className="mx-1">100% Transparency</span> • 
            <span className="font-bold text-primary-400 ml-1">You can change a life today</span>
          </p>
        </div>
      </div>
    </section>
  )
}