// src/app/components/FinalCTA.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart, Share2, Users, Phone, Mail, ArrowRight, Sparkles, AlertCircle, Clock, ChevronRight } from 'lucide-react'

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const actionCards = [
    {
      title: 'Donate',
      description: 'One-time or monthly',
      icon: Heart,
      href: '/donate',
      color: 'from-primary-500/10',
      borderColor: 'border-primary-500/20',
      hoverBorder: 'hover:border-primary-500/50',
      iconBg: 'bg-primary-500/20',
      iconColor: 'text-primary-400',
      textColor: 'group-hover:text-primary-400'
    },
    {
      title: 'Volunteer',
      description: 'Join our mission',
      icon: Users,
      href: '/volunteer',
      color: 'from-green-500/10',
      borderColor: 'border-green-500/20',
      hoverBorder: 'hover:border-green-500/50',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      textColor: 'group-hover:text-green-400'
    },
    {
      title: 'Fundraise',
      description: 'Start a campaign',
      icon: Share2,
      href: '/fundraise',
      color: 'from-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      textColor: 'group-hover:text-purple-400'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch',
      icon: Phone,
      href: '/contact',
      color: 'from-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      hoverBorder: 'hover:border-yellow-500/50',
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400',
      textColor: 'group-hover:text-yellow-400'
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alert Bar - Smaller */}
        <div 
          className={`text-center mb-6 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-500/30">
            <AlertCircle className="w-3 h-3 text-red-400" />
            <span className="text-red-400 text-xs font-semibold">URGENT: A Child Needs You Right Now</span>
            <Clock className="w-3 h-3 text-red-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Message */}
          <div 
            className={`text-center lg:text-left transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              A child is fighting for their life{' '}
              <span className="text-primary-400">right now</span>
            </h2>
            
            <p className="text-black/60 text-base mb-4">
              Your decision today could be the reason they survive.
            </p>

            {/* Impact Amounts - Compact */}
            <div className="bg-black/5 rounded-xl p-4 border border-black/10 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-primary-400" />
                <span className="text-black text-sm font-semibold">Your Impact:</span>
              </div>
              <div className="flex justify-around">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-400">₦5,000</p>
                  <p className="text-black/40 text-xs">Medication</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-400">₦20,000</p>
                  <p className="text-black/40 text-xs">Treatment</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-400">₦50,000+</p>
                  <p className="text-black/40 text-xs">Hospital Care</p>
                </div>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/donate"
                className="bg-primary-500 hover:bg-primary-600 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Donate Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/volunteer"
                className="border border-black/30 hover:border-primary-500 text-black/80 hover:text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Become a Volunteer
              </Link>
            </div>
          </div>

          {/* Right Side - Action Cards */}
          <div 
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {actionCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`group bg-gradient-to-r ${card.color} to-transparent rounded-xl p-3 border ${card.borderColor} ${card.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-sm">{card.title}</h3>
                      <p className="text-black/40 text-xs">{card.description}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-black/30 ${card.textColor} transition-all ml-auto`} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Emergency Contact - Compact */}
            <div className="mt-4 bg-red-500/10 rounded-xl p-3 border border-red-500/20 text-center">
              <p className="text-black/50 text-xs">
                <span className="text-red-400 font-semibold">Emergency:</span> 24/7 Helpline
              </p>
              <p className="text-black font-bold text-base">+234 800 000 0000</p>
            </div>
          </div>
        </div>

        {/* Promise Banner - Compact */}
        <div 
          className={`mt-8 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full border border-black/10">
            <Sparkles className="w-3 h-3 text-primary-400" />
            <p className="text-black/50 text-xs">
              Every action brings us closer to a <span className="text-primary-400 font-semibold">Nigeria where no child fights cancer alone</span>
            </p>
            <Sparkles className="w-3 h-3 text-primary-400" />
          </div>
        </div>
      </div>
    </section>
  )
}