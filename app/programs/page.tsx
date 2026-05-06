// src/app/programs/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Syringe, Apple, Home, HeartHandshake, Megaphone, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const programs = [
  {
    icon: Syringe,
    title: 'Medical Assistance',
    description: 'Covering chemotherapy, essential medications, and hospital bills for families who cannot manage alone.',
    impact: 'Over ₦5M in medical aid provided',
    features: ['Chemotherapy coverage', 'Essential medications', 'Hospital bill payment', 'Post-treatment care'],
    image: '/ma.jpg',
    iconColor: 'text-blue-400'
  },
  {
    icon: Apple,
    title: 'Nutrition and Recovery',
    description: 'Providing healthy meals and supplements that support treatment and aid the body\'s healing.',
    impact: '5,000+ meals served',
    features: ['Healthy meal plans', 'Nutritional supplements', 'Dietary counseling', 'Recovery support'],
    image: '/nr.jpg',
    iconColor: 'text-green-400'
  },
  {
    icon: Home,
    title: 'Family Support',
    description: 'Helping with accommodation, transportation, and daily living costs so families can focus on their child.',
    impact: '200+ families housed',
    features: ['Accommodation assistance', 'Transportation support', 'Daily living costs', 'Emergency shelter'],
    image: '/fs.jpeg',
    iconColor: 'text-yellow-400'
  },
  {
    icon: HeartHandshake,
    title: 'Counselling and Mental Health',
    description: 'Offering professional emotional support for children and parents navigating one of life\'s hardest seasons.',
    impact: '1,000+ counselling sessions',
    features: ['Individual therapy', 'Family counselling', 'Support groups', 'Crisis intervention'],
    image: '/cm.jpg',
    iconColor: 'text-pink-400'
  },
  {
    icon: Megaphone,
    title: 'Awareness and Early Detection',
    description: 'Educating communities across Nigeria to recognize symptoms early and seek help before time runs out.',
    impact: '50+ communities reached',
    features: ['School visits', 'Community outreach', 'Early detection training', 'Awareness campaigns'],
    image: '/ca.png',
    iconColor: 'text-purple-400'
  }
]

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div>
      <PageHero 
        title="Our Programs"
        subtitle="Five ways we show up for children and families across Nigeria"
        breadcrumb="How We Help"
imageUrl="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&h=900&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className={`bg-dark-200 rounded-2xl overflow-hidden border border-black/10 hover:border-primary-500/30 transition-all duration-500 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left Side - Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                        <program.icon className={`w-6 h-6 ${program.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Impact text overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-black/80 text-sm font-semibold">{program.impact}</p>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{program.title}</h3>
                    <p className="text-black/60 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-black/40 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href="/donate" 
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 group-hover:gap-3"
                    >
                      Support this program <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}