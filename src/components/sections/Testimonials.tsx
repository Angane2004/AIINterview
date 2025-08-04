'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      avatar: '/api/placeholder/60/60',
      content: 'The AI feedback was incredibly detailed and helped me identify specific areas for improvement. I landed my dream job at Google within 3 months of using the platform!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Microsoft',
      avatar: '/api/placeholder/60/60',
      content: 'The practice sessions with AI were so realistic. It helped me build confidence and improve my communication skills significantly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Amazon',
      avatar: '/api/placeholder/60/60',
      content: 'The progress tracking feature is amazing. I could see my improvement over time and the personalized coaching recommendations were spot on.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      company: 'Apple',
      avatar: '/api/placeholder/60/60',
      content: 'This platform transformed my interview preparation. The AI analysis is incredibly accurate and the feedback is actionable. Worth every penny!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Netflix',
      avatar: '/api/placeholder/60/60',
      content: 'The multi-format support is fantastic. I could practice with video, audio, and text interviews. The platform is intuitive and the results speak for themselves.',
      rating: 5
    }
  ]

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Netflix', 'Meta', 'Tesla', 'Salesforce'
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text">Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of successful professionals who have transformed their interview skills 
            and advanced their careers with our AI-powered platform.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-4">
              Trusted by leading companies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="glass-effect p-4 rounded-xl">
                  <div className="text-white/60 font-semibold text-sm">
                    {company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-8 lg:p-12 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>
              
              <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '10,000+', label: 'Happy Users' },
            { number: '95%', label: 'Success Rate' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="glass-effect p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 