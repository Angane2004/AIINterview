'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Users, 
  FileText, 
  Target, 
  BarChart3, 
  Video, 
  MessageSquare, 
  Zap,
} from 'lucide-react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const masterFeatures = [
    {
      icon: Users,
      title: 'Human-to-Human Interview',
      description: 'Experience realistic interview scenarios with AI-powered human-like interactions. Our advanced conversational AI adapts to your responses and provides natural, engaging interview experiences.',
      highlights: [
        'Natural conversation flow',
        'Real-time response adaptation',
        'Emotional intelligence simulation',
        'Industry-specific scenarios'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Resume-Based Interview Analysis',
      description: 'Upload your resume and get personalized interview questions based on your experience, skills, and background. Our AI analyzes your profile to create targeted, relevant interview scenarios.',
      highlights: [
        'Smart resume parsing',
        'Personalized question generation',
        'Skill-based assessment',
        'Experience-level adaptation'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const additionalFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Evaluation',
      description: 'Get instant, comprehensive feedback on your interview performance with detailed analysis of your responses, body language, and communication skills.'
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed analytics, identify areas for improvement, and monitor your interview readiness over time.'
    },
    {
      icon: Video,
      title: 'Video Recording & Playback',
      description: 'Record your interview sessions and review them later to identify areas for improvement and track your progress.'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Feedback',
      description: 'Receive instant feedback during your interview with suggestions for better responses and communication techniques.'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your interview performance over time with detailed progress reports and improvement recommendations.'
    },
    {
      icon: Zap,
      title: 'Smart Recommendations',
      description: 'Get personalized recommendations for interview preparation based on your performance and target roles.'
    }
  ]

  return (
    <section id="features" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Master Features
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of interview preparation with our two revolutionary AI-powered features
          </p>
        </motion.div>

        {/* Master Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {masterFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Additional Powerful Features
          </h3>
          <p className="text-lg text-white/80">
            Everything you need to ace your interviews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-hover glass-effect p-6 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
} 