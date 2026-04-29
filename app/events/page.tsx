// src/app/events/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Calendar, MapPin, Users, Heart, Lightbulb, Gift, ArrowRight, Clock, Building, Award, TrendingUp, Image as ImageIcon, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../components/PageHero'

const events = [
  {
    icon: Lightbulb,
    title: '"Light Up Their Lives" Campaign',
    description: 'Nationwide early detection and community education through school visits and outreach.',
    date: 'Ongoing',
    location: 'Multiple locations across Nigeria',
    type: 'Campaign',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    icon: Users,
    title: 'Annual Charity Walk: "Walk for Hope"',
    description: 'Bringing Nigerians together to raise funds and stand in solidarity with affected families.',
    date: 'Coming Soon',
    location: 'Lagos, Nigeria',
    type: 'Walkathon',
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    icon: Heart,
    title: 'Hospital Outreach Program',
    description: 'Regular visits to partner hospitals with care packages, financial help, and emotional support.',
    date: 'Every Month',
    location: 'Partner hospitals nationwide',
    type: 'Outreach',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    icon: Gift,
    title: '"Sponsor a Child" Initiative',
    description: 'Connect directly with a child and support their entire treatment journey, from diagnosis to recovery.',
    date: 'Year-round',
    location: 'Virtual + In-person',
    type: 'Sponsorship',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
]

// Gallery Images for LUTH Visit
const galleryImages = [
  { id: 1, src: '/CCCSF 2.jpeg', title: 'Team arriving at LUTH', description: 'Our team ready to bring hope' },
  { id: 2, src: '/CCCSF 6.jpeg', title: 'Donation Presentation', description: 'Presenting ₦560,000 to the hospital administration' },
  { id: 3, src: '/CCCSF 10.jpeg', title: 'Meeting the Children', description: 'Spending quality time with the children' },
  { id: 4, src: '/CCCSF 4.jpeg', title: 'Care Packages', description: 'Distributing care packages to families' },
  { id: 5, src: '/CCCSF 5.jpeg', title: 'With Hospital Staff', description: 'Collaborating with LUTH medical team' },
  { id: 6, src: '/CCCSF 8.jpeg', title: 'Moments of Joy', description: 'Bringing smiles to little faces' },
]

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div>
      <PageHero 
        title="Events & Campaigns"
        subtitle="Join a movement that is changing lives across Nigeria"
        breadcrumb="Get Involved"
imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop"
      />

      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Event - LUTH Visit */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900/30 to-pink-900/30 border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary-500/20 text-primary-400 text-xs font-semibold px-3 py-1 rounded-full">FEATURED EVENT</span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">RECENT OUTREACH</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Side - Content */}
                  <div>
                    <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                      <Building className="w-4 h-4" />
                      <span>Lagos State University Teaching Hospital (LUTH), Ikeja</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>April 2026</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Lagos State University Teaching Hospital (LUTH) Outreach
                    </h2>
                    
                    <p className="text-white/60 mb-4 leading-relaxed">
                      Our team visited the pediatric oncology ward at LUTH to provide financial support, 
                      care packages, and hope to children battling cancer. It was a day filled with 
                      emotions, smiles, and the promise of a better tomorrow.
                    </p>
                    
                    <div className="bg-white/5 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Gift className="w-5 h-5 text-primary-400" />
                        <span className="text-white font-semibold">Donation Made:</span>
                        <span className="text-2xl font-bold text-primary-400">₦560,000</span>
                      </div>
                      <p className="text-white/40 text-sm">
                        Funds will cover chemotherapy sessions, essential medications, and nutritional 
                        support for children currently undergoing treatment at LUTH.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
                        <Users className="w-3 h-3 text-green-400" />
                        <span className="text-white/50 text-xs">15+ children impacted</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
                        <Award className="w-3 h-3 text-yellow-400" />
                        <span className="text-white/50 text-xs">Direct family support</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                        <span className="text-white/50 text-xs">Ongoing partnership</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Stats Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary-400">₦560K</p>
                      <p className="text-white/40 text-xs">Total Donation</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary-400">15+</p>
                      <p className="text-white/40 text-xs">Children Supported</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary-400">50+</p>
                      <p className="text-white/40 text-xs">Care Packages</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary-400">10+</p>
                      <p className="text-white/40 text-xs">Staff Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">LUTH Outreach Photo Gallery</h3>
              <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-3" />
              <p className="text-white/50 text-sm max-w-2xl mx-auto">
                Capturing moments of compassion, hope, and healing from our visit to LUTH
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative bg-dark-200 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openModal(image)}
                >
                  <div className="relative h-56 bg-gradient-to-br from-primary-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={400} 
                        height={300}
                        className="object-cover object-center rounded-lg transition-transform duration-700 group-hover:scale-110"
                      />
                      <p className="text-white/40 text-xs">{image.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p className="text-white text-xs text-center">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-xs text-center mt-4">
              * Click on any image to view full size
            </p>
          </div>

          {/* Other Events Grid */}
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Upcoming Campaigns & Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {events.map((event, index) => (
              <div 
                key={event.title}
                className={`bg-dark-200 rounded-2xl p-6 border border-white/10 hover:border-${event.color.replace('text-', '')}/30 transition-all duration-300 group hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${event.bg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <event.icon className={`w-6 h-6 ${event.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold ${event.color} ${event.bg} px-2 py-0.5 rounded-full`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-white/50 text-sm mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                    </div>
                    <button className="text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors flex items-center gap-1 group-hover:gap-2">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-500/10 via-pink-500/10 to-primary-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Want to partner with us?</h3>
              <p className="text-white/50 mb-6">Let's work together to create more impact like the LUTH outreach</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal Popup */}
      {modalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          <div 
            className="relative bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative h-96 bg-gradient-to-br from-primary-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={600} 
                    height={200}
                    className="object-cover object-center rounded-lg transition-transform duration-700"
                  />
             
                <p className="text-white/40 text-sm">Image: {selectedImage.title}</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/60 text-sm">{selectedImage.description}</p>
              <p className="text-white/40 text-xs mt-3">LUTH Outreach • April 2026</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}