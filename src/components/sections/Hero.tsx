'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles, Brain, Users, TrendingUp } from 'lucide-react'

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  const floatingIcons = [
    { icon: Brain, delay: 0, position: 'top-20 left-10' },
    { icon: Users, delay: 1, position: 'top-40 right-20' },
    { icon: TrendingUp, delay: 2, position: 'bottom-40 left-20' },
    { icon: Sparkles, delay: 3, position: 'bottom-20 right-10' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay, duration: 0.8 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay }}
            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">
            AI-Powered Interview Evaluation
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Revolutionize Your
          <br />
          <span className="gradient-text">Interview Process</span>
          <br />
          with AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Get instant feedback, performance analytics, and personalized coaching. 
          Transform your interview skills with cutting-edge AI technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="button-primary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5 flex-shrink-0" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/70">Interviews Evaluated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">AI Support</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 