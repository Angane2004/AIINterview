'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Technology from '@/components/sections/Technology'
import Footer from '@/components/sections/Footer'
import AuthModal from '@/components/auth/AuthModal'
import LoadingPage from '@/components/LoadingPage'
import dynamic from 'next/dynamic';



export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the unique loading experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleGetStarted = () => {
    setAuthMode('signup')
    setIsAuthModalOpen(true)
  }

  const handleLogin = () => {
    setAuthMode('login')
    setIsAuthModalOpen(true)
  }

  const handleSignUp = () => {
    setAuthMode('signup')
    setIsAuthModalOpen(true)
  }

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed-2"></div>
      </div>

      <Header 
        onGetStarted={handleGetStarted}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
      
      <Hero onGetStarted={handleGetStarted} />
      
      <Features />
      
      <HowItWorks />
      
      <Technology />
      
      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </main>
  )
}
