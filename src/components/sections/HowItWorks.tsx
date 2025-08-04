'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Upload, Brain, MessageSquare, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Upload,
      title: 'Upload or Record',
      description: 'Start by uploading your existing interview recording or record a new session directly in our platform.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our advanced AI algorithms analyze your performance, evaluating communication skills, confidence, and content.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: 'Get Feedback',
      description: 'Receive detailed, personalized feedback with specific recommendations for improvement.',
      color: 'from-green-500 to-emerald-500',
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your improvement over time with comprehensive analytics and progress reports.',
      color: 'from-orange-500 to-red-500',
      delay: 0.6
    }
  ]

  const benefits = [
    'Real-time analysis and feedback',
    'Personalized coaching recommendations',
    'Comprehensive performance metrics',
    'Progress tracking and goal setting',
    'Multiple interview format support',
    '24/7 AI assistant availability'
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our simple 4-step process makes it easy to improve your interview skills 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative z-10"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                    </div>
                  </motion.div>

                  {/* Step Content */}
                  <div className="glass-effect p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: step.delay + 0.3 }}
                      className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2 -translate-y-1/2"
                    >
                      <ArrowRight className="w-8 h-8 text-white/40" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Benefits List */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose Our Platform?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  AI-Powered Analysis
                </h4>
                <p className="text-white/70 mb-6">
                  Our advanced AI technology provides comprehensive analysis of your interview performance, 
                  including communication skills, confidence levels, and content quality.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">95%</div>
                    <div className="text-white/60">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                    <div className="text-white/60">AI Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
} 