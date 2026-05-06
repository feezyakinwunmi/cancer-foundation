// src/app/partner/page.tsx
'use client'

import { useState } from 'react'
import { Building, Handshake, Hospital, Users, Globe, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const partnerTypes = [
  {
    icon: Hospital,
    title: 'Healthcare Partners',
    description: 'Hospitals, clinics, and medical institutions',
    benefits: ['Referral network', 'Shared resources', 'Medical expertise']
  },
  {
    icon: Building,
    title: 'Corporate Partners',
    description: 'Businesses and organizations',
    benefits: ['CSR initiatives', 'Employee engagement', 'Brand visibility']
  },
  {
    icon: Users,
    title: 'NGO Partners',
    description: 'Non-profit organizations',
    benefits: ['Program collaboration', 'Resource sharing', 'Joint advocacy']
  },
  {
    icon: Globe,
    title: 'International Partners',
    description: 'Global organizations',
    benefits: ['Knowledge exchange', 'Capacity building', 'Global reach']
  }
]

export default function PartnerPage() {
  return (
    <div>
      <PageHero 
        title="Partner With Us"
        subtitle="Together, we can create a Nigeria where no child fights cancer alone"
        breadcrumb="Get Involved"
imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Join Forces to{' '}
              <span className="text-primary-400">Save Lives</span>
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              We believe in the power of partnership. Together, we can reach more children and provide better care.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-dark-200 rounded-2xl p-6 border border-black/10 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{type.title}</h3>
                    <p className="text-black/50 text-sm mb-3">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.benefits.map(benefit => (
                        <span key={benefit} className="text-xs text-black/40 bg-black/5 px-2 py-1 rounded-full">✓ {benefit}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Partners */}
          <div className="bg-gradient-to-r from-primary-500/10 to-pink-500/10 rounded-2xl p-8 border border-black/10 mb-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Our Current Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="bg-black/5 rounded-xl px-6 py-3 border border-black/10">
                  <span className="text-black/40 text-sm">Partner {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-200 rounded-2xl p-8 border border-black/10">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Become a Partner</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-black/60 text-sm mb-2">Organization Name</label>
                  <input type="text" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/60 text-sm mb-2">Contact Person</label>
                    <input type="text" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" />
                  </div>
                  <div>
                    <label className="block text-black/60 text-sm mb-2">Position</label>
                    <input type="text" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/60 text-sm mb-2">Email</label>
                    <input type="email" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" />
                  </div>
                  <div>
                    <label className="block text-black/60 text-sm mb-2">Phone</label>
                    <input type="tel" className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-black/60 text-sm mb-2">Partnership Interest</label>
                  <select className="w-full text-black bg-black/10 border border-black/20 rounded-xl px-4 py-3  focus:outline-none focus:border-primary-500">
                    <option value="">Select partnership type</option>
                    <option>Healthcare Partner</option>
                    <option>Corporate Partner</option>
                    <option>NGO Partner</option>
                    <option>International Partner</option>
                  </select>
                </div>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-3 rounded-xl font-semibold transition-all duration-300">
                  Submit Partnership Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}