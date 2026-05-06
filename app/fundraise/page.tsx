// src/app/fundraise/page.tsx
'use client'

import { useState } from 'react'
import { Heart, Target, Users, Gift, ArrowRight, Copy, Check, Share2, Calendar, Mail } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const ideas = [
  {
    title: 'Birthday Fundraiser',
    description: 'Ask friends to donate instead of buying gifts',
    icon: Gift,
    goal: '₦50,000 - ₦200,000'
  },
  {
    title: 'Charity Walk/Run',
    description: 'Organize a walk-a-thon in your community',
    icon: Users,
    goal: '₦100,000 - ₦500,000'
  },
  {
    title: 'Corporate Partnership',
    description: 'Get your company to match donations',
    icon: Target,
    goal: '₦500,000+'
  },
  {
    title: 'Online Campaign',
    description: 'Create a social media fundraising campaign',
    icon: Share2,
    goal: '₦30,000 - ₦150,000'
  }
]

export default function FundraisePage() {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText('https://childhoodcancerfoundation.org/fundraise')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <PageHero 
        title="Fundraise For Us"
        subtitle="Turn your passion into action and raise funds for children with cancer"
        breadcrumb="Get Involved"
imageUrl="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&h=900&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Every Naira You Raise{' '}
              <span className="text-primary-400">Saves Lives</span>
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              Start a fundraiser today and make a real difference in the lives of children fighting cancer.
            </p>
          </div>

          {/* Fundraising Ideas */}
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Fundraising Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-dark-200 rounded-2xl p-6 border border-black/10 text-center hover:border-primary-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                  <idea.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="text-black font-bold mb-2">{idea.title}</h4>
                <p className="text-black/40 text-sm mb-3">{idea.description}</p>
                <p className="text-primary-400 text-sm font-semibold">Goal: {idea.goal}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-primary-500/10 to-pink-500/10 rounded-2xl p-8 border border-black/10 mb-12">
            <h3 className="text-2xl font-bold text-black text-center mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-black flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <p className="text-black font-semibold mb-1">Sign Up</p>
                <p className="text-black/40 text-sm">Register to start your fundraiser</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-black flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <p className="text-black font-semibold mb-1">Create Campaign</p>
                <p className="text-black/40 text-sm">Set your goal and share your story</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-black flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <p className="text-black font-semibold mb-1">Share & Raise</p>
                <p className="text-black/40 text-sm">Share with friends and family</p>
              </div>
            </div>
          </div>

          {/* Start Fundraising Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-200 rounded-2xl p-8 border border-black/10">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Start Your Fundraiser</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-black/60 text-sm mb-2">Fundraiser Name</label>
                  <input type="text" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" placeholder="e.g., Team David Walkathon" />
                </div>
                <div>
                  <label className="block text-black/60 text-sm mb-2">Fundraising Goal (₦)</label>
                  <input type="number" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" placeholder="e.g., 100000" />
                </div>
                <div>
                  <label className="block text-black/60 text-sm mb-2">Your Story</label>
                  <textarea rows={4} className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" placeholder="Why are you fundraising for childhood cancer?" />
                </div>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-3 rounded-xl font-semibold transition-all duration-300">
                  Start Fundraising
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}