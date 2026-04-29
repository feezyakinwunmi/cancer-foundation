// src/app/components/Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThreeDTextRotator from './ThreeDTextRotator'
import HealthParticles from './HealthParticles'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HealthParticles />
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        
        <div 
          className={`transform transition-all duration-1000 ease-out delay-200 text-center lg:text-left ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold mb-6 leading-tight pt-20 lg:pt-24">
            <span className="text-white">No Child Should </span>
            <br />
            <ThreeDTextRotator 
              words={['Fight', 'Face', 'Battle', 'Bear']}
              className="text-primary-400 inline-block mt-1 sm:mt-2"
            />
            <span className="text-white"> Cancer Alone</span>
          </h1>

          <p className="text-white/80  sm:text-lg lg:text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
            Every year, Nigerian families face a diagnosis that changes everything. 
            We make sure they do not face it by themselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/donate"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/30 transform hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="border border-white/30 hover:border-primary-500 text-white/80 hover:text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-primary-400">100+</p>
              <p className="text-white/40 text-sm">Children Supported</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-primary-400">5</p>
              <p className="text-white/40 text-sm">Support Programs</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-primary-400">₦0</p>
              <p className="text-white/40 text-sm">To Families in Need</p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Video */}
        <div className="lg:hidden mt-12 w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <video
              src="/cancervid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Video */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-visible">
          <div 
            className={`absolute inset-y-0 right-0 transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{
              transform: 'rotate(120deg) scale(1.5)',
              transformOrigin: 'center center',
              right: '-10%',
              top: '-10%',
              bottom: '-20%',
            }}
          >
            <div className="relative w-full h-full min-w-[600px] min-h-[800px]">
              <video
                src="/cancervid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}