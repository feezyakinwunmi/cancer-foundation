// src/app/stories/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Star, Quote, X, Calendar, MapPin, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

const stories = [
  {
    id: 1,
    name: 'David',
    age: 6,
    location: 'Abuja',
    condition: 'Leukaemia',
    outcome: 'In remission, back in school',
    dream: 'Wants to become a doctor',
    shortDesc: 'From diagnosis to remission - a story of courage',
    fullStory: 'David loved football, dreamed of becoming a doctor, and filled his home with laughter. Then came fevers that would not break, bruises that appeared without explanation, and a diagnosis no parent is prepared for. His family was overwhelmed, financially, emotionally, and physically. With our support, David received treatment, his family received counselling, and no one was left to face it alone. Today, David is in remission. He is back in school. He is back on the football pitch. And his dream of becoming a doctor is very much alive.',
    image: '/dav.jpg',
    imageColor: 'from-blue-500/20 to-blue-600/10',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    id: 2,
    name: 'Amina',
    age: 8,
    location: 'Kano',
    condition: 'Bone Cancer',
    outcome: 'Treatment completed, singing again',
    dream: 'Wants to become a singer',
    shortDesc: 'Her voice returned stronger than ever',
    fullStory: 'Amina\'s singing filled every room she entered. When persistent leg pain turned out to be bone cancer, her family faced long hospital stays, multiple procedures, and a future that felt uncertain. Through financial assistance, emotional support, and consistent advocacy, we walked alongside Amina and her family every step of the way, ensuring that her education and her dreams were never abandoned. Today, Amina has completed treatment. Her songs fill her home again, stronger, sweeter, and more hopeful than before.',
    image: '/amir.jpg',
    imageColor: 'from-pink-500/20 to-pink-600/10',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    id: 3,
    name: 'Chinedu',
    age: 10,
    location: 'Enugu',
    condition: 'Brain Tumour',
    outcome: 'Back in school, excelling in science',
    dream: 'Wants to become an engineer',
    shortDesc: 'A curious mind that never gave up',
    fullStory: 'Chinedu was the boy who asked questions about everything: endlessly curious, endlessly imaginative, already dreaming of becoming an engineer. When headaches and failing vision led to a brain tumour diagnosis, his world and his family\'s were turned upside down. Surgery, treatment, and recovery demanded extraordinary courage from a ten-year-old. We provided medical support, psychosocial care, and advocacy throughout. Today, Chinedu is back in school, excelling in science and mathematics, and dreaming bigger than ever.',
    image: '/chi.jpg',
    imageColor: 'from-green-500/20 to-green-600/10',
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  }
]

export default function StoriesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openModal = (story: typeof stories[0]) => {
    setSelectedStory(story)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedStory(null)
    document.body.style.overflow = 'auto'
  }

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    <div>
      <PageHero 
        title="Stories of Hope"
        subtitle="Real children. Real families. Real change."
        breadcrumb="Our Impact"
        imageUrl="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=1600&h=900&fit=crop"

      />

      <section className=" bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`group cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(story)}
              >
                <div className="bg-dark-200 rounded-2xl overflow-hidden border border-black/10 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    {!imageErrors[story.id] ? (
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={() => handleImageError(story.id)}
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${story.imageColor}`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-4xl font-bold text-black/60">{story.name[0]}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent" />
                    
                    {/* Outcome Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-xs font-semibold">Success</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-1">{story.name}, {story.age}</h3>
                    <div className="flex items-center gap-2 text-black/40 text-sm mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{story.location}</span>
                      <span>•</span>
                      <span>{story.condition}</span>
                    </div>
                    <p className="text-black/50 text-sm mb-4 line-clamp-2">{story.shortDesc}</p>
                    <div className="inline-flex items-center gap-1 text-primary-400 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read full story <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-500/10 to-pink-500/10 rounded-2xl p-8 border border-black/10">
              <h3 className="text-2xl font-bold text-black mb-2">Want to help create more success stories?</h3>
              <p className="text-black/50 mb-6">Your support can change a child's life today</p>
              <Link href="/donate" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Support More Children <Heart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {modalOpen && selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-black/10 shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              {!imageErrors[selectedStory.id] ? (
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(selectedStory.id)}
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedStory.imageColor}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-6xl font-bold text-black/60">{selectedStory.name[0]}</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent" />
              
              {/* Quote Icon */}
              <Quote className={`absolute bottom-4 right-4 w-12 h-12 ${selectedStory.color} opacity-30`} />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                {selectedStory.name}, {selectedStory.age}
              </h2>
              
              <div className="flex flex-wrap items-center gap-3 text-black/40 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{selectedStory.location}</span>
                </div>
                <span>•</span>
                <span>{selectedStory.condition}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Under our care</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 bg-green-500/10 px-3 py-1 rounded-full mb-6">
                <Award className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-xs font-semibold">{selectedStory.outcome}</span>
              </div>

              <div className="space-y-4 text-black/60 leading-relaxed">
                <p>{selectedStory.fullStory}</p>
              </div>

              <div className="mt-6 p-4 bg-black/5 rounded-xl border border-black/10">
                <p className="text-black/40 text-sm italic">
                  "{selectedStory.dream}"
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/donate"
                  onClick={closeModal}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-black py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Support a Child
                </Link>
                <button
                  onClick={closeModal}
                  className="flex-1 border border-black/30 hover:border-black/50 text-black/70 hover:text-black py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: zoom-in 0.2s ease-out;
        }
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