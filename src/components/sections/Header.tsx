'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

interface HeaderProps {
  onGetStarted: () => void
  onLogin: () => void
  onSignUp: () => void
}

export default function Header({ onGetStarted, onLogin, onSignUp }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-white font-bold text-xl">SmartInterview</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Technology
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogin}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="button-primary flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => {
                  scrollToSection('features')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection('how-it-works')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  scrollToSection('technology')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200"
              >
                Technology
              </button>
              <div className="pt-4 border-t border-white/20 space-y-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onLogin()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full text-white/80 hover:text-white transition-colors duration-200"
                >
                  Login
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onGetStarted()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full button-primary flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
} 