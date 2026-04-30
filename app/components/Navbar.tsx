// src/app/components/Navbar.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [getInvolvedDropdownOpen, setGetInvolvedDropdownOpen] = useState(false)
  
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const involvedTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Vision', href: '/about#vision' },
        { name: 'Mission', href: '/about#mission' },
        { name: 'Core Values', href: '/about#values' },
        { name: 'Our Story', href: '/about#story' },
        { name: "Founder's Message", href: '/about#founder' },
      ]
    },
    { name: 'Programs', href: '/programs' },
    { name: 'Stories', href: '/stories' },
    { name: 'Events', href: '/events' },
    { 
      name: 'Get Involved', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Donate', href: '/donate' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Fundraise', href: '/fundraise' },
        { name: 'Partner With Us', href: '/partner' },
        { name: 'Sponsor a Child', href: '/sponsor' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setIsOpen(false)
    setAboutDropdownOpen(false)
    setGetInvolvedDropdownOpen(false)
  }

const handleDropdownItemClick = (href: string, parentHref: string) => {
  setActiveLink(parentHref)
  setIsOpen(false)
  setAboutDropdownOpen(false)
  setGetInvolvedDropdownOpen(false)
  
  // Extract the hash part (e.g., "#vision")
  const hash = href.includes('#') ? href.substring(href.indexOf('#')) : ''
  
  // If we're already on the about page, just scroll
  if (window.location.pathname === '/about' && hash) {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } 
  // Otherwise navigate to the page with hash
  else if (hash) {
    window.location.href = href
  } 
  // Regular link without hash
  else {
    window.location.href = href
  }
}


  // Hover handlers for About dropdown
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
    setAboutDropdownOpen(true)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false)
    }, 150)
  }

  // Hover handlers for Get Involved dropdown
  const handleInvolvedMouseEnter = () => {
    if (involvedTimeoutRef.current) clearTimeout(involvedTimeoutRef.current)
    setGetInvolvedDropdownOpen(true)
  }

  const handleInvolvedMouseLeave = () => {
    involvedTimeoutRef.current = setTimeout(() => {
      setGetInvolvedDropdownOpen(false)
    }, 150)
  }

  return (
    <>
   
      
      {/* Navbar - Centered Notch Style */}
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'top-2' : 'top-4'
        }`}
      >
        <div
          className={`bg-dark-100/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/10 transition-all duration-300 ${
            scrolled ? 'px-5 py-2.5' : 'px-6 py-3'
          }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={() => handleLinkClick('/')}>
              <div className="bg-primary-500 rounded-full p-1.5 group-hover:bg-primary-400 transition-all duration-300">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">
                CCCSF
              </span>
            </Link>
            
            {/* Nav Links */}
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.name === 'About') handleAboutMouseEnter()
                    if (link.name === 'Get Involved') handleInvolvedMouseEnter()
                  }}
                  onMouseLeave={() => {
                    if (link.name === 'About') handleAboutMouseLeave()
                    if (link.name === 'Get Involved') handleInvolvedMouseLeave()
                  }}
                >
                  {link.hasDropdown ? (
                    <button
                      onClick={() => {
                        if (link.name === 'About') setAboutDropdownOpen(!aboutDropdownOpen)
                        if (link.name === 'Get Involved') setGetInvolvedDropdownOpen(!getInvolvedDropdownOpen)
                        if (link.name !== 'Get Involved') setActiveLink(link.href)
                      }}
                      className={`relative flex items-center gap-1 text-sm font-medium transition-all duration-300 pb-1 group ${
                        activeLink === link.href || (link.name === 'Get Involved' && (activeLink === '/donate' || activeLink === '/volunteer' || activeLink === '/fundraise' || activeLink === '/partner' || activeLink === '/sponsor'))
                          ? 'text-primary-400'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        (link.name === 'About' && aboutDropdownOpen) || (link.name === 'Get Involved' && getInvolvedDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transition-transform duration-300 ${
                          activeLink === link.href || (link.name === 'Get Involved' && (activeLink === '/donate' || activeLink === '/volunteer' || activeLink === '/fundraise' || activeLink === '/partner' || activeLink === '/sponsor'))
                            ? 'scale-x-100' 
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`relative text-sm font-medium transition-all duration-300 pb-1 group ${
                        activeLink === link.href
                          ? 'text-primary-400'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transition-transform duration-300 ${
                          activeLink === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  )}

                  {/* About Dropdown Menu */}
                  {link.hasDropdown && link.name === 'About' && aboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-dark-100/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden z-50">
                      {link.dropdownItems?.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleDropdownItemClick(item.href, '/about')}
                          className="block w-full text-left px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Get Involved Dropdown Menu */}
                  {link.hasDropdown && link.name === 'Get Involved' && getInvolvedDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-dark-100/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden z-50">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => handleDropdownItemClick(item.href, item.href)}
                          className="block w-full text-left px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => handleLinkClick('/')}>
              <div className="bg-primary-500 rounded-full p-1.5">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">CCCSF</span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] z-40 md:hidden">
          <div className="bg-dark-100/95 backdrop-blur-xl mx-4 rounded-2xl border border-white/10 shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <div className="px-6 py-3 text-base font-medium text-primary-400 border-l-4 border-primary-500 bg-primary-500/10">
                        {link.name}
                      </div>
                      <div className="pl-8">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              handleDropdownItemClick(item.href, link.name === 'About' ? '/about' : item.href)
                              setIsOpen(false)
                            }}
                            className="block w-full text-left px-6 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => {
                        handleLinkClick(link.href)
                        setIsOpen(false)
                      }}
                      className={`block px-6 py-3 text-base font-medium transition-all duration-200 ${
                        activeLink === link.href
                          ? 'bg-primary-500/10 text-primary-400 border-l-4 border-primary-500'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}