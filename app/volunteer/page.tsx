// src/app/volunteer/page.tsx
'use client'

import { useState } from 'react'
import { Heart, Clock, Users, GraduationCap, HandHeart, Calendar, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const opportunities = [
  {
    icon: Heart,
    title: 'Patient Support Volunteer',
    description: 'Spend time with children in hospitals, play games, read stories, and provide companionship during treatment.',
    commitment: '4-6 hours/week',
    skills: 'Compassion, patience, good with children',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    icon: GraduationCap,
    title: 'Tutor/Teacher',
    description: 'Help children continue their education while in treatment, assisting with schoolwork and learning activities.',
    commitment: '3-5 hours/week',
    skills: 'Teaching experience, patience, subject knowledge',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    icon: HandHeart,
    title: 'Event Organizer',
    description: 'Help plan and execute fundraising events, awareness campaigns, and community outreach programs.',
    commitment: 'Flexible',
    skills: 'Organization, communication, creativity',
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    icon: Users,
    title: 'Community Ambassador',
    description: 'Represent our foundation in your local community, spread awareness, and recruit more supporters.',
    commitment: '2-4 hours/week',
    skills: 'Public speaking, networking, passion for the cause',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
]

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    opportunity: '',
    message: ''
  })

  return (
    <div>
      <PageHero 
        title="Volunteer With Us"
        subtitle="Join our mission to ensure no child fights cancer alone"
        breadcrumb="Get Involved"
imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
       
      />

      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Time Can Change a{' '}
              <span className="text-primary-400">Child's Life</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Whether you have a few hours or a few days, your skills and passion can make 
              a real difference in the lives of children fighting cancer.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '50+', label: 'Active Volunteers', icon: Users },
              { number: '2,000+', label: 'Hours Donated', icon: Clock },
              { number: '100+', label: 'Children Helped', icon: Heart },
              { number: '10+', label: 'Communities', icon: MapPin }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{stat.number}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Opportunities Grid */}
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Volunteer Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-dark-200 rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                <div className={`${opp.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <opp.icon className={`w-6 h-6 ${opp.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{opp.title}</h4>
                <p className="text-white/50 text-sm mb-3">{opp.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">⏱ {opp.commitment}</span>
                  <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">📚 {opp.skills}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-200 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Apply to Volunteer</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Area of Interest</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500">
                    <option value="">Select an opportunity</option>
                    {opportunities.map(opp => (
                      <option className='text-black' key={opp.title} value={opp.title}>{opp.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Why do you want to volunteer?</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}