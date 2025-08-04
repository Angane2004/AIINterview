'use client'

import { motion } from 'framer-motion'
import { Brain, Sparkles, Zap, Target, Users, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LoadingPage() {
  const loadingSteps = [
    { text: 'Initializing AI Engine', icon: Brain },
    { text: 'Loading Interview Models', icon: Target },
    { text: 'Preparing Smart Questions', icon: Sparkles },
    { text: 'Setting Up Analytics', icon: TrendingUp },
    { text: 'Connecting to Database', icon: Users },
    { text: 'Ready to Transform Interviews', icon: Zap }
  ]

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Smart Interview
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Assistant
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Revolutionizing interview preparation with AI-powered evaluation and personalized feedback
        </motion.p>

        {/* Loading Steps */}
        <div className="max-w-md mx-auto">
          {loadingSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + (index * 0.3),
                  ease: "easeOut"
                }}
                className="flex items-center space-x-4 mb-4 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-white/90 font-medium">{step.text}</span>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="ml-auto"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="w-64 h-2 bg-white/20 rounded-full mx-auto mt-8 overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 mt-4 text-sm"
        >
          Preparing your AI interview experience...
        </motion.p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: 0
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
          />
        ))}
      </div>
    </div>
  )
}