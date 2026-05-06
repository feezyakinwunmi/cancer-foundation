// src/app/donate/page.tsx
'use client'

import { useState } from 'react'
import { Heart, Shield, TrendingUp, Gift, ArrowRight, Lock, CheckCircle, Building, Copy, Check, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import PageHero from '../components/PageHero'

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [activeTab, setActiveTab] = useState<'online' | 'bank'>('online')
  const [copied, setCopied] = useState(false)

  const donateAmounts = [5000, 20000, 50000, 100000]

  const bankDetails = {
    bankName: 'First Bank of Nigeria',
    accountName: 'Childhood Cancer Care & Support Foundation',
    accountNumber: '2034567890',
    sortCode: '011234567'
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <PageHero 
        title="Make a Donation"
        subtitle="Your support is a child's second chance at life"
        breadcrumb="Give Hope"
        imageUrl="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&h=900&fit=crop"

      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-dark-200 rounded-full p-1 border border-black/10 inline-flex">
              <button
                onClick={() => setActiveTab('online')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'online'
                    ? 'bg-primary-500 text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Online Payment
              </button>
              <button
                onClick={() => setActiveTab('bank')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'bank'
                    ? 'bg-primary-500 text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Bank Transfer
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Online Payment Tab */}
              {activeTab === 'online' && (
                <div className="relative">
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl z-20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-10 h-10 text-primary-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">Coming Soon</h3>
                      <p className="text-black/50 mb-4">
                        Online payment is currently being set up.
                        <br />
                        Please use Bank Transfer or check back soon.
                      </p>
                      <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full">
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                        <span className="text-black/60 text-sm">Launching in 2 weeks</span>
                      </div>
                    </div>
                  </div>

                  {/* Disabled Form */}
                  <div className="bg-dark-200 rounded-2xl p-8 border border-black/10 opacity-50">
                    <h2 className="text-2xl font-bold text-black mb-6">Choose an amount</h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {donateAmounts.map((amount) => (
                        <button
                          key={amount}
                          disabled
                          className={`py-3 rounded-xl font-semibold bg-black/10 text-black/40 cursor-not-allowed`}
                        >
                          ₦{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="mb-6">
                      <input
                        type="number"
                        placeholder="Or enter custom amount (₦)"
                        disabled
                        className="w-full bg-black/10 border border-black/20 rounded-xl px-4 py-3 text-black/40 placeholder-black/30 cursor-not-allowed"
                      />
                    </div>

                    <div className="flex gap-3 mb-6">
                      <button disabled className="flex-1 bg-black/10 text-black/40 py-3 rounded-xl font-semibold cursor-not-allowed">
                        One-time
                      </button>
                      <button disabled className="flex-1 bg-black/10 text-black/40 py-3 rounded-xl font-semibold cursor-not-allowed">
                        Monthly
                      </button>
                    </div>

                    <button disabled className="w-full bg-black/10 text-black/40 py-4 rounded-xl font-bold text-lg cursor-not-allowed flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Now
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-center gap-4 mt-6 text-black/20 text-xs">
                      <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> Secure Payment</div>
                      <div>•</div>
                      <div>Instant Confirmation</div>
                      <div>•</div>
                      <div>Tax Deductible</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bank Transfer Tab */}
              {activeTab === 'bank' && (
                <div className="bg-dark-200 rounded-2xl p-8 border border-black/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Building className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-black">Bank Transfer</h2>
                  </div>

                  <p className="text-black/60 mb-6">
                    Make a direct bank transfer to our account. Your donation will be processed within 24 hours.
                  </p>

                  {/* Bank Details Card */}
                  <div className="bg-black/5 rounded-xl p-6 border border-black/10 mb-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-black/10">
                        <span className="text-black/40 text-sm">Bank Name</span>
                        <span className="text-black font-semibold">{bankDetails.bankName}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-black/10">
                        <span className="text-black/40 text-sm">Account Name</span>
                        <span className="text-black font-semibold">{bankDetails.accountName}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-black/10">
                        <span className="text-black/40 text-sm">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-black font-semibold text-xl tracking-wider">{bankDetails.accountNumber}</span>
                          <button
                            onClick={() => copyToClipboard(bankDetails.accountNumber)}
                            className="p-1 hover:bg-black/10 rounded transition-colors"
                          >
                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-black/40" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black/40 text-sm">Sort Code</span>
                        <span className="text-black font-semibold">{bankDetails.sortCode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-primary-500/10 rounded-xl p-4 border border-primary-500/20 mb-6">
                    <p className="text-primary-400 text-sm font-semibold mb-2">Important Instructions:</p>
                    <ul className="text-black/50 text-sm space-y-1">
                      <li>• Use your full name as payment reference</li>
                      <li>• Send a screenshot of payment to info@childhoodcancerfoundation.org</li>
                      <li>• You'll receive confirmation within 24 hours</li>
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Building className="w-5 h-5" />
                    Contact us after transfer
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <p className="text-black/30 text-xs text-center mt-4">
                    After bank transfer, please contact us to confirm your donation
                  </p>
                </div>
              )}
            </div>

            {/* Impact Sidebar - Same for both tabs */}
            <div>
              <div className="bg-gradient-to-br from-primary-500/10 to-pink-500/10 rounded-2xl p-6 border border-black/10 mb-6">
                <Gift className="w-10 h-10 text-primary-400 mb-3" />
                <h3 className="text-black font-bold text-lg mb-2">Your Impact</h3>
                <p className="text-black/50 text-sm mb-4">Every donation directly helps children and families in need.</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-black/40 text-sm">₦5,000</span>
                    <span className="text-black text-sm">Essential medication</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black/40 text-sm">₦20,000</span>
                    <span className="text-black text-sm">One treatment session</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black/40 text-sm">₦50,000+</span>
                    <span className="text-black text-sm">Critical hospital care</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/5 rounded-2xl p-6 border border-black/10">
                <Shield className="w-10 h-10 text-green-400 mb-3" />
                <h3 className="text-black font-bold text-lg mb-2">100% Transparency</h3>
                <p className="text-black/50 text-sm mb-3">We are fully accountable for every naira entrusted to us.</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-black/40 text-xs">Registered Nigerian Nonprofit</span>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-black/5 rounded-2xl p-6 border border-black/10 mt-6">
                <h3 className="text-black font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-black/40 text-sm mb-3">Call us or send an email for assistance</p>
                <div className="space-y-2">
                  <p className="text-black/60 text-sm">📞 +234 800 000 0000</p>
                  <p className="text-black/60 text-sm">✉️ info@childhoodcancerfoundation.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}