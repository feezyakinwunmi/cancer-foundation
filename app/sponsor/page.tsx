// src/app/sponsor/page.tsx
'use client'

import { useState } from 'react'
import { Heart, User, Calendar, MapPin, ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const children = [
  {
    name: 'David',
    age: 6,
    location: 'Abuja',
    condition: 'Leukaemia',
    monthlyCost: 25000,
    story: 'Loves football and dreams of becoming a doctor',
    image: '/dav.jpg'
  },
  {
    name: 'Amina',
    age: 8,
    location: 'Kano',
    condition: 'Bone Cancer',
    monthlyCost: 30000,
    story: 'Loves singing and wants to become a singer',
    image: '/ami.jpg'
  },
  {
    name: 'Chinedu',
    age: 10,
    location: 'Enugu',
    condition: 'Brain Tumour',
    monthlyCost: 35000,
    story: 'Loves science and wants to become an engineer',
    image: '/chi.jpg'
  }
]

export default function SponsorPage() {
  const [selectedChild, setSelectedChild] = useState<number | null>(null)

  return (
    <div>
      <PageHero 
        title="Sponsor a Child"
        subtitle="Change a child's life today through monthly sponsorship"
        breadcrumb="Get Involved"
imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
      />

      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Give a Child a{' '}
              <span className="text-primary-400">Fighting Chance</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              For as little as ₦25,000 per month, you can sponsor a child's treatment and give them hope for a brighter future.
            </p>
          </div>

          {/* Children Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {children.map((child, index) => (
              <div 
                key={child.name} 
                className={`bg-dark-200 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  selectedChild === index ? 'border-primary-500 ring-2 ring-primary-500/50' : 'border-white/10 hover:border-primary-500/50'
                }`}
                onClick={() => setSelectedChild(index)}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/60">{child.name[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{child.name}, {child.age}</h3>
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{child.location}</span>
                    <span>•</span>
                    <span>{child.condition}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-4">{child.story}</p>
                  <p className="text-primary-400 font-bold text-lg">₦{child.monthlyCost.toLocaleString()}/month</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsorship Form */}
          {selectedChild !== null && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-200 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Sponsor {children[selectedChild].name}</h3>
                <p className="text-white/40 text-center mb-6">Monthly sponsorship of ₦{children[selectedChild].monthlyCost.toLocaleString()}</p>
                
                <div className="bg-primary-500/10 rounded-xl p-4 border border-primary-500/20 mb-6">
                  <p className="text-white/60 text-sm text-center">
                    Your sponsorship covers medical treatment, nutrition, family support, and counselling for {children[selectedChild].name}.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Full Name</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Email</label>
                      <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Address</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                    Sponsor {children[selectedChild].name}
                  </button>
                </form>

                <p className="text-white/30 text-xs text-center mt-4">
                  You will receive regular updates about your sponsored child's progress.
                </p>
              </div>
            </div>
          )}

          {/* Call to Action if no child selected */}
          {selectedChild === null && (
            <div className="text-center">
              <p className="text-white/50 mb-4">Click on a child above to start sponsoring</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}