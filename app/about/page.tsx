// src/app/about/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../components/PageHero'
import { 
  Heart, Eye, Target, Shield, Users, Star, 
  Award, Handshake, Globe, Calendar, Sparkles,
  Quote, ArrowRight, CheckCircle, 
  Briefcase, GraduationCap, Smile, Activity,
  MapPin, Coffee, BookOpen, Music,
  Mail
} from 'lucide-react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    }
  }, [])

  const coreValues = [
    { icon: Heart, title: 'Compassion First', desc: 'Every child is treated with love, dignity, and deep care. No exceptions.', color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { icon: Shield, title: 'Integrity Always', desc: 'We are transparent, honest, and fully accountable for every naira entrusted to us.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Star, title: 'Hope in Action', desc: 'We do not only care. We act. Quickly, decisively, and with the child at the centre.', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { icon: Users, title: 'Community Power', desc: 'We believe Nigerians standing together can change outcomes and save lives.', color: 'text-green-400', bg: 'bg-green-400/10' },
    { icon: Heart, title: 'Child-Centred Care', desc: 'Every decision we make begins with one question: what does this child need?', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ]

  const milestones = [
    { year: '2021', title: 'Foundation Born', desc: 'Started from Amara\'s story', icon: Heart },
    { year: '2022', title: 'First 50 Children', desc: 'Reached 50 children in need', icon: Smile },
    { year: '2023', title: 'Hospital Partnerships', desc: 'Partnered with 5 major hospitals', icon: Handshake },
    { year: '2024', title: 'Awareness Campaigns', desc: 'Reached 20+ communities', icon: Globe },
    { year: '2025', title: '100+ Children', desc: 'Over 100 children supported', icon: Award },
  ]

  const teamMembers = [
    { 
      name: 'Dr. Amina Ibrahim', 
      role: 'Founder & Executive Director', 
      bio: 'Pediatric oncology advocate with 15 years of experience. Previously worked with MSF and WHO.', 
      image: '/team/amina.jpg',
      funFact: 'Loves gardening in her free time',
      icon: Briefcase,
      color: 'from-pink-500/20 to-pink-600/10'
    },
    { 
      name: 'Mr. Chidi Okonkwo', 
      role: 'Head of Programs', 
      bio: 'Former healthcare administrator passionate about child welfare. MBA from Lagos Business School.', 
      image: '/team/chidi.jpg',
      funFact: 'Plays chess competitively',
      icon: GraduationCap,
      color: 'from-blue-500/20 to-blue-600/10'
    },
    { 
      name: 'Mrs. Fatima Bello', 
      role: 'Family Support Coordinator', 
      bio: 'Licensed counsellor specializing in childhood trauma. Certified grief counselor.', 
      image: '/team/fatima.jpg',
      funFact: 'Bakes cakes for children\'s birthdays',
      icon: Heart,
      color: 'from-green-500/20 to-green-600/10'
    },
    { 
      name: 'Dr. Michael Okafor', 
      role: 'Medical Advisor', 
      bio: 'Consultant pediatrician at LUTH with 20+ years experience in oncology.', 
      image: '/team/michael.jpg',
      funFact: 'Runs marathons for charity',
      icon: Activity,
      color: 'from-purple-500/20 to-purple-600/10'
    },
    { 
      name: 'Ms. Grace Eze', 
      role: 'Volunteer Coordinator', 
      bio: 'Community organizer with expertise in mobilizing volunteers across Nigeria.', 
      image: '/team/grace.jpg',
      funFact: 'Speaks 4 languages',
      icon: Users,
      color: 'from-yellow-500/20 to-yellow-600/10'
    },
    { 
      name: 'Mr. Tunde Adeola', 
      role: 'Finance Manager', 
      bio: 'Chartered accountant ensuring transparent use of every donation.', 
      image: '/team/tunde.jpg',
      funFact: 'Loves photography',
      icon: Shield,
      color: 'from-orange-500/20 to-orange-600/10'
    }
  ]

  return (
    <div className="bg-dark-300">
      <PageHero 
        title="About Us"
        subtitle="We bridge the gap between diagnosis and a fighting chance"
        breadcrumb="Our Story"
        imageUrl="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1600&h=900&fit=crop"
      />

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="scroll-mt-24 py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-2xl p-8 border border-primary-500/20 transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-white/60 leading-relaxed">
                A Nigeria where no child's survival depends on their family's income, 
                where quality cancer care, strong support systems, and hope are available 
                to every child, in every community.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-2xl p-8 border border-primary-500/20 transition-all duration-700 delay-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-white/60 leading-relaxed">
                To ease the burden on families fighting childhood cancer by providing 
                financial aid, medical assistance, emotional care, and community education, 
                so every child has the opportunity to fight, recover, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="scroll-mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-semibold">Our Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Stand For</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Our core values guide everything we do, every decision we make</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={value.title} className={`bg-white/5 rounded-xl p-6 border border-white/10 hover:border-${value.color.replace('text-', '')}/30 transition-all duration-300 group hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`${value.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="scroll-mt-24 py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-pink-500/20 px-3 py-1 rounded-full mb-4">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-sm font-semibold">How It Began</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">It started with one little girl named <span className="text-pink-400">Amara</span></h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>In 2021, Amara, a bright, determined young girl, was diagnosed with leukaemia. Her parents did everything imaginable to save her. They sold furniture, borrowed from relatives, gave up everything. And still, it was not enough.</p>
                <p>A small group of people who heard their story could not stand by. Funds were raised. Treatment was covered. A family was not left alone.</p>
                <p>Amara's courage sparked something none of us expected. What began as one act of solidarity became a mission we could not walk away from.</p>
                <div className="bg-white/5 rounded-xl p-4 border-l-4 border-pink-400">
                  <p className="text-white font-semibold">Today, that mission has grown into a foundation that has supported over 100 children and their families. Amara's story is the reason we exist, and every child we help is the reason we continue.</p>
                </div>
              </div>
            </div>

            <div className={`order-1 lg:order-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <div className="">
                     <Image
                        src="/ama.jpeg"
                        alt="Amara"
                        fill
                        className=" object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-white text-xs flex items-center gap-1"><Heart className="w-3 h-3 text-pink-400" /> Amara • Age 6 • Leukaemia Survivor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section id="founder" className="scroll-mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-2xl p-8 md:p-12 border border-primary-500/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center border-2 border-primary-500/30">
                  <Quote className="w-12 h-12 text-primary-400" />
                </div>
              </div>
              <div>
                <Quote className="w-8 h-8 text-primary-400/50 mb-4" />
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  "The fight against childhood cancer is not only medical. When I first watched a child battle cancer, 
                  I understood something that no statistic can capture: this fight is emotional. It is financial. 
                  It is deeply, painfully personal."
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  "Parents are forced into impossible choices. Children who should be in school, who should be dreaming, 
                  laughing, growing, are instead enduring treatments that would break most adults."
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  "This foundation was built to stand in the gap. To bring hope where there is fear, resources where 
                  there is desperation, and community where there is isolation."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-white font-bold text-xl">Dr. Amina Ibrahim</p>
                    <p className="text-primary-400 text-sm">Founder & Executive Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with Images */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-semibold">Our People</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Dedicated professionals committed to making a difference in the lives of children and families</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={`group bg-dark-300 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                          <member.icon className="w-8 h-8 text-white/60" />
                        </div>
                        <p className="text-white/40 text-sm">Photo coming soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent" />
                  
                  {/* Social/Contact Overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                        <Mail className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">{member.bio}</p>
                  <div className="flex items-center gap-2 text-white/30 text-xs bg-white/5 rounded-full px-3 py-1 w-fit">
                    <Coffee className="w-3 h-3" />
                    <span>{member.funFact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm mb-4">Want to join our team? We're always looking for passionate individuals</p>
            <Link href="/volunteer" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
            <p className="text-white/50 mt-4">Milestones that mark our growth and impact</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-3">
                  <milestone.icon className="w-6 h-6 text-primary-400" />
                </div>
                <p className="text-primary-400 font-bold text-xl">{milestone.year}</p>
                <p className="text-white font-semibold text-sm">{milestone.title}</p>
                <p className="text-white/40 text-xs">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Children Supported', icon: Smile, color: 'text-pink-400' },
              { number: '5', label: 'Active Programs', icon: Activity, color: 'text-blue-400' },
              { number: '10+', label: 'Partner Hospitals', icon: Handshake, color: 'text-green-400' },
              { number: '20+', label: 'Communities Reached', icon: Globe, color: 'text-yellow-400' },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500/10 via-pink-500/10 to-primary-500/10 rounded-2xl p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Make a Difference?</h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Join us in our mission to ensure no child fights cancer alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/25">
                Donate Now <Heart className="w-4 h-4" />
              </Link>
              <Link href="/volunteer" className="inline-flex items-center gap-2 border border-white/30 hover:border-primary-500 text-white/80 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Join Our Team <Users className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}